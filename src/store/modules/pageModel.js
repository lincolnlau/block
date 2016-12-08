import * as types from '../mutation-types'
import Vue from 'vue'

import Gen from '../../generator/generator'

const state = {
  // 存储component 之间的关系
  pageComponents: [],
  // 以_uuid为key来保存每一个对象
  componentsMap: {}
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

    const dropdata = options.component
    let component = JSON.parse(JSON.stringify(dropdata.data))
    const slots = component.slots
    let string = '<' + component.name + '>'
    if (slots) {
      const keys = Object.keys(slots)
      keys.forEach(function (item) {
        slots[item] = []
        if (item) {
          string += '<div slot="' + item + '" v-dropzone:x="{slot:\'' + item + '\', _uuid:\'' + component._uuid + '\'}">' + item + '</div>'
        } else {
          string += '<div v-dropzone:x="{slot:\'' + item + '\', _uuid:\'' + component._uuid + '\'}">hahaha</div>'
        }
      })
    }
    string += '</' + component.name + '>'
    const res = Vue.compile(string)
    const instance = new Vue({
      render: res.render,
      staticRenderFns: res.staticRenderFns
    })

    const newComponent = instance.$mount()
    vnode.elm.appendChild(newComponent.$el)

    // 挂载数据
    if (!state.componentsMap[component._uuid]) {
      state.componentsMap[component._uuid] = component
    }

    // add component data to component tree
    const parentConfig = options.parentConfig
    if (parentConfig) {
      const parentNode = state.componentsMap[parentConfig._uuid]
      if (parentNode) {
        parentNode.slots[parentConfig.slot].push(component)
      }
    } else {
      state.pageComponents.push(component)
    }
    console.log(Gen.gen(state.pageComponents))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
