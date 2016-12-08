/**
 * Created by lincoln on 08/12/2016.
 */

function generate (nodes) {
  let str = ''
  nodes.forEach(function (item) {
    const slots = item.slots
    str += '<' + item.name + '>'

    if (slots) {
      Object.keys(slots).forEach(function (key) {
        const children = slots[key]

        if (children && children.length) {
          if (key) {
            str += '<div slot="' + key + '">' + generate(children) + '</div>'
          } else {
            str += generate(children)
          }
        }
      })
    }
    str += '</' + item.name + '>'
  })
  return str
}

// import EJS from 'ejs'
export default {
  gen (data) {
    const nodes = Array.isArray(data) ? data : [data]
    return generate(nodes)
  }
}
