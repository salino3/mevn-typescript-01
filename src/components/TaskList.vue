<template>
    <main class="layoutList">
  <div class="w-auto flex justify-center items-center text-center m-10 p-1 pb-2 rounded-sm  bg-red-300 hover:bg-red-500 active:bg-blue-500">
    <h1 class="text-3xl font-bold underline ">
      Welcome to your Task List App! 
    </h1>
  </div>
        <h2>Your Task List</h2>
        <hr id="hr">
        <div v-if="tasks.length === 0">
            <p class="font-black text-white bg-blue-300 rounded p-2 mt-5">No tasks available..</p>
         </div>
         <div v-else>
            <div v-for="task in tasks" :key="task._id">
            
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
