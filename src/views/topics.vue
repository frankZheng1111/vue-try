<template>
  <div v-if="topics.length">
    <topics-list :topics="topics" :loading= "loading" @loadMore="loadMore"></topics-list>
    <mt-spinner class='loading-placeholder' type="fading-circle" color="#26a2ff" :size="50"></mt-spinner>
  </div>
</template>

<script>
'use strict'

import Vue from 'vue'
import topicsList from '../components/topics/topicsList'
import * as api from '../api'

import store from '../store'

import { Spinner, Indicator } from 'mint-ui'
Vue.component(Spinner.name, Spinner)

export default {
  name: 'topics',
  data() {
    return {
      page: 1,
      loading: false,
      topics: [
      ]
    }
  },

  components: {
    'topics-list': topicsList,
  },

  watch: {
    '$route': async function (to, from) {
      let lastTopicsTab = store.getters.lastTopicsTab
      let currentTopicsTab = to.query.tab || null
      if (to.name === 'topics' && currentTopicsTab !== lastTopicsTab) {
        await this.reRenderTopics()
        store.commit({
          type: 'setLastTopicsTab',
          tab: currentTopicsTab
        })
      }
    }
  },

  created() {
    this.reRenderTopics()
  },

  methods: {
    async loadMore() {
      if (this.$route.name !== 'topics') { return }
      this.loading = true
      this.page++
      await this.renderTopics({ page: this.page })
      this.loading = false
    },

    async reRenderTopics({ page = 1, tab = this.$route.query.tab } = {}) {
      Indicator.open({ text: '加载中...', spinnerType: 'fading-circle' })
      let { data: { data: topics } } = await api.getTopics({ page: page, tab: tab })
      this.topics = []
      Indicator.close()
      this.topics.push(...topics)
      return
    },

    async renderTopics({ page = 1, tab = this.$route.query.tab } = {}) {
      let { data: { data: topics } } = await api.getTopics({ page: page, tab: tab })
      this.topics.push(...topics)
      return
    }
  }
}
</script>

<style lang="scss">
  @import "../style/views/topics";
</style>
