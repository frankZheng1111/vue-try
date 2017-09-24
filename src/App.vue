<template>
  <div class='container'>
    <header-bar :selectedTab="topicsTab"></header-bar>
    <keep-alive :include="includeComponents">
      <router-view class='view'> </router-view>
    </keep-alive>
  </div>
</template>

<script>
'use strict'

import HeaderBar from './components/app/headerBar'

export default {
  name: 'app',
  data() {
    return {
      topicsTab: this.$route.query.tab || '',
      includeComponents: 'topics'
    }
  },

  components: {
    'header-bar': HeaderBar
  }
}
</script>

<style lang="scss">
  @import "./style/app";
</style>

