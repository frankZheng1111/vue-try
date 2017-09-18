<template>
  <div v-if="replies && replies.length" class="topic-replies">
    <ul class="reply-list">
      <li v-for="reply in replies" :key="reply.id" :id="reply.id" class="reply">
        <div class="markdown-body" v-html="reply.content">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
'use strict'

export default {
  props: ['replies'],

  data() {
    return {}
  }
}
</script>

<style lang="scss">
  @import "../../style/components/topic/replyList";
</style>
