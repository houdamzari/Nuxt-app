<template>
  <div>
    <HeadingsSection/>
    <Spacer margin="5rem"/>
    <FlexSection/>
  </div>
</template>

<script>
import HeadingsSection from "~/components/SlidersSection/HeadingsSection";
import FlexSection from "~/components/SlidersSection/FlexSection";
export default {
  components: {FlexSection, HeadingsSection}
}
</script>

