<template>
  <h1>VUE 연습</h1>
  <TodoList>{{ gretting }}</TodoList>
  <p>{{ childMsg }}</p>
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
  data() {
    return {
      gretting: "slot으로 부모데이터 보내기",
    };
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
