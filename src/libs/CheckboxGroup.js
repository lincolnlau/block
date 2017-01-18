export default {
  name: 'elCheckboxGroup',
  props:[
    {
      name: 'v-model',
      label: 'v-model',
      type: 'string'
    }
  ],
  events:[
    {
      name: 'change',
      description: '当绑定值变化时触发的事件',
      callbackParams: 'event 事件对象'
    }
  ]
}
