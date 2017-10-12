<template>
  <div class="user-page">
    <div class="user-info">
    </div>
    <!-- <topic&#45;list :topics="userProfile.recentTopics" :loading="false"></topic&#45;list> -->
    <!-- <topic&#45;list :topics="userProfile.recentReplies" :loading="false"></topic&#45;list> -->
  </div>
</template>

<script>
'use strict'

// import TopicList from '../components/user/TopicList'
import * as api from '../api'

export default {
  name: 'User',
  data() {
    return {
      loginname: this.$route.params.loginname,
      userProfile: {}
    }
  },

  // components: {
  //   'topic-list': TopicList,
  // },

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
