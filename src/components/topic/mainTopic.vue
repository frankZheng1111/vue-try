<template>
  <div v-if="topic" class="main-topic">
    <section class="topic-info">
      <img class="avatar avatar-small pull-left" :src="topic.author.avatar_url" :title="topic.author.loginname"/>
      <div class="topic-detail">
        <p>
        <span class="author-name" >{{ topic.author.loginname }}</span>
        <mt-badge class="topic-tab" size="large" :color="topic.computedAttrs.tagColor">{{ topic.computedAttrs.tagText }}</mt-badge>
        </p>
        <p>
        <time>{{ `发布于${topic.computedAttrs.createTimeFromNow}` }}</time>
          <span>{{ `${topic.visit_count}次浏览` }}</span>
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

import Vue from 'vue'
import { Badge } from 'mint-ui'

import { TimeUtil } from '../../libs/utils.js'
import TopicComputedAttr from '../../libs/topicComputedAttr.js'

Vue.component(Badge.name, Badge);

export default {
  data() {
    return { }
  },

  props: ['topic'],

  created () {
    if (this.topic) {
      this.topic.computedAttrs = new TopicComputedAttr(this.topic)
    }
  }
}
</script>

<style lang="scss">
  @import "../../style/components/topic/mainTopic";
</style>
