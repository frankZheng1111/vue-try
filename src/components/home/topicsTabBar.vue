<template>
  <div>
  <mt-header fixed :title="tabTexts[selected]"></mt-header>
  <mt-navbar v-model="selected">
    <mt-tab-item v-for="tab in tabs" :id="tab" :key="tab" v-text="tabTexts[tab]" @click.native="tabSelected">
    </mt-tab-item>
  </mt-navbar>
  </div>
</template>
<script>
import Vue from 'vue'
import { Header, Navbar, TabItem } from 'mint-ui'
import TAB_TEXTS from '../../config/tabTexts'

Vue.component(Header.name, Header);
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

  methods: {
    tabSelected() {
      this.$emit('changeTab', this.selected)
    }
  }
}
</script>

<style lang="scss">
</style>
