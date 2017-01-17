export default {
  name: 'elTooltip',
  label: '',
  description: '',
  props: [
    {
      name: 'effect',
      description: '默认提供的主题',
      type: 'string',
      default: 'dark',
      acceptValues:[
        'dark',
        'light'
      ]
    },
    {
      name: 'content',
      description: '显示的内容，也可以通过 slot#content 传入 DOM',
      type: 'string'
    },
    {
      name: 'placement',
      description: 'Tooltip 的出现位置',
      type: 'string',
      default: 'bottom',
      acceptValues:[
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end'
      ]
    },
    {
      name: 'v-model',
      description: '状态是否可见',
      type: 'boolean',
      default: 'false'
    },
    {
      name: 'disabled',
      description: 'Tooltip 是否可用',
      type: 'boolean',
      default: false
    },
    {
      name: 'offset',
      description: '出现位置的偏移量',
      type: 'number',
      default: 0
    },
    {
      name: 'transition',
      description: '定义渐变动画',
      type: 'string',
      default: 'fade-in-linear'
    },
    {
      name: 'visible-arrow	',
      description: '是否显示 Tooltip 箭头，更多参数可见https://github.com/element-component/vue-popper',
      type: 'Boolean',
      default: true
    },
    {
      name: 'options',
      description: 'popper.js 的参数, 参考 https://popper.js.org/documentation.html',
      type: 'Object',
      default: '{ boundariesElement: 'body', gpuAcceleration: false }'
    },
    {
      name: 'openDelay',
      description: '延迟出现，单位毫秒',
      type: 'number',
      default: 0
    },
    {
      name: 'manual',
      description: '手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效',
      type: 'boolean',
      default: false
    },
    {
      name: 'popper-class',
      description: '为 Tooltip 的 popper 添加类名',
      type: 'String'
    }
  ],
  slots: [
    {
      name: 'content',
      description: '显示的内容'
    }
  ]
}
