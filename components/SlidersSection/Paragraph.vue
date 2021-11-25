<template>
  <div class="text-grey relative" :style="style">{{ paragraph }}
  </div>
</template>

<script>
export default {
  props : ['paragraph','width'],
  computed: {
    style () {
      return 'width: ' + this.width;
    }
  },
}
</script>


