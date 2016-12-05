<template>
  <div :class="['panel', typeClass]">
    <div slot="heading" class="panel-heading">Heading</div><div class="panel-body" slot>Panel content</div><div slot="footer" class="panel-footer"><slot name="footer">Footer</slot></div>
  </div>
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
  }
}
</script>
