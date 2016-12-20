<template>
<div>
  <div class="heading">组件库</div>
  <div class="componentlist-body">
    <div class="list-group componentList" >
      <button class="list-group-item" v-for="item in componentModels" v-draggable:x="{dragged: 'dragged', data: item}">{{item.label || item.name}}</button>
    </div>
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'componentList',
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

<style>
.heading {
  color: #333;
  background-color: #f5f5f5;
  /* border-bottom: 1px solid #ccc; */
  padding: 10px 15px;
}

.componentlist-body {
  padding: 0;
  text-align: left;
}

.componentlist-body  .list-group-item{
  border-radius: 0;
  border-right: 0px none transparent;
}

html, body {
  height: 100%;
  margin: 0;
}

.iphone {
  width: 320px;
  height: 568px;
  border: 1px solid #ccc;
  margin:40px auto;
  overflow: auto;
}
</style>
