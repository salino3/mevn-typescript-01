<!-- 
  npm i vue-router
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
 -->

<template>
  <main class="primaryLayer">
  <Navbar />
  <HomeComponent /> 
 </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeComponent from '@/components/HomeComponent.vue'
import Navbar from '@/components/Nav-Bar.vue';

export default defineComponent({
  name: 'App',
  components: {
    HomeComponent,
    Navbar
  }
});
</script>

<style>

</style>
