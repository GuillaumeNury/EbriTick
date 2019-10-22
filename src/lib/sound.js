export const audioCtx = new AudioContext();

// Schedule some beat to avoid laggy sound
const firstBeatsToCreate = 10;

let runningOscillators = [];

function scheduleNote(from) {
  const osc = audioCtx.createOscillator();
  osc.frequency.value = 800;
  osc.type = 'square';
  osc.connect(audioCtx.destination);
  osc.start(from);
  osc.stop(from + 0.05);

  runningOscillators.push(osc);
}

export function stopSound() {
  runningOscillators.forEach(osc => osc.stop(0));
}

export function startSound(beats, bpm) {
  const beatsPerMs = 60 / bpm;
  const startTime = audioCtx.currentTime;

  for (let beat = 0; beat < firstBeatsToCreate; beat++) {
    scheduleNote(startTime + beat * beatsPerMs);
  }

  return beats.subscribe(beat =>
    scheduleNote(startTime + (beat + firstBeatsToCreate) * beatsPerMs),
  );
}
