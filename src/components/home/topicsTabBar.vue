<template>
  <mt-navbar v-model="selected">
    <mt-tab-item v-for="tab in tabs" :id="tab" v-text="tabTexts[tab]" @click.native="tabSelected">
    </mt-tab-item>
  </mt-navbar>

</template>
<script>
import Vue from 'vue'
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
export default {
  data() {
    return {
      selected: this.selectedTab || '',
      tabs: ['', 'ask', 'share', 'job', 'good', 'dev'],
      tabTexts: {
        '': '全部',
        good: '精华',
        share: '分享',
        ask: '问答',
        job: '招聘',
        dev: '客户端测试'
      }
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
  @import "../../style/components/home/topicsTabBar";
</style>
