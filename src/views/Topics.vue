<template>
  <div v-if="topics.length" class="topics-page">
    <topic-list :topics="topics" :loading= "loading" @loadMore="loadMore"></topic-list>
    <div class="loading-placeholder-row">
      <mt-spinner class="loading-placeholder" type="fading-circle" color="#26a2ff" :size="30"></mt-spinner>
    </div>
    <div class="create-topic-btn-row">
      <movabale-item :maxMoveDown="0"
                     :maxMoveUp="screenHeight-120"
                     :maxMoveLeft="screenWidth-100"
                     :maxMoveRight="0"
                     :initToLeft="createBtnInTouchDiff"
                     :initToTop="createBtnInTouchDiff">
        <router-link :to="{ name: 'createTopic' }">
          <button class="create-topic-btn"
                  :class="{ 'in-touch': createBtnInTouch }"
                  @touchstart="startMoveCreateBtn"
                  @touchmove="movingCreateBtn"
                  @touchend="endMoveCreateBtn"
                  >+</button>
        </router-link>
      </movabale-item>
    </div>
  </div>
</template>

<script>
'use strict'

import Vue from 'vue'
import TopicList from '../components/topics/TopicList'
import MovableItem from '../components/app/MovableItem'
import * as api from '../api'

import store from '../store'

import { Spinner, Indicator } from 'mint-ui'
Vue.component(Spinner.name, Spinner)

export default {
  name: 'Topics',
  data() {
    return {
      page: 1,
      loading: false,
      createBtnInTouch: false,
      topics: [
      ]
    }
  },

  components: {
    'topic-list': TopicList,
    'movabale-item': MovableItem
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

  computed: {
    screenHeight() {
      return window.screen.height
    },

    screenWidth() {
      return window.screen.width
    },

    createBtnInTouchDiff() {
      let radiusDiff = 5
      return this.createBtnInTouch ? 5 : 0
    }
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
    },

    startMoveCreateBtn(event) {
      this.createBtnInTouch = true
    },

    movingCreateBtn(event) {
      event.preventDefault()
    },
    
    endMoveCreateBtn() {
      this.createBtnInTouch = false
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../style/views/topics";
</style>
