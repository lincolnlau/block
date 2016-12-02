import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-dragula/styles/dragula.min.css'

import Vue from 'vue'
import Dragdrop from './directives/dragdrop'
import store from './store'
import App from './App'

Vue.use(Dragdrop)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
