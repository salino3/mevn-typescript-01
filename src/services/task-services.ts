import {AxiosResponse} from 'axios';
import axios from './axios';
import { Task } from '@/interfaces/task';


export const getTasks = async (): Promise<AxiosResponse<Task[]>> => await axios.get("/tasks");


export const createTask = async (task: Task) => {
 return await axios.post("/tasks", task);
};

