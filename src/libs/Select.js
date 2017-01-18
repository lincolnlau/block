export default {
  name: 'elSelect',
  label: 'Select',
  description: '当选项过多时，使用下拉菜单展示并选择内容。',
  props: [
    {
      name: 'v-model',
      description: 'v-model',
      type: 'string'
    },
    {
      name: 'multiple',
      description: '是否多选',
      type: 'boolean',
      default: false
    },
    {
      name: 'disabled',
      description: '是否禁用',
      type: 'boolean',
      default: false
    },
    {
      name: 'size',
      description: '输入框尺寸',
      type: 'string',
      acceptValues:[
        'large',
        'samll',
        'mini'
      ]
    },
    {
      name: 'clearable',
      description: '单选时是否可以清空选项',
      type: 'boolean',
      default: false
    },
    {
      name: '',
      description: '',
      type: '',
      default: '',
      acceptValues:[]
    },
    {
      name: 'multiple-limit',
      description: '多选时用户最多可以选择的项目数，为 0 则不限制',
      type: 'number',
      default: 0
    },
    {
      name: 'name',
      description: 'select input 的 name 属性',
      type: 'string'
    },
    {
      name: 'palceholder',
      description: '占位符',
      type: 'string',
      default: '请选择'
    },
    {
      name: 'filterable',
      description: '是否可搜索',
      type: 'boolean',
      default: false
    },
    {
      name: 'allow-create',
      description: '是否允许用户创建新条目，需配合 filterable 使用',
      type: 'boolean',
      default: false
    },
    {
      name: 'filter-method',
      description: '自定义过滤方法',
      type: 'function'
    },
    {
      name: 'remote',
      description: '是否为远程搜索',
      type: 'boolean',
      default: false
    },
    {
      name: 'remote-method',
      description: '远程搜索方法',
      type: 'function'
    },
    {
      name: 'loading',
      description: '是否正在从远程获取数据',
      type: 'boolean',
      default: false
    },
    {
      name: 'loading-text',
      description: '远程加载时显示的文字',
      type: 'string',
      default: '加载中'
    },
    {
      name: 'no-match-text',
      description: '搜索条件无匹配时显示的文字',
      type: 'string',
      default: '无匹配数据'
    },
    {
      name: 'no-data-text',
      description: '选项为空时显示的文字',
      type: 'string',
      default: '无数据'
    },
    {
      name: 'popper-class',
      description: 'Select 下拉框的类名',
      type: 'string'
    }
  ],
  events: [
    {
      name: 'change',
      description: '选中值发生变化时触发',
      callbackParams: '目前的选中值'
    },
    {
      name: 'visible-change',
      description: '下拉框出现/隐藏时触发',
      callbackParams: '出现则为 true，隐藏则为 false'
    }
  ],
}
