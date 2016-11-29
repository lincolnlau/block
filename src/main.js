import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-dragula/styles/dragula.min.css'

import Vue from 'vue'
import App from './App'
import VueDragula from 'vue-dragula'

import store from './store'

Vue.use(VueDragula)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },

  created: function () {
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
      'drop',
      function (args) {
        const bag = args[0]
        const el = args[1]
        el.className += ' active'
        console.log(Vue.vueDragula.find(bag))
      }
    )
    Vue.vueDragula.eventBus.$on(
      'dropModel',
      function (bagName, el, target, source, dropIndex) {
        console.log(bagName)
        // console.log('dropModel: ' + args)
      }
    )
  }
})
