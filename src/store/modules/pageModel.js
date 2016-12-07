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

  [types.ADD_TO_VNODE] (state, options) {
    const vnode = options.vnode
    if (!vnode) {
      console.warn('couldn\'t insert component to an null node')
      return
    }

    const Panel = Vue.component('panel')
    // console.log(Panel)

    const dropdata = options.component
    let component = JSON.parse(JSON.stringify(dropdata.item))
    const slots = component.slots
    let string = '<' + component.name + '>'
    if (slots) {
      const keys = Object.keys(slots)
      keys.forEach(function (item) {
        slots[item] = []
        if (item) {
          string += '<div slot="' + item + '" v-dropzone:x="">' + item + '</div>'
        } else {
          string += '<div v-dropzone:x="">hahaha</div>'
        }
      })
    }
    string += '</' + component.name + '>'

    const res = Vue.compile(string)
    console.log(res)
    const instance = new Vue({
      render: res.render,
      staticRenderFns: res.staticRenderFns
    })

    const newComponent = instance.$mount()
    vnode.elm.appendChild(newComponent.$el)
    const pnode = new Panel()
    const panel = pnode.$mount()
    console.log(pnode)
    vnode.elm.appendChild(panel.$el)
    vnode.context.$children.push(newComponent)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
