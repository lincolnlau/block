/**
 * Created by lincoln on 16/12/2016.
 */
import Store from '../store/index'
export default {
  install: function (Vue, options) {
    Vue.directive('focus', {
      bind (el, binding, vnode) {
        var value = binding.value

        function handler (event) {
          Store.dispatch('setCurrentNode', value)
        }

        el.addEventListener('focus', handler)
        binding.focus = handler
      },

      unnbind (el, binding, vnode) {
        el.removeEventListener('focus', binding.focus)
      },

      update (el, binding, vnode, oldVnode) {

      }
    })
  }
}
