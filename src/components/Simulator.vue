<template>
<div class="simulator iphone" v-dropzone:x>
  <tree-node v-for="item in nodes" :model="item"></tree-node>
</div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import { mapGetters } from 'vuex'
import TreeNode from './TreeNode'

export default {
  name: 'simulator',
  components: {
    TreeNode
  },
  computed: {
    ...mapGetters({
      nodes: 'nodes'
    })
  }/*,
  methods: {
    ...mapActions([
      'addComponent'
    ])
  }
  */
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
