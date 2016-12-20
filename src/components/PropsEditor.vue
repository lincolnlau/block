<template>
  <div class="tworow">
    <form class="form-horizontal" v-if="currentComponent && currentComponent.props">
      <div v-for="(v, k) in currentComponent.props" class="form-group">
        <label class="col-md-4 control-label">{{v.label}}</label>
        <div class="col-md-8"><input class="form-control" v-model="v.default"/></div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label">时间</label>
        <div class="col-md-4 control-label"><datepicker v-model="dateTime"></datepicker></div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label">颜色 <div class="bg-color" :style="{'background-color':bgc}">当前颜色</div></label>
        <div class="col-md-8">
          <chrome-picker v-model="colors" @change-color="onChange"></chrome-picker>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import datepicker from 'vue-date'
import {Chrome} from 'vue-color'
let defaultProps = {
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

export default {
  name: 'propsEditor',
  data: function () {
    return {
      dateTime: '',
      colors: defaultProps
    }
  },
  watch: {
    currentComponent (res) {
      console.log(JSON.stringify(res))
    },
    colors (res) {
      console.log(res.hex)
    }
  },
  components: {
    datepicker,
    'chrome-picker': Chrome
  },
  methods: {
    onOk () {
      console.log('ok')
    },
    onCancel () {
      console.log('cancel')
    },
    onChange (val) {
      this.colors = val
    }
  },
  computed: {
    ...mapGetters({
      componentModels: 'componentModels',
      pageComponents: 'pageComponents',
      currentComponent: 'currentComponent',
      componentsMap: 'componentsMap'
    }),
    bgc () {
      return this.colors.hex
    }
  }
}
</script>
