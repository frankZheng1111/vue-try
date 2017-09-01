import Vue from 'vue'
import Router from 'vue-router'

// import Hello from '@/components/Hello'

import index from '../page/index.vue'
import content from '../page/content.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/content',
      // name属性可以在后续使用这条路径规则的时候，直接引用。
      name: 'content',
      component: content
    }
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // }
  ]
})
