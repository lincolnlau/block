export default {
  name: 'elInput',
  label: '通过鼠标或键盘输入字符',
  description: '通过鼠标或键盘输入字符',
  props: [
    {
      name: 'v-model',
      label: 'v-model',
      type: 'string'
    },
    {
      name: 'type',
      description: '类型',
      type: 'string',
      default: 'text',
      acceptValues:[
        'text',
        'textarea'
      ]
    },
    {
      name: 'value',
      description: '绑定值',
      type: ['string', 'number']
    },
    {
      name: 'maxlength',
      description: '最大输入长度',
      type: 'number'
    },
    {
      name: 'minlength',
      description: '最小输入长度',
      type: 'number'
    },
    {
      name: 'placeholder',
      description: '输入框占位文本',
      type: 'string'
    },
    {
      name: 'disabled',
      description: '禁用',
      type: 'boolean',
      default: false
    },
    {
      name: 'size',
      description: '输入框尺寸，只在 type!="textarea" 时有效',
      type: 'string',
      acceptValues:[
        'large',
        'small',
        'mini'
      ]
    },
    {
      name: 'icon',
      description: '输入框尾部图标',
      type: 'string'
    },
    {
      name: 'rows',
      description: '输入框行数，只对 type="textarea" 有效',
      type: 'number',
      default: 2
    },
    {
      name: 'autosize',
      description: '自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }',
      type: ['boolean', 'object'],
      default: false
    },
    {
      name: 'auto-complete',
      description: '原生属性，自动补全',
      type: 'string',
      default: 'on',
      acceptValues:[
        'on',
        'off'
      ]
    },
    {
      name: 'name',
      description: '原生属性',
      type: 'string'
    },
    {
      name: 'max',
      description: '原生属性，设置最大值',
      type: '*'
    },
    {
      name: 'min',
      description: '原生属性，设置最小值',
      type: '*'
    },
    {
      name: 'resize',
      description: '控制是否能被用户缩放',
      type: 'string',
      acceptValues:[
        'none',
        'both',
        'horizontal',
        'vertical'
      ]
    },
    {
      name: 'autofocus',
      description: '原生属性，自动获取焦点',
      type: 'boolean',
      default: false
    },
    {
      name: 'form',
      description: '原生属性',
      type: 'string'
    }
  ],
  events: [
    {
      name: 'click',
      description: '点击 Input 内的图标时触发',
      callbackParams: '(event: Event)'
    },
    {
      name: 'blur',
      description: '在 Input 失去焦点时触发',
      callbackParams: '(event: Event)'
    },
    {
      name: 'focus',
      description: '在 Input 或得焦点时触发',
      callbackParams: '(event: Event)'
    },
    {
      name: 'change',
      description: '在 Input 值改变时触发',
      callbackParams: '(value: string | number)'
    }
  ]
}
