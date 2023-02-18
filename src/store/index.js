import Vue from 'vue'
import Vuex from 'vuex'
import profile from './modules/profile.module'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    profile
  }
})
