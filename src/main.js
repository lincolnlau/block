import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-dragula/styles/dragula.min.css'

import 'expose?_!underscore'

import Vue from 'vue'
import Dragdrop from './directives/dragdrop'
import Focus from './directives/focus'
import Panel from '../lib/container/Panel'
import store from './store'
import App from './App'

Vue.use(Dragdrop)
Vue.use(Focus)
Vue.component('panel', Panel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: {
    App
  }
})

// /* eslint-disable no-new */
// new Vue({
//   el: '#componentsList',
//   store,
//   template: '<component-list/>'
// })
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#preview',
//   store,
//   template: '<preview></preview>',
//   computed: {
//     pageComponents: store.getters.pageComponents
//   }
// })
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#simulator',
//   store,
//   template: '<simulator/>'
// })
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#propsEditor',
//   store,
//   template: '<props-editor/>'
// })

