import { createStore } from 'vuex'

export default createStore({
  state: {
    memos: []
  },
  getters: {
  },
  mutations: {
    save(state, newMemo){
      state.memos.unshift(newMemo)
    }
  },
  actions: {
  },
  modules: {
  }
})
