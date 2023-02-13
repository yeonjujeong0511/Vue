<template>
  <h1>Todo List</h1>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" placeholder="할일 적기" />
    <button>추가</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}<button @click="removeTodo(todo)">x</button>
    </li>
  </ul>
</template>

<script>
let id = 0;
export default {
  data() {
    return {
      newTodo: "",
      todos: [
        {
          id: id++,
          text: "HTML배우기",
        },
      ],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo });
      this.newTodo = "";
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
  },
};
</script>

<style></style>
