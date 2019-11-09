import { linear } from 'svelte/easing';
import { tweened } from 'svelte/motion';
import { derived, writable } from 'svelte/store';
import { getBeat } from './lib/beat';
import { MS_PER_SECOND } from './lib/duration';

export const duration = writable(3 * 60 * 1000);
export const beatsPerMinut = writable(80);
export const beatsPerMeasure = writable(4);
export const running = writable(false);

// Due to poor mobile performance, add offset to avoid difference between animation and sound
export const beatsOffset = writable(0);

const innerProgress = derived([duration, beatsOffset], ([d, offset]) =>
  tweened(0, {
    duration: d,
    easing: linear,
    delay: offset * MS_PER_SECOND,
  }),
);

export const progress = derived(innerProgress, (innerP, set) => {
  return innerP.subscribe(p => set(p));
});

export const progressEnd = derived(progress, p => p === 1);

export const elapsed = derived(
  [progress, duration],
  ([prog, dur]) => prog * dur,
);

export const remaining = derived([duration, elapsed], ([d, e]) => d - e);

export const beats = derived([elapsed, beatsPerMinut], ([elap, bpm]) =>
  getBeat(elap, bpm),
);

export function startProgress() {
  innerProgress.subscribe(p => p.set(1));
}

export function resetProgress() {
  innerProgress.subscribe(p => p.set(0, { duration: 0 }));
}
