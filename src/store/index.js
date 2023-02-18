import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nameStore: '',
    lastname: '',
    email :''
  },
  getters: {
    getName:state => {
      return state.nameStore
    },
    getLastname:state => {
      return state.lastname
    },
    getEmail:state => {
      return state.email
    },
  },
  mutations: {
     setName :(state,othername) =>{
      state.nameStore= othername;
     },
     setLastname :(state,othername) =>{
      state.lastname= othername;
     },
     setEmail :(state,othername) =>{
      state.email= othername;
     }
  },
  actions: {
  //ACTIONS ARE USED FOR API CALLS
  //IN THIS CASE WE SIMULATE A SERVER CALLS WITH SETTIME OUT
      actionProfile : (context,profile) => {
            setTimeout(()=>{
                context.commit('setName',profile.name);
                context.commit('setLastname',profile.lastname);
                context.commit('setEmail',profile.email);
            },2000);
      }
  },
  modules: {

  }
})
