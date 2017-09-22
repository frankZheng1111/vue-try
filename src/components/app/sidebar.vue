<template>
  <div>
    <transition name="fade">
      <div v-if="activeSidebar" class="page-cover" @click="hideSidebar"></div>
    </transition>
    <section :class="{ sidebar: true, show: activeSidebar }">
      <section v-if="isUserLogin()" class="user-info">
      </section>
      <section v-else class="login">
        <button class="login-btn" @click="showLoginOptions">登录</button>
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

import TAB_TEXTS from '../../config/tabTexts'

export default {
  props: ['activeSidebar'],

  data() {
    return {
      tabs: ['', 'ask', 'share', 'job', 'good', 'dev'],
      tabTexts: TAB_TEXTS
    }
  },

  methods: {
    isUserLogin() {
      return false
    },

    showLoginOptions() {
      alert('loginOptions')
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
