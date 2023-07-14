import {AxiosResponse} from 'axios';
import axios from './axios';
import { Task } from '@/interfaces/task';


export const getTasks = async (): Promise<AxiosResponse<Task[]>> => await axios.get("/tasks");

export const getTask = async (id: string): Promise<AxiosResponse<Task>> => {
 return axios.get(`tasks/${id}`);
};

export const createTask = async (task: Task) => {
 return await axios.post("/tasks", task);
};

export const updateTask = async (id: string, task: Task) => {
  return await axios.put(`tasks/${id}`, task);
};

export const deleteTask = async (id: string): Promise<AxiosResponse<Task>> => {
  return await axios.delete(`tasks/${id}`);
};

