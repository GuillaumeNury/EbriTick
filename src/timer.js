import { MS_PER_MINUTE } from './duration.js';

export class Timer {
  constructor(beatsPerMinut, beatsPerMeasure) {
    this.beatsPerMs = beatsPerMinut / MS_PER_MINUTE;
    this.beatsPerMeasure = beatsPerMeasure;

    this.timer = null;
    this._onTickCallbacks = [];
    this._onBeatCallbacks = [];
    this._onEndCallbacks = [];
  }

  start(duration) {
    let lastBeat;

    this.timer = d3.timer(elapsed => {
      elapsed = Math.min(elapsed, duration);

      const remaining = duration - elapsed;
      const beat = Math.floor(elapsed * this.beatsPerMs) % this.beatsPerMeasure;

      if (beat !== lastBeat) {
        this._onBeatCallbacks.forEach(cb => cb(beat));
        lastBeat = beat;
      }

      this._onTickCallbacks.forEach(cb => cb(elapsed, remaining));

      if (remaining <= 0) {
        this._onEndCallbacks.forEach(cb => cb());
        this.stop();
      }
    });

    return this;
  }

  stop() {
    this.timer && this.timer.stop();
    this.timer = null;
  }

  onTick(cb) {
    this._onTickCallbacks.push(cb);
    return this;
  }

  onBeat(cb) {
    this._onBeatCallbacks.push(cb);
    return this;
  }

  onEnd(cb) {
    this._onEndCallbacks.push(cb);
    return this;
  }
}
