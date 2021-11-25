<template>
  <div>
    <HeadingsSection :data="data" />
    <Spacer margin="5rem" />
    <FlexSection />
  </div>
</template>

<script>
import HeadingsSection from "~/components/SlidersSection/HeadingsSection";
import FlexSection from "~/components/SlidersSection/FlexSection";
export default {
  components: { FlexSection, HeadingsSection },
  data() {
    return {
      data: {
        title: "",
        slogan: "",
        description:
        ""
      },
    };
  },
};
</script>
