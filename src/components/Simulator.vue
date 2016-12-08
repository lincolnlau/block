<template>
<div class="simulator">
  <ul>
    <tree-node v-for="item in items" :model="item"></tree-node>
  </ul>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import TreeNode from './TreeNode'

export default {
  name: 'simulator',
  components: {
    TreeNode
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions([
      'addComponent'
    ])
  }
}
</script>

<style>
.simulator ul {
  list-style-type: none;
  padding-left: 10px;
}

.simulator ul li {
}

</style>
