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
        <time>{{ replyCreatedAt }}</time>
        <span class="reply-action">
          <span class="up-reply"
                :class="{ 'uped-reply': reply.isUped }"
                @click="upOrDownReply">赞({{ reply.ups.length }})</span>
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

import * as api from '../../api'
import * as UserHelpers from '../../helpers/user'
import { TimeUtil } from '../../libs/utils'

export default {
  name: 'ReplyListItem',

  props: ['reply', 'replyIndex'],

  computed: {
    replyCreatedAt() {
      return new TimeUtil(this.reply.createAt).formatTime()
    }
  },

  methods: {
    async upOrDownReply() {
      let accessToken = await UserHelpers.getCurrentAccessToken()
      if (!accessToken) { return }
      this.reply.isUped = !this.reply.isUped
      if (this.reply.isUped) {
        this.reply.ups.length ++
      } else {
        this.reply.ups.length --
      }
      await api.upReply(this.reply.id, accessToken)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/components/topic/reply";
</style>
