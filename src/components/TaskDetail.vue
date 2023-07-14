<template>
 <main>
    <h1>Task Details!</h1>
    <form @submit.prevent="hanldeUpdate()" >
      <input
       type="text"
       name="title"
       v-model="currentTask.title" >
      <textarea
       name="description" 
       id="description" 
       v-model="currentTask.description" 
       cols="30" rows="3"
       ></textarea>
       <button>Update</button>
    </form>
    <button @click="handleDelete()">Delete</button>
 </main>
</template>

<script  lang="ts">
import { defineComponent } from 'vue';
import { getTask, updateTask, deleteTask } from '@/services/task-services';
import { Task } from '@/interfaces/task';


export default defineComponent({
   data() {
     return {
      currentTask: {

      } as Task
     }
   },
   methods: {
   async loadTask(id: string) {
    const res = await getTask(id);
    console.log(res.data)
    this.currentTask = res.data;
    },
    async hanldeUpdate() {
         if(typeof this.$route.params.id === "string"){
      await updateTask(this.$route.params.id , this.currentTask);
      this.$router.push('/');
     }
    },
    async handleDelete() {
         if(typeof this.$route.params.id === "string"){
      await deleteTask(this.$route.params.id);
      this.$router.push('/');
      }
    }
   },
   mounted() {

      if(typeof this.$route.params.id === "string"){
    this.loadTask(this.$route.params.id)
   }
  }
})

</script>

<style lang="scss" scope>

</style>
