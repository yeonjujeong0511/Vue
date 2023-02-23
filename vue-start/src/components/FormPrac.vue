<template>
  <h2>Text Input</h2>
  <input v-model="input" placeholder="여기에 입력" />
  <span>input : {{ input }}</span>
  <h2>checkbox</h2>
  <input type="checkbox" v-model="checked" />
  <span>checked:{{ checked }}</span>
  <h2>Multi Checkbox</h2>
  <input value="jack" type="checkbox" v-model="checkedNames" />
  <label for="jack">jack</label>
  <input value="john" type="checkbox" v-model="checkedNames" />
  <label for="john">john</label>
  <input value="mike" type="checkbox" v-model="checkedNames" />
  <label for="mike">mike</label>
  <p>checked names : {{ checkedNames }}</p>
  <h2>Radio Button</h2>
  <input value="one" type="radio" v-model="radio" />
  <label for="one">one</label>
  <input value="two" type="radio" v-model="radio" />
  <label for="two">two</label>
  <p>picked : {{ radio }}</p>
  <h2>Select</h2>
  <select v-model="select">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <p>select : {{ select }}</p>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      checked: true,
      checkedNames: [],
      radio: "",
      select: "A",
    };
  },
};
</script>

<style scoped></style>
