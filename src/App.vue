<!-- npm i vue-router -->

<template>
 <main>
  <Navbar />
  <h1>Hello World!</h1>
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
