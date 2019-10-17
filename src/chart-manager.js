import {
  bigText,
  chart,
  innerArc,
  innerArcFn,
  outerArc,
  outerArcFn,
  playButton,
  smallText,
  stopButton,
} from './chart.js';

export function updateArc(newValue) {
  chart.transition();
  outerArc.datum(newValue).attr('d', outerArcFn);
}

function setVisibility(element, isVisible) {
  element.style('display', isVisible ? 'block' : 'none');
}

export function setArcVisibility(isVisible) {
  setVisibility(outerArc, isVisible);
}

export function setInnerArcVisibility(isVisible) {
  setVisibility(innerArc, isVisible);
}

export function setPlayButtonVisibility(isVisible) {
  setVisibility(playButton, isVisible);
}

export function setStopButtonVisibility(isVisible) {
  setVisibility(stopButton, isVisible);
}

export function updateInnerArc(newValue, bars) {
  chart.transition();
  innerArc.datum({ value: newValue, bars }).attr('d', innerArcFn);
}

export function setBigText(text) {
  chart.transition();
  bigText.text(text);
}

export function setSmallText(text) {
  chart.transition();
  smallText.text(text);
}
