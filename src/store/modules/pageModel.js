import * as types from '../mutation-types'
import genComponent from '../../utils/genComponent'

/*
function genComponentSource (componentConfig) {
  const slots = componentConfig.slots
  const props = componentConfig.props
  const uuid = componentConfig._uuid
  let string = '<' + componentConfig.name + ' _uuid="' + uuid + '" v-focus="{ _uuid:\'' + uuid + '\'}" v-draggable:y="{dragged: \'dragged\', data: {_uuid:\'' + uuid + '\'}}"'

  if (props) {
    const keys = Object.keys(props)
    keys.forEach(function (key) {
      const prop = props[key]
      prop._value = prop.default
      // string += ' ' + key + '="' + prop._value + '"'
      string += ' :' + key + '="componentsMap[\'' + uuid + '\'].props[\'' + key + '\'].default"'
    })
  }

  string += ' tabindex="0">'
  if (slots) {
    const keys = Object.keys(slots)
    keys.forEach(function (item) {
      slots[item] = []
      if (item) {
        string += '<div slot="' + item + '" v-dropzone:x="{slot:\'' +
          item + '\', _uuid:\'' + uuid + '\'}" class="__slot" ></div>'
      } else {
        string += '<div v-dropzone:x="{slot:\'' + item +
          '\', _uuid:\'' + uuid + '\'}"class="__slot" ></div>'
      }
    })
  }

  string += '</' + componentConfig.name + '>'
  return string
}

*/
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

  setCurrentNode ({commit}, obj) {
    commit(types.SET_CURRENT_NODE, obj)
  },

  setCurrentNodeId ({commit}, options) {
    commit(types.SET_CURRENT_NODEID, options._uuid)
  }
}

const mutations = {
  [types.ADD_TO_PAGE] (state, component) {
    state.pageComponents.push(component)
  },

  [types.SET_CURRENT_NODE] (state, node) {
    state.currentComponent = node
  },

  [types.SET_CURRENT_NODEID] (state, uuid) {
    state.currentComponent = state.componentsMap[uuid]
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

    if (options.arg === 'x') {
      // 挂载数据
      if (!state.componentsMap[component._uuid]) {
        state.componentsMap[component._uuid] = component
      }

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

      // 如果是iframe页面
      if (window.parent !== window) {
        const location = window.location
        let target = location.origin
        console.log(target)
        window.parent.postMessage(component, target)
      } else {
        console.log('in parent window')
      }
      /*
      const res = Vue.compile(genComponentSource(component))
      const instance = new Vue({
        name: component.name + '_Container',
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
      vnode.elm.appendChild(newComponent.$el)
      newComponent.$el.focus()
      */
      if (window !== window.parent) {
        genComponent(component, state.componentsMap, vnode)
      }
    } else if (options.arg === 'y') {
      console.log(component)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
