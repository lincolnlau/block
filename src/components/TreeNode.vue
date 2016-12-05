<template>
  <li>
    <div>
      {{model.name}}
    </div>
    <ul v-show="open" v-if="hasSlots">
      <li v-for="(children, name) in model.slots">
        <div v-dropzone:x="{dropHandler:ondrop, options:{slotName: name, node: model}}">{{name || 'default'}}</div>
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
  methods: {

    toggle () {
      if (this.hasSlots) {
        this.open = !this.open
      }
    },

    ondrop (data, options) {
      this.addChildToSlot(options.node, options.slotName, data)
    },

    addChildToSlot (node, slotName, obj) {
      if (this.hasSlots) {
        this.$store.dispatch('addToSlot', {parent: node, slotName: slotName, newComponent: obj})
      }
    }
  }
}
</script>
