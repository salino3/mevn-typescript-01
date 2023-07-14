<template>
   <main>
    <form @submit.prevent="saveTask()" > 
        <input
         type="text"
         placeholder="Write a title"
         v-model="task.title" name="title" id="title">
        <textarea 
        name="description"
        v-model="task.description" 
        id="description" cols="30" rows="10"></textarea>
        <button>
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
    }
 }
}); 


</script>

<style lang="scss" scope>

</style>
