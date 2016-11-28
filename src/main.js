import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-dragula/styles/dragula.min.css'

import Vue from 'vue'
import App from './App'
import VueDragula from 'vue-dragula'

Vue.use(VueDragula)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  created: function () {
    Vue.vueDragula.options('simulator', {
      copy: true
      // accepts: function (el, target) {
      //   return true
      // }
    })
  },
  ready: function () {
    Vue.vueDragula.eventBus.$on('drop', function (args) {
      console.log('drop: ' + args[0])
    })
  }

})
