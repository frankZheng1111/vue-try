<template>
  <div class="user-page">
    <div class="user-info">
    </div>
    <topic-list :topics="userProfile.recentTopics" :loading="false"></topic-list>
    <topic-list :topics="userProfile.recentReplies" :loading="false"></topic-list>
  </div>
</template>

<script>
'use strict'

import TopicList from '../components/user/TopicList'
import * as api from '../api'

export default {
  name: 'About',
  data() {
    return {
      loginname: this.$route.params.loginname,
      userProfile: {}
    }
  },

  components: {
    'topic-list': TopicList,
    'reply-list': ReplyList,
  },

  created() {
    this.getUserProfile()
  },

  methods: {
    async getUserProfile() {
      let { data: { data: userProfile } } = await api.getUserProfile(this.loginname)
      this.userProfile = userProfile
      return
    }
  }
}
</script>

<style scoped lang="scss">

</style>
