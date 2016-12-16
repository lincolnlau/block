import * as types from '../mutation-types'
import Vue from 'vue'
import Store from '../index'

function genComponentSource (componentConfig) {
  const slots = componentConfig.slots
  const props = componentConfig.props

  let string = '<' + componentConfig.name + ' _uuid="' + componentConfig._uuid + '"'

  if (props) {
    const keys = Object.keys(props)
    keys.forEach(function (key) {
      const prop = props[key]
      prop._value = prop.default
      // string += ' ' + key + '="' + prop._value + '"'
      string += ' :' + key + '="componentsMap[\'' + componentConfig._uuid + '\'].props[\'' + key + '\'].default"'
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

  return string
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
  currentComponent: state => state.currentComponent,
  componentsMap: state => state.componentsMap
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
  },
  /**
   *
   * @param commit
   * @param options
   * {
   *    _uuid: ''  // component uuid
   *    props: {  // props value
   *      'key1': value1
   *      'key2': value2
   *    }
   * }
     */
  setCurrentComponentProps ({commit}, options) {
    commit(types.SET_CURRENT_COMPONENT_PROPS, options)
  }
}

const mutations = {
  [types.ADD_TO_PAGE] (state, component) {
    state.pageComponents.push(component)
  },

  [types.SET_CURRENT_COMPONENT_PROPS] (state, options) {
    const props = options.props
    const nodeProps = state.componentsMap[options._uuid].props

    Object.keys(props).forEach(function (key) {
      const valueObj = props[key]
      nodeProps[key]._value = valueObj.value
      // vueComponent.$set(vueComponent, key, valueObj.value)
    })
  },

  [types.ADD_TO_VNODE] (state, options) {
    const vnode = options.vnode
    if (!vnode) {
      console.warn('couldn\'t insert component to an null node')
      return
    }

    const dropdata = options.dragData
    let component = dropdata.data

    // 挂载数据
    if (!state.componentsMap[component._uuid]) {
      state.componentsMap[component._uuid] = component
    }

    // state.currentComponent = JSON.parse(JSON.stringify(component))
    state.currentComponent = component

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

    const res = Vue.compile(genComponentSource(component))
    const instance = new Vue({
      name: component.name,
      render: res.render,
      staticRenderFns: res.staticRenderFns,
      parent: vnode.context,
      store: Store,
      data: function () {
        return {
          pageComponents: state.pageComponents,
          componentsMap: state.componentsMap
        }
      }
    })
    const newComponent = instance.$mount()
    const instanceComponent = newComponent.$children[0]
    newComponent.$children = []
    // Vue.set(instanceComponent, 'type', 'danger')
    vnode.elm.appendChild(instanceComponent.$el)
    instanceComponent.$el.focus()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
