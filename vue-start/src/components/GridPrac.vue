<template>
  <table>
    <thead>
      <th v-for="item in columns" :key="item">
        {{ item }}
      </th>
    </thead>
    <tbody>
      <tr v-for="content in data" :key="content">
        <td v-for="name in content" :key="name">{{ name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: Array,
    columns: Array,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}
th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}
th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}
</style>
