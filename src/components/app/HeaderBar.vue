<template>
  <div>
    <header class="headerBar">
      <span class="sidebar-list" @click="toggleSidebar">菜单</span>
      <h3>{{ headerBarTitle }}</h3>
    </header>
    <header-bar-sidebar :activeSidebar="activeSidebar" @hideSidebar="toggleSidebar"></header-bar-sidebar>
  </div>
</template>
<script>
'use strict'

import TAB_TEXTS from '../../config/tabTexts'
import HeaderBarSidebar from './HeaderBarSidebar'

export default {
  name: 'HeaderBar',
  data() {
    return {
      activeSidebar: false
    }
  },
  props: ['selectedTab'],

  computed: {
    headerBarTitle() {
      if ('topics' === this.$route.name) {
        return TAB_TEXTS[this.$route.query.tab || '']
      }
      return this.$route.meta.title || '其他'
    }
  },

  components: {
    'header-bar-sidebar': HeaderBarSidebar
  },

  methods: {
    toggleSidebar() {
      this.activeSidebar = !this.activeSidebar
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/components/app/header-bar";
</style>
