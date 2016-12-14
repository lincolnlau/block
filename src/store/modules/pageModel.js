import * as types from '../mutation-types'
import Vue from 'vue'

import Gen from '../../generator/generator'

function genComponentSource (componentConfig) {
  const slots = componentConfig.slots
  const props = componentConfig.props

  let string = '<' + componentConfig.name + ' _uuid="' + componentConfig._uuid + '"'

  if (props) {
    const keys = Object.keys(props)
    keys.forEach(function (key) {
      const prop = props[key]
      prop._value = prop.default
      string += ' ' + key + '="' + prop._value + '"'
    })
  }

  string += ' tabindex="-1">'
  if (slots) {
    const keys = Object.keys(slots)
    keys.forEach(function (item) {
      slots[item] = []
      if (item) {
        string += '<div slot="' + item + '" class="__slot" v-dropzone:x="{slot:\'' + item + '\', _uuid:\'' + componentConfig._uuid + '\'}"></div>'
      } else {
        string += '<div v-dropzone:x="{slot:\'' + item + '\', _uuid:\'' + componentConfig._uuid + '\'}" class="__slot"></div>'
      }
    })
  }

  string += '</' + componentConfig.name + '>'
  const res = Vue.compile(string)
  const instance = new Vue({
    render: res.render,
    staticRenderFns: res.staticRenderFns
  })

  return instance
}

const state = {
  // 存储component 之间的关系
  pageComponents: [],
  // 以_uuid为key来保存每一个对象
  componentsMap: {},
  // 当前待编辑元素
  currentComponent: null
}

// getters
const getters = {
  pageComponents: state => state.pageComponents,
  currentComponent: state => state.currentComponent
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
    const instance = genComponentSource(component)
    const newComponent = instance.$mount()
    const instanceComponent = newComponent.$children[0]
    newComponent.$children = []
    // Vue.set(instanceComponent, ':type', '\'danger\'')
    vnode.elm.appendChild(instanceComponent.$el)
    newComponent.$el.__vue__ = instanceComponent
    instanceComponent.$parent = vnode.context
    vnode.context.$children.push(instanceComponent)

    instanceComponent.$el.focus()

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

    state.currentComponent = component
    console.log(JSON.stringify(state.pageComponents))
    console.log(Gen.genVue(state.pageComponents, state.componentsMap))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
