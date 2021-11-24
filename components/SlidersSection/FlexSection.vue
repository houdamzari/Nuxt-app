<template>
  <div class="flex flex-row gap-10 px-32 w-full h-96">
    <div class="relative w-5/12 h-full">
    <img class="absolute w-full h-full object-cover"  src="https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
    </div>
    <Swiper/>
  </div>
</template>

<script>
import Swiper from "~/components/SlidersSection/Swiper";
export default {
  components: {Swiper}
}
</script>

<style scoped>

</style>
