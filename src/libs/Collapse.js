export default {
  name: 'elCollapse',
  label: 'Collapse 折叠面板',
  description: '通过折叠面板收纳内容区域',
  props: [
    {
      name: 'accordion',
      description: '是否手风琴模式',
      type: 'boolean',
      default: false
    },
    {
      name: 'value',
      description: '当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)',
      type: ['string', 'array']
    }
  ],
  events: [
    {
      name: 'change',
      description: '当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)',
      callbackParams: '(activeNames: array|string)'
    }
  ]
}
