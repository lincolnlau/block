export default {
  name: 'elCarouselItem',
  label: 'Carousel 走马灯展示项',
  description: 'Carousel 走马灯展示项',
  props: [
    {
      name: 'name',
      description: '幻灯片的名字，可用作 setActiveItem 的参数',
      type: 'string'
    }
  ],
  slots: [
    {
      name: '-',
      description: '可放置Dom元素以及组件'
    }
  ]
}
