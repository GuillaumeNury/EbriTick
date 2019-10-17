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
  .style('font-size', '50px')
  .style('fill', '#354935')
  .text('');

export const smallText = center
  .append('text')
  .style('text-anchor', 'middle')
  .attr('dy', '20px')
  .style('fill', '#354935')
  .text('');

export const playButton = center
  .append('text')
  .style('text-anchor', 'middle')
  .attr('class', 'material-icons')
  .attr('font-size', '30px')
  .style('cursor', 'pointer')
  .style('fill', '#354935')
  .attr('dy', '100px')
  .text('play_arrow');

export const stopButton = center
  .append('text')
  .style('text-anchor', 'middle')
  .attr('class', 'material-icons')
  .attr('font-size', '30px')
  .style('cursor', 'pointer')
  .style('fill', '#354935')
  .attr('dy', '100px')
  .text('stop');
