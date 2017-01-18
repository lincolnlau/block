export default {
  name: 'elRadioButton',
  label: '按钮样式的单选组合',
  description: '只需要把el-radio元素换成el-radio-button元素即可，此外，Element 还提供了size属性给按钮组，支持large和small两种（如果不设定为默认）。',
  parent: 'elRadioGroup',
  props:[
    {
      name: 'label',
      description: 'Radio 的 value',
      type: ['string', 'number'],
      default: '',
      acceptValues: [

      ]
    },
    {
      name: 'disabled',
      description: '是否禁用',
      type: 'boolean',
      default: false
    }
  ]
}
