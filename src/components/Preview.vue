<template>
<div slot class="preview" v-dropzone:x></div>
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
  export default{
    name: 'preview'
  }
</script>
