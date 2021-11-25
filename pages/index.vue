<template>
  <div>
    <Header />
    <Spacer margin="7rem" />
    <SlidersSection />
    <Spacer margin="20rem" />
    <SlidersSecondSection />
    <Spacer margin="20rem" />
    <Grid/>
  </div>
</template>

<script>
import SlidersSection from "~/components/SlidersSection/SlidersSection";
import Grid from "../components/GridSection/Grid";
export default {
  components: {Grid, SlidersSection },
};
</script>
