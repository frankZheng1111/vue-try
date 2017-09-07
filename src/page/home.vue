<template>
  <div>
    <h1 class='logo'>Cnodejs Api Test</h1>
    <topics-tab-bar @changeTab="changeTab"></topics-tab-bar>
    <topics-list :topics="topics" :loading= "loading" @loadMore="loadMore"></topics-list>
    <div class='loading-placeholder'><p>加载中...</p></div>
  </div>
</template>
<script>
import topicsList from '../components/home/topicsList'
import topicsTabBar from '../components/home/topicsTabBar'
import * as api from '../api'


export default {
  data() {
    return {
      page: 1,
      topicsTab: '',
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
    this.getTopics()
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
      this.$router.push({ name: 'home', query: { tab: tab }})
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
  @import "../style/page/home";
</style>
