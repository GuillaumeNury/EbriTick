<script>
  export let action;
</script>

<style>
  .button {
    text-anchor: middle;
    font-size: 12px;
    cursor: pointer;
  }
</style>

<text x="50" y="78" class="button material-icons" on:click>{action}</text>
