<template>
  <div v-if="topic" class="main-topic">
    <section class="topic-info">
      <user-entrance :loginName="topic.author.loginname">
        <img class="avatar avatar-small pull-left" :src="topic.author.avatarUrl" :title="topic.author.loginname"/>
      </user-entrance>
      <div class="topic-detail">
        <p>
        <span class="author-name" >{{ topic.author.loginname }}</span>
        <span :class="`${computedAttrs.mainTab}-tag`" class="topic-tab">{{ computedAttrs.tagText }}</span>
        </p>
        <p>
        <time>{{ `发布于${computedAttrs.createTimeFromNow}` }}</time>
        <span>{{ `${topic.visitCount}次浏览` }}</span>
        </p>
      </div>
    </section>
    <div class="topic-content">
      <div class="markdown-body" v-html="topic.content"></div>
    </div>
  </div>
</template>

<script>
'use strict'

import { TimeUtil } from '../../libs/utils.js'
import TopicComputedAttr from '../../libs/topicComputedAttr.js'
import UserEntrance from '../app/UserEntrance.vue'

export default {
  name: 'MainTopic',
  data() {
    return { }
  },

  props: ['topic'],

  components: {
    'user-entrance': UserEntrance
  },

  computed: {
    computedAttrs() {
      if (!this.topic) { return {} }
      return new TopicComputedAttr(this.topic)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/components/topic/main-topic";
</style>
