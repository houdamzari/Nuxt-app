<template>
  <h1 class="text-black text-3xl" :style="style">{{ title }}
  </h1>
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
