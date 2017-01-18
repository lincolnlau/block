export default {
  name: 'elAutocomplete',
  label: '',
  description: '',
  props: [
    {
      name: 'v-model',
      label: 'v-model',
      type: 'string'
    },
    {
      name: 'placeholder',
      description: '输入框占位文本',
      type: 'string'
    },
    {
      name: 'disabled',
      description: '禁用',
      type: 'boolean',
      default: false
    },
    {
      name: 'value',
      description: '必填值输入绑定值',
      type: 'string'
    },
    {
      name: 'custom-item',
      description: '通过该参数指定自定义的输入建议列表项的组件名',
      type: '',
      default: 'string'
    },
    {
      name: 'fetch-suggestions',
      description: '返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它',
      type: 'Function(queryString, callback)'
    },
    {
      name: 'popper-class',
      description: 'Autocomplete 下拉列表的类名',
      type: 'string'
    },
    {
      name: 'trigger-on-focus',
      description: '是否在输入框 focus 时显示建议列表',
      type: 'boolean',
      default: false
    }
  ],
  events: [
    {
      name: 'select',
      description: '点击选中建议项时触发',
      callbackParams: '选中建议项'
    }
  ]
}
