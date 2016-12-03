<template>
  <div v-draggable:view="{viewComponent: viewComponent, dragged: 'dragged'}">
    <div class="view" slot></div>
  </div>
</template>
<script>
/**
 * viewComponent is a josn object used for describe component
 * {
 *    name: 'div'
 *    props: {
 *
 *    },
 *    slot: {
 *
 *    }
 * }
 */

export default {
  name: 'viewComponent',
  props: {
    viewComponent: {
      type: Object,
      required: true
    }
  },
  mounted: function () {



  }
}
</script>

