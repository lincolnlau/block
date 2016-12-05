<template>
<div slot class="preview" v-dropzone:x="{dropHandler:drop}"></div>
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
          if (slots) {
            const keys = Object.keys(slots)
            keys.forEach(function (item) {
              slots[item] = []
            })
          }
          const Component = Vue.component(component.name)
          const newComponent = new Component()
          const context = newComponent.$mount()
          this.$el.appendChild(context.$el)

          // show props
          // console.log(newComponent._vnode.$options.props)
          // show slots
          const childVnodes = newComponent._vnode.children
          if (childVnodes && childVnodes.length > 0) {
            console.log(childVnodes)
            childVnodes.forEach(item => {
              if (typeof item.data.slot === 'string') {
                item.elm.classList.add('__slot')
              }
            })
          }
          this.$store.dispatch('addComponent', component)
        }
        return dropdata
      }
    }
  }
</script>
