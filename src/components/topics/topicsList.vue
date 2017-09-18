<template>
  <ul class='list'
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="false"
      infinite-scroll-distance="100">
    <li v-for="topic in topics" :key="topic.id" :id="topic.id" class="topic">
      <router-link :to="{ name: 'topic', params: { id: topic.id } }">
        <h3 class="topic-title">
          <mt-badge size="large" v-text="topicTagText(topic)" :color="topicTagColor(topic)" class="topic-tab"></mt-badge>
          <div class="topic-title" v-text="topic.title"></div>
        </h3>
        <div class="topic-detail-info">
          <img class="avatar avatar-small" :src="topic.author.avatar_url" :title="topic.author.loginname"/>
          <div class="detail-info">
            <p>
              <span class="author-name" v-text="topic.author.loginname" ></span>
              <span class="topic-count">
                <b class="topic-reply-count" v-text="topic.reply_count"></b>
                {{ `/ ${topic.visit_count}` }}
              </span>
            </p>
            <p>
            <time>{{ createTimeFromNow(topic) }}</time>
            <time>{{ lastReplyTimeFromNow(topic) }}</time>
            </p>
          </div>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
'use strict'

import Vue from 'vue'
import { InfiniteScroll, Badge } from 'mint-ui'
import TopicComputedAttr from '../../libs/topicComputedAttr.js'

Vue.component(Badge.name, Badge);
Vue.use(InfiniteScroll)

export default {
  name: 'topicsList',
  data() {
    return {
    }
  },

  props: [ 'topics', 'loading' ],

  methods: {
    topicTagText(topic) {
      return new TopicComputedAttr(topic).tagText
    },

    topicTagColor(topic) {
      return new TopicComputedAttr(topic).tagColor
    },

    loadMore() {
      this.$emit('loadMore')
    },

    createTimeFromNow(topic) {
      return new TopicComputedAttr(topic).createTimeFromNow
    },

    lastReplyTimeFromNow(topic) {
      return new TopicComputedAttr(topic).lastReplyTimeFromNow
    }
  }
}
</script>

<style lang="scss">
  @import "../../style/components/topics/topicsList";
</style>
