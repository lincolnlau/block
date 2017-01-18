export default {
  name: 'elRadio',
  label: '单选框',
  description: '要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String或者Number。',
  props: [
    {
      name: 'label',
      description: 'Radio 的 value',
      type: ['string', 'number']
    },
    {
      name: 'disabled',
      description: '是否禁用',
      type: 'boolean',
      default: false

    },
    {
      name: 'name',
      description: '原生 name 属性',
      type: 'string'
    },
    {
      name: 'v-model',
      description: 'v-model',
      type: 'string'
    }
  ]
}
