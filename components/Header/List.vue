<template>
  <div class="w-full h-20 bg-white relative top-32 rounded-lg shadow-2xl">
    <div class="flex flex-row justify-items-start"><span class="text-blue inline-block w-28 h-44 relative">

    <fa class="absolute fa-3x ml-2 mt-2" :icon="data.img" />
    </span>
    <h1 class="text-2xl uppercase"> {{ data.title }} </h1>
    </div>
    <p class="text-xl text-grey absolute top-8 left-28"  >{{ data.description }}</p>

  </div>
</template>

<script>
import Button from "~/components/Header/Button";

export default {
    components: {Button},

  props : ['data','icon'],

}
</script>
