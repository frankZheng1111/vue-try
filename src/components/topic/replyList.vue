<template>
  <div v-if="replies && replies.length" class="topic-replies">
    <ul class="reply-list">
      <li v-for="reply in replies" :key="reply.id" :id="reply.id" class="reply">
        <div class="replyer-info">
          <img class="avatar avatar-small" :src="reply.author.avatar_url" :title="reply.author.loginname"/>
          <div class="replyer-detail-info">
            <p>
              <span class="replyer.loginname">{{ reply.author.loginname }}</span>
              <span>{{ `#${replies.indexOf(reply) + 1}` }}</span>
            </p>
            <p>
              <time>{{ reply.create_at }}</time>
              <span class="reply-action">
                <span>赞(1)</span>
                <span>回复</span>
              </span>
            </p>
          </div>
        </div>
        <div class="reply-content markdown-body" v-html="reply.content">
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
