<template>
  <div v-if="message" class="message-page">
    <div v-if="isAtType">
    </div>
    <div v-if="isReplyType">
      <p>
        <span>{{ `@${message.author.loginname}` }}</span>
        <span>在主题</span>
        <span>{{ message.topic.title }}</span>
        <span>回复了你</span>
        {{ message.createAt }}
      </p>
    </div>
  </div>
</template>

<script>
'use strict'

export default {
  name: 'Messages',
  props: {
    message: {
      default: null
    }
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
