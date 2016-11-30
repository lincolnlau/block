<template>
<div class="list-group">
  <button class="list-group-item" v-for="item in items">{{item.name}}</button>
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

    add (component) {
      console.log(component)
    }

  }
}
</script>

<style>
</style>
