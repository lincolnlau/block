export default {
  name: 'elButton',
  label: '常用的操作按钮',
  descrition: '',
  props: [
  {
    name: 'size',
    description: '尺寸',
    type: 'string',
    acceptValues: [
      'large',
      'small',
      'mini'
    ]
  },
  {
    name: 'type',
    description: '类型',
    type: 'string',
    acceptValues: [
      'primary',
      'success',
      'warning',
      'danger',
      'info',
      'text'
    ]
  },
  {
    name: 'plain',
    description: '是否朴素按钮',
    type: 'boolean',
    default: false
  },
  {
    name: 'loading',
    description: '是否加载中状态',
    type: 'boolean',
    default: false
  },
  {
    name: 'disabled',
    description: '是否禁用状态',
    type: 'boolean',
    default: false
  },
  {
    name: 'icon',
    description: '图标，已有的图标库中的图标名',
    type: 'string'
  },
  {
    name: 'autofocus',
    description: '是否默认聚焦',
    type: 'boolean',
    default: false
  },
  {
    name: 'native-type',
    description: '原生 type 属性',
    type: 'string',
    default: 'button',
    acceptValues: [
      'button',
      'submit',
      'reset'
    ]
  }
]
}
