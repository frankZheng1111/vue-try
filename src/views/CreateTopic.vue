<template>
  <div class="create-topic-page">
    <div class="topic-tab-row">
      选择要发布的版块：
      <select class="topic-tab" v-model="topicTab">
        <option disabled value="">请选择</option>
        <option v-for="tabKey in Object.keys(topicTabs)"
                :value = "tabKey">{{ topicTabs[tabKey] }}</option>
      </select>
    </div>
    <input class="topic-title"
           placeholder="标题字数10字以上"
           v-model="topicTitle"></input>
    <text-editor @submitContent="submitTopic" ref="textEditor"></text-editor>
  </div>
</template>

<script>
'use strict'

import { MessageBox } from 'mint-ui'

import TAB_TEXTS from '../config/tabTexts'
import TextEditor from '../components/app/TextEditor'
import * as UserHelpers from '../helpers/user'
import * as api from '../api'

export default {
  name: 'CreateTopic',
  data() {
    let topicTabs = Object.assign({}, TAB_TEXTS)
    delete topicTabs['']
    delete topicTabs.good
    return {
      topicTitle: '',
      topicTab: '',
      topicTabs: topicTabs
    }
  },

  components: {
    'text-editor': TextEditor
  },

  methods: {
    async _validTopic(title, content, tab) {
      if (title.length < 10) { return await MessageBox.alert('标题字数10字以上', '提示信息') }
      if (!content) { return await MessageBox.alert('话题内容不能为空', '提示信息') }
      if (!tab) { return await MessageBox.alert('必须选择一个发布版块', '提示信息') }
    },

    async submitTopic(content) {
      await this._validTopic(this.topicTitle, content, this.topicTab)
      let accessToken = await UserHelpers.getCurrentAccessToken()
      let { data: { topicId } } = await api.createTopic({
        title: this.topicTitle,
        tab: this.topicTab,
        content: content
      }, accessToken)
      this.$router.push({ name: 'topic', params: { id: topicId } })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../style/views/create-topic";
</style>
