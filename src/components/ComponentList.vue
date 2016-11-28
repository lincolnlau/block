<template>
<div>
  <div class="heading">组件库</div>
  <div class="componentlist-body">
    <div class="list-group" v-dragula="items" bag="simulator">
      <button class="list-group-item" v-for="item in items">{{item.name}}</button>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'componentList',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  create: function () {
    // console.log()
  }
}
</script>

<style>
.heading {
  color: #333;
  background-color: #f5f5f5;
  /* border-bottom: 1px solid #ccc; */
  padding: 10px 15px;
}

.componentlist-body {
  padding: 0;
  text-align: left;
}

.componentlist-body  .list-group-item{
  border-radius: 0;
  border-right: 0px none transparent;
}
</style>
