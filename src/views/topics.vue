<template>
  <div>
    <h1 class='logo'>Cnodejs Api Test</h1>
    <topics-tab-bar :selectedTab="topicsTab" @changeTab="changeTab"></topics-tab-bar>
    <topics-list :topics="topics" :loading= "loading" @loadMore="loadMore"></topics-list>
    <mt-spinner class='loading-placeholder' type="fading-circle" color="#26a2ff" :size="50"></mt-spinner>
  </div>
</template>
<script>
import Vue from 'vue'
import topicsList from '../components/home/topicsList'
import topicsTabBar from '../components/home/topicsTabBar'
import * as api from '../api'

import { Spinner } from 'mint-ui'
Vue.component(Spinner.name, Spinner)

export default {
  data() {
    return {
      page: 1,
      topicsTab: this.$route.query.tab || '',
      loading: false,
      topics: [
      ]
    }
  },

  components: {
    'topics-list': topicsList,
    'topics-tab-bar': topicsTabBar
  },

  created() {
    this.getTopics({ page: this.page, tab: this.topicsTab })
  },

  methods: {
    async loadMore() {
      this.loading = true
      this.page++
      await this.getTopics({ page: this.page, tab: this.tab })
      this.loading = false
    },

    async changeTab(tab) {
      this.topics = []
      this.tab = tab
      // tab为''时不显示url中的query参数
      this.$router.push({ name: 'home', query: { tab: tab || undefined }})
      await this.getTopics({ tab: tab })
    },

    async getTopics({ page = 1, tab = '' } = {}) {
      let { data: { data: topics } } = await api.getTopics({ page: page, tab: tab })
      this.topics.push(...topics)
      return
    }
  }
}
</script>

<style lang="scss">
  @import "../style/views/home";
</style>
