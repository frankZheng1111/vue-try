import Vue from 'vue'
import Router from 'vue-router'

import home from '../views/home.vue'
import content from '../views/content.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      // name属性可以在后续使用这条路径规则的时候，直接引用。
      //
      path: '/content',
      name: 'topic',
      component: content
    },
    { path: '*', redirect: '/home' }
  ]
})
