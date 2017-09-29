<template>
  <div class="topic-actions">
    <button class="cancel-collect" v-if="topic.isCollect">取消收藏</button>
    <button v-else>收藏主题</button>
    <button class="reply-topic">回复主题</button>
  </div>
</template>

<script>
'use strict'

export default {
  name: 'topicActions',

  data() {
    return {
      topic: ''
    }
  },

  props: ['topic']
}
</script>

<style lang="scss">
  @import "../../style/components/topic/topicActions";
</style>
