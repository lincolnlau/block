export default {
  install: function (Vue, options) {
    let dropTo = ''
    let dragData = null
    Vue.directive('draggable', {
      // name: 'draggable',
      bind (el, binding, vnode) {
        const dragDropEventHandler = {
          // dragstart handler
          dragstart (event) {
            const bd = binding
            dropTo = bd.arg
            dragData = bd.value
            if (dragData.clone) {
              dragData = JSON.parse(JSON.stringify(dragData))
            }
            event.target.classList.add(dragData.dragged)
            event.dataTransfer.effectAllowed = 'all'
            return false
          },
          // dragend handler
          dragend (event) {
            event.target.classList.remove(binding.value.dragged)
            return false
          }
        }
        const handler = dragDropEventHandler
        el.setAttribute('draggable', true)
        el.addEventListener('dragstart', handler.dragstart)
        el.addEventListener('dragend', handler.dragend)
      },
      unbind (el, binding, vnode) {
        const handler = binding.dragDropEventHandler
        el.removeEventListener('dragstart', handler.dragstart)
        el.removeEventListener('dragend', handler.dragend)
      },
      update (el, binding, vnode, oldVnode) {
        // update
      }
    })

    Vue.directive('dropzone', {
      bind (el, binding, vnode) {
        const handler = {
          dragenter (event) {
            const arg = binding.arg
            if (dropTo === arg && el === event.target) {
              event.target.classList.add(arg)
            }
            return false
          },

          dragover (event) {
            if (event.preventDefault) {
              event.preventDefault()
            }
            if (dropTo === binding.arg) {
              event.dataTransfer.effectAllowed = 'all'
              event.dataTransfer.dropEffect = 'copy'
            } else {
              event.dataTransfer.effectAllowed = 'none'
              event.dataTransfer.dropEffect = 'none'
            }
            return false
          },

          dragleave (event) {
            const bd = binding
            if (dropTo === bd.arg) {
              event.target.classList.remove(bd.arg)
            }
            return false
          },

          drop (event) {
            const bd = binding
            const value = bd.value
            const options = value && value.options
            const arg = bd.arg
            const context = vnode.context
            if (event.preventDefault) {
              event.preventDefault()
            }

            console.log(vnode.content.$store.dispatch('addComponent', component, vnode))

            if (value && !value.propagation) {
              event.stopPropagation()
            }

            if (dropTo === arg) {
              value.dropHandler.call(context, dragData, options)
              dragData = null
              event.target.classList.remove(arg)
            }
            return false
          }
        }

        binding.dragDropEventHandler = handler
        el.addEventListener('dragenter', handler.dragenter)
        el.addEventListener('dragover', handler.dragover)
        el.addEventListener('dragleave', handler.dragleave)
        el.addEventListener('drop', handler.drop)
      },

      unbind (el, binding, vnode) {
        const handler = binding.dragDropEventHandler
        el.removeEventListener('dragenter', handler.dragenter)
        el.removeEventListener('dragover', handler.dragover)
        el.removeEventListener('dragleave', handler.dragleave)
        el.removeEventListener('drop', handler.drop)
      },

      update (el, binding, vnode, oldVnode) {
        // console.log(binding.value)
      }
    })
  }
}
