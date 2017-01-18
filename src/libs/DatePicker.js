export default {
  name: 'elDatePicker',
  label: 'DatePicker 日期选择器',
  description: '用于选择或输入日期',
  props:[
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
      acceptValues: [
        'large',
        'small',
        'mini'
      ]
    },
    {
      name: 'placeholder',
      description: '占位内容	',
      type: 'string',
      default: false
    },
    {
      name: 'type',
      description: '显示类型',
      type: 'string',
      default: 'date',
      acceptValues: [
        'year',
        'month',
        'date',
        'week',
        'datetime',
        'datetimerange',
        'daterange'
      ]
    },
    {
      name: 'format',
      description: '时间日期格式化, 年 yyyy，月 MM，日 dd，小时 HH，分 mm，秒 ss',
      type: 'string',
      default: 'yyyy-MM-dd'
    },
    {
      name: 'align',
      description: '对齐方式',
      type: 'string',
      default: 'left',
      acceptValues: [
        'left',
        'center',
        'right'
      ]
    },
    {
      name: 'popper-class',
      description: 'DatePicker 下拉框的类名',
      type: 'string'
    },
    {
      name: 'picker-options',
      description: '当前时间日期选择器特有的选项参考下表',
      type: 'PickerOptions',
      default: {}
    }
  ],
  events: [],
  definitions:[
    {
      name: 'PickerOptions',
      props: [
        {
          name: 'shortcuts',
          description: '设置快捷选项，需要传入 { text, onClick } ',
          type: 'Shortcuts'
        },
        {
          name: 'disabledDate',
          description: '设置禁用状态，参数为当前日期，要求返回 Boolean',
          type: 'function'
        },
        {
          name: 'firstDayOfWeek',
          description: '周起始日',
          type: 'number',
          accepts: [1, 2, 3, 4, 5, 6, 7]
        }
      ]
    },
    {
      name: 'Shortcuts',
      props: [
        {
          name: 'text',
          description: '标题文本',
          type: 'string'
        },
        {
          name: 'onClick',
          description: '选中后的回调函数，参数是 vm，可通过触发 \'pick\' 事件设置选择器的值。例如 vm.$emit('pick', new Date())',
          type: 'function'
        }
      ]
    }
  ],
  events: [
    {
      name: 'change',
      description: '当 input 的值改变时触发，返回值和文本框一致',
      callbackParams: '格式化后的值'
    }
  ]
}
