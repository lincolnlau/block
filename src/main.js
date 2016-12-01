import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-dragula/styles/dragula.min.css'

import Vue from 'vue'
import Dragdrop from './directives/dragdrop'
import store from './store'
import App from './App'

const Draggable = Dragdrop.Draggable
const Dropzone = Dragdrop.Dropzone
Vue.directive(Draggable.name, Draggable)
Vue.directive(Dropzone.name, Dropzone)
// import VueDragula from 'vue-dragula'
// Vue.use(VueDragula)
// import VueDnD from 'vue-dnd'
// Vue.use(VueDnD)
// Vue.use(VueDnD)
// VueDnD.install(Vue)
// console.log(VueDnD)
// Vue.use(require('vue-dnd'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  created: function () {
    // const _self = this
    /*
    Vue.vueDragula.options('simulator', {
      models: [],
      copy: function (el, source) {
        return source.classList.contains('componentList')
      },
      isContainer: function (el) {
        return el.classList.contains('dragula-container')
      },
      accepts: function (el, target, source, sibling) {
        return target.classList.contains('dragula-container')
      }
    })
    Vue.vueDragula.eventBus.$on(
      'drag',
      function (args) {
        // var index = [].indexOf.call(element.parentNode.children, element);
        // console.log('drag from', index, element, source);
        // from = index;
      }
    )

    Vue.vueDragula.eventBus.$on(
      'drop',
      function (args) {
        // const bag = args[0]
        const el = args[1]
        el.className += ' active'
        console.log(args)
        // const componentInstance =
        // _self.$store.dispatch('addComponent', component);
        // console.log(Vue.vueDragula.find(bag))
      }
    )
    Vue.vueDragula.eventBus.$on(
      'dropModel',
      function (bagName, el, target, source, dropIndex) {
        console.log(bagName)
        // console.log('dropModel: ' + args)
      }
    )
    */
  }
})
