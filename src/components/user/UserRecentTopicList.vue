<template>
  <ul class='list'>
    <li v-for="topic in topics" :key="topic.id" :id="topic.id" class="topic">
      <router-link :to="{ name: 'topic', params: { id: topic.id } }">
        <h3 class="topic-title">
          <div class="topic-title" v-text="topic.title"></div>
        </h3>
        <div class="topic-detail-info">
          <img class="avatar avatar-small" v-lazy="topic.author.avatarUrl" :title="topic.author.loginname"/>
          <div class="detail-info">
            <p>
              <span class="author-name" v-text="topic.author.loginname" ></span>
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

import TopicComputedAttr from '../../libs/topicComputedAttr.js'

export default {
  name: 'TopicList',
  data() {
    return {
    }
  },

  props: [ 'topics' ],

  methods: {
    lastReplyTimeFromNow(topic) {
      return new TopicComputedAttr(topic).lastReplyTimeFromNow
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/components/user/user-recent-topic-list";
</style>
