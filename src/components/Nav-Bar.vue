<template >
 <nav class="navbar">
   <ul class="ulNav">
      <li>
         <router-link to="/">Tasks</router-link>
      </li>
      <li>
         <router-link to="/tasks/new">Create Task</router-link>
      </li>
   </ul>
 </nav>
</template>

<script  lang="ts">
import {defineComponent} from '@vue/runtime-core';

export default defineComponent({
   name: "Nav-Bar",
})
</script>

<style  scope>

 
</style>
