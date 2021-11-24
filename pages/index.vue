<template>
  <div>
    <Header />
    <Spacer margin="7rem" />
    <SlidersSection />
    <Spacer margin="20rem" />
    <SlidersSecondSection />
  </div>
</template>

<script>
import SlidersSection from "~/components/SlidersSection/SlidersSection";
export default {
  components: { SlidersSection },
};
</script>
