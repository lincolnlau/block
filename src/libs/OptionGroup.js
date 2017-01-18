export default {
  name: 'elOptionGrop',
  label: '分组',
  description: '备选项进行分组展示',
  props: [
    {
      name: 'label',
      description: '分组的组名',
      type: 'string'
    },
    {
      name: 'disabled',
      description: '是否将该分组下所有选项置为禁用',
      type: 'boolean',
      default: false
    }
  ]
}
