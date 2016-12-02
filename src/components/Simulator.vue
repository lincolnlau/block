<template>
<div class="list-group" v-dropzone:x="drop">
  <!--button class="list-group-item" v-for="item in items">{{item.name}}</button-->
  <tree-node v-for="item in items" :model="item"></tree-node>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'simulator',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: mapGetters([
    'pageComponents'
  ]),
  methods: {
    ...mapActions([
      'addComponent'
    ]),
    drop (dropdata) {
      this.$store.dispatch('addComponent', dropdata.item)
    }
  }
}
</script>

<style>
</style>
