<template>
  <div class="topic-actions">
    <button class="cancel-collect" v-if="topic.isCollect" @click="deCollectTopic">取消收藏</button>
    <button v-else @click="collectTopic">收藏主题</button>
    <button class="reply-topic mobile-reply-topic" @click="moveToReplyEditor">回复主题</button>
  </div>
</template>

<script>
'use strict'

import * as api from '../../api'
import * as UserHelpers from '../../helpers/user'

export default {
  name: 'TopicActions',

  data() {
    return {
    }
  },

  props: {
    topic: {
      default: ''
    }
  },

  methods: {
    async deCollectTopic() {
      let accessToken = await UserHelpers.getCurrentAccessToken()
      if (!accessToken) { return }
      this.topic.isCollect = false
      await api.deCollectTopic(this.topic.id, accessToken)
      return
    },

    async collectTopic() {
      let accessToken = await UserHelpers.getCurrentAccessToken()
      if (!accessToken) { return }
      this.topic.isCollect = true
      await api.collectTopic(this.topic.id, accessToken)
      return
    },

    async moveToReplyEditor() {
      let accessToken = await UserHelpers.getCurrentAccessToken()
      if (!accessToken) { return }
      this.$emit('setEditorFocus')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/components/topic/topic-actions";
</style>
