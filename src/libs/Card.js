export default {
  name: 'elCard',
  label: 'Card 卡片',
  description: '将信息聚合在卡片容器中展示',
  props:[
    {
      name: 'header',
      description: '设置 header，也可以通过 slot#header 传入 DOM',
      type: 'string'
    },
    {
      name: 'body-style',
      description: '设置 body 的样式',
      default: { padding: '20px' }
    }
  ],
  slots: [
    {
      name: '-',
      description: '可放置Dom元素以及组件'
    }
  ]
}
