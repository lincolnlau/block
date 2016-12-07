import * as types from '../mutation-types'
import Vue from 'vue'
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
  },
  addToVNode ({commit}, obj) {
    commit(types.ADD_TO_VNODE, obj)
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
  },

  [types.ADD_TO_VNODE] (state, options) {
    const vnode = options.vnode
    // const slotName = options.slotName
    // let componentArray
    if (!vnode) {
      console.warn('couldn\'t insert component to an null node')
      return
    }

    /*
    if (!parent.slots) {
      console.warn('parent node doesn\'t have a slot')
      return
    }

    componentArray = parent.slots[slotName]
    if (!componentArray || !Array.isArray(componentArray)) {
      console.warn('slot named "' + options.slotName + '" does not exist')
      return
    }
    */

    // componentArray.push(options.component.item)
    const dropdata = options.component
    let component = JSON.parse(JSON.stringify(dropdata.item))
    const slots = component.slots
    let string = '<' + component.name + '>'
    if (slots) {
      const keys = Object.keys(slots)
      keys.forEach(function (item) {
        slots[item] = []
        string += '<div slot="' + item + '" class=" __slot" v-dropzone:x=""></div>'
      })
    }
    string += '</' + component.name + '>'

    const nodeComponent = vnode.context
    const res = Vue.compile(string, {
      _isComponent: true,
      directives: {
        // dropzone: Vue.directive('dropzone')
      }
    })

    const instance = new Vue({
      // el: div,
      render: res.render,
      staticRenderFns: res.staticRenderFns
    })

    const newComponent = instance.$mount()

    const context = newComponent.$children[0]
    const childVnodes = context._vnode.children

    if (childVnodes && childVnodes.length > 0) {
      // console.log(childVnodes)
      childVnodes.forEach(item => {
        if (typeof item.data.slot === 'string') {
          // add slot style
          item.elm.classList.add('__slot')
          // item.elm.setAttribute('v-dropzone:x', '{dropHandler:drop}')
        }
      })
    }

    newComponent.$parent = nodeComponent
    nodeComponent.$children.push(context)
    nodeComponent.$el.appendChild(newComponent.$el)
    console.log(newComponent)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
