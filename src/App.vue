<template>
  <div id="app">
    <div class="leftpanel">
      <component-list :items="componentModels"></component-list>
    </div>
    <div class="mainpanel">
      <simulator class="iphone" :items="pageComponents"></simulator>
    </div>
    <div class="rightpanel">
      <div class="onerow">This is a component's description</div>
      <props-editor :properties="curProps" class="tworow"></props-editor>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ComponentList from './components/ComponentList'
import Simulator from './components/Simulator'
import PropsEditor from './components/PropsEditor'
export default {
  name: 'app',
  data: function () {
    return {
      curProps: [
        {id: 1, text: 'name'},
        {id: 2, text: 'value'},
        {id: 3, text: 'age'}
      ]
      /*,
      components: [
        {
          name: 'textInput'
        },
        {
          name: 'numberInput'
        },
        {
          name: 'date'
        },
        {
          name: 'dateTime'
        },
        {
          name: 'time'
        }
      ],
      selectdItmes: []
      */
    }
  },
  components: {
   //  Hello,
    ComponentList,
    Simulator,
    PropsEditor
  },
  computed: {
    ...mapGetters({
      componentModels: 'componentModels',
      pageComponents: 'pageComponents'
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
}
.rightpanel {
  width:300px;
  flex-direction:column;
  display: flex;
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
</style>
