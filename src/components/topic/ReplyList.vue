<template>
  <div v-if="replies && replies.length" class="topic-replies">
    <ul class="reply-list">
      <reply-list-item v-for="reply in replies"
             @setThisReplyInfoInReplyEditor="setThisReplyInfoInReplyEditor"
             :key="reply.id"
             :reply="reply"
             :replyIndex="`#${replies.indexOf(reply) + 1}`"></reply-list-item>
    </ul>
  </div>
</template>

<script>
'use strict'

import ReplyListItem from './ReplyListItem.vue'

export default {
  name: 'ReplyList',
  props: {
    replies: {
      default: null
    }
  },

  components: {
    'reply-list-item': ReplyListItem
  },
  methods: {
    setThisReplyInfoInReplyEditor(replyId, loginname) {
      this.$emit('setThisReplyInfoInReplyEditor', replyId, loginname)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/components/topic/reply-list";
</style>
