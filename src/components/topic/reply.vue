<template>
  <li :id="reply.id" class="reply">
    <div class="replyer-info">
      <img class="avatar avatar-small" v-lazy="reply.author.avatarUrl" :title="reply.author.loginname"/>
      <div class="replyer-detail-info">
        <p>
        <span class="replyer.loginname">{{ reply.author.loginname }}</span>
        <span>{{ replyIndex }}</span>
        </p>
        <p>
        <time>{{ replyCreatedAt(reply) }}</time>
        <span class="reply-action">
          <span class="up-reply" :class="{ 'uped-reply': reply.isUped }">赞({{ reply.ups.length }})</span>
          <span>回复</span>
        </span>
        </p>
      </div>
    </div>
    <div class="reply-content markdown-body" v-html="reply.content">
    </div>
  </li>
</template>

<script>
'use strict'

import { TimeUtil } from '../../libs/utils'

export default {
  name: 'reply',

  props: ['reply', 'replyIndex'],

  methods: {
    replyCreatedAt(reply) {
      return new TimeUtil(reply.createAt).formatTime()
    }
  }
}
</script>

<style lang="scss">
  @import "../../style/components/topic/reply";
</style>
