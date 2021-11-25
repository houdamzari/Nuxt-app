<template>
  <div class="flex flex-col gap-10 text-center">
    <HeadingTertiary title="Get 2x more leads"/>
    <HeadingPrimary title="Automate Your Users"/>
    <div class="flex justify-center w-full">
     <Paragraph width='55rem' paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum!"/>
    </div>
  </div>
</template>

<script>
import HeadingTertiary from "~/components/SlidersSection/HeadingTertiary";
import HeadingPrimary from "~/components/SlidersSection/HeadingPrimary";
import Paragraph from "~/components/SlidersSection/Paragraph";
export default {
  components: {Paragraph, HeadingPrimary, HeadingTertiary}
}
</script>

<style scoped>

</style>
