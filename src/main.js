'use strict'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 引入vue
import Vue from 'vue'
import App from './App'
import router from './router'

import 'mint-ui/lib/style.css'

import axios from 'axios'

// 需要跨域携带cookie时
// axios.defaults.withCredentials = true
axios.defaults.baseURL = API_URL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
