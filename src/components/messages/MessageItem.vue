<template>
  <div v-if="message" class="message-page">
    <div>
      <p>
        <user-entrance :loginName="message.author.loginname">
          <span>{{ `@${message.author.loginname}` }}</span>
        </user-entrance>
        <span>在主题</span>
        <span>{{ message.topic.title }}</span>
        <span v-if="isReplyType">回复了你</span>
        <span v-if="isAtType">@了你</span>
        {{ message.createAt }}
      </p>
    </div>
  </div>
</template>

<script>
'use strict'

import UserEntrance from '../app/UserEntrance.vue'

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
</style>
