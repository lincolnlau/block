<template>
  <div class="tworow">
    <form class="form-horizontal" v-if="currentComponent && currentComponent.props" >
      <div v-for="(v, k) in currentComponent.props" class="form-group">
        <label class="col-md-4 control-label" :title="v.description">{{v.label}}</label>
        <div class="col-md-8" v-if="v.type === 'image'">
          <div class="input-group">
            <input type="text" class="form-control" v-model="v.default">
            <span class="input-group-btn">
              <vue-image v-model="v.default" :class="['btn','btn-primary']" text="上传"/>
            </span>
          </div>
        </div>

        <div class="col-md-8" v-else-if="v.type === 'datetime'">
          <vue-date v-model="v.default"/>
        </div>
        <div class="col-md-8" v-else-if="v.type === 'color'">
          <div class="input-group">
            <input type="text" class="form-control" v-model="v.default">
            <span class="input-group-btn">
              <button class="btn btn-primary">选择</button>
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
        <div class="col-md-8" v-else-if="v.type === 'textarea'">
          <textarea class="form-control" v-model="v.default"></textarea>
        </div>
        <div class="col-md-8" v-else>
          <input type="text" class="form-control" v-model="v.default"/>
        </div>
      </div>
      </from>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import {Chrome} from 'vue-color'
import datepicker from 'vue-date'

export default {
  name: 'propsEditor',
  data: function () {
    return {
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
  components: {
    'chrome-picker': Chrome,
    datepicker

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
    onChange (val, obj) {
      this.color = val
      console.log(obj)
    }
  }
}
</script>
