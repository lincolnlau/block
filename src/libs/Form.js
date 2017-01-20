export default {
  name: 'elForm',
  label: 'Form 表单',
  description: '由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据',
  props:[
    {
      name: 'model',
      description: '表单数据对象',
      type: 'object'
    },
    {
      name: 'rules',
      description: '表单验证规则',
      type: 'object'
    },
    {
      name: 'inline',
      description: '行内表单模式',
      type: 'boolean',
      default: false
    },
    {
      name: 'label-position',
      description: '表单域标签的位置',
      type: 'string',
      default: 'right',
      acceptValues:[
        'top',
        'left',
        'right'
      ]
    },
    {
      name: 'label-width',
      description: '表单域标签的宽度，所有的 form-item 都会继承 form 组件的 labelWidth 的值',
      type: 'string'
    },
    {
      name: 'label-suffix',
      description: '表单域标签的后缀',
      type: 'string'
    }
  ]
}
