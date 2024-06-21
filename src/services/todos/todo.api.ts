import { API } from "../endPoints";
import instance from "../instance";

export const getTodos = async () => {
  const resp = await instance.get(API.TODOS.GET);
  return resp.data;
};

export const addTodo = async (todo: string) => {
  const resp = await instance.post(API.TODOS.GET, { todo });
  return resp.data;
};

export const deleteTodo = async (id: string) => {
  const resp = await instance.delete(`${API.TODOS.GET}/${id}`);
  return resp.data;
};

export const updateTodo = async (id: string, todo: string) => {
  const resp = await instance.put(`${API.TODOS.GET}/${id}`, { todo });
  return resp.data;
};
