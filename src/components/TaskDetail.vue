<template>
 <main class="layoutDetail">
    <h1 class="text-center">Task Details</h1>
    <form class=" rounded flex flex-col justify-center items-center gap-5 m-2 mt-5 p-10 border-gray-900 border-2" @submit.prevent="hanldeUpdate()" >
      <input
       type="text"
       name="title"
       class="input"
       placeholder="Write a title"
       v-model="currentTask.title" >
      <textarea
       name="description" 
       placeholder="Write a description"
       id="description" 
       v-model="currentTask.description" 
        rows="8"
       ></textarea>
       <div class="boxBtns">
          <button class="rounded border-spacing-4  bg-yellow-500 text-white">Update</button>
          <button @click="handleDelete()" class="rounded bg-red-500 text-white" >Delete</button>
       </div>
    </form>
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

<style lang="css" scope>

h1 {
      font-size: 32px;
 }

textarea, 
input {
   padding-left: 3px;
 }

 .boxBtns {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 8px;
    margin-left: auto;
    height: 28px;
    font-size: 20px;

}

button {
    width: 90px;
    height: 40px;
    border: none;
}
</style>
