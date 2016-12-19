<template>
  <div>
      <form class="form-horizontal" v-if="component && component.props" >
          <div v-for="(v, k) in component.props" class="form-group">
              <label class="col-md-4 control-label">{{v.label}}</label>
              <div class="col-md-8"><input class="form-control" v-model="v._value"/></div>
          </div>
      </form>
  </div>
</template>
<script>
export default {
  name: 'propsEditor',
  data: function () {
    return {
      component: null
    }
  },
  props: {
    model: {
      type: Object,
      default: {}
    }
  },
  created: function () {
    this.$watch('component', function (newVal, oldVal) {
      console.log('props changed')
    }, {deep: true})
    this.$watch('model', function (newVal, oldVal) {
      this.component = JSON.parse(JSON.stringify(this.model))
    })
  }
}
</script>
