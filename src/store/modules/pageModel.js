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

    const dropdata = options.dragData
    let component = dropdata.data

    const slots = component.slots
    let string = '<' + component.name + ' tabindex="-1">'
    if (slots) {
      const keys = Object.keys(slots)
      keys.forEach(function (item) {
        slots[item] = []
        if (item) {
          // string += '<div slot="' + item + '" v-dropzone:x="{slot:\'' + item + '\', _uuid:\'' + component._uuid + '\'}">' + item + '</div>'
          string += '<div slot="' + item + '" class="__slot" v-dropzone:x="{slot:\'' + item + '\', _uuid:\'' + component._uuid + '\'}"></div>'
        } else {
          string += '<div v-dropzone:x="{slot:\'' + item + '\', _uuid:\'' + component._uuid + '\'}" class="__slot"></div>'
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
    const instanceComponent = newComponent.$children[0]
    instanceComponent.$parent = null
    vnode.context.$children.push(instanceComponent)
    // console.log(instanceComponent)

    /*
    var Component = Vue.component(component.name)
    var newInstance = new Component()
    newInstance.$mount()
    newInstance.type = 'danger'
    vnode.elm.appendChild(newInstance.$el)
    // newInstance.$parent = vnode.context
    vnode.context.$children.push(newInstance)
    console.log(newInstance.$slots)
    */

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
    // console.log(state.pageComponents)
    console.log(Gen.genVue(state.pageComponents, state.componentsMap))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
