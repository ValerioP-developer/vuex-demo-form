import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nameStore: 'Testtt2222'
  },
  getters: {
    getName:state => {
      return state.nameStore.substr(0,3)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
