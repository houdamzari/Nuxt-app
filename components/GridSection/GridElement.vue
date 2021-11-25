<template>
  <div class="flex flex-col gap-10 text-center">
    <HeadingTertiary color="white" :title="data.slogan" />
    <HeadingPrimary color="white" :title="data.title" />
    <div class="flex justify-center w-full">
      <Paragraph
        :paragraph="data.description"
      />
    </div>
    <div class="w-72 h-44 relative left-2/4 -translate-x-1/2">
      <img
        class="absolute w-full h-full object-cover"
        alt="img"
        :src="data.img"
      />
    </div>
  </div>
</template>

<script>
import HeadingTertiary from "~/components/SlidersSection/HeadingTertiary";
import HeadingPrimary from "~/components/SlidersSection/HeadingPrimary";
import Paragraph from "~/components/SlidersSection/Paragraph";
export default {
  props:['data'],
  components: { Paragraph, HeadingPrimary, HeadingTertiary },
};
</script>

<style scoped></style>
