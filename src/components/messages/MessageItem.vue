<template>
  <div v-if="message" class="message-item-page">
    <div class="message">
      <p class="topic-info">
      主题
      <span class="topic-title">{{ message.topic.title }}</span>
      中
      </p>
      <p class="message-info">
      <span class="user-info">
        <user-entrance :loginName="message.author.loginname">
          <span class="loginname">{{ `@${message.author.loginname}` }}</span>
        </user-entrance>
        <span>{{ createTimeFromNow }}</span>
        <span v-if="isReplyType">回复了你</span>
        <span v-if="isAtType">@了你</span>
      </span>
      </p>
    </div>
    <div class="message-whether-read">
      <span v-if="message.hasRead">已读</span>
      <span v-else class="has-not-read">未读</span>
    </div>
  </div>
</template>

<script>
'use strict'

import UserEntrance from '../app/UserEntrance.vue'
import { TimeUtil } from '../../libs/utils.js'

export default {
  name: 'Messages',
  props: {
    message: {
      default: null
    }
  },

  components: {
    'user-entrance': UserEntrance
  },

  data() {
    return {
    }
  },

  computed: {
    createTimeFromNow() {
      return new TimeUtil(this.message.createAt).timeFromNow
    },

    isAtType() {
      return this.message.type === 'at'
    },

    isReplyType() {
      return this.message.type === 'reply'
    }
  },

  methods: {
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/components/messages/message-item";
</style>
