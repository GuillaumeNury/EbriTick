const WIDTH = 500;
const HEIGHT = 500;
const OUTER_CIRCLE_TICKNESS = 10;
const INNER_CIRCLE_TICKNESS = 30;

export const chart = d3
  .select('.chart')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`);

export const center = chart
  .append('g')
  .attr('transform', `translate(${WIDTH / 2}, ${HEIGHT / 2})`);

const innerRadiusOfOuterArc = WIDTH / 2 - OUTER_CIRCLE_TICKNESS;

export const outerArcFn = d3
  .arc()
  .innerRadius(innerRadiusOfOuterArc)
  .outerRadius(WIDTH / 2)
  .startAngle(0)
  .endAngle(data => 2 * Math.PI * data);

export const outerArc = center.append('path').attr('fill', '#376937');

export const innerArcFn = d3
  .arc()
  .innerRadius(
    innerRadiusOfOuterArc - OUTER_CIRCLE_TICKNESS - INNER_CIRCLE_TICKNESS,
  )
  .outerRadius(innerRadiusOfOuterArc - OUTER_CIRCLE_TICKNESS)
  .startAngle(data => (2 * Math.PI * data.value) / data.bars)
  .endAngle(data => (2 * Math.PI * (data.value + 1)) / data.bars);

export const innerArc = center.append('path').attr('fill', '#00C700');

export const bigText = center
  .append('text')
  .attr('dy', '-50px')
  .style('text-anchor', 'middle')
  .style('font-size', '70px')
  .style('fill', '#354935')
  .text('');

export const smallText = center
  .append('text')
  .style('text-anchor', 'middle')
  .style('font-size', '30px')
  .attr('dy', '30px')
  .style('fill', '#354935')
  .text('');

function addButton(icon, dx, dy, size) {
  return center
    .append('text')
    .style('text-anchor', 'middle')
    .attr('class', 'material-icons')
    .style('font-size', `${size}px`)
    .style('cursor', 'pointer')
    .style('fill', '#354935')
    .attr('dx', `${dx}px`)
    .attr('dy', `${dy}px`)
    .text(icon);
}

export const playButton = addButton('play_arrow', 0, 100, 60);
export const stopButton = addButton('stop', 0, 100, 60);

export const bpmPlusButton = addButton('keyboard_arrow_up', -85, -110, 60);
export const bpmLessButton = addButton('keyboard_arrow_down', -85, 20, 60);

export const durationPlusHour = addButton('keyboard_arrow_up', -37, 8, 25);
export const durationPlusMinut = addButton('keyboard_arrow_up', -15, 8, 25);
export const durationPlusSecond = addButton('keyboard_arrow_up', 7, 8, 25);

export const durationLessHour = addButton('keyboard_arrow_down', -37, 35, 25);
export const durationLessMinut = addButton('keyboard_arrow_down', -15, 35, 25);
export const durationLessSecond = addButton('keyboard_arrow_down', 7, 35, 25);
