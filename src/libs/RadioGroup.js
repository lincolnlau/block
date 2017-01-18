export default {
  name: 'elRadioGroup',
  label: '适用于在多个互斥的选项中选择的场景',
  description: '结合el-radio-group元素和子元素el-radio可以实现单选组，在el-radio-group中绑定v-model，在el-radio中设置好label即可，无需再给每一个el-radio绑定变量，另外，还提供了change事件来响应变化，它会传入一个参数value。',
  children: ['elRadio', 'elRadioButton'],
  props: [
    {
      name: 'v-model',
      description: 'v-model',
      type: 'string'
    },
    {
      name: 'size',
      description: 'Radio 按钮组尺寸',
      type: 'string',
      acceptValues: [
        'smarll',
        'large'
      ]
    },
    {
      name: 'fill',
      description: '按钮激活时的填充色和边框色',
      type: 'string',
      default: '#20a0ff'
    },
    {
      name: 'text-color',
      description: '按钮激活时的文本颜色',
      type: '#ffffff'
    }
  ],
  events: [
    {
      name: 'change',
      description: '绑定值变化时触发的事件',
      callbackParams: '选中的 Radio label 值'
    }
  ]
}
