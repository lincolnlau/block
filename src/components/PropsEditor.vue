<template>
  <div>
      <form class="form-horizontal" v-if="component && component.props" >
          <div v-for="(v, k) in component.props" class="form-group">
              <label class="col-md-4 control-label">{{v.label}}</label>
              <div class="col-md-8"><input class="form-control" v-model="v._value"/></div>
          </div>
          <div class="form-group">
              <datepicker v-model="date"></datepicker>
          </div>
      </form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import datepicker from 'vue-date'
export default {
  name: 'propsEditor',
  data: function () {
    return {
      component: null,
      date: '2016-12-19'
    }
  },
  components: {
    datepicker
  },
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
