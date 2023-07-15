<template>
    <main class="layoutList">
        <h1>Your Task List</h1>
        <hr id="hr">
            <div
             v-for="task in tasks" :key="task._id">
             <div class="card">
              <p class="paragraphTitle">
                 Name task: <span class="titleValue">{{ task.title }}</span>
              </p>
              <p class="paragraghDesc">
                Description: <span class="descValue"> {{ task.description }} </span>
              </p>
              <div class="boxBtns">
            
                  <button class=" rounded text-white flex justify-center items-center px-1"
                  :class="task.done ? 'bg-green-500 line-through' : 'bg-red-500 '"
                     @click="toggleTask(task)" 
                      >
                    {{ task.done ? "Done" : "Undone" }}
                </button>
                <button class=" text-yellow-400  border-1 border-yellow-400 rounded 
              hover:bg-yellow-400 hover:text-white  flex justify-center items-center px-1"
                 @click="$router.push(`/tasks/${task._id}`)">
                    Update
                </button>  
            </div>
             </div>
            </div>
    </main>
</template>

<script  lang="ts">
import { defineComponent } from 'vue';
import {getTasks, updateTask} from '@/services/task-services';
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
     },
    async toggleTask(task: Task) {
      task.done = !task.done; 
      await updateTask(task._id, task); 
     }
    },
    mounted() {
       this.loadTasks()
    }
})

</script>

<style  scope>

.card {
    border: solid 1px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 28px;
    margin: 10px;
    padding: 4px;
    border-radius: 4px;

}

.paragraphTitle, .paragraghDesc {
    color: blue;
}

.titleValue, .descValue {
    color: slategray;
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
    border: none
}

</style>
