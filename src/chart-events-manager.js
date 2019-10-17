import {
  bpmLessButton,
  bpmPlusButton,
  durationLessHour,
  durationLessMinut,
  durationLessSecond,
  durationPlusHour,
  durationPlusMinut,
  durationPlusSecond,
  playButton,
  stopButton,
} from './chart.js';

export function onPlayButtonClick(cb) {
  playButton.on('click', cb);
}

export function onStopButtonClick(cb) {
  stopButton.on('click', cb);
}

export function onBpmUpdate(cb) {
  bpmPlusButton.on('click', () => cb(1));
  bpmLessButton.on('click', () => cb(-1));
}

export function onDurationUpdate(cb) {
  durationPlusHour.on('click', () => cb(1 * 60 * 60 * 1000));
  durationPlusMinut.on('click', () => cb(1 * 60 * 1000));
  durationPlusSecond.on('click', () => cb(1 * 1000));
  durationLessHour.on('click', () => cb(-1 * 60 * 60 * 1000));
  durationLessMinut.on('click', () => cb(-1 * 60 * 1000));
  durationLessSecond.on('click', () => cb(-1 * 1000));
}
