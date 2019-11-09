import { get } from 'svelte/store';
import { audioCtx, startEndSound, startSound, stopSound } from './lib/sound';
import {
  beats,
  beatsOffset,
  beatsPerMinut,
  duration,
  progressEnd,
  resetProgress,
  running,
  startProgress,
} from './stores';

let unsubscribe;

beatsOffset.set(audioCtx.baseLatency);

export function start() {
  running.set(true);
  startProgress();
  unsubscribe = startSound(beats, get(beatsPerMinut));
}

export function reset() {
  running.set(false);
  stopSound();
  resetProgress();
  unsubscribe();
}

export function addDuration(event) {
  duration.set(Math.max(0, get(duration) + event.detail));
}

export function addBeatsPerMinute(event) {
  beatsPerMinut.set(Math.max(10, get(beatsPerMinut) + event.detail));
}

progressEnd.subscribe(isEnd => {
  if (isEnd) {
    stopSound();
    startEndSound();
  }
});
