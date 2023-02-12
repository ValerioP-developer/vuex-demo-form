import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nameStore: 'ciaooo'
  },
  getters: {
    getName:state => {
      return state.nameStore
    }
  },
  mutations: {
     setName :(state,othername) =>{
      state.nameStore= othername;
     }
  },
  actions: {
  },
  modules: {
  }
})
