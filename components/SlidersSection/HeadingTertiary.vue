<template>
  <div class="text-grey bg-red" :style="style">{{ title }}
  </div>
</template>

<script>
export default {
  props : ['title','color'],

  computed: {
    style () {
      return 'color: ' + this.color;
    }
  },
}
</script>

<style scoped>

</style>
