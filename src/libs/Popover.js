export default {
  name: 'elPopover',
  label: '',
  description: '',
  props:[
    {
      name: 'trigger',
      description: '触发方式',
      type: 'string',
      default: 'click',
      acceptValues:[
        'click',
        'focus',
        'hover',
        'manual'
      ]
    },
    {
      name: 'title',
      description: '标题',
      type: 'string'
    },
    {
      name: 'content',
      description: '显示的内容，也可以通过 slot 传入 DOM',
      type: 'String'
    },
    {
      name: 'width',
      description: '宽度,最小宽度 150px',
      type: ['string', 'number'],
      default: '150px'
    },
    {
      name: 'placement',
      description: '出现位置',
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
      name: 'disabled',
      description: 'Popover 是否可用',
      type: 'boolean',
      default: false
    },
    {
      name: 'value',
      description: '状态是否可见',
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
      name: 'popper-class',
      description: '为 popper 添加类名',
      type: 'String'
    }
  ],
  events: [
    {
      name: 'show',
      description: '显示时触发',
      callbackParams: '无参数'
    },
    {
      name: 'hide',
      description: '显示时触发',
      callbackParams: '隐藏时触发'
    }
  ],
  slots: [
    {
      name: '-',
      description: 'Popover 内嵌 HTML 文本'
    },
    {
      name: 'reference',
      description: '触发 Popover 显示的 HTML 元素'
    }
  ]
}
