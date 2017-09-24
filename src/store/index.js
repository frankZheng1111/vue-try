import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    lastTopicsTab: null
  },
  getters: {
    lastTopicsTab(state) {
      return state.lastTopicsTab
    }
  },
  mutations: {
    setLastTopicsTab (state, topics) {
      state.lastTopicsTab = topics.tab
    }
  },
  strict: debug,
})
