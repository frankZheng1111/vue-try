<template>
  <div>
    <transition name="fade">
      <div v-if="activeSidebar" class="page-cover" @click="hideSidebar"></div>
    </transition>
    <section :class="{ sidebar: true, show: activeSidebar }">
      <section v-if="isUserLogin()" class="user-info">
        <user-entrance :loginName="userBaseLoginInfo.loginname" @click.native="hideSidebar">
          <img class="avatar avatar-small" :src="userBaseLoginInfo.avatarUrl" :title="userBaseLoginInfo.loginname"/>
          <span>{{ userBaseLoginInfo.loginname }}</span>
        </user-entrance>
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
        <router-link class="message-btn" :to="{}" @click.native="readMessages">
          消息
          <span class="message-count" v-if="newMessageCountStr">{{ newMessageCountStr }}</span>
        </router-link>
        <button class="logout-btn" @click="userLogout">登出</button>
      </section>
      <section class="about">
        <router-link :to="{ name: 'about' }" @click.native="hideSidebar">
          <button class="about-btn">关于</button>
        </router-link>
      </section>
    </section>
  </div>
</template>
<script>
'use strict'

import { MessageBox } from 'mint-ui'

import TAB_TEXTS from '../../config/tabTexts'
import User from '../../libs/user'
import * as api from '../../api'

import UserEntrance from '../app/UserEntrance.vue'

export default {
  name: 'HeaderBarSidebar',
  props: ['activeSidebar'],

  components: {
    'user-entrance': UserEntrance
  },

  data() {
    return {
      userBaseLoginInfo: new User().userBaseInfo,
      tabs: ['', 'ask', 'share', 'job', 'good', 'dev'],
      tabTexts: TAB_TEXTS,
      newMessageCount: 0
    }
  },

  async created() {
    await this.initMessageCount()
  },

  computed: {
    newMessageCountStr() {
      if (this.newMessageCount <= 99) { return this.newMessageCount }
      return '99+'
    }
  },

  methods: {
    async initMessageCount() {
      let accessToken = new User().accessToken
      let { data: { data: count } } = await api.getMessageCount(accessToken)
      this.newMessageCount = count
    },

    async _userLogin(accessToken) {
      let user = new User(accessToken)
      if (await user.login()) {
        this.userBaseLoginInfo = user.userBaseInfo
        await MessageBox.alert('登录成功', '提示信息')
        window.location.reload()
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

    async userLogout() {
      let user = new User()
      user.logout()
      this.hideSidebar()
      await MessageBox.alert('登出成功', '提示信息')
      window.location.reload()
      return
    },

    isUserLogin() {
      return new User().isLogin
    },

    hideSidebar() {
      this.$emit('hideSidebar')
    },

    async readMessages() {
      this.newMessageCount = 0
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/components/app/header-bar-sidebar";
</style>
