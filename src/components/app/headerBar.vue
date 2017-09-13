<template>
  <div>
  <mt-header :title="tabTexts[selected]">
    <router-link to="/" slot="left">
      <mt-button icon="back">back</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
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
import { Header, Navbar, TabItem, Button } from 'mint-ui'
import TAB_TEXTS from '../../config/tabTexts'

Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
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
  @import "../../style/components/app/headerBar";
</style>
