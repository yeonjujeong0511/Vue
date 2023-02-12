<template>
  <div class="black-bg" v-if="모달창 == true">
    <div class="white-bg">
      <button class="x-btn" @click="모달창 = false">X</button>
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
    </div>
  </div>
  <div class="menu">
    <a v-for="a in 메뉴들" :key="a">{{ a }}</a>
    <a>Products</a>
    <a>About</a>
  </div>
  <div v-for="(a, i) in 원룸들" :key="(a, i)">
    <img :src="원룸들[i].image" class="room-img" />
    <h4 @click="모달창 = true">{{ 원룸들[i].title }}</h4>
    <p>{{ 원룸들[i].price }}원</p>
  </div>
</template>

<script>
import data from "./assets/oneroom.js";
export default {
  name: "App",
  data() {
    return {
      원룸들: data,
      모달창: false,
      신고수: [0, 0, 0],
      메뉴들: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  methods: {
    increse(i) {
      this.신고수[i] += 1;
    },
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.menu {
  background: orange;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 90%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.x-btn {
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  left: 45%;
}
</style>
