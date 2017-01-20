export default {
  name: 'elBadge',
  label: 'Badge 标记',
  description: '出现在按钮、图标旁的数字或状态标记',
  props:[
    {
      name: 'value',
      description: '显示值',
      type: ['string', 'number']
    },
    {
      name: 'max',
      description: '最大值，超过最大值会显示 \'{max}+\'，要求 value 是 Number 类型',
      type: 'number'
    },
    {
      name: 'is-dot',
      description: '小圆点',
      type: 'boolean',
      default: false
    },
    {
      name: 'hidden',
      description: '隐藏 badge',
      type: 'boolean',
      default: false
    }
  ]

}
