<template>
  <div>
  <mt-header :title="tabTexts[selected]" class="topic-header">
    <span slot="left" @click="toggleSidebar">菜单</span>
  </mt-header>
  <section :class="{ sidebar: true, show: activeSidebar }">
    <section class="tab-list">
      <router-link v-for="tab in tabs" :id="tab" :key="tab" :to="{ name: 'topics', query: { tab: tab || undefined } }">
        {{ tabTexts[tab] }}
      </router-link>
    </section>
  </section>
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
