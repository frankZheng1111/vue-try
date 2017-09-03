<template>
  <div>
    <h1 class='logo'>Cnodejs Api Test</h1>
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false">
      <topics-list :topics="topics"></topics-list>
    </mt-loadmore>
  </div>
</template>
<script>
import Vue from 'vue'
import topicsList from '../components/home/topicsList'
import * as api from '../api'

import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

export default {
  data() {
    return {
      allLoaded: false,
      page: 1,
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
    async loadBottom() {
      this.page++
      await this.getTopics({ page: this.page })
      this.$refs.loadmore.onBottomLoaded()
    },
    async getTopics({ page = 1 } = {}) {
      let { data: { data: topics } } = await api.getTopics({ page: page })
      this.topics.push(...topics);
      return
    }
  }
}
</script>
