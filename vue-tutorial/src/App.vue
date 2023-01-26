<script setup lang="ts">
import { ref } from "vue";
import { Check, XCircle, Trash } from "lucide-vue-next";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const newTodo = ref("");
const todosData = JSON.parse(localStorage.getItem("todos") || "[]") as Todo[];
const todos = ref(todosData);

const addTodo = () => {
  if (newTodo.value.trim() === "") return;
  todos.value.push({
    id: todos.value.length + 1,
    title: newTodo.value,
    completed: false,
  });
  saveData();
  newTodo.value = "";
};

const toggleTodo = (todo: Todo) => {
  todo.completed = !todo.completed;
  saveData();
};

const deleteTodo = (todo: Todo) => {
  todos.value = todos.value.filter((t: Todo) => t.id !== todo.id);
  saveData();
};

const saveData = () => {
  const storageData = JSON.stringify(todos.value);
  localStorage.setItem("todos", storageData);
};

const sortTodos = (todos: Todo[]) => {
  return todos.sort((a: Todo, b: Todo) => {
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    return 0;
  });
};
</script>

<template>
  <main class="flex w-full h-screen flex-col items-center p-4">
    <h1 class="text-6xl font-bold text-center">Todo App</h1>
    <h2 class="text-3xl mt-5 text-center">Now with Vue!</h2>
    <form
      @submit.prevent="addTodo()"
      class="flex flex-col my-5 w-full max-w-lg items-end"
    >
      <div class="w-full">
        <input
          v-model="newTodo"
          name="newTodo"
          autocomplete="off"
          id="createTodoInput"
          class="bg-zinc-800 w-full px-4 py-2 rounded-md"
          placeholder="New Todo"
        />
      </div>
      <button
        type="submit"
        class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-4 max-w-[10rem]"
      >
        Create Todo
      </button>
    </form>
    <ul class="w-full max-w-lg flex flex-col gap-4">
      <li
        v-for="todo in sortTodos(todos)"
        :key="todo.id"
        class="bg-zinc-800 w-full px-4 py-2 flex rounded-md items-center justify-between"
      >
        {{ todo.title }}
        <div class="flex items-center h-10 gap-4">
          <button
            @click="toggleTodo(todo)"
            :class="todo.completed ? 'text-yellow-300' : 'text-green-300'"
          >
            <XCircle v-if="todo.completed" />
            <Check v-else />
          </button>
          <button @click="deleteTodo(todo)" class="text-red-400">
            <Trash />
          </button>
        </div>
      </li>
    </ul>
    <h3 v-if="todos.length === 0">Create a new todo</h3>
  </main>
</template>
