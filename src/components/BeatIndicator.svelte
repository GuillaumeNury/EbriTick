<script>
  export let beat;
  export let beatsPerMeasure;

  const strokeWidth = 5;
  const radius = 48 - strokeWidth;
  const circumference = 2 * Math.PI * radius;

  $: dashArray = [circumference / beatsPerMeasure, circumference].join(', ');
  $: rotation = 270 + ((beat % beatsPerMeasure) / beatsPerMeasure) * 360;
</script>

<circle
  r={radius}
  cx="50%"
  cy="50%"
  stroke="#00C700"
  stroke-width={strokeWidth}
  stroke-dasharray={dashArray}
  transform="rotate({rotation} 50 50)"
  fill="none" />
