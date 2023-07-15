<template>
 <main class="layerHome">
    <div class="w-min whitespace-nowrap m-10 p-1 pb-2 rounded-sm  bg-red-300 hover:bg-red-500 active:bg-blue-500">
    <h1 class="text-3xl font-bold underline ">
      Welcome to your Task List App! 
    </h1>
  </div>
   <router-view />
 </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "HomeComponent"
})

</script>

<style  scope>

</style>
