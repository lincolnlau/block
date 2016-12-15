<template>
<div>
  <div class="heading">组件库</div>
  <div class="componentlist-body">
    <div class="list-group componentList" >
      <button class="list-group-item" v-for="item in componentModels" v-draggable:x="{dragged: 'dragged', data: item}">{{item.name}}</button>
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

/* Prevent the text contents of draggable elements from being selectable. */
[draggable] {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  /* Required to make elements draggable in old WebKit */
  -khtml-user-drag: element;
  -webkit-user-drag: element;
}

.__slot {
  border: 1px dashed #ccc !important;
  min-height:10px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  height: 100%;
  border: 1px solid #ccc;
}
.leftpanel {
  width:240px;
}
.mainpanel {
  flex:1;
  border: 1px solid #ccc;
  border-width: 0 1px;
  flex-direction:row;
  display: flex;
}
.rightpanel {
  width:300px;
  flex-direction:column;
  display: flex;
}

.onecloumn {
  display: flex;
  flex: 1;
}

.onerow {
  display:flex;
  flex:1;
  border-top: 1px solid #ccc;
  padding:10px 5px 10px 5px;
}

.tworow {
  display:flex;
  flex:2;
  border-top: 1px solid #ccc;
  padding:10px 5px 10px 5px;
}

.dragged {
  opacity: 0.4;
  color: black;
}
.x {
  border: 2px dashed #ddd;
}
</style>
