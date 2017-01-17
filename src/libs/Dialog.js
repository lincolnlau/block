export default {
  name: 'elDialog',
  label: '',
  description: '',
  props: [
    {
      name: 'title',
      description: 'Dialog 的标题',
      type: 'string'
    },
    {
      name: 'size',
      description: 'Dialog 的大小',
      type: 'string',
      default: 'small',
      acceptValues:[
        'tiny',
        'small',
        'large',
        'full'
      ]
    },
    {
      name: 'top',
      description: 'Dialog CSS 中的 top 值（仅在 size 不为 full 时有效）',
      type: 'string',
      default: '15%'
    },
    {
      name: 'modal',
      description: '是否需要遮罩层',
      type: 'boolean',
      default: true
    },
    {
      name: 'lock-scroll',
      description: '是否在 Dialog 出现时将 body 滚动锁定',
      type: 'boolean',
      default: true
    },
    {
      name: 'custom-class',
      description: 'Dialog 的自定义类名',
      type: 'string'
    },
    {
      name: 'close-on-click-modal',
      description: '是否可以通过点击 modal 关闭 Dialog',
      type: 'boolean',
      default: true
    },
    {
      name: 'close-on-press-escape',
      description: '是否可以通过按下 ESC 关闭 Dialog',
      type: 'boolean',
      default: true
    },
    {
      name: 'show-close',
      description: '是否显示关闭按钮',
      type: 'boolean',
      default: true
    }
  ],
  events: [
    {
      name: 'open',
      description: '打开当前实例'
    },
    {
      name: 'close',
      description: '关闭当前实例'
    }
  ],
  slots:[
    {
      name: '-',
      description: 'Dialog 的内容'
    },
    {
      name: 'footer',
      description: 'Dialog 按钮操作区的内容'
    }
  ]
}
