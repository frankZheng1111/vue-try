<template>
  <div v-if="topic" class="main-topic">
    <section class="topic-info">
      <img class="avatar avatar-small pull-left" :src="topic.author.avatar_url" :title="topic.author.loginname"/>
      <div class="topic-detail">
        <p>
        <span class="author-name" >{{ topic.author.loginname }}</span>
        <mt-badge class="topic-tab" size="large" color="#888">{{ '置顶' }}</mt-badge>
        </p>
        <p>
          <time>{{ '发布于xx前' }}</time>
          <span>xxxxx次浏览</span>
        </p>
      </div>
    </section>
    <div class="topic-content" v-html="topic.content"></div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Badge } from 'mint-ui'

Vue.component(Badge.name, Badge);

export default {
  data() {
    setTimeout(() => { console.log(this.topic); }, 10000)
    return {
    }
  },

  props: ['topic'],

  methods: {
  }
}
</script>

<style lang="scss">
  @import "../../style/components/topic/main-topic";
</style>
