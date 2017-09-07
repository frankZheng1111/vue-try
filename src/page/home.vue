<template>
  <div>
    <h1 class='logo'>Cnodejs Api Test</h1>
    <topics-list :topics="topics" :loading= "loading" @loadMore="loadMore"></topics-list>
    <div class='loading-placeholder'><p>加载中...</p></div>
  </div>
</template>
<script>
import Vue from 'vue'
import topicsList from '../components/home/topicsList'
import * as api from '../api'

import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

export default {
  data() {
    return {
      page: 1,
      loading: false,
      topics: [
      ]
    }
  },

  components: {
    'topics-list': topicsList
  },

  created() {
    this.getTopics()
  },

  methods: {
    async loadMore() {
      this.loading = true
      this.page++
      await this.getTopics({ page: this.page })
      this.loading = false
    },
    async getTopics({ page = 1 } = {}) {
      let { data: { data: topics } } = await api.getTopics({ page: page })
      this.topics.push(...topics);
      return
    }
  }
}
</script>

<style lang="scss">
  @import "../style/page/home";
</style>
