import * as types from '../mutation-types'

const state = {
  pageComponents: []
}

// getters
const getters = {
  pageComponents: state => state.pageComponents
}

// actions
const actions = {
  addComponent ({commit, state}, newComponentModel) {
    state.pageComponents.push(newComponentModel)
    commit(types.ADD_TO_PAGE)
  }
}

const mutations = {
  [types.ADD_TO_PAGE] (state, { component }) {
    state.pageComponents.push(component)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
