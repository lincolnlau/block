import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-dragula/styles/dragula.min.css'

import 'expose?_!underscore'

import Vue from 'vue'
import Dragdrop from './directives/dragdrop'
import Panel from '../lib/container/Panel'
import store from './store'
// import App from './App'
import ComponentList from './components/ComponentList'
import Preview from 'components/Preview'
import Simulator from 'components/Simulator.vue'
import PropsEditor from 'components/PropsEditor.vue'

Vue.use(Dragdrop)
Vue.component('panel', Panel)
Vue.component('component-list', ComponentList)
Vue.component('preview', Preview)
Vue.component('simulator', Simulator)
Vue.component('props-editor', PropsEditor)

/* eslint-disable no-new */
/*
 new Vue({
 el: '#app',
 store,
 template: '<App/>',
 components: {
 Preview,
 Simulator,
 PropsEditor
 }
 })
 */

/* eslint-disable no-new */
new Vue({
  el: '#componentsList',
  store,
  template: '<component-list/>'
})

/* eslint-disable no-new */
new Vue({
  el: '#preview',
  store,
  template: '<preview/>'
})

/* eslint-disable no-new */
new Vue({
  el: '#simulator',
  store,
  template: '<simulator/>'
})

/* eslint-disable no-new */
new Vue({
  el: '#propsEditor',
  store,
  template: '<props-editor/>'
})

