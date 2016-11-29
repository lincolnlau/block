<template>
<div class="list-group dragula-container" :dragula="items" bag="simulator">
  <button class="list-group-item" v-for="item in items" :key="item.id" transition="scale">{{item.name}}</button>
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
  methods: mapActions([
    'addComponent'
  ])
}
</script>

<style>
</style>
