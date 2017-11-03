<template>
  <div v-if="hasMessages" class="messages-page">
    <div class="messages">
      <message-item v-for="hasReadMessage in hasReadMessages" :message="hasReadMessage"></message-item>
      <message-item v-for="hasNotReadMessage in hasNotReadMessages" :message="hasNotReadMessage"></message-item>
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
      hasNotReadMessages: []
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
</style>
