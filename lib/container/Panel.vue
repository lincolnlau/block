<template>
  <div :class="['panel', typeClass]"><div class="panel-heading">{{heading}}</slot></div><div class="panel-body"><slot>Panel content</slot></div><div class="panel-footer"><slot name="footer">Footer</slot></div></div>
</template>
<style>

</style>
<script>
export default{
  name: 'panel',
  computed: {
    typeClass: function () {
      return 'panel-' + this.type
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    heading: {
      type: String,
      default: 'Heading Text'
    }
  }
}
</script>
