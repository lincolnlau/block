<template>
  <div class="array-component row">
    <div class="form-group">
      <label class="col-md-4 control-label">{{arrayObj.items.name.label}}</label>
      <input type="text" class="form-control col-md-4" v-model="arrayObj.items.name.default" :placeholder="arrayObj.items.name.placeholder"/>
    </div>
    <div class="form-group">
      <label class="col-md-4 control-label">{{arrayObj.items.href.label}}</label>
      <input type="text" class="form-control col-md-4" v-model="arrayObj.items.href.default" :placeholder="arrayObj.items.href.placeholder"/>
    </div>
    <button type="button" class="btn btn-warning" @click="deleteItem()">删除</button>
  </div>
</template>
<style scoped>

</style>
<script>
    export default{
      props: {
        arrayObj: Object,
        arrayList: Array,
        index: Number
      },
      methods: {
        deleteItem () {
          this.arrayList.splice(this.index, 1)
        }
      }
    }
</script>
