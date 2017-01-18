export default {
  name: 'elCheckbox',
  label: '单独使用可以表示两种状态之间的切换',
  description: '在el-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。',
  props: [
    {
      name: 'v-model',
      label: 'v-model',
      type: 'string'
    },
    {
      name: 'label',
      description: '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）',
      type: 'string'
    },
    {
      name: 'true-label',
      description: '选中时的值',
      type: ['string', 'number']
    },
    {
      name: 'false-label',
      description: '没有选中时的值',
      type: ['string', 'number']
    },
    {
      name: 'name',
      description: '原生 name 属性',
      type: 'string'
    },
    {
      name: 'disabled',
      description: '按钮禁用',
      type: 'boolean',
      default: false
    },
    {
      name: 'checked',
      description: '按钮禁用',
      type: 'boolean',
      default: false
    },
    {
      name: 'indeterminate',
      description: '设置 indeterminate 状态，只负责样式控制',
      type: 'boolean',
      default: false
    }
  ]
}
