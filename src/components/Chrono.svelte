<script>
  export let duration;
  export let progress;
  export let progressEnd;

  const strokeWidth = 2;
  const radius = 50 - strokeWidth;
  const circumference = 2 * Math.PI * radius;

  $: dashArray = [circumference * progress, circumference].join(', ');
</script>

<circle
  r={radius}
  cx="50%"
  cy="50%"
  stroke="#2D882D"
  stroke-width={strokeWidth}
  stroke-dasharray={dashArray}
  transform="rotate(270 50 50)"
  fill="none">
  {#if progressEnd}
    <animate
      attributeType="XML"
      attributeName="opacity"
      values="0;1;1"
      dur="0.5s"
      repeatCount="indefinite" />
    }
  {/if}
</circle>
