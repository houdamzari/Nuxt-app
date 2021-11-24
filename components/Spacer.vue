<template>
      <div id="margin" :style="style"></div>
</template>
<script>
export default {
  props: ['margin'],
  computed: {
    style () {
      return 'margin-top: ' + this.margin;
    }
  },
}
</script>
