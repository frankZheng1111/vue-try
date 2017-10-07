<template>
  <div class="text-editor">
  </div>
</template>
<script>
'use strict'

import User from '../../libs/user'

export default {
  name: 'TextEditor',

  props: {
    content: {
      default: ''
    }
  },

  data() {
    return {
    }
  },

  methods: {
    submitContent() {
      return this.$emit('submitContent')
    },

    isUserLogin() {
      return new User().isLogin
    },
  }
}
</script>

<style scoped lang="scss">
</style>
