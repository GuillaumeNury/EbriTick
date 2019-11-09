<script>
  import Chrono from './components/Chrono.svelte';
  import ActionButton from './components/ActionButton.svelte';
  import BeatIndicator from './components/BeatIndicator.svelte';
  import DurationForm from './components/DurationForm.svelte';
  import { get } from 'svelte/store';

  import BpmForm from './components/BpmForm.svelte';

  import { addBeatsPerMinute, addDuration, reset, start } from './app.js';
  import { formatDuration } from './lib/duration';
  import {
    beats,
    beatsPerMeasure,
    beatsPerMinut,
    duration,
    progress,
    progressEnd,
    remaining,
    running,
  } from './stores';

  $: durationText = formatDuration($remaining);
</script>

<svg class="chart" viewBox="0 0 100 100">
  <text x="50" y="35" class="bpm">{$beatsPerMinut} BPM</text>
  <text x="50" y="58" class="duration">{durationText}</text>

  {#if $running}
    <Chrono
      progressEnd={$progressEnd}
      duration={$duration}
      progress={$progress} />

    {#if !$progressEnd}
      <BeatIndicator beat={$beats} beatsPerMeasure={$beatsPerMeasure} />
    {/if}

    <ActionButton on:click={reset} action="stop" />
  {:else}
    <DurationForm on:add-duration={addDuration} />
    <BpmForm on:add-bpm={addBeatsPerMinute} />
    <ActionButton on:click={start} action="play_arrow" />
  {/if}
</svg>
