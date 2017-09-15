<template>
  <div>
    <topics-list :topics="topics" :loading= "loading" @loadMore="loadMore"></topics-list>
    <mt-spinner v-if="loading" class='loading-placeholder' type="fading-circle" color="#26a2ff" :size="50"></mt-spinner>
  </div>
</template>
<script>
import Vue from 'vue'
import topicsList from '../components/home/topicsList'
import * as api from '../api'

import { Spinner, Indicator } from 'mint-ui'
Vue.component(Spinner.name, Spinner)

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
    'topics-list': topicsList,
  },

  watch: {
    '$route': async function (to, from) {
      await this.reRenderTopics()
    }
  },

  created() {
    this.reRenderTopics()
  },

  methods: {
    async loadMore() {
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
  @import "../style/views/home";
</style>
