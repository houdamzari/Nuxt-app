<template>
  <div>
    <HeadingsSection :withbutton="false" :data="data" />
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
        title: "WHO ROLLS THE MARKET NOW ?",
        slogan: "BITCOIN & ETHEREUM ",
        description:
        "Despite that these 2 coins don't belong to the metaverse, they almost have half of the whole market cap. Traders are always so insightful and optimistic about their futures since they know that in the near future, Blockchain will rule, and the death of centralised systems ( Banks) is inevitable.  "
      },
    };
  },
};
</script>
