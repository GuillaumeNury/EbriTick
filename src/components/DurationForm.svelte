<script>
  import { createEventDispatcher } from 'svelte';
  import { MS_PER_HOUR, MS_PER_MINUTE, MS_PER_SECOND } from '../lib/duration';
  import { longpress } from '../actions/longpress';

  const firstButtonX = 31;
  const firstButtonY = 51;
  const xOffset = 11.3;
  const yOffset = 15;

  const _dispatch = createEventDispatcher();

  function dispatch(deltaDuration) {
    _dispatch('add-duration', deltaDuration);
  }
</script>

<style>
  text {
    font-size: 10px;
    text-anchor: middle;
    cursor: pointer;
  }
</style>

<text
  x={firstButtonX + xOffset * 0}
  y={firstButtonY}
  class="button material-icons"
  use:longpress
  on:shortpress={() => dispatch(MS_PER_HOUR)}
  on:longpress={() => dispatch(5 * MS_PER_HOUR)}>
  keyboard_arrow_up
</text>
<text
  x={firstButtonX + xOffset * 1}
  y={firstButtonY}
  class="button material-icons"
  use:longpress
  on:shortpress={() => dispatch(MS_PER_MINUTE)}
  on:longpress={() => dispatch(5 * MS_PER_MINUTE)}>
  keyboard_arrow_up
</text>
<text
  x={firstButtonX + xOffset * 2}
  y={firstButtonY}
  class="button material-icons"
  use:longpress
  on:shortpress={() => dispatch(MS_PER_SECOND)}
  on:longpress={() => dispatch(5 * MS_PER_SECOND)}>
  keyboard_arrow_up
</text>

<text
  x={firstButtonX + xOffset * 0}
  y={firstButtonY + yOffset}
  class="button material-icons"
  use:longpress
  on:shortpress={() => dispatch(-1 * MS_PER_HOUR)}
  on:longpress={() => dispatch(-5 * MS_PER_HOUR)}>
  keyboard_arrow_down
</text>
<text
  x={firstButtonX + xOffset * 1}
  y={firstButtonY + yOffset}
  class="button material-icons"
  use:longpress
  on:shortpress={() => dispatch(-1 * MS_PER_MINUTE)}
  on:longpress={() => dispatch(-5 * MS_PER_MINUTE)}>
  keyboard_arrow_down
</text>
<text
  x={firstButtonX + xOffset * 2}
  y={firstButtonY + yOffset}
  class="button material-icons"
  use:longpress
  on:shortpress={() => dispatch(-1 * MS_PER_SECOND)}
  on:longpress={() => dispatch(-5 * MS_PER_SECOND)}>
  keyboard_arrow_down
</text>
