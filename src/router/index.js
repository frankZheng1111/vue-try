import Vue from 'vue'
import Router from 'vue-router'

import Topics from '../views/Topics.vue'
import Topic from '../views/Topic.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'
import CreateTopic from '../views/CreateTopic.vue'

import * as UserHelpers from '../helpers/user'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/topics',
      name: 'topics',
      meta: {},
      component: Topics
    },
    {
      // name属性可以在后续使用这条路径规则的时候，直接引用。
      //
      path: '/topic/:id',
      name: 'topic',
      meta: {
        title: '主题'
      },
      component: Topic
    },
    {
      path: '/user/:loginname',
      name: 'user',
      meta: {
        title: '个人主页'
      },
      component: User
    },
    {
      path: '/topics/create',
      name: 'createTopic',
      meta: {
        title: '发布话题'
      },
      beforeEnter: async (to, from, next) => {
        let accessToken = await UserHelpers.getCurrentAccessToken()
        if (accessToken) { next() }
      },
      component: CreateTopic
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '关于'
      },
      component: About
    },
    { path: '*', redirect: '/topics' }
  ],

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
