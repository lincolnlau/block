export default {
  name: 'elCollapseItem',
  label: 'Collapse Item 折叠选项',
  description: '折叠选项',
  props: [
    {
      name: 'name',
      description: '唯一标志符',
      type: ['string', 'numer']
    },
    {
      name: 'title',
      description: '面板标题',
      type: 'string'
    }
  ]

}
