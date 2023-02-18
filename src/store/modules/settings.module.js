const state = {
    nameStore : 'Admin'
};
const getters = {
    getName : state => {
      return state.nameStore;
    }
};
const actions = {

};
const mutations = {
    setName : (state,nameStore) => {
      state.nameStore = nameStore;
    }
};
export default {
      namespaced : true,
      state,
      mutations,
      getters,
      actions
}
  