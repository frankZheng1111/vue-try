<template>
  <div class="topic-actions">
    <button class="cancel-collect" v-if="topic.isCollect" @click="deCollectTopic">取消收藏</button>
    <button v-else @click="collectTopic">收藏主题</button>
    <button class="reply-topic">回复主题</button>
  </div>
</template>

<script>
'use strict'

import { MessageBox } from 'mint-ui'
import * as api from '../../api'
import User from '../../libs/user'

export default {
  name: 'topicActions',

  data() {
    return {
      topic: ''
    }
  },

  props: ['topic'],

  methods: {
    async _userAccessToken() {
      let user = new User()
      if (!user.isLogin) {
        await MessageBox.alert('该操作需要登录', '提示信息')
        return false
      }
      return user.accessToken
    },

    async deCollectTopic() {
      let accessToken = await this._userAccessToken()
      if (!accessToken) { return }
      this.topic.isCollect = false
      await api.deCollectTopic(this.topic.id, accessToken)
      return
    },

    async collectTopic() {
      let accessToken = await this._userAccessToken()
      if (!accessToken) { return }
      this.topic.isCollect = true
      await api.collectTopic(this.topic.id, accessToken)
      return
    }
  }
}
</script>

<style lang="scss">
  @import "../../style/components/topic/topicActions";
</style>
