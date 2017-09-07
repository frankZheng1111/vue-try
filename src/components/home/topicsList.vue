<template>
  <ul class='list'
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="fales"
      infinite-scroll-distance="100">
    <li v-for="topic in topics" v-text="topic.title"></li>
  </ul>
</template>
<script>
import Vue from 'vue'

export default {
  data() {
    return {
    }
  },

  props: [ 'topics', 'loading' ],

  methods: {
    loadMore() {
      this.$emit('loadMore')
    }
  }
}
</script>

<style lang="scss">
  @import "../../style/components/home/topicsList";
</style>
