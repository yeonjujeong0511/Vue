<template>
  <h1>Latest Vue Core Commits</h1>
  <div v-for="{ author, commit } in commits" :key="author">
    <p>{{ commit.author.name }} :{{ commit.message }}</p>
    <p>{{ commit.author.date }}</p>
  </div>
</template>

<script>
const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=main`;

export default {
  data() {
    return {
      commits: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.commits = await (await fetch(API_URL)).json();
    },
  },
};
</script>

<style scoped></style>
