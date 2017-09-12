<template>
  <div v-html="this.topicContent"></div>
</template>
<script>
import Vue from 'vue'
import * as api from '../api'

export default {
  data() {
    return {
      topicId: this.$route.params.id,
      topicContent: ''
    }
  },

  components: {
  },

  created() {
    this.renderTopicById()
  },

  methods: {
    async renderTopicById() {
      let { data: { data: topic } } = await api.getTopicById(this.topicId)
      this.topicContent = topic.content
      return
    }
  }
}
</script>

<style lang="scss">
  @import "../style/views/home";
</style>
