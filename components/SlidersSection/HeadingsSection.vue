<template>
  <div class="flex flex-col gap-10 text-center">
    <HeadingTertiary :title="data.slogan" />
    <HeadingPrimary :title="data.title" />
    <div class="flex justify-center w-full">
      <Paragraph width="50%" :paragraph="data.description" />
    </div>
    <div class="flex justify-center" v-if="withbutton">
      <button class="bg-blue w-52 h-14 text-white shadow-lg drop-shadow-lg">
        Contribute
      </button>
    </div>
  </div>
</template>

<script>
import HeadingTertiary from "~/components/SlidersSection/HeadingTertiary";
import HeadingPrimary from "~/components/SlidersSection/HeadingPrimary";
import Paragraph from "~/components/SlidersSection/Paragraph";
export default {
  props: ["withbutton", "data"],
  components: { Paragraph, HeadingPrimary, HeadingTertiary },
};
</script>

<style scoped></style>
