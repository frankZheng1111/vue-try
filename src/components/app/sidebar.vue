<template>
  <div>
    <transition name="fade">
      <div v-if="activeSidebar" class="page-cover" @click="hideSidebar"></div>
    </transition>
    <section :class="{ sidebar: true, show: activeSidebar }">
      <section v-if="isUserLogin()" class="user-info">
      </section>
      <section v-else class="login">
        <button class="login-btn" @click="showInputTokenForm">登录</button>
      </section>
      <section class="tab-list">
        <router-link v-for="tab in tabs" :id="tab" :key="tab" :to="{ name: 'topics', query: { tab: tab || undefined } }" @click.native="hideSidebar">
          {{ tabTexts[tab] }}
        </router-link>
      </section>
    </section>
  </div>
</template>
<script>
'use strict'

import Vue from 'vue'
import { Actionsheet, MessageBox } from 'mint-ui'

import TAB_TEXTS from '../../config/tabTexts'

Vue.component(Actionsheet.name, Actionsheet)

export default {
  props: ['activeSidebar'],

  data() {
    return {
      tabs: ['', 'ask', 'share', 'job', 'good', 'dev'],
      tabTexts: TAB_TEXTS
    }
  },

  methods: {
    async showInputTokenForm() {
      this.hideSidebar()
      try {
        let { value: accessToken, action } = await MessageBox.prompt('请输入access token', '', { '$type': 'confirm' })
        console.log(accessToken)
        if (accessToken) {
          await MessageBox.alert('登录成功', '提示信息')
        } else {
          await MessageBox.alert('accessToken 不能为空', '提示信息')
        }
      } catch (e) {
        if ('cancel' !== e) { console.error(e) }
        return 
      }
    },

    isUserLogin() {
      return false
    },

    hideSidebar() {
      this.$emit('hideSidebar')
    }
  }
}
</script>

<style lang="scss">
  @import "../../style/components/app/sidebar";
</style>
