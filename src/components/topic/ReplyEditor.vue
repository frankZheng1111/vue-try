<template>
  <div class="reply-editor">
    <h3 class="reply-editor-title">
      添加回复
    </h3>
    <text-editor @submitContent="submitReply" :initContent="initContent" ref="textEditor"></text-editor>
  </div>
</template>

<script>
'use strict'

import TextEditor from '../app/TextEditor'
import * as api from '../../api'
import * as UserHelpers from '../../helpers/user'

export default {
  name: 'ReplyEditor',

  props: {
    topicId: {
      default: null
    }
  },

  components: {
    'text-editor': TextEditor
  },

  data() {
    return {
      initContent: '',
      replyId: null
    }
  },

  methods: {
    _initReplyEditor() {
      this.$refs.textEditor.clearContent()
      this.replyId = null
    },

    async submitReply(content) {
      if (!this.topicId) { return }
      let accessToken = await UserHelpers.getCurrentAccessToken()
      if (!accessToken) { return }
      await api.addReply(this.topicId, content, accessToken, this.replyId)
      this._initReplyEditor()
      this.$emit('reloadTopic')
    },

    setReplyTarget(replyId, loginname) {
      this.replyId = replyId
      let userLink = ''
      if (loginname) { userLink = `@${loginname} ` }
      this.$refs.textEditor.setContent(userLink)
      return
    }

  }
}
</script>

<style scoped lang="scss">
  @import "../../style/components/topic/reply-editor";
</style>
