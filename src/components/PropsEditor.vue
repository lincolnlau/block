<template>
  <div class="tworow">
    <form class="form-horizontal" v-if="currentComponent && currentComponent.props">
      <div v-for="(v, k, index) in currentComponent.props" class="form-group">
        <label class="col-md-4 control-label" :title="v.description">{{index}}-{{v.label}}</label>
        <div class="col-md-8" v-if="v.type === 'image'">
          <div class="input-group">
            <input type="text" class="form-control" v-model="v.default">
            <span class="input-group-btn">
              <vue-core-image-upload v-model="v.default" :class="['btn','btn-primary']" text="上传" :imageuploaded="imageUploaded"></vue-core-image-upload>
            </span>
          </div>
        </div>

        <div class="col-md-8" v-else-if="v.type === 'datetime'">
          <vue-date v-model="v.default"/>
        </div>
        <div class="col-md-8" v-else-if="v.type === 'switch'">
          <label class="radio-inline">
            <input type="radio" :name="k" v-model="v.default"  :value="true">是
          </label>
          <label class="radio-inline">
            <input type="radio" :name="k" v-model="v.default" :value="false">否
          </label>
        </div>
        <div class="col-md-16" v-else-if="v.type === 'array'">
          <array-component :array-obj="v" :array-list="arrayList" :index="index" v-for="(item, i) in arrayList"></array-component>
          <button type="button" class="btn-primary" @click="addItem">+</button>
        </div>
        <div class="col-md-8" v-else-if="v.type === 'textarea'">
          <textarea class="form-control" v-model="v.default"></textarea>
        </div>
        <div class="col-md-8" v-else-if="v.type === 'datetime'">
          <datepicker v-model="dateTime"></datepicker>
        </div>
        <div class="col-md-8" v-else-if="v.type === 'color'">
          <input type="text" v-model="v.default"><button type="button" class="btn-primary" @click="toggleColorPanel(index)">色板</button>
          <chrome-picker v-model="colors" v-show="" @change-color="onChange"></chrome-picker>
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

export default {
  name: 'propsEditor',
  data: function () {
    return {
      arrayList: [],
      src: '',
      selectedColor: '',
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
      console.log(JSON.stringify(res))
    }
  },
  components: {
    'chrome-picker': Chrome,
    datepicker,
    VueCoreImageUpload,
    arrayComponent
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
    addItem () {

    },
    toggleColorPanel () {

    },
    onChange (val) {
      this.selectedColor = val.hex
      console.log('default' + val.hex + 'color:' + this.colors.hex)
    },
    imageUploaded (res) {
      this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png'
    }
  }
}
</script>
