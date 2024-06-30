import { QueryFunctionContext } from "@tanstack/query-core";
import axios from "axios";
import { Todo } from "../types/todo.type";

export const todoApi = axios.create({
  baseURL: "http://localhost:4000",
});

export const getDetail = async ({ queryKey }: QueryFunctionContext) => {
  const [_, id] = queryKey;

  const response = await todoApi<Todo>(`/todos/${id}`);
  return response.data;
};
