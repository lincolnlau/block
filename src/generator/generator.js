/**
 * Created by lincoln on 08/12/2016.
 */

import vueTemplate from 'ejs!./templates/vue.ejs'

function generateProps (props) {
  let str = ''

  Object.keys(props).forEach(function (key) {
    const prop = props[key]
    const value = prop.$valueExpression || prop.default
    if (value) {
      str += key + '="' + value + '" '
    }
  })

  return str
}

/*
function generateEventsHandler (events) {

}
*/

function generateTemplate (nodes) {
  let str = ''
  nodes.forEach(function (item) {
    const slots = item.slots
    const propsStr = generateProps(item.props)
    str += '<' + item.name
    if (propsStr) {
      str += ' ' + propsStr
    }
    str += '>'

    if (slots) {
      Object.keys(slots).forEach(function (key) {
        const children = slots[key]

        if (children && children.length) {
          if (key) {
            str += '<div slot="' + key + '">' + generateTemplate(children) + '</div>'
          } else {
            str += generateTemplate(children)
          }
        }
      })
    }
    str += '</' + item.name + '>'
  })
  return str
}

function generateData (nodeMap) {
  let str = '{'
  const keys = Object.keys(nodeMap)
  for (let i = 0, l = keys.length; i < l; i++) {
    let key = keys[i]
    const propObj = nodeMap[key].props
    str += '\'' + key + '\': {'

    let propKeys = Object.keys(propObj)
    const arr = []
    for (let j = 0, kl = propKeys.length; j < kl; j++) {
      const pk = propKeys[j]
      const prop = propObj[pk]
      const value = prop.value || prop.default
      const type = prop.type
      switch (type) {
        case 'String':
          arr.push(pk + ':\'' + value + '\'')
          break
        case 'Object':
          arr.push(pk + ':' + JSON.stringify(value))
          break
        case 'Array':
          arr.push(pk + ':' + JSON.stringify(value))
          break
        default: // Date should deep copy
          arr.push(pk + ':' + value)
          break
      }
    }
    str += arr.join(',')

    str += '}' + (i !== l - 1 ? ',' : '')
  }
  str += '}'
  return str
}

export default {
  gen (data) {
    const nodes = Array.isArray(data) ? data : [data]
    return generateTemplate(nodes)
  },

  genVue (data, map) {
    const nodes = Array.isArray(data) ? data : [data]
    const templateSource = generateTemplate(nodes)
    const codeSource = generateData(map)
    return vueTemplate({template: templateSource, code: codeSource})
  }
}
