<template>
<div slot class="preview" v-dropzone:x></div>
</template>
<style>
.preview {
  width: 320px;
  height: 568px;
  border: 1px solid #ccc;
  margin:40px auto;
  overflow: auto;
}
</style>
<script>
  import Vue from 'vue'
  export default{
    name: 'preview',
    methods: {
      drop (dropdata) {
        if (dropdata) {
          let component = JSON.parse(JSON.stringify(dropdata.item))
          const slots = component.slots
          let string = '<' + component.name + '>'
          if (slots) {
            const keys = Object.keys(slots)
            keys.forEach(function (item) {
              slots[item] = []
              string += '<div slot="' + item + '" class=" __slot" v-dropzone:x="{dropHandler:$$_dropHandler}"></div>'
            })
          }
          string += '</' + component.name + '>'

          const res = Vue.compile(string, {
            directives: {
              // dropzone: Vue.directive('dropzone')
            }
          })
          const instance = new Vue({
            render: res.render,
            staticRenderFns: res.staticRenderFns
          })

          const newComponent = instance.$mount()

          const context = newComponent.$children[0]
          const childVnodes = context._vnode.children

          if (childVnodes && childVnodes.length > 0) {
            // console.log(childVnodes)
            childVnodes.forEach(item => {
              if (typeof item.data.slot === 'string') {
              // add slot style
                item.elm.classList.add('__slot')
              // item.elm.setAttribute('v-dropzone:x', '{dropHandler:drop}')
              }
            })
          }

          newComponent.$parent = this
          this.$children.push(context)
          this.$el.appendChild(newComponent.$el)
          console.log(newComponent)

          /*
          const Component = Vue.component(component.name)
          // console.log(Component)
          // const dropzoneDirective = Vue.directive('dropzone')
          const self = this
          const newComponent = new Component({
            methods: {
              $$dropHandler: self.drop
            }
          })
          console.log(newComponent)
          const context = newComponent.$mount()
          this.$el.appendChild(context.$el)

          // show props
          // show slots
          const childVnodes = newComponent._vnode.children

          if (childVnodes && childVnodes.length > 0) {
            childVnodes.forEach(item => {
              if (typeof item.data.slot === 'string') {
                // add slot style
                item.elm.classList.add('__slot')
                // item.elm.setAttribute('v-dropzone:x', '{dropHandler:drop}')
              }
            })
          }
          */
          this.$store.dispatch('addComponent', component)
        }
        return dropdata
      }
    }
  }
</script>
