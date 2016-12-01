// import Vue from 'vue'
let dropTo = ''
const Draggable = {
  name: 'draggable',
  bind (el, binding, vnode) {
    const handler = {
      // dragstart handler
      dragstart (event) {
        const bd = binding
        dropTo = bd.arg
        event.target.classList.add(binding.value.dragged)
        event.dataTransfer.effectAllowed = 'all'
        event.dataTransfer.setData('data', JSON.stringify(bd.value))
        event.dataTransfer.setData('tag', dropTo)
        return false
      },
      // dragend handler
      dragend (event) {
        event.target.classList.remove(binding.value.dragged)
        return false
      }
    }

    binding.dragDropEventHandler = handler
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

  }
}

const Dropzone = {
  name: 'dropzone',
  bind (el, binding, vnode) {
    const handler = {
      // dragenter handler
      dragenter (event) {
        const arg = binding.arg
        if (dropTo === arg) {
          event.target.classList.add(arg)
        }
        return false
      },
      // dragover handler
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

      // dragleave handler
      dragleave (event) {
        const bd = binding
        if (dropTo === bd.arg) {
          event.target.classList.remove(bd.arg)
        }
        return false
      },
      // drop event
      drop (event) {
        const bd = binding
        const arg = bd.arg
        let data
        if (event.preventDefault) {
          event.preventDefault()
        }
        // const tag = event.dataTransfer.getData('tag')
        if (dropTo === arg) {
          // self.handler(tag, JSON.parse(data));
          data = JSON.parse(event.dataTransfer.getData('data'))
          // vnode.$dropdata = data
          if (bd.expression && typeof vnode.context[bd.expression] === 'function') {
            vnode.context[bd.expression](data)
          }
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
    // abc
  }
}

export default {
  Draggable,
  Dropzone
}
