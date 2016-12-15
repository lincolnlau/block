<template>
  <div class="tworow">
    <form class="form-horizontal" v-if="currentComponent && currentComponent.props" >
      <div v-for="(v, k) in currentComponent.props" class="form-group">
        <label class="col-md-4 control-label">{{v.label}}</label>
        <div class="col-md-8"><input class="form-control" v-model="v._value"/></div>
      </div>
      </from>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'propsEditor',
  data: function () {
    return {
      component: null
    }
  },
  computed: {
    ...mapGetters({
      componentModels: 'componentModels',
      pageComponents: 'pageComponents',
      currentComponent: 'currentComponent',
      componentsMap: 'componentsMap'
    })
  },
  created: function () {
    this.$watch('component', function (newVal, oldVal) {
      const el = document.querySelector('[_uuid="' + newVal._uuid + '"]')
      const component = el && el.__vue__
      Object.keys(newVal.props).forEach(function (key) {
        const prop = newVal.props[key]
        if (component) {
          component.$set(component, key, prop._value)
        }
      })
      // Store.dispatch('setCurrentComponentProps', {_uuid: newVal._uuid, component: component, props: newVal.props})
    }, {deep: true})
    this.$watch('model', function (newVal, oldVal) {
      this.component = JSON.parse(JSON.stringify(this.model))
    })
  }
}
</script>
