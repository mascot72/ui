import { createStore } from 'vuex'

const initialState = {
  count: 0
}

const mutations = {
  increment(state, value) {
    state.count++
  }
}

const actions = {
  increment({ commit, state }, $data) {
    commit('increment', $data)
  }
}

const getters = {
  get_count: (state) => state.count
}

export default createStore({
  namespaced: true,
  state() {
    return {
      ...initialState
    }
  },
  mutations,
  actions,
  getters
})
