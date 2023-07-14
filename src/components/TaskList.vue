<template>
    <main>
        <h1>Task List</h1>
        <ul>
            <li v-for="task in tasks" :key="task._id">
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
