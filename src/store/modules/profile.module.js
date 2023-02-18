const state ={
    nameStore: '',
    lastname: '',
    email :''
};
const getters ={

      getName:(state,getters,rootState,rootGetters)  => {
      return state.nameStore + " -" + rootGetters['settings/getName'];
      },
      getLastname:state => {
        return state.lastname
      },
      getEmail:state => {
        return state.email
      },
};
const actions = {
   //ACTIONS ARE USED FOR API CALLS
  //IN THIS CASE WE SIMULATE A SERVER CALLS WITH SETTIME OUT
  actionProfile : (context,profile) => {
    setTimeout(()=>{
        context.commit('setName',profile.name);
        context.commit('setLastname',profile.lastname);
        context.commit('setEmail',profile.email);
    },2000);
}
};
const mutations ={
    setName :(state,othername) =>{
        state.nameStore= othername;
       },
       setLastname :(state,othername) =>{
        state.lastname= othername;
       },
       setEmail :(state,othername) =>{
        state.email= othername;
       }
};
export default{
    /*
    BY ADDING NAMESPACED TRUE 
      
    It will be possible to refers to a specific module from a component
    
    */ 
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
