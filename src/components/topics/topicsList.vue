<template>
  <ul class='list'
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="false"
      infinite-scroll-distance="600">
    <li v-for="topic in topics" :key="topic.id" :id="topic.id" class="topic">
      <router-link :to="{ name: 'topic', params: { id: topic.id } }">
        <h3 class="topic-title">
          <mt-badge size="large" v-text="topicTagText(topic)" :color="topicTagColor(topic)" class="topic-tab"></mt-badge>
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
            <time>{{ timeFromNow(topic.create_at) }}</time>
            <time class="pull-right">{{ timeFromNow(topic.last_reply_at) }}</time>
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
import { TimeUtil } from '../../libs/utils.js'
import TopicComputedAttr from '../../libs/topicComputedAttr.js'

Vue.component(Badge.name, Badge);
Vue.use(InfiniteScroll)

export default {
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

    timeFromNow(time) {
      return new TimeUtil(time).timeFromNow
    }
  }
}
</script>

<style lang="scss">
  @import "../../style/components/topics/topicsList";
</style>
