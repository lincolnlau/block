<template>
  <div id="app">
    <div class="leftpanel">
      <component-list :items="componentModels"></component-list>
    </div>
    <div class="mainpanel">
      <div class="onecloumn"><simulator class="iphone" :items="pageComponents"></simulator></div>
      <div class="onecloumn"><preview></preview></div>
    </div>
    <div class="rightpanel">
      <div class="onerow">This is a component's description</div>
      <props-editor :model="currentComponent" class="tworow"></props-editor>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ComponentList from './components/ComponentList'
import Simulator from './components/Simulator'
import Preview from './components/Preview'
import PropsEditor from './components/PropsEditor'

export default {
  name: 'app',
  components: {
   //  Hello,
    ComponentList,
    Simulator,
    Preview,
    PropsEditor
  },
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
