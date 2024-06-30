import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { todoApi } from "../api/todos";
import { Todo } from "../types/todo.type";
import { AxiosError } from "axios";

export default function TodoForm() {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const queryClient = useQueryClient();
  const addMutation = useMutation<Todo, AxiosError, Todo>({
    mutationFn: async (newTodo) => {
      const response = await todoApi.post("/todos", newTodo);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleAddTodo: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setTitle("");
    setContents("");
    addMutation.mutate({
      id: Date.now().toString(),
      title,
      contents,
      isCompleted: false,
      liked: false,
      createdAt: Date.now(),
    });
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="title">제목:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="contents">내용:</label>
      <input
        id="contents"
        name="contents"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        required
      />
      <button type="submit">추가하기</button>
    </form>
  );
}
