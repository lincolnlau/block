<template>
  <div class="object-component" >
    <div  v-for="(value, key, index) in structure"><label class="col-md-6 control-label">{{value.label}}</label>
      <div class=" col-md-6" v-if="value.type == 'input'">
        <input type="text" class="form-control col-md-2" v-model="objDefault[key]" :placeholder="value.placeholder"/>
      </div>
      <div class="col-md-6" v-else-if="value.type === 'textarea'">
        <textarea class="form-control" v-model="objDefault[key]"></textarea>
      </div>
      <div class=" col-md-6" v-else-if="value.type == 'number'">
        <input type="number" class="form-control col-md-2" v-model="objDefault[key]"/>
      </div>
      <div class="col-md-6" v-else-if="value.type === 'switch'">
        <label class="radio-inline">
          <input type="radio" :name="k" v-model="objDefault[key]"  :value="true">是
        </label><label class="radio-inline">
          <input type="radio" :name="k" v-model="objDefault[key]" :value="false">否
        </label>
      </div>
      <div class="col-md-6" v-else-if="value.type === 'image'">
        <div class="input-group">
          <input type="text" class="form-control" v-model="v.default">
            <span class="input-group-btn">
              <vue-core-image-upload v-model="objDefault[key]" :class="['btn','btn-primary']" text="上传" :imageuploaded="imageUploaded"></vue-core-image-upload>
            </span>
        </div>
      </div>
      <div class="col-md-6" v-else-if="value.type === 'datetime'">
        <input type="datetime" v-model="objDefault[key]">
      </div>
      <div class="col-md-6" v-else-if="value.type === 'datetime-range'">
        <input type="datetime" v-model="objDefault[key][0]">-<input type="datetime" v-model="objDefault[key][1]">
      </div>
      <div class="col-md-6" v-else-if="value.type === 'single-selection'">
        <div class="dropdown">
          <select v-model="singleSelected"  @change="changeSingleSelection(objDefault[key])">
            <option :value="option.value" v-for="option in value.options">{{option.label}}</option>
          </select>
        </div>
      </div>
      <div class="col-md-6" v-else-if="value.type === 'color'">
        <div class="input-group">
          <input type="text" class="form-control" v-model="objDefault[key]">
            <span class="input-group-btn">
              <button class="btn btn-default" type="button" @click="toggleColorPanel(key, index)">色板</button>
            </span>
        </div>
        <div class="form-group">
          <chrome-picker class="row" v-model="colors" v-show="selectedId == index" @change-color="onChange"></chrome-picker>
        </div>
      </div>
      <div class="col-md-6" v-else>
        <input type="text" class="form-control" v-model="objDefault[key]"/>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .object-component{
    display: block;
    overflow: hidden;
    margin-top: 25px;
    position: relative;
    left: -23px;
    width: 100%;
  }
</style>
<script>
  import {Chrome} from 'vue-color'
  import datepicker from 'vue-date'
  import VueCoreImageUpload from 'vue2.x-core-image-upload'
  export default{
    props: {
      objDefault: Object,
      structure: Object
    },
    data () {
      return {
        selectedId: -1,
        singleSelected: '',
        isVisible: false,
        objName: '',
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
    methods: {
      changeSingleSelection (defaultValue) {
        defaultValue = this.singleSelected
      },
      toggleColorPanel (key, index) {
        this.isVisible = !this.isVisible
        this.objName = key // 缓存改变颜色的属性名称
        this.selectedId = this.selectedId === -1 ? index : -1
      },
      onChange (val) {
        this.objDefault[this.objName] = val.hex
        console.log(this.objName)
        console.log(this.objDefault[this.objName])
      }
    },
    components: {
      'chrome-picker': Chrome,
      datepicker,
      VueCoreImageUpload
    }
  }
</script>
