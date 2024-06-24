<<<<<<< Updated upstream
import { createStore } from 'vuex'

=======
>>>>>>> Stashed changes
const initialState = {
  count: 0
}

const mutations = {
<<<<<<< Updated upstream
  increment(state, value) {
    state.count++
=======
  UPDATE_ID(state, value) {
    state.count = value
>>>>>>> Stashed changes
  }
}

const actions = {
<<<<<<< Updated upstream
  increment({ commit, state }, $data) {
    commit('increment', $data)
=======
  update_id({ commit, state }, $data) {
    commit('UPDATE_ID', $data)
>>>>>>> Stashed changes
  }
}

const getters = {
<<<<<<< Updated upstream
  get_count: (state) => state.count
}

export default createStore({
  namespaced: true,
  state() {
    return {
      ...initialState
    }
=======
  get_id: (state) => state.id * 1000
}

export default {
  namespaced: true,
  state: {
    ...initialState
>>>>>>> Stashed changes
  },
  mutations,
  actions,
  getters
<<<<<<< Updated upstream
})
=======
}
>>>>>>> Stashed changes
