<template>
  <div>
  <mt-header :title="tabTexts[selected]" class="topic-header">
    <span slot="left" @click="toggleSidebar">菜单</span>
  </mt-header>
  <sidebar :activeSidebar="activeSidebar" @hideSidebar="toggleSidebar"></sidebar>
  <mt-navbar v-model="selected">
    <mt-tab-item v-for="tab in tabs" :id="tab" :key="tab">
      <router-link :to="{ name: 'topics', query: { tab: tab || undefined } }">
        {{ tabTexts[tab] }}
      </router-link>
    </mt-tab-item>
  </mt-navbar>
  </div>
</template>
<script>
import Vue from 'vue'
import { Header, Navbar, TabItem } from 'mint-ui'
import TAB_TEXTS from '../../config/tabTexts'

import Sidebar from './sidebar'

Vue.component(Header.name, Header)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)

export default {
  data() {
    return {
      selected: this.selectedTab || '',
      tabs: ['', 'ask', 'share', 'job', 'good', 'dev'],
      tabTexts: TAB_TEXTS,
      activeSidebar: false
    }
  },
  props: ['selectedTab'],

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
