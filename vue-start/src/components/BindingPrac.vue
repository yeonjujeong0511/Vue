<template>
  <p>속성 바인딩</p>
  <p :class="{ red: isRed }" @click="toggleRed">클릭하면 글씨 빨간색!</p>
  <p :style="{ color }" @click="toggleColor">클릭하면 글씨 녹색 블루!</p>
  <button @click="show = !show">리스트 숨기기</button>
  <button @click="list.push(list.length + 1)">list 추가하기</button>
  <button @click="list.pop()">list 제거하기</button>
  <ul v-if="show">
    <li v-for="item in list" :key="item">{{ item }}</li>
  </ul>
  <p v-else>리스트 숨기기</p>
</template>

<script>
export default {
  data() {
    return {
      isRed: false,
      color: "green",
      list: [1, 2, 3],
      show: true,
    };
  },
  methods: {
    toggleRed() {
      this.isRed = !this.isRed;
      console.log(this.isRed);
      // console.log("레드 이벤트");
    },
    toggleColor() {
      this.color = this.color === "green" ? "blue" : "green";
    },
  },
};
</script>

<style>
.red {
  color: Red;
}
</style>
