<template>
  <div class="create-topic-page">
    <input class="topic-title"
           placeholder="标题字数10字以上"></input>
    <text-editor @submitContent="submitTopic" ref="textEditor"></text-editor>
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
      console.log(content)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../style/views/create-topic";
</style>
