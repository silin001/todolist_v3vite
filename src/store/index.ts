import { createStore } from 'vuex'

const store = createStore({
  state: {
    num: 99,
    userInfo: {
      name: 'renkq'
    }
  },
  mutations: {
    add (state, data) {
      data ? state.num += data : state.num++
    },
    getUserInfo (state, name) {
      state.userInfo.name = name
    }
  },
  actions: {
    asyncAddNum ({ commit }, data) {
      setTimeout(() => {
        commit('add', data)
        console.log(data)
      }, 1000)
    },
    asyncGetUserInfo ({ commit }) {
      setTimeout(() => {
        commit('getUserInfo', + new Date() + 'action')
      }, 2000)
    }
  },
  getters: {
    userInfoGetter (state) {
      return state.userInfo.name
    }
  }
})

export default store