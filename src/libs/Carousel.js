export default {
  name: 'elCarousel',
  label: 'Carousel 走马灯',
  description: '在有限空间内，循环播放同一类型的图片、文字等内容',
  props: [
    {
      name: 'height',
      description: '走马灯的高度',
      type: 'number',
      default: 300
    },
    {
      name: 'initial-index',
      description: '初始状态激活的幻灯片的索引，从 0 开始',
      type: 'number',
      default: 0
    },
    {
      name: 'trigger',
      description: '指示器的触发方式',
      type: 'string',
      default: 'click'
    },
    {
      name: 'autoplay',
      description: '是否自动切换',
      type: 'boolean',
      default: true
    },
    {
      name: '',
      description: '',
      type: '',
      default: '',
      acceptValues:[]
    },
    {
      name: 'interval',
      description: '自动切换的时间间隔，单位为毫秒',
      type: 'number',
      default: 3000
    },
    {
      name: 'indicator-position',
      description: '指示器的位置',
      type: 'string',
      acceptValues:[
        'outside',
        'none'
      ]
    },
    {
      name: 'arrow',
      description: '切换箭头的显示时机',
      type: 'string',
      default: 'hover',
      acceptValues:[
        'always',
        'hover',
        'never'
      ]
    },
    {
      name: 'type',
      description: '走马灯的类型,当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格',
      type: 'string',
      acceptValues:[
        'card'
      ]

  ],
  events: [
    {
      name: 'change',
      description: '幻灯片切换时触发',
      callbackParams: '目前激活的幻灯片的索引，原幻灯片的索引'
    }
  ]
}
