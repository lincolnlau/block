<template>
  <li>
    <div>
      {{model.name}}
    </div>
    <ul v-show="open" v-if="hasSlots">
      <li v-for="(children, name) in model.slots">
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
    }
  }
}
</script>
