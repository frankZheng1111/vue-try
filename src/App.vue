<template>
  <div class='container'>
    <header-bar :selectedTab="topicsTab"></header-bar>
    <router-view class='view' keep-alive transition transition-mode='out-in'> </router-view>
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

