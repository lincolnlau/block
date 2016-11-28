<template>
<div class="list-group" v-dragula="items" bag="simulator">
  <button class="list-group-item" v-for="item in items" transition="scale">{{item.name}}</button>
</div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'simulator',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  ready: function () {
    console.log('hello')
    Vue.vueDragula.eventBus.$on(
      'drop',
      function (args) {
        console.log('drop: ' + args[0])
      }
    )
    Vue.vueDragula.eventBus.$on(
      'dropModel',
      function (args) {
        console.log('dropModel: ' + args)
      }
    )
  }
}
</script>

<style>
</style>
