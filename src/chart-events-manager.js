import { playButton, stopButton } from './chart.js';

export function onPlayButtonClick(cb) {
  playButton.on('click', cb);
}

export function onStopButtonClick(cb) {
  stopButton.on('click', cb);
}
