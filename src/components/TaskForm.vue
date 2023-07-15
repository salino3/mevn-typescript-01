<template>
   <main >
    <form class="flex flex-col justify-center items-center gap-5 mt-5 p-5 border-gray-900 border-2" @submit.prevent="saveTask()" > 
        <input
         class="border border-3 border-blue-700"
         type="text"
         placeholder="Write a title"
         v-model="task.title" name="title" id="title">
        <textarea 
        name="description"
        class="border border-blue-700 border-3 
        rounded hover:border-yellow-700 hover:border-4"
        placeholder="Write a description"
        v-model="task.description" 
        id="description" cols="30" rows="10"></textarea>
        <button class="btnSave">
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
 methods: {
    async saveTask() {
      const res =  await createTask(this.task);
      console.log(res);
      this.$router.push({name: "tasks"})
    }
 }
}); 


</script>

<style lang="scss" scope>

</style>
