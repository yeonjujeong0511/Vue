<template>
  <p>Todo id : {{ todoId }}</p>
  <button @click="todoId++">다음 todo 보여주기</button>
  <p v-if="!todoData">로딩중..</p>
  <pre v-else>{{ todoData }}</pre>
</template>

<script>
export default {
  data() {
    return {
      todoId: 1,
      todoData: null,
    };
  },
  methods: {
    async fethcData() {
      this.todoData = null;
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${this.todoId}`
      );
      this.todoData = await res.json();
    },
  },
  mounted() {
    // 전체화면이 렌더링 된 후에, 아래 코드가 실행
    this.fethcData();
  },
  watch: {
    todoId() {
      this.fethcData();
    },
  },
};
</script>
