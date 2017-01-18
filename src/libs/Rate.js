export default {
  name: 'elRate',
  label: 'Rate 评分',
  description: '评分组件',
  props:[
    {
      name: 'max',
      description: '最大分值',
      type: 'number',
      default: 5
    },
    {
      name: 'disabled',
      description: '是否为只读',
      type: 'boolean',
      default: false
    },
    {
      name: 'allow-half',
      description: '是否允许半选',
      type: 'boolean',
      default: false
    },
    {
      name: 'low-threshold',
      description: '低分和中等分数的界限值，值本身被划分在低分中',
      type: 'number',
      default: 2
    },
    {
      name: 'high-threshold',
      description: '高分和中等分数的界限值，值本身被划分在高分中',
      type: 'number',
      default: 3
    },
    {
      name: 'colors',
      description: 'icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色',
      type: 'array',
      default: ['#F7BA2A', '#F7BA2A', '#F7BA2A']
    },
    {
      name: 'void-color',
      description: '未选中 icon 的颜色',
      type: 'string',
      default: '#C6D1DE'
    },
    {
      name: 'disabled-void-color',
      description: '只读时未选中 icon 的颜色',
      type: 'string',
      default: '#EFF2F7'
    },
    {
      name: 'icon-classes',
      description: 'icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名',
      type: 'array',
      default: ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']
    },
    {
      name: 'void-icon-class',
      description: '未选中 icon 的类名',
      type: 'string',
      default: 'el-icon-star-off'
    },
    {
      name: 'disabled-void-icon-class',
      description: '只读时未选中 icon 的类名',
      type: 'string',
      default: 'el-icon-star-on'
    },
    {
      name: 'show-text',
      description: '是否显示辅助文字',
      type: 'boolean',
      default: false
    },
    {
      name: 'text-color',
      description: '辅助文字的颜色',
      type: 'string',
      default: '#1F2D3D'
    },
    {
      name: 'texts',
      description: '辅助文字数组',
      type: 'array',
      default: ['极差', '失望', '一般', '满意', '惊喜']
    }
  ],
  events:[
    {
      name: 'change',
      description: '分值改变时触发',
      callbackParams: '改变后的分值'
    }
  ]
}
