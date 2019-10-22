<script>
  import Chrono from './components/Chrono.svelte';
  import ActionButton from './components/ActionButton.svelte';
  import BeatIndicator from './components/BeatIndicator.svelte';
  import DurationForm from './components/DurationForm.svelte';
  import BpmForm from './components/BpmForm.svelte';

  import { formatDuration } from './lib/duration';
  import { get } from 'svelte/store';
  import { startSound, stopSound, audioCtx } from './lib/sound';

  import {
    beats,
    beatsOffset,
    beatsPerMeasure,
    beatsPerMinut,
    duration,
    progress,
    remaining,
    resetProgress,
    running,
    startProgress,
  } from './stores';

  $: durationText = formatDuration($remaining);

  let unsubscribe;

  beatsOffset.set(audioCtx.baseLatency);

  function start() {
    running.set(true);
    startProgress();
    unsubscribe = startSound(beats, get(beatsPerMinut));
  }

  function reset() {
    running.set(false);
    stopSound();
    resetProgress();
    unsubscribe();
  }

  function addDuration(event) {
    duration.set(Math.max(0, get(duration) + event.detail));
  }

  function addBeatsPerMinute(event) {
    beatsPerMinut.set(Math.max(10, get(beatsPerMinut) + event.detail));
  }
</script>

<svg class="chart" viewBox="0 0 100 100">
  <text x="50" y="35" class="bpm">{$beatsPerMinut} BPM</text>
  <text x="50" y="58" class="duration">{durationText}</text>

  {#if $running}
    <Chrono duration={$duration} progress={$progress} />
    <BeatIndicator beat={$beats} beatsPerMeasure={$beatsPerMeasure} />

    <ActionButton on:click={reset} action="stop" />
  {:else}
    <DurationForm on:add-duration={addDuration} />
    <BpmForm on:add-bpm={addBeatsPerMinute} />
    <ActionButton on:click={start} action="play_arrow" />
  {/if}
</svg>
