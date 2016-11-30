import * as types from '../mutation-types'

const state = {
  pageComponents: [
    {
      name: 'combox'
    }
  ]
}

// getters
const getters = {
  pageComponents: state => state.pageComponents
}

// actions
const actions = {
  addComponent ({commit, state}, newComponentModel) {
    console.log(newComponentModel)
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