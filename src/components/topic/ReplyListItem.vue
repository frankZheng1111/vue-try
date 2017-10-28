<template>
  <li :id="reply.id" class="reply">
    <div class="replyer-info">
      <user-entrance :loginName="reply.author.loginname">
        <img class="avatar avatar-small" v-lazy="reply.author.avatarUrl" :title="reply.author.loginname"/>
      </user-entrance>
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
          <span class="reply-this-reply"
                @click="setThisReplyInfo">回复</span>
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
import UserEntrance from '../app/UserEntrance.vue'

export default {
  name: 'ReplyListItem',

  props: ['reply', 'replyIndex'],

  components: {
    'user-entrance': UserEntrance
  },

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
    },

    setThisReplyInfo() {
      this.$emit('setThisReplyInfoInReplyEditor', this.reply.id, this.reply.author.loginname)
      return
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/components/topic/reply-list-item";
</style>
