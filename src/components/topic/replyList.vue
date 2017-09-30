<template>
  <div v-if="replies && replies.length" class="topic-replies">
    <ul class="reply-list">
      <reply v-for="reply in replies"
             :key="reply.id"
             :reply="reply"
             :replyIndex="`#${replies.indexOf(reply) + 1}`"></reply>
    </ul>
  </div>
</template>

<script>
'use strict'

import Reply from './reply.vue'

export default {
  name: 'replyList',
  props: {
    replies: {
      default: null
    }
  },

  components: {
    'reply': Reply
  }
}
</script>

<style lang="scss">
  @import "../../style/components/topic/replyList";
</style>
