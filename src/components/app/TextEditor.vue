<template>
  <div class="text-editor">
    <textarea rows="8" placeholder="编辑器支持Markdown" class="text-content" v-model="content"></textarea>
    <button class="submit-btn" @click="submitContent">提交</button>
  </div>
</template>
<script>
'use strict'

import User from '../../libs/user'

export default {
  name: 'TextEditor',

  props: {
    initContent: {
      default: ''
    }
  },

  data() {
    return {
      content: '' || this.initContent
    }
  },

  methods: {
    submitContent() {
      console.log(this.content)
      return this.$emit('submitContent')
    },

    isUserLogin() {
      return new User().isLogin
    },
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/components/app/text-editor";
</style>
