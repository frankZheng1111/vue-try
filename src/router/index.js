import Vue from 'vue'
import Router from 'vue-router'

import topics from '../views/topics.vue'
import topic from '../views/topic.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/topics',
      name: 'topics',
      meta: {},
      component: topics
    },
    {
      // name属性可以在后续使用这条路径规则的时候，直接引用。
      //
      path: '/topic/:id',
      name: 'topic',
      meta: {},
      component: topic
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
