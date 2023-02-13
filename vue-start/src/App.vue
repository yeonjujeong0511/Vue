<template>
  <h1>VUE 연습</h1>
  <TodoList />
  <WatchPrac />
</template>

<script>
import TodoList from "./components/TodoList.vue";
import WatchPrac from "./components/WatchPrac.vue";
export default {
  name: "App",
  components: {
    TodoList,
    WatchPrac,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
