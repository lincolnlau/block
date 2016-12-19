<template>
  <div class="tworow">
    <form class="form-horizontal" v-if="currentComponent && currentComponent.props" >
      <div v-for="(v, k) in currentComponent.props" class="form-group">
        <label class="col-md-4 control-label">{{v.label}}</label>
        <div class="col-md-8"><input class="form-control" v-model="v.default"/></div>
      </div>
      </from>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'propsEditor',
//  data: function () {
//    return {
//      component: null
//    }
//  },
  computed: {
    ...mapGetters({
      componentModels: 'componentModels',
      pageComponents: 'pageComponents',
      currentComponent: 'currentComponent',
      componentsMap: 'componentsMap'
    })
  }
}
</script>
