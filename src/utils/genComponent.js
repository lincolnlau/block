import Vue from 'vue'
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

export default function (component, map, vnode) {
  const res = Vue.compile(genComponentSource(component))
  const instance = new Vue({
    name: component.name + '_Container',
    render: res.render,
    staticRenderFns: res.staticRenderFns,
    parent: vnode.context,
    // store: Store,
    data: function () {
      return {
        // pageComponents: state.pageComponents,
        componentsMap: map
      }
    }
  })
  const newComponent = instance.$mount()
  vnode.elm.appendChild(newComponent.$el)
  newComponent.$el.focus()
}
