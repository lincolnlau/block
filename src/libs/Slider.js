export default {
  name: 'elSlider',
  label: 'Slider 滑块',
  description: '通过拖动滑块在一个固定区间内进行选择',
  props:[
    {
      name: 'v-model',
      description: 'v-model',
      type: 'string'
    },
    {
      name: 'min',
      description: '最小值',
      type: 'number',
      default: 0
    },
    {
      name: 'max',
      description: '最大值',
      type: 'number',
      default: 100
    },
    {
      name: 'disabled',
      description: '是否禁用',
      type: 'boolean',
      default: false
    },
    {
      name: 'step',
      description: '步长',
      type: 'number',
      default: 1
    },
    {
      name: 'show-input',
      description: '是否显示输入框',
      type: 'boolean',
      default: false
    },
    {
      name: 'show-stops',
      description: '是否显示间断点',
      type: 'boolean',
      default: false
    }
  ],
  events: [
    {
      name: 'change',
      description:'值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）',
      callbackParams: '改变后的值'
    }
  ]
}
