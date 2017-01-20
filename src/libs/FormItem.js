export default {
  name: 'elFormItem',
  label: 'Form-Item 组件',
  description: '在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker',
  props:[
    {
      name: 'prop',
      description: '表单域 model 字段. 传入 Form 组件的 model 中的字段',
      type: 'string'
    },
    {
      name: 'label',
      description: '标签文本',
      type: 'string'
    },
    {
      name: 'label-width',
      description: '表单域标签的的宽度，例如 \'50px\'',
      type: 'string'
    },
    {
      name: 'required',
      description: '是否必填，如不设置，则会根据校验规则自动生成',
      type: 'bolean',
      default: false
    },
    {
      name: 'rules',
      description: '表单验证规则',
      type: 'object'
    },
    {
      name: 'error',
      description: '表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息',
      type: 'string'
    }
  ]
}
