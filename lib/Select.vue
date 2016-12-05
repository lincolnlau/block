<template>
  <select>
    <slot></slot>
  </select>
</template>
<style>
</style>
<script>
export default{
  name: 'select',
  props: {
    "options": {
      type: Array
    },
    "optionLabel": {
      type:String
    },
    "optionValue": {
      type:String
    }
    "multiple": {
      type: Boolean
    }
  }
}
</script>
