import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import componentModels from './modules/componentModels'
import pageModel from './modules/pageModel'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    componentModels,
    pageModel
  },
  // strict: debug
  strict: false
})
