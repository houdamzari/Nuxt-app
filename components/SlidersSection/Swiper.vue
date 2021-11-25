<template>
  <div>
    <div v-swiper="swiperOption" class="w-full">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in items" :key="item.title">
          <HeadingTertiary :title="item.slogan"/>
          <Spacer margin="5px" />
          <HeadingPrimary :title="item.title"/>
          <Spacer margin="35px" />

          <Paragraph :paragraph="item.para"/>
          <Spacer margin="2rem" />

          <Paragraph :paragraph="item.para2"/>

<!--          <p class="text-grey w-full relative mt-2.5">{{ item.para2 }}</p>-->
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
import HeadingTertiary from "~/components/SlidersSection/HeadingTertiary";
import Spacer from "~/components/Spacer";
import HeadingPrimary from "./HeadingPrimary";
import Paragraph from "~/components/SlidersSection/Paragraph";


export default {
  components: {Paragraph, HeadingPrimary, Spacer, HeadingTertiary},
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
  clip-path: polygon(100% 50%, 50% 0, 50% 100%);
}
.button-prev {
  background: grey;
  width: 20px;
  height: 20px;
  clip-path: polygon(0 50%, 50% 0, 50% 100%);
}
.button-next:disabled,
.button-prev:disabled {
  opacity: 0.5;
}
</style>
