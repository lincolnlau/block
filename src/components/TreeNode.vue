<template>
  <li>
    <div>
      {{model.name}}  
    </div>
    <ul v-show="open" v-if="hasSlots">
      <li v-for="(name, children) in model.slots">
        <div>{{name || 'default'}}</div>
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
      open: false
    }
  },
  computed: {
    hasSlots: function () {
      return this.model.slots && this.slots.length
    }
  },
  methods: {

    toggle () {
      if (this.hasSlots) {
        this.open = !this.open
      }
    },

    addChildToSlot (slotName, obj) {
      if (this.hasSlots) {
        if (arguments.length === 2) {
          this.model.slots[slotName].push(obj)
        } else {
          this.model.slots[''].push(obj)
        }
      }
    }
  }
}
</script>