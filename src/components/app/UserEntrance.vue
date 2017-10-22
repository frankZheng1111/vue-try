<template>
  <router-link :to="{ name: 'user', params: { loginname: loginName } }">
    <slot></slot>
  </router-link>
</template>
<script>
'use strict'

export default {
  name: 'UserEntrance',
  props: {
    loginName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
</style>
