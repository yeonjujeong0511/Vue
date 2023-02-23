<template>
  <h2>sort and filter</h2>
  <span>Search</span><input v-model="search" />
  <GridPrac :data="gridData" :columns="gridColumns" />
</template>

<script>
import GridPrac from "./GridPrac.vue";
export default {
  components: {
    GridPrac,
  },
  data() {
    return {
      search: "",
      gridColumns: ["Name", "Power"],
      gridData: [
        { name: "Chuck Norris", power: Infinity },
        { name: "Bruce Lee", power: 9000 },
        { name: "Jackie Chan", power: 7000 },
        { name: "Jet Li", power: 8000 },
      ],
    };
  },
};
</script>

<style scoped></style>
