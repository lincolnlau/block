<template>
<div>
  <form class="form-horizontal">
    <div v-for="item in properties" class="form-group">
      <label class="col-md-4 control-label">{{item.text}}</label>
      <div class="col-md-8"><input class="form-control"/></div>
    </div>
  </from>
</div>
</template>
<script>
export default {
  name: 'propsEditor',
  props: {
    properties: {
      type: Array,
      required: true
    }
  }
}
</script>
