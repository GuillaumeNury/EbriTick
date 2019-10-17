import {
  onBpmUpdate,
  onDurationUpdate,
  onPlayButtonClick,
  onStopButtonClick,
} from './chart-events-manager.js';
import {
  setArcVisibility,
  setBigText,
  setFormButtonVisibility,
  setInnerArcVisibility,
  setPlayButtonVisibility,
  setSmallText,
  setStopButtonVisibility,
  updateArc,
  updateInnerArc,
} from './chart-manager.js';
import { formatDuration } from './duration.js';
import { Timer } from './timer.js';

const metronome = new Audio('/media/metronome.mp3');
const gong = new Audio('/media/gong.mp3');

function run() {
  let duration = 1 * 60 * 1000;
  let beatsPerMinut = 60;
  const beatsPerMeasure = 4;

  reset(duration, beatsPerMinut, beatsPerMeasure);

  let timer;

  onPlayButtonClick(
    () => (timer = start(duration, beatsPerMinut, beatsPerMeasure)),
  );
  onStopButtonClick(() => {
    if (!timer) {
      return;
    }

    timer.stop();
    timer = null;
    reset(duration, beatsPerMinut, beatsPerMeasure);
  });
  onBpmUpdate(delta => {
    beatsPerMinut += delta;
    reset(duration, beatsPerMinut, beatsPerMeasure);
  });
  onDurationUpdate(delta => {
    duration += delta;
    reset(duration, beatsPerMinut, beatsPerMeasure);
  });
}

function reset(duration, beatsPerMinut, beatsPerMeasure) {
  setBigText(`${beatsPerMinut} BPM`);
  setSmallText(formatDuration(duration));
  setVisibility(false);
}

function start(duration, beatsPerMinut, beatsPerMeasure) {
  const timer = new Timer(beatsPerMinut, beatsPerMeasure);

  setVisibility(true);

  return timer
    .onBeat(beat => updateInnerArc(beat, beatsPerMeasure))
    .onBeat(() =>
      metronome.play().catch(err => console.error({ err, msg: 'gong' })),
    )
    .onTick(elapsed => updateArc([elapsed / duration]))
    .onTick((_, remaining) => setSmallText(formatDuration(remaining)))
    .onEnd(() => gong.play())
    .onEnd(() => reset(duration, beatsPerMinut, beatsPerMeasure))
    .start(duration);
}

function setVisibility(isRunning) {
  setArcVisibility(isRunning);
  setInnerArcVisibility(isRunning);
  setStopButtonVisibility(isRunning);
  setPlayButtonVisibility(!isRunning);
  setFormButtonVisibility(!isRunning);
}

run();
