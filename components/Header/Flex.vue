<template>
  <div class="flex flex-row gap-52 px-32">
    <HeaderHeading />
    <div class="flex flex-col gap-5 w-6/12 relative">
      <div v-for="item in data" :key="item.title">
        <List :data="item" icons="envelope" />
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
        { img: "globe",
          title: "Futuristic", description: "The metaverse is the future" },
        { img: "lock",
          title: "Safe", description: "Stay Safe ? Stay in the MTV " },
        { img: "microchip",
          title: "Blockchain", description: "MTV uses incredible technologies" },
        { img: "money-bill-alt",
          title: "Money", description: "Because who doesnt wanna get rich?" },
      ],
    };
  },
};
</script>
