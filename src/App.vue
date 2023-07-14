<!-- 
  npm i vue-router
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
 -->

<template>
 <main>
  <Navbar />
  <h1 class="text-3xl font-bold underline bg-red-300 hover:bg-red-500 active:bg-blue-500">
    Hello World!
  </h1>
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
