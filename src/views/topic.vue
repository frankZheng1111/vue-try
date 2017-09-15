<template>
  <div v-if="topic" class="topic-page">
    <h2 class="topic-title">{{ topic.title }}</h2>
    <section>
      <img class="avatar avatar-small pull-left" :src="topic.author.avatar_url" :title="topic.author.loginname"/>
      <div>
        <p>
          <span class="author-name" v-text="topic.author.loginname" ></span>
          <mt-badge size="large" v-text="'置顶'" color="#888"></mt-badge>
        </p>
        <p>
          <time>{{ topic.create_at }}</time>
        </p>
      </div>
    </section>
    <div class="topic-content" v-html="topic.content"></div>
  </div>
</template>
<script>
import Vue from 'vue'
import * as api from '../api'
import { Badge } from 'mint-ui'

Vue.component(Badge.name, Badge);

export default {
  data() {
    return {
      topicId: this.$route.params.id,
      topic: ''
    }
  },

  components: {
  },

  created() {
    this.renderTopicById()
  },

  methods: {
    async renderTopicById() {
      let { data: { data: topic } } = await api.getTopicById(this.topicId)
      this.topic = topic
      return
    }
  }
}
</script>

<style lang="scss">
  @import "../style/views/topic";
</style>
