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
  addComponent ({commit}, newComponentModel) {
    commit(types.ADD_TO_PAGE, newComponentModel)
  },
  addToSlot ({commit}, obj) {
    commit(types.ADD_TO_SLOT, obj)
  }
}

const mutations = {
  [types.ADD_TO_PAGE] (state, component) {
    state.pageComponents.push(component)
  },

  [types.ADD_TO_SLOT] (state, options) {
    const parent = options.parent
    const slotName = options.slotName
    let componentArray
    if (!parent) {
      console.warn('couldn\'t insert component to an null node')
      return
    }

    if (!parent.slots) {
      console.warn('parent node doesn\'t have a slot')
      return
    }

    componentArray = parent.slots[slotName]
    if (!componentArray || !Array.isArray(componentArray)) {
      console.warn('slot named "' + options.slotName + '" does not exist')
      return
    }

    componentArray.push(options.newComponent.item)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
