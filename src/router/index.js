import Vue from 'vue'
import Router from 'vue-router'

import Topics from '../views/topics.vue'
import Topic from '../views/topic.vue'
import About from '../views/topic.vue'

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
      meta: {},
      component: Topic
    },
    {
      path: '/about',
      name: 'about',
      meta: {},
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
