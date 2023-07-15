<template>
    <main class="layoutList">
        <h1>Your Task List</h1>
        <hr id="hr">
        <ul>
            <li 
             v-for="task in tasks"
             @click="$router.push(`/tasks/${task._id}`)"
             :key="task._id">
                {{ task.title }} 
            </li>
        </ul>
    </main>
</template>

<script  lang="ts">
import { defineComponent } from 'vue';
import {getTasks} from '@/services/task-services';
import { Task } from '@/interfaces/task';

export default defineComponent({
    data() {
        return {
            tasks: [] as Task[]
        }
    },
    methods: {
      async loadTasks() {
        const res = await getTasks()
            this.tasks = res.data;
        
     }
    },
    mounted() {
       this.loadTasks()
    }
})

</script>

<style lang="scss" scope>

</style>
