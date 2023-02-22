<template>
  <div>
    <h1>TO DO LIST</h1>
    <input v-model="newTodo" placeholder="할일 적기" />
    <button @click="addStorage">추가</button>
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="todo">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(todo, index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todos.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        console.log(this.todos);
      }
    }
  },
  methods: {
    addStorage() {
      console.log("로컬저장");
      if (this.newTodo !== "") {
        let obj = { text: this.newTodo, done: false };
        localStorage.setItem(this.newTodo, JSON.stringify(obj));

        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
  removeTodo(todo, index) {
    console.log(todo.item);
    localStorage.removeItem(todo.text);
    this.todos.splice(index, 1);
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
.done {
  text-decoration: line-through;
}
</style>
