<template>
  <div class="reply-editor">
    <h3 class="reply-editor-title">
      添加回复
    </h3>
    relpy-editor
  </div>
</template>

<script>
'use strict'

import * as api from '../../api'

export default {
  name: 'ReplyEditor',

  data() {
    return {
    }
  },

  methods: {
    submitContent() {
      return
    }

  }
}
</script>

<style scoped lang="scss">
  @import "../../style/components/topic/reply-editor";
</style>
