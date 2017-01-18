export default {
  name: 'elSwitch',
  label: 'Switch 开关',
  description: '表示两种相互对立的状态间的切换，多用于触发「开/关」。',
  props:[
    {
      name: 'v-model',
      description: 'v-model',
      type: 'string'
    },
    {
      name: 'width',
      description: 'switch 的宽度（像素）,58（有文字）/ 46（无文字）',
      type: 'number',
      // default: '58',
      default: false
    },
    {
      name: 'disabled',
      description: '是否禁用',
      type: 'boolean',
      default: false
    },
    {
      name: 'on-icon-class',
      description: 'switch 打开时所显示图标的类名，设置此项会忽略 on-text',
      type: 'string'
    },
    {
      name: 'off-icon-class',
      description: 'switch 关闭时所显示图标的类名，设置此项会忽略 off-text',
      type: 'string'
    },
    {
      name: 'on-text',
      description: 'switch 打开时的文字',
      type: 'string',
      default: 'ON'
    },
    {
      name: 'off-text',
      description: 'switch 关闭时的文字',
      type: 'string',
      default: 'OFF'
    },
    {
      name: 'on-color',
      description: 'switch 打开时的背景色',
      type: 'string',
      default: '#20A0FF'
    },
    {
      name: 'off-color',
      description: 'switch 关闭时的背景色',
      type: 'string',
      default: '#C0CCDA'
    },
    {
      name: 'name',
      description: 'switch 对应的 name 属性',
      type: 'string'
    }
  ],
  events: [
    {
      name: 'change',
      description:'switch 状态发生变化时的回调函数',
      callbackParams: '新状态的布尔值'
    }
  ]
}
