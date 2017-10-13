<template>
  <div v-if="userProfile" class="user-page">
    <div class="user-info">
      <img class="avatar avatar-small" :src="userProfile.avatarUrl" :title="userProfile.loginname"/>
      <div>
        <p>用户名：{{ userProfile.loginname }}</p>
        <p>Github：{{ userProfile.githubUsername }}</p>
        <p>注册时间：{{ userCreatedAt }}</p>
        <p>积分：{{ userProfile.score }}</p>
      </div>
    </div>
    <!-- <topic&#45;list :topics="userProfile.recentTopics" :loading="false"></topic&#45;list> -->
    <!-- <topic&#45;list :topics="userProfile.recentReplies" :loading="false"></topic&#45;list> -->
  </div>
</template>

<script>
'use strict'

// import TopicList from '../components/user/TopicList'
import * as api from '../api'
import moment from 'moment'

export default {
  name: 'User',
  data() {
    return {
      loginname: this.$route.params.loginname,
      userProfile: null
    }
  },

  // components: {
  //   'topic-list': TopicList,
  // },

  created() {
    this.getUserProfile()
  },

  computed: {
    userCreatedAt() {
      return moment(new Date(this.userProfile.createAt)).format('YYYY-MM-DD')
    }
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
  @import "../style/views/user";
</style>
