<template>
<div slot class="preview" v-dropzone:x ></div>
</template>
<style>
.preview {
  width: 320px;
  height: 568px;
  border: 1px solid #ccc;
  margin:40px auto;
  overflow: auto;
}
</style>
<script>
  import { mapGetters } from 'vuex'
  export default{
    name: 'preview',
    computed: {
      ...mapGetters({
        componentModels: 'componentModels',
        pageComponents: 'pageComponents',
        currentComponent: 'currentComponent',
        componentsMap: 'componentsMap'
      })
    }
  }
</script>
