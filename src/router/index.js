import Vue from 'vue'
import Router from 'vue-router'

import Topics from '../views/Topics.vue'
import Topic from '../views/Topic.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'

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
      // name属性可以在后续使用这条路径规则的时候，直接引用。
      //
      path: '/user/:loginname',
      name: 'user',
      meta: {
        title: '个人主页'
      },
      component: User
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
