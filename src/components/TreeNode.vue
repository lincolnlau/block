<template>
  <div>
    <div class="treeNode">
      <span :class="['text-success', 'glyphicon', openStatusClass]" @click="toggle()"></span><span class="bg-success text-success">{{model.name}}</span>
    </div>
    <div v-show="open" v-if="hasSlots" class="slotsArea">
      <div v-for="(children, name) in model.slots">
        <div class="treeNodeSlot"><span class="text-info glyphicon glyphicon-unchecked"></span><span class="bg-info text-info">{{name || 'default'}}</span></div>
        <div>
          <tree-node v-for="m in children" :model="m"></treenode>
        </div>
      </div>
    </div>
  </div>
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
