<script>
  import { createEventDispatcher } from 'svelte';
  import { MS_PER_HOUR, MS_PER_MINUTE, MS_PER_SECOND } from '../lib/duration';
  import { longpress } from '../actions/longpress';

  const _dispatch = createEventDispatcher();

  function dispatch(deltaBpm) {
    _dispatch('add-bpm', deltaBpm);
  }
</script>

<style>
  text {
    font-size: 15px;
    text-anchor: middle;
    cursor: pointer;
  }
</style>

<text
  x="85"
  y="35.75"
  class="button material-icons"
  use:longpress
  on:shortpress={() => dispatch(1)}
  on:longpress={() => dispatch(5)}>
  keyboard_arrow_right
</text>

<text
  x="15"
  y="35.75"
  class="button material-icons"
  use:longpress
  on:shortpress={() => dispatch(-1)}
  on:longpress={() => dispatch(-5)}>
  keyboard_arrow_left
</text>
