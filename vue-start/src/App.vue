<template>
  <h1>VUE 연습</h1>
  <FilterPrac />
  <TodoList>{{ gretting }}</TodoList>
  <p>{{ childMsg }}</p>
  <WatchPrac />
  <BindingPrac />
  <FormPrac />
  <FetchingData />
</template>

<script>
import BindingPrac from "./components/BindingPrac.vue";
import TodoList from "./components/TodoList.vue";
import WatchPrac from "./components/WatchPrac.vue";
import FormPrac from "./components/FormPrac.vue";
import FetchingData from "./components/FetchingData.vue";
import FilterPrac from "./components/FilterPrac.vue";
export default {
  name: "App",
  components: {
    TodoList,
    WatchPrac,
    BindingPrac,
    FormPrac,
    FetchingData,
    FilterPrac,
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
