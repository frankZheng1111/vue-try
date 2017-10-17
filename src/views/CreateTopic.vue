<template>
  <div class="create-topic-page">
    <h3>发表一个主题</h3>
    <text-editor @submitContent="submitTopic" ref="textEditor"></text-editor>
    <div>
      <button class="back-btn"@click="back">返回社区</button>
    </div>
  </div>
</template>

<script>
'use strict'

import TextEditor from '../components/app/TextEditor'
import * as UserHelpers from '../helpers/user'

export default {
  name: 'CreateTopic',
  data() {
    return {
    }
  },

  components: {
    'text-editor': TextEditor
  },

  methods: {
    back() {
      history.go(-1)
    },

    submitTopic(content) {
    }
  }
}
</script>

<style scoped lang="scss">
  // @import "../style/views/about";
</style>
