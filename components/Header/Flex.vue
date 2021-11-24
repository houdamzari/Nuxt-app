<template>
  <div class="flex flex-row gap-52 px-32">
      <HeaderHeading/>
      <div class="flex flex-col gap-5 w-6/12 relative">
        <List/>
        <List/>
        <List/>
        <List/>

      </div>
  </div>
</template>
<script>
import List from "~/components/Header/List";
export default {
  components: {List}
}
</script>
