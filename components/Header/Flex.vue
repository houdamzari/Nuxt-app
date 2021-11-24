<template>
  <div class="flex flex-row gap-52 px-32">
    <HeaderHeading />
    <div class="flex flex-col gap-5 w-6/12 relative">
      <div v-for="item in data" :key="item.title">
        <List :data="item.title" />
      </div>
    </div>
  </div>
</template>
<script>
import List from "~/components/Header/List";
export default {
  components: { List },
  data() {
    return {
      data: [
        { img: "", title: "", description: "" },
        { img: "", title: "", description: "" },
        { img: "", title: "", description: "" },
        { img: "", title: "", description: "" },
      ],
    };
  },
};
</script>
