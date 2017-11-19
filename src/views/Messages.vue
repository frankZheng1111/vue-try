<template>
  <div v-if="hasMessages" class="messages-page">
    <div class="messages">
      <p v-if="!hasMessages" class="messages-placeholder has-no-messages-placeholder">您暂时没有未读或已读的信息</p>
      <p v-else-if="!hasNotReadMessages.length"class="messages-placeholder has-not-read-messages-placeholder">您暂时没有未读的信息</p>
      <message-item v-for="hasNotReadMessage in hasNotReadMessages" :message="hasNotReadMessage" :key="hasNotReadMessage.id"></message-item>
      <message-item v-if="showHasReadMessages" v-for="hasReadMessage in hasReadMessages" :message="hasReadMessage":key="hasReadMessage.id"></message-item>
    </div>
  </div>
</template>

<script>
'use strict'

import MessageItem from '../components/messages/MessageItem'
import * as api from '../api'
import * as UserHelpers from '../helpers/user'

export default {
  name: 'Messages',

  components: {
    'message-item': MessageItem
  },

  data() {
    return {
      hasReadMessages: [],
      hasNotReadMessages: [],
      showHasReadMessages: false
    }
  },

  computed: {
    hasMessages() {
      return this.hasReadMessages.length || this.hasNotReadMessages.length
    }
  },
  
  async created() {
    await this.getMessages()
  },

  methods: {
    async getMessages() {
      let accessToken = await UserHelpers.getCurrentAccessToken()
      let { data: { data: { hasReadMessages, hasnotReadMessages }} } = await api.getMessages(accessToken)
      this.hasReadMessages = hasReadMessages
      this.hasNotReadMessages = hasnotReadMessages
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../style/views/messages";
</style>
