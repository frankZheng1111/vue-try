<template>
  <router-link :to="{ name: 'topic', params: { id: id } }">
    <slot></slot>
  </router-link>
</template>
<script>
'use strict'

export default {
  name: 'TopicEntrance',
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
</style>
