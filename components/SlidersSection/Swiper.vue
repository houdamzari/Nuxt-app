<template>
  <div>
  <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" >
    <div class="swiper-wrapper">
      <div class="swiper-slide" >
      errerherger

      </div>
      <div class="swiper-slide">
        boooooooooo

      </div>
    </div>

  </div>
  <div class="button-prev" slot="button-prev"></div>
  <div class="button-next" slot="button-next"></div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";

export default {
  name: "Slider",
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
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
.button-next {
  background: red;
  width: 60px;
  height: 60px;
}
.button-prev {
  background: red;
  width: 60px;
  height: 60px;
}
</style>
