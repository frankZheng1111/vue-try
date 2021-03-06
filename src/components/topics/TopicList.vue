<template>
  <ul class='list'
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="false"
      infinite-scroll-distance="100">
    <li v-for="topic in topics" :key="topic.id" :id="topic.id" class="topic">
      <topic-entrance :id="topic.id">
        <h3 class="topic-title">
          <span :class="`${topicMainTab(topic)}-tag`" class="topic-tab">{{ topicTagText(topic) }}</span>
          <div class="topic-title" v-text="topic.title"></div>
        </h3>
        <div class="topic-detail-info">
          <user-entrance :loginName="topic.author.loginname">
            <img class="avatar avatar-small" v-lazy="topic.author.avatarUrl" :title="topic.author.loginname"/>
          </user-entrance>
          <div class="detail-info">
            <p>
              <span class="author-name" v-text="topic.author.loginname" ></span>
              <span class="topic-count">
                <b class="topic-reply-count" v-text="topic.replyCount"></b>
                {{ `/ ${topic.visitCount}` }}
              </span>
            </p>
            <p>
              <time>{{ createTimeFromNow(topic) }}</time>
              <time>{{ lastReplyTimeFromNow(topic) }}</time>
            </p>
          </div>
        </div>
      </topic-entrance>
    </li>
  </ul>
</template>

<script>
'use strict'

import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui'
import TopicComputedAttr from '../../libs/topicComputedAttr.js'
import UserEntrance from '../app/UserEntrance.vue'
import TopicEntrance from '../app/TopicEntrance.vue'

Vue.use(InfiniteScroll)

export default {
  name: 'TopicList',
  data() {
    return {
    }
  },

  props: [ 'topics', 'loading' ],

  components: {
    'user-entrance': UserEntrance,
    'topic-entrance': TopicEntrance
  },

  methods: {
    topicTagText(topic) {
      return new TopicComputedAttr(topic).tagText
    },

    topicMainTab(topic) {
      return new TopicComputedAttr(topic).mainTab
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

<style scoped lang="scss">
  @import "../../style/components/topics/topics-list";
</style>
