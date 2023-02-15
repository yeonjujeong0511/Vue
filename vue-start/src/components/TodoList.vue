<template>
  <h1>Todo List</h1>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" placeholder="할일 적기" />
    <button>추가</button>
  </form>
  <ul>
    <li v-for="todo in filterTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ done: todo.done }"> {{ todo.text }}</span
      ><button @click="removeTodo(todo)">x</button>
    </li>
  </ul>
  <button @click="completed = !completed">
    {{ completed ? "모두 보기" : "완성된 것 숨기기" }}
  </button>
  <h3>{{ msg || "아직 props 없음" }}</h3>
</template>

<script>
let id = 0;
export default {
  data() {
    return {
      newTodo: "",
      completed: false,
      todos: [
        {
          id: id++,
          text: "HTML배우기",
          done: true,
        },
      ],
    };
  },
  computed: {
    filterTodos() {
      console.log("필터함수");
      return this.completed ? this.todos.filter((t) => !t.done) : this.todos;
    },
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo, done: false });
      this.newTodo = "";
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
  },
  props: {
    msg: String,
  },
  emits: ["response"],
  created() {
    this.$emit("response", "자식요소에서 보내욤");
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
