export default {
  name: 'elProgress',
  label: 'Progress 进度条',
  description: '用于展示操作进度，告知用户当前状态和预期',
  props: [
    {
      name: 'percentage',
      description: '百分比（必填）, 0 - 100',
      type: 'number',
      default: 0
    },
    {
      name: 'type',
      description: '进度条类型',
      type: 'string',
      default: 'line',
      acceptValues: [
        'line',
        'circle'
      ]
    },
    {
      name: 'stroke-width',
      description: '进度条的宽度，单位 px',
      type: 'number',
      default: 6
    },
    {
      name: 'text-inside',
      description: '进度条显示文字内置在进度条内（只在 type=line 时可用）',
      type: 'boolean',
      default: 'false'
    },
    {
      name: 'status',
      description: '进度条当前状态',
      type: 'string',
      acceptValues: [
        'success',
        'exception'
      ]
    },
    {
      name: 'width',
      description: '环形进度条画布宽度（只在 type=circle 时可用）',
      type: 'number',
      default: 126
    },
    {
      name: 'show-text',
      description: '是否显示进度条文字内容',
      type: 'boolean',
      default: true
    }
  ]
}
