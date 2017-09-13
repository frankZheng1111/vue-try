<template>
  <div>
  <mt-navbar v-model="selected">
    <mt-tab-item v-for="tab in tabs" :id="tab" :key="tab">
      <router-link :to="{ name: 'topics', query: { tab: tab} }">
        {{ tabTexts[tab] }}
      </router-link>
    </mt-tab-item>
  </mt-navbar>
  </div>
</template>
<script>
import Vue from 'vue'
import { Navbar, TabItem } from 'mint-ui'
import TAB_TEXTS from '../../config/tabTexts'

Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)

export default {
  data() {
    return {
      selected: this.selectedTab || '',
      tabs: ['', 'ask', 'share', 'job', 'good', 'dev'],
      tabTexts: TAB_TEXTS
    }
  },
  props: ['selectedTab'],
}
</script>

<style lang="scss">
  @import "../../style/components/home/topicsTabBar";
</style>
