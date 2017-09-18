<template>
  <div v-if="topic" class="topic-page">
    <h2 class="topic-title">{{ topic.title }}</h2>
    <main-topic :topic="topic"></main-topic>
    <h3 class="topic-reply-field-title">
      <span>{{ topic.reply_count }}</span>
      条回复
    </h3>
    <reply-list :replies="topic.replies"></reply-list>
  </div>
</template>

<script>
'use strict'

import MainTopic from '../components/topic/mainTopic'
import ReplyList from '../components/topic/replyList'
import * as api from '../api'

export default {
  name: 'topic',
  data() {
    return {
      topicId: this.$route.params.id,
      topic: ''
    }
  },

  components: {
    'main-topic': MainTopic,
    'reply-list': ReplyList
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
