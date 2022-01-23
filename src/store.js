import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  position: {}
}

const mutations = {
  setPosition (state, val) {
    state.position = val
  }
}

const actions = {
  setPosition (state, val) {
    // 异步请求后端获取当前位置数据(未完成)
    state.commit('setPosition', val)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
