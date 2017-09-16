<template>
  <div v-if="topic" class="topic-page">
    <h2 class="topic-title">{{ topic.title }}</h2>
    <main-topic :topic="topic"></main-topic>
  </div>
</template>
<script>
import MainTopic from '../components/topic/main-topic'
import * as api from '../api'

export default {
  data() {
    return {
      topicId: this.$route.params.id,
      topic: ''
    }
  },

  components: {
    'main-topic': MainTopic
  },

  created() {
    this.renderTopicById()
  },

  methods: {
    async renderTopicById() {
      let { data: { data: topic } } = await api.getTopicById(this.topicId)
      this.topic = topic
      return
    }
  }
}
</script>

<style lang="scss">
  @import "../style/views/topic";
</style>
