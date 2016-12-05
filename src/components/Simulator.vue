<template>
<div class="simulator" v-dropzone:x="{dropHandler:drop}">
  <ul>
    <tree-node v-for="item in items" :model="item"></tree-node>
  </ul>
</div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
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
  /*
  computed: mapGetters([
    'pageComponents'
  ]),
  */
  methods: {
    ...mapActions([
      'addComponent'
    ]),
    drop (dropdata) {
      if (dropdata) {
        this.$store.dispatch('addComponent', dropdata.item)
      }
      return dropdata
    }
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
