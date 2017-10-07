<template>
  <div v-if="topic" class="topic-page">
    <h2 class="topic-title">{{ topic.title }}</h2>
    <main-topic :topic="topic"></main-topic>
    <h3 class="topic-reply-field-title">
      <span>{{ topic.replyCount }}</span>
      条回复
    </h3>
    <reply-list :replies="topic.replies"></reply-list>
    <reply-editor></reply-editor>
    <topic-actions :topic="topic"></topic-actions>
  </div>
</template>

<script>
'use strict'

import MainTopic from '../components/topic/MainTopic'
import ReplyList from '../components/topic/ReplyList'
import TopicActions from '../components/topic/TopicActions'
import ReplyEditor from '../components/topic/ReplyEditor'

import * as api from '../api'
import User from '../libs/user'

export default {
  name: 'Topic',
  data() {
    return {
      topicId: this.$route.params.id,
      topic: ''
    }
  },

  components: {
    'main-topic': MainTopic,
    'reply-list': ReplyList,
    'topic-actions': TopicActions,
    'reply-editor': ReplyEditor
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

<style scoped lang="scss">
  @import "../style/views/topic";
</style>
