<template>
  <div v-if="topic" class="topic-page">
    <div class="title-row">
      <h2 class="topic-title">{{ topic.title }}</h2>
      <button class="cancel-collect" v-if="topic.is_collect">取消收藏</button>
      <button v-else>收藏主题</button>
    </div>
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
import User from '../libs/user'

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
      let topicOption = {}
      let user = new User()
      if (user.isLogin) {
        topicOption.accessToken = user.accessToken
      }
      let { data: { data: topic } } = await api.getTopicById(this.topicId, topicOption)
      this.topic = topic
      return
    }
  }
}
</script>

<style lang="scss">
  @import "../style/views/topic";
</style>
