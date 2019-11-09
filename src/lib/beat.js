import { derived } from 'svelte/store';
import { MS_PER_MINUTE } from './duration';

/**
 * @param {number} elapsed
 * @param {number} beatsPerMinut
 */
export function getBeat(elapsed, beatsPerMinut) {
  const beatsPerMs = beatsPerMinut / MS_PER_MINUTE;
  return Math.floor(elapsed * beatsPerMs);
}

export function getBeats$(progress$, duration, beatsPerMinut) {
  return derived(progress$, progress =>
    getBeat(progress * duration, beatsPerMinut),
  );
}
