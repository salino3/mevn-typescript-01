<!-- 
  npm i vue-router
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
 -->

<template>
  <main
   class="primaryLayer"
  >
  <Navbar />
  <div class="w-min whitespace-nowrap  bg-red-300">
    <h1 class="text-3xl font-bold underline   hover:bg-red-500 active:bg-blue-500">
      Welcome to your Task List App! 
    </h1>
  </div>
 
  <hr id="hr">
  <router-view />
 </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Nav-Bar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  }
});
</script>

<style>

</style>
