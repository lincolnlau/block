export default {
  name: 'elTimeSelect',
  label: 'TimeSelect 固定时间点',
  description: '使用 el-time-select 标签，分别通过star、end和step指定可选的起始时间、结束时间和步长',
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
  definitions: [
    {
      name: 'TimeSelectOption',
      props: [
        {
          name: 'start',
          description: '开始时间',
          type: 'string',
          default: '09:00'
        },
        {
          name: 'end',
          description: '结束时间',
          type: 'string',
          default: '18:00'
        },
        {
          name: 'step',
          description: '间隔时间',
          type: 'string',
          default: '00:15'
        },
        {
          name: 'minTime',
          description: '最小时间，小于该时间的时间段将被禁用',
          type: 'string',
          default: '00:00'
        },
        {
          name: 'maxTime',
          description: '最大时间，大于该时间的时间段将被禁用',
          type: 'string'
        },
        {
          name: '',
          description: '',
          type: 'string',
          default: '09:00'
        }
      ]
    }
  ]
}
