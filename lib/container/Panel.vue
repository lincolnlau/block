<template>
  <div :class="['panel', typeClass]"><div class="panel-heading"><slot name="heading">Heading</slot></div><div class="panel-body"><slot>Panel content</slot></div><div class="panel-footer"><slot name="footer">Footer</slot></div></div>
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
    }
  }/* ,
  render: function (createElement) {
    const header = this.$slots.heading
    const body = this.$slots.default
    const footer = this.$slots.footer
    return createElement('div', [header, body, footer])
  } */
}
</script>
