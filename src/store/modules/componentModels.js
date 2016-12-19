import * as types from '../mutation-types'
import ComponentText from '@hfe/block-component-text/description.json'
// var json = require('json!@hfe.block-component-text/description.json')

// init state
// model componentModel {}
const state = {
  // componentModels: []
  componentModels: [
    {
      name: 'textInput'
    },
    {
      name: 'numberInput'
    },
    {
      name: 'date'
    },
    {
      name: 'dateTime'
    },
    {
      name: 'time'
    },
    {
      name: 'panel',
      props: {
        type: {
          type: 'String',
          label: '类型',
          default: 'default'
        },
        heading: {
          type: 'String',
          label: '头部文字',
          default: 'Heading Text'
        }
      },
      slots: {
        '': {
          type: '*'
        },
        'footer': {
          type: '*'
        }
      }
    },
    ComponentText
  ]
}

// getters
const getters = {
  componentModels: state => state.componentModels
}

// actions
const actions = {
  addComponentModel ({commit, state}, newComponentModel) {
    state.componentModels.push(newComponentModel)
    commit(types.ADD_TO_COMPONENTLIST)
  }
}

const mutations = {
  [types.ADD_TO_COMPONENTLIST] (state, { component }) {
    state.componentModels.push(component)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

