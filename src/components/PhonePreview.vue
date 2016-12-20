<template>
  <div slot class="preview" v-dropzone:x ></div>
</template>
<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  .preview {
    width: 320px;
    height: 568px;
    border: 1px solid #ccc;
    overflow: auto;
  }
</style>
<script>
  import { mapGetters } from 'vuex'
  export default{
    name: 'phonePreview',
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
