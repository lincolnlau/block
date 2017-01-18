export default {
  name: 'elInputNumber',
  label: '仅允许输入标准的数字值，可定义范围',
  description: '只需要在el-input-number元素中使用v-model绑定变量即可，变量的初始值即为默认值。',
  props: [
    {
      name: 'v-model',
      label: 'v-model',
      type: 'string'
    },
    {
      name: 'value',
      description: '绑定值',
      type: 'number'
    },
    {
      name: 'min',
      description: '设置计数器允许的最小值',
      type: 'number',
      default: 0
    },
    {
      name: 'max',
      description: '设置计数器允许的最大值',
      type: 'number',
      default: Infinity
    },
    {
      name: 'step',
      description: '计数器步长',
      type: 'number',
      default: 1
    },
    {
      name: 'size',
      description: '计数器尺寸',
      type: 'string',
      acceptValues:[
        'large',
        'small'
      ]
    },
    {
      name: 'disabled',
      description: '是否禁用计数器',
      type: 'boolean',
      default: false
    },
    {
      name: 'controls',
      description: '是否使用控制按钮',
      type: 'boolean',
      default: true
    }
  ],
  events: [
    {
      name: 'change',
      description: '绑定值被改变时触发',
      callbackParams: '最后变更的值'
    }
  ]
}
