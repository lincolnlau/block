<template>
  <div id="app" class="container">
    <div class="leftpanel"></div>
    <div class="mainpanel">
    </div>
    <div class="rightpanel">
      <div class="onerow">This is a component's description</div>
      <props-editor :properties="curProps" class="onerow"></props-editor>
    </div>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import PropsEditor from './components/PropsEditor'
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: 'app',
  data: function () {
    return {
      curProps: [
        {id: 1, text: 'name'},
        {id: 2, text: 'value'},
        {id: 3, text: 'age'}
      ]
    }
  },
  components: {
   //  Hello,
    PropsEditor
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  align-items: strtch;
}
.leftpanel {
  width:240px;
}
.mainpanel {
  flex:1;
}
.rightpanel {
  width:240px;
  flex-flow:cloumn;
  align-items: stretch;
}

.onerow {
  flex:1;
}
</style>
