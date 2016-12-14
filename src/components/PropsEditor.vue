<template>
<div>
  <form class="form-horizontal" v-if="component && component.props" >
    <div v-for="(v, k) in component.props" class="form-group">
      <label class="col-md-4 control-label">{{v.label}}</label>
      <div class="col-md-8"><input class="form-control" v-model="v._value"/></div>
    </div>
  </from>
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
      const el = document.querySelector('[_uuid="' + newVal._uuid + '"]')
      const compoent = el && el.__vue__
      Object.keys(newVal.props).forEach(function (key) {
        const prop = newVal.props[key]
        if (compoent) {
          compoent.$set(compoent, key, prop._value)
        }
      })
    }, {deep: true})

    this.$watch('model', function (newVal, oldVal) {
      this.component = JSON.parse(JSON.stringify(this.model))
    })
  }
}
</script>
