<script>
  import { createEventDispatcher } from 'svelte';
  import { MS_PER_HOUR, MS_PER_MINUTE, MS_PER_SECOND } from '../lib/duration';
  import { longpress } from '../actions/longpress';

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
  x="29"
  y="49"
  class="button material-icons"
  use:longpress
  on:shortpress={() => dispatch(MS_PER_HOUR)}
  on:longpress={() => dispatch(5 * MS_PER_HOUR)}>
  keyboard_arrow_up
</text>
<text
  x="41.3"
  y="49"
  class="button material-icons"
  use:longpress
  on:shortpress={() => dispatch(MS_PER_MINUTE)}
  on:longpress={() => dispatch(5 * MS_PER_MINUTE)}>
  keyboard_arrow_up
</text>
<text
  x="53.6"
  y="49"
  class="button material-icons"
  use:longpress
  on:shortpress={() => dispatch(MS_PER_SECOND)}
  on:longpress={() => dispatch(5 * MS_PER_SECOND)}>
  keyboard_arrow_up
</text>

<text
  x="29"
  y="66"
  class="button material-icons"
  use:longpress
  on:shortpress={() => dispatch(-1 * MS_PER_HOUR)}
  on:longpress={() => dispatch(-5 * MS_PER_HOUR)}>
  keyboard_arrow_down
</text>
<text
  x="41.3"
  y="66"
  class="button material-icons"
  use:longpress
  on:shortpress={() => dispatch(-1 * MS_PER_MINUTE)}
  on:longpress={() => dispatch(-5 * MS_PER_MINUTE)}>
  keyboard_arrow_down
</text>
<text
  x="53.6"
  y="66"
  class="button material-icons"
  use:longpress
  on:shortpress={() => dispatch(-1 * MS_PER_SECOND)}
  on:longpress={() => dispatch(-5 * MS_PER_SECOND)}>
  keyboard_arrow_down
</text>
