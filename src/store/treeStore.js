import Vuex from 'vuex'
import componentTree from './modules/componentTree'
import componentModels from './modules/componentModels'
export default new Vuex.Store({
  modules: {
    componentModels,
    componentTree
  },
  // strict: debug
  strict: false
})
