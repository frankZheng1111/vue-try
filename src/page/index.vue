<template>
  <div>
    <h1 class='logo'>Cnodejs Api Test</h1>
    <ul class='list'>
      <li v-for="topic in topics" v-text="topic.title"></li>
    </ul>
  </div>
</template>
<script>
import * as api from '../api'

export default {
  data() {
    return {
      topics: [
      ]
    }
  },
  created() {
    this.initTopicsList();
  },
  methods: {
    async initTopicsList() {
      let { data: { data: topics } } = await api.getTopics()
      this.topics.push(...topics);
    }
  }
}
</script>

<style lang="scss">
  @import "../style/style";
</style>
