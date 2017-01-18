export default {
  name: 'elTimePicker',
  label: 'TimePicker 任意时间点',
  description: '使用 el-time-picker 标签，通过selectableRange限制可选时间范围',
  props:[
    {
      name: 'v-model',
      description: 'v-model',
      type: 'string'
    },
    {
      name: 'readonly',
      description: '完全只读',
      type: 'boolean',
      default: false
    },
    {
      name: 'disabled',
      description: '禁用',
      type: 'boolean',
      default: false
    },
    {
      name: 'editable',
      description: '文本框可输入',
      type: 'boolean',
      default: true
    },
    {
      name: 'clearable',
      description: '是否显示清除按钮',
      type: 'boolean',
      default: true
    },
    {
      name: 'size',
      description: '输入框尺寸',
      type: 'string',
      acceptValues:[
        'large',
        'small',
        'mini'
      ]
    },
    {
      name: 'placeholder',
      description: '占位内容',
      type: 'string'
    },
    {
      name: 'format',
      description: '时间格式化, 小时：HH，分：mm，秒：ss',
      type: 'string',
      default: 'HH:mm:ss'
    },
    {
      name: 'value',
      description: '绑定值',
      type: 'TimePicker: DateTimeSelect: String'
    },
    {
      name: 'align',
      description: '对齐方式',
      type: 'string',
      default: 'left',
      acceptValues:[
        'left',
        'center',
        'right'
      ]
    },
    {
      name: 'popper-class',
      description: 'TimePicker 下拉框的类名',
      type: 'string'
    },
    {
      name: 'picker-options',
      description: '当前时间日期选择器特有的选项',
      type: 'TimeSelectOption',
      default: {}
    }
  ],
  events:[
    {
      name: 'change',
      description:'当 input 的值改变时触发，返回值和文本框一致',
      callbackParams: 'formatted value'
    }
  ],
  definitions:[
    {
      name: 'TimePickerOptions',
      props: [
        {
          name: 'selectableRange',
          description: '可选时间段，例如\'18:30:00 - 20:30:00\'或者传入数组[\'09:30:00 - 12:00:00\', \'14:30:00 - 18:30:00\']',
          type: ['string', 'array']
        }
      ]

    }
  ]
}
