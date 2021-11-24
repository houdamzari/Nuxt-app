<template>
  <div>
    <div v-swiper="swiperOption" class="w-full">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in items" :key="item.title">
          <p>{{ item.slogan }}</p>
          <Spacer margin="5px" />
          <h1 class="text-black text-3xl">{{ item.title }}</h1>
          <Spacer margin="35px" />
          <p class="text-grey w-full relative">{{ item.para }}</p>
          <p class="text-grey w-full relative mt-2.5">{{ item.para2 }}</p>
        </div>
      </div>
    </div>
    <div class="flex-row flex gap-2 mt-5 absolute bottom-1 left-1">
      <button class="button-prev" slot="button-prev"></button>
      <button class="button-next" slot="button-next"></button>
    </div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";

export default {
  name: "Slider",
  props: ["data"],
  directives: {
    swiper: directive,
  },
  data() {
    return {
      items: this.data,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 100,
        slidesPerGroup: 1,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
      },
    };
  },
};
</script>

<style scoped>
@import "swiper/css/swiper.css";
.button-next {
  background: grey;
  width: 20px;
  height: 20px;
  clip-path: polygon(100% 50%, 0 0, 0 100%);
}
.button-prev {
  background: grey;
  width: 20px;
  height: 20px;
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
}
.button-next:disabled,
.button-prev:disabled {
  opacity: 0.5;
}
</style>
