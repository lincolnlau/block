<template>
  <li>
    <div class="treeNode">
      <span :class="['text-success', 'glyphicon', openStatusClass]" @click="toggle()"></span><span class="bg-success text-success">{{model.name}}</span>
    </div>
    <ul v-show="open" v-if="hasSlots" class="slotsArea">
      <li v-for="(children, name) in model.slots">
        <div class="treeNodeSlot"><span class="text-info glyphicon glyphicon-unchecked"></span><span class="bg-info text-info">{{name || 'default'}}</span></div>
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
    },

    openStatusClass: function () {
      let str = 'glyphicon-'
      return str + (this.open ? 'minus' : 'plus')
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

<style>
  .treeNode {
    height: 30px;
    padding:3px;
    font-weight: bold;
    cursor: pointer;
  }
  .treeNodeSlot {
    height: 30px;
    padding:3px 13px;
    font-weight: bold;
    cursor: pointer;
  }
  .slotsArea {
    padding-left:10px;
  }
</style>
