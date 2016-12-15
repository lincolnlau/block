<template>
<div class="simulator iphone">
  <ul>
    <tree-node v-for="item in items"></tree-node>
  </ul>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TreeNode from './TreeNode'

export default {
  name: 'simulator',
  components: {
    TreeNode
  },
  computed: {
    ...mapGetters({
      componentModels: 'componentModels',
      pageComponents: 'pageComponents',
      currentComponent: 'currentComponent',
      componentsMap: 'componentsMap'
    })
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
