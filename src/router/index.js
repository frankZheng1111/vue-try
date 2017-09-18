import Vue from 'vue'
import Router from 'vue-router'

import topics from '../views/topics.vue'
import topic from '../views/topic.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/topics',
      name: 'topics',
      meta: {
        keepAlive: true
      },
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
  ]
})
