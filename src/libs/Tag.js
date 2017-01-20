export default {
  name: 'elTag',
  label: '',
  description: '',
  props: [
    {
      name: 'type',
      description: '主题',
      type: 'string',
      acceptValues:[
        'primary',
        'gray',
        'success',
        'warning',
        'danger'
      ]
    },
    {
      name: 'closable',
      description: '是否可关闭',
      type: 'boolean',
      default: false
    },
    {
      name: 'close-transition',
      description: '是否禁用关闭时的渐变动画',
      type: 'boolean',
      default: false
    },
    {
      name: 'hit',
      description: '是否有边框描边',
      type: 'boolean',
      default: false
    },
    {
      name: 'color',
      description: '背景色',
      type: 'string'
    }
  ],
  events:[
    {
      name: 'close',
      description: '关闭tag时触发的事件'
    }
  ]
}
