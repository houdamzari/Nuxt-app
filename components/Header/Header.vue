<template>
  <div class="w-full h-screen" >
    <Navbar/>
    <div class="absolute bg-blue background-clip h-screen w-screen"></div>
    <Flex/>
  </div>
</template>
<style>
    .background-clip{
      clip-path: polygon(0 0, 100% 0%, 100% 60%, 0% 100%);
    }

</style>
<script>
import Flex from "~/components/Header/Flex";
import Navbar from "~/components/Header/Navbar";
export default {
  components: {Navbar, Flex}
}
</script>
