<template>
  <li>
    <div>
      {{model.name}}
    </div>
    <ul v-show="open" v-if="hasSlots">
      <li v-for="(children, name) in model.slots">
        <div v-dropzone:x="{dropHandler:ondrop, options:{slotName: name}}">{{name || 'default'}}</div>
        <ul>
          <tree-node v-for="m in children" :model="m"></treenode>
        </ul>
      </li>
    </ul>
  </lii>
</template>

<script>
export default {
  name: 'treeNode',
  props: {
    model: Object
  },
  data: function () {
    return {
      open: true
    }
  },
  computed: {
    hasSlots: function () {
      const slots = this.model.slots
      return slots && Object.keys(slots).length
    }
  },
  created: function () {
    this.$on('dropzone:x', function (objectEvent, slotName) {
      this.addChildToSlot(slotName, objectEvent.data.item)
    })
  },
  methods: {

    toggle () {
      if (this.hasSlots) {
        this.open = !this.open
      }
    },

    ondrop (data, options) {
      this.addChildToSlot(options.slotName, data)
    },

    addChildToSlot (slotName, obj) {
      if (this.hasSlots) {
        if (arguments.length === 2) {
          console.log('in slot ' + slotName)
          console.log(obj)
          // this.model.slots[slotName].push(obj)
        } else {
          console.log('in default slot')
          // this.model.slots[''].push(obj)
        }
      }
    }
  }
}
</script>
