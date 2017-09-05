<template>
  <ul class='list'>
    <li v-for="topic in topics" v-text="topic.title"></li>
  </ul>
</template>
<script>

export default {
  data() {
    return {
    }
  },

  props: [ 'topics' ]
}
</script>

<style lang="scss">
  @import "../../style/components/home/topicsList";
</style>
