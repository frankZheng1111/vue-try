<template>
  <div>
    <header class="headerBar">
      <span class="sidebar-list" @click="toggleSidebar">菜单</span>
      <h3>{{ headerBarTitle }}</h3>
    </header>
    <sidebar :activeSidebar="activeSidebar" @hideSidebar="toggleSidebar"></sidebar>
  </div>
</template>
<script>
'use strict'

import TAB_TEXTS from '../../config/tabTexts'
import Sidebar from './sidebar'

export default {
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
    'sidebar': Sidebar
  },

  methods: {
    toggleSidebar() {
      this.activeSidebar = !this.activeSidebar
    }
  }
}
</script>

<style lang="scss">
  @import "../../style/components/app/headerBar";
</style>
