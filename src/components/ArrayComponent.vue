<template>
  <div class="array-component" >
    <div v-for="(value, key, i) in structure">
      <div class=" col-md-8" v-if="value.type == 'input'">
        <label class="col-md-6 control-label">{{value.label}}</label>
        <input type="text" class="form-control col-md-2" v-model="arrayObj[key]" :placeholder="value.placeholder"/>
      </div>
      <div class="col-md-8" v-else-if="value.type === 'textarea'">
        <textarea class="form-control" v-model="arrayObj[key]"></textarea>
      </div>
      <div class=" col-md-8" v-else-if="value.type == 'number'">
        <label class="col-md-6 control-label">{{value.label}}</label>
        <input type="number" class="form-control col-md-2" v-model="arrayObj[key]"/>
      </div>
      <div class="col-md-8" v-else-if="v.type === 'image'">
        <div class="input-group">
          <input type="text" class="form-control" v-model="v.default">
            <span class="input-group-btn">
              <vue-core-image-upload v-model="v.default" :class="['btn','btn-primary']" text="上传" :imageuploaded="imageUploaded"></vue-core-image-upload>
            </span>
        </div>
      </div>
      <div class="col-md-8" v-else-if="value.type === 'switch'">
        <label class="radio-inline">
          <input type="radio" :name="k" v-model="arrayObj[key]"  :value="true">是
        </label>
        <label class="radio-inline">
          <input type="radio" :name="k" v-model="arrayObj[key]" :value="false">否
        </label>
      </div>
      <div class="col-md-8" v-else-if="value.type === 'textarea'">
        <textarea class="form-control" v-model="v.default"></textarea>
      </div>
      <div class="col-md-8" v-else-if="value.type === 'datetime'">
        <input type="datetime" v-model="v.default">
      </div>
      <div class="col-md-8" v-else-if="value.type === 'single-selection'">
        <div class="dropdown">
          <select v-model="singleSelected"  @change="changeSingleSelection(arrayObj[key])">
            <option :value="option.value" v-for="option in value.options">{{option.label}}</option>
          </select>
        </div>
      </div>
      <div class="col-md-8" v-else-if="value.type === 'multiple-selection'">
        <label class="checkbox-inline" v-for="item in value.options">
          <input type="checkbox" v-model="arrayObj[key]" value="item.value">{{item.name}}
        </label>
      </div>
      <div class="col-md-7" v-else-if="value.type === 'color'">
        <div class="input-group">
          <input type="text" class="form-control" v-model="arrayObj[key]">
            <span class="input-group-btn">
              <button class="btn btn-default" type="button" @click="toggleColorPanel()">色板</button>
            </span>
        </div>
        <div class="form-group">
          <chrome-picker class="row" v-model="colors" v-show="isVisible" @change-color="onChange"></chrome-picker>
        </div>
      </div>
      <div class="col-md-8" v-else>
        <input type="text" class="form-control" v-model="arrayObj[key]"/>
      </div>
    </div>
    <div class=" col-md-8">
      <button type="button" class="btn btn-warning" @click="deleteItem()">删除</button>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
  import {Chrome} from 'vue-color'
  import datepicker from 'vue-date'
  import VueCoreImageUpload from 'vue2.x-core-image-upload'
  export default{
    props: {
      arrayObj: Object,
      arrayList: Array,
      index: Number,
      structure: Object
    },
    data () {
      return {
        singleSelected: String,
        isVisible: false,
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
      deleteItem () {
        this.arrayList.splice(this.index, 1)
      },
      changeSingleSelection (defaultValue) {
        defaultValue = this.singleSelected
      },
      toggleColorPanel () {
        this.isVisible = !this.isVisible
      }
    },
    components: {
      'chrome-picker': Chrome,
      datepicker,
      VueCoreImageUpload
    }
  }
</script>
