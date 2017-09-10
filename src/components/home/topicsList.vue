<template>
  <ul class='list'
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="fales"
      infinite-scroll-distance="100">
    <li v-for="topic in topics" :key="topic.id" :id="topic.id" class="topic">
      <router-link :to="{ name: 'topic' }">
        <h3 class="topic-title">
          <mt-badge size="large" v-text="topicTagText(topic)" :color="topicTagColor(topic)"></mt-badge>
          <div class="topic-title" v-text="topic.title"></div>
        </h3>
        <div class="topic-detail-info">
          <img class="avatar avatar-small pull-left" :src="topic.author.avatar_url" :title="topic.author.loginname"/>
          <div class="detail-info">
            <p>
              <span class="author-name" v-text="topic.author.loginname" ></span>
              <span class="topic-count pull-right">
                <b class="topic-reply-count" v-text="topic.reply_count"></b>
                {{ `/ ${topic.visit_count}` }}
              </span>
            </p>
            <p>
              <time>1个月前</time>
              <time class="pull-right">2个月前</time>
            </p>
          </div>
        </div>
      </router-link>
    </li>
  </ul>
</template>
<script>
import Vue from 'vue'
import { InfiniteScroll, Badge } from 'mint-ui'
import TAB_TEXTS from '../../config/tabTexts'

Vue.component(Badge.name, Badge);
Vue.use(InfiniteScroll)

const TAG_COLORS = {
  top: '#f44336',
  ask: '#26a2ff',
  good: '#e67e22',
  share: '#4caf50',
  dev: '#888',
  all: '#888'
}

export default {
  data() {
    return {
    }
  },

  props: [ 'topics', 'loading' ],

  methods: {
    topicTagText(topic) {
      if (topic.top) { return '置顶' }
      if (topic.good) { return '精华' }
      if (TAB_TEXTS[topic.tab]) { return TAB_TEXTS[topic.tab] }
      return '全部'
    },

    topicTagColor(topic) {
      let colorKey = 'all'
      if (topic.top) { return TAG_COLORS.top }
      if (topic.good) { return TAG_COLORS.good }
      if (topic.tab) { return TAG_COLORS[topic.tab] }
      return TAG_COLORS[colorKey]
    },
    loadMore() {
      this.$emit('loadMore')
    }
  }
}
</script>

<style lang="scss">
  @import "../../style/components/home/topicsList";
</style>
