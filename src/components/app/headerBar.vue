<template>
  <div>
    <mt-header fixed :title="headerBarTitle" class="topic-header">
      <span slot="left" @click="toggleSidebar">菜单</span>
    </mt-header>
    <sidebar :activeSidebar="activeSidebar" @hideSidebar="toggleSidebar"></sidebar>
  </div>
</template>
<script>
import Vue from 'vue'
import { Header } from 'mint-ui'
import TAB_TEXTS from '../../config/tabTexts'

import Sidebar from './sidebar'

Vue.component(Header.name, Header)

export default {
  data() {
    return {
      activeSidebar: false
    }
  },
  props: ['selectedTab'],

  computed: {
    headerBarTitle() {
      return TAB_TEXTS[this.$route.query.tab || '']
    }
  },

  components: {
    'sidebar': Sidebar
  },


  methods: {
    toggleSidebar() {
      this.activeSidebar = !this.activeSidebar;
    }
  }
}
</script>

<style lang="scss">
  @import "../../style/components/app/headerBar";
</style>
