<template>
   <main class="layoutTaskForm " >
      <h1 class="text-center">Task Form</h1>
    <form class=" rounded flex flex-col justify-center items-center gap-5 m-2 mt-5 p-10 border-gray-900 border-2" @submit.prevent="saveTask()" > 
        <input
         class=" w-64 border border-3 border-blue-700  hover:border-yellow-700"
         type="text"
         placeholder="Write a title"
         v-model="task.title" name="title" id="title">
        <textarea 
        name="description"
        class="border border-blue-700 border-3 
        rounded hover:border-yellow-700 hover:border-3"
        placeholder="Write a description"
        v-model="task.description" 
        id="description" rows="10"></textarea>
        <button :disabled="isAble" :class="!isAble && 'hover:bg-blue-400 hover:text-white'" class="btnSave">
            Save
        </button>
    </form>
   </main>
</template>

<script   lang="ts">
import {defineComponent} from 'vue';
import {Task} from '@/interfaces/task';
import {createTask} from '@/services/task-services';


export default defineComponent({

 data() {
    return {
        task: {
     title: "",
     description: ""
     } as Task,
    }
 },
  computed: {
    isAble(this: { task: Task }) {
      return !(this.task.title && this.task.description);
    }
  },
 methods: {
    async saveTask() {
      const res =  await createTask(this.task);
      console.log(res);
      this.$router.push({name: "tasks"})
    }
 }
}); 


</script>

<style lang="css" scope>

h1 {
   font-size: 32px;
 }

textarea, input {
   padding-left: 3px;
 }



</style>
