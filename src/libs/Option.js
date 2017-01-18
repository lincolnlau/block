export default {
  name: 'elOption',
  label: '选项',
  description: '选项',
  props: [
    {
      name: 'value',
      description: '选项的值',
      type: ['string', 'number', 'object']
    },
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
