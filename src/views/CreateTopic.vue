<template>
  <div class="create-topic-page">
    <input class="topic-title"
           placeholder="标题字数10字以上"
           v-model="topicTitle"></input>
    <text-editor @submitContent="submitTopic" ref="textEditor"></text-editor>
  </div>
</template>

<script>
'use strict'

import { MessageBox } from 'mint-ui'

import TextEditor from '../components/app/TextEditor'
import * as UserHelpers from '../helpers/user'

export default {
  name: 'CreateTopic',
  data() {
    return {
      topicTitle: ''
    }
  },

  components: {
    'text-editor': TextEditor
  },

  methods: {
    async _validTopic(title, content, tab) {
      if (title.length < 10) { return await MessageBox.alert('标题字数10字以上', '提示信息') }
      if (!content) { return await MessageBox.alert('话题内容不能为空', '提示信息') }
    },

    async submitTopic(content) {
      await this._validTopic(this.topicTitle, content)
      console.log(this.topicTitle)
      console.log(content)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../style/views/create-topic";
</style>
