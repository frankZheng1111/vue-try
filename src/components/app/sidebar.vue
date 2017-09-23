<template>
  <div>
    <transition name="fade">
      <div v-if="activeSidebar" class="page-cover" @click="hideSidebar"></div>
    </transition>
    <section :class="{ sidebar: true, show: activeSidebar }">
      <section v-if="isUserLogin()" class="user-info">
        <img class="avatar avatar-small" :src="userBaseLoginInfo.avatar_url" :title="userBaseLoginInfo.loginname"/>
        <span>{{ userBaseLoginInfo.loginname }}</span>
      </section>
      <section v-else class="login">
        <button class="login-btn" @click="showInputTokenForm">登录</button>
      </section>
      <section class="tab-list">
        <router-link v-for="tab in tabs" :id="tab" :key="tab" :to="{ name: 'topics', query: { tab: tab || undefined } }" @click.native="hideSidebar">
          {{ tabTexts[tab] }}
        </router-link>
      </section>
      <section v-if="isUserLogin()" class="logout">
        <button class="logout-btn" @click="userLogout">登出</button>
      </section>
    </section>
  </div>
</template>
<script>
'use strict'

import Vue from 'vue'
import { MessageBox } from 'mint-ui'

import TAB_TEXTS from '../../config/tabTexts'
import User from '../../libs/user'

export default {
  props: ['activeSidebar'],

  data() {
    return {
      userBaseLoginInfo: new User().userBaseInfo,
      tabs: ['', 'ask', 'share', 'job', 'good', 'dev'],
      tabTexts: TAB_TEXTS
    }
  },

  methods: {
    async _userLogin(accessToken) {
      let user = new User(accessToken)
      if (await user.login()) {
        this.userBaseLoginInfo = user.userBaseInfo;
        await MessageBox.alert('登录成功', '提示信息')
      } else {
        await MessageBox.alert('登录失败', '提示信息')
      }
      return
    },

    async showInputTokenForm() {
      this.hideSidebar()
      try {
        let { value: accessToken, action } = await MessageBox.prompt('请输入access token', '', { '$type': 'confirm' })
        if (accessToken) {
          await this._userLogin(accessToken)
        } else {
          await MessageBox.alert('accessToken 不能为空', '提示信息')
        }
      } catch (e) {
        if ('cancel' !== e) { console.error(e) }
        return
      }
    },

    userLogout() {
      let user = new User()
      user.logout()
      this.hideSidebar()
      MessageBox.alert('登出成功', '提示信息')
      return
    },

    isUserLogin() {
      return new User().isLogin
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
