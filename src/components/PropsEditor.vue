<template>
  <div class="tworow">
    <form class="form-horizontal" v-if="currentComponent && currentComponent.props">
      <div v-for="(v, k, index) in currentComponent.props" class="form-group">
        <label class="col-md-4 control-label" :title="v.description">{{v.label}}</label>
        <div class="col-md-8" v-if="v.type === 'image'">
          <div class="input-group">
            <input type="text" class="form-control" v-model="v.default">
            <span class="input-group-btn">
              <vue-core-image-upload v-model="v.default" :class="['btn','btn-primary']" text="上传" :imageuploaded="imageUploaded"></vue-core-image-upload>
            </span>
          </div>
        </div>
        <div class="col-md-8" v-else-if="v.type === 'switch'">
          <label class="radio-inline">
            <input type="radio" :name="k" v-model="v.default"  :value="true">是
          </label>
          <label class="radio-inline">
            <input type="radio" :name="k" v-model="v.default" :value="false">否
          </label>
        </div>
        <div class="form-group" v-else-if="v.type === 'array'">
          <array-component :array-obj="item" :structure="v.items" :array-list="v.default" :index="i" v-for="(item, i) in v.default"></array-component>
          <button type="button" class="btn btn-primary col-md-8" @click="addItem(v)">+</button>
        </div>
        <div class="form-group" v-else-if="v.type === 'object'">
          <object-component :structure="v.items" :obj-default.sync="v.default"></object-component>
        </div>
        <div class="col-md-8" v-else-if="v.type === 'textarea'">
          <textarea class="form-control" v-model="v.default"></textarea>
        </div>
        <div class="col-md-8" v-else-if="v.type === 'datetime'">
          <input type="datetime" v-model="v.default">
          <!--datepicker v-model="v.default"></datepicker-->
        </div>
        <div class="col-md-8" v-else-if="v.type === 'datetime-range'">
          <input type="datetime" v-model="v.default[0]">-<input type="datetime" v-model="v.default[1]">
          <!--datepicker v-model="v.default"></datepicker-->
        </div>
        <div class="col-md-7" v-else-if="v.type === 'color'">
          <div class="input-group">
            <input type="text" class="form-control" v-model="v.default">
            <span class="input-group-btn">
              <button class="btn btn-default" type="button" @click="toggleColorPanel(index, v)">色板</button>
            </span>
          </div>
          <div class="form-group">
            <chrome-picker class="row" v-model="colors" v-show="index == selectedId" @change-color="onChange"></chrome-picker>
          </div>
        </div>
        <div class="col-md-8" v-else-if="v.type === 'number'">
          <input type="number" class="form-control" v-model="v.default"/>
        </div>
        <div class="col-md-8" v-else-if="v.type === 'single-selection'">
          <div class="dropdown">
            <select class="form-control" v-model="singleSelected"  @change="changeSingleSelection(v)">
              <option :value="option.value" v-for="option in v.options">{{option.label}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-8" v-else-if="v.type === 'multiple-selection'">
          <label class="checkbox-inline" v-for="item in v.options">
            <input type="checkbox" v-model="v.default" value="item.value">{{item.name}}
          </label>
        </div>
        <div class="col-md-8" v-else>
          <input type="text" class="form-control" v-model="v.default"/>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import {Chrome} from 'vue-color'
import datepicker from 'vue-date'
import VueCoreImageUpload from 'vue2.x-core-image-upload'
import arrayComponent from './ArrayComponent.vue'
import objectComponent from './ObjectComponent.vue'

export default {
  name: 'propsEditor',
  data: function () {
    return {
      singleSelected: '',
      selectedId: -1,
      arrayList: [],
      objList: {},
      src: '',
      selectedObj: {},
      result1: null,
      colors: {
        hex: '#194d33',
        hsl: {
          h: 150,
          s: 0.5,
          l: 0.2,
          a: 1
        },
        hsv: {
          h: 150,
          s: 0.66,
          v: 0.30,
          a: 1
        },
        rgba: {
          r: 25,
          g: 77,
          b: 51,
          a: 1
        },
        a: 1
      }
    }
  },
  watch: {
    currentComponent (res) {
      let props = res.props
      let items
      let obj
      for (var key in props) {
        if (props[key].type === 'object') {
          items = props[key].items
          obj = props[key].default
          for (var k in items) {
            obj[k] = items[k].default
          }
          props[key].default = JSON.parse(JSON.stringify(obj))
        }
      }
      this.currentComponent.props = JSON.parse(JSON.stringify(props))
    }
  },
  components: {
    'chrome-picker': Chrome,
    datepicker,
    VueCoreImageUpload,
    arrayComponent,
    objectComponent
  },
  computed: {
    ...mapGetters({
      componentModels: 'componentModels',
      pageComponents: 'pageComponents',
      currentComponent: 'currentComponent',
      componentsMap: 'componentsMap'
    })
  },
  methods: {
    addItem (v) {
      var obj = {}
      // var len = v.default.length
      var defaultObj = JSON.parse(JSON.stringify(v.items))
      for (var key in defaultObj) {
        obj[key] = defaultObj[key].default
      }
      v.default.push(JSON.parse(JSON.stringify(obj)))
      this.arrayList.splice(this.arrayList.length, 0, defaultObj)
    },
    toggleColorPanel (index, obj) {
      this.selectedObj = obj
      this.selectedId = this.selectedId === -1 ? index : -1
    },
    onChange (val) {
      this.selectedObj.default = val.hex
    },
    imageUploaded (res) {
      this.src = ''
    },
    changeSingleSelection (v) {
      v.default = this.singleSelected
    }
  }
}
</script>
