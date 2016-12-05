import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-dragula/styles/dragula.min.css'

import Vue from 'vue'
import Dragdrop from './directives/dragdrop'
import Panel from '../lib/container/Panel'
import store from './store'
import App from './App'

Vue.use(Dragdrop)
Vue.component('panel', Panel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
