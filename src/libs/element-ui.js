/**
 * Created by lincoln on 16/01/2017.
 */

const Basic = {
  name: 'Basic',
  label: '基础组件',
  components: [
    {
      name: 'elRow',
      label: 'elCol',
      description: '',
      children: 'elRow',
      props: [
        {
          name: 'gutter',
          description: '栅格间隔',
          type: 'number'
          default: 0
        },
        {
          name: 'type',
          descrition: '布局模式，可选 flex，现代浏览器下有效',
          type: 'string',
        },
        {
          name: 'justify',
          descrition: 'flex 布局下的水平排列方式',
          type: 'string',
          default: 'start',
          acceptValues: [
            'start',
            'end',
            'center',
            'space-around',
            'space-between'
          ]
        },
        {
          name: 'align',
          description: 'flex 布局下的垂直排列方式',
          type: 'string',
          default: 'top',
          acceptValues: [
            'top',
            'middle',
            'bottom'
          ]
        }
      ]
    },
    {
      name: 'elCol',
      label: 'elCol',
      description: '',
      parent: 'elRow',
      props: [
        {
          name: 'span',
          description: '栅格占据的列数',
          type: 'number'
        },
        {
          name: 'offset',
          description: '栅格占据的列数',
          type: 'number',
          default: 0
        },
        {
          name: 'push',
          description: '栅格向右移动格数',
          type: 'number',
          default: 0
        },
        {
          name: 'pull',
          description: '栅格向左移动格数',
          type: 'number',
          default: 0,
          acceptValues: []
        },
        {
          name: 'xs',
          description: '<768px 响应式栅格数或者栅格属性对象, 例如： {span: 4, offset: 4}',
          type: ['number', 'Object']
        },
        {
          name: 'sm',
          description: '≥768px 响应式栅格数或者栅格属性对象, 例如： {span: 4, offset: 4}',
          type: ['number', 'Object']
        },
        {
          name: 'md',
          description: '≥992 响应式栅格数或者栅格属性对象, 例如： {span: 4, offset: 4}',
          type: ['number', 'Object']
        },
        {
          name: 'lg',
          description: '≥1200 响应式栅格数或者栅格属性对象, 例如： {span: 4, offset: 4}',
          type: ['number', 'Object']
        },
        {
          name: 'pull',
          description: '栅格向左移动格数',
          type: 'number',
          default: 0,
          acceptValues: []
        }
      ]
    },
    {
      name: 'elButton',
      label: '常用的操作按钮',
      descrition: '',
      props: [
        {
          name: 'size',
          description: '尺寸',
          type: 'string',
          acceptValues: [
            'large',
            'small',
            'mini'
          ]
        },
        {
          name: 'type',
          description: '类型',
          type: 'string',
          acceptValues: [
            'primary',
            'success',
            'warning',
            'danger',
            'info',
            'text'
          ]
        },
        {
          name: 'plain',
          description: '是否朴素按钮',
          type: 'boolean',
          default: false
        },
        {
          name: 'loading',
          description: '是否加载中状态',
          type: 'boolean',
          default: false
        },
        {
          name: 'disabled',
          description: '是否禁用状态',
          type: 'boolean',
          default: false
        },
        {
          name: 'icon',
          description: '图标，已有的图标库中的图标名',
          type: 'string'
        },
        {
          name: 'autofocus',
          description: '是否默认聚焦',
          type: 'boolean',
          default: false
        },
        {
          name: 'native-type',
          description: '原生 type 属性',
          type: 'string',
          default: 'button',
          acceptValues: [
            'button',
            'submit',
            'reset'
          ]
        }
      ]
    }
  ]
}

const Form = {
  name: 'Form',
  label: 'Form',
  components: [
    {
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
    },
    {
      name: 'elRadioButton',
      label: '按钮样式的单选组合',
      description: '只需要把el-radio元素换成el-radio-button元素即可，此外，Element 还提供了size属性给按钮组，支持large和small两种（如果不设定为默认）。',
      parent: 'elRadioGroup',
      props:[
        {
          name: 'label',
          description: 'Radio 的 value',
          type: ['string', 'number'],
          default: '',
          acceptValues: [

          ]
        },
        {
          name: 'disabled',
          description: '是否禁用',
          type: 'boolean',
          default: false
        }
      ]
    },
    {
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
    },
    {
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
    },
    {
      name: 'elCheckboxGroup',
      props:[
        {
          name: 'v-model',
          label: 'v-model',
          type: 'string'
        }
      ],
      events:[
        {
          name: 'change',
          description: '当绑定值变化时触发的事件',
          callbackParams: 'event 事件对象'
        }
      ]

    },
    {
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
          name: '',
          description: '',
          type: '',
          default: '',
          acceptValues:[]
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
    },
    {
      name: 'elAutocomplete',
      label: '',
      description: '',
      props: [
        {
          name: 'v-model',
          label: 'v-model',
          type: 'string'
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
          name: 'value',
          description: '必填值输入绑定值',
          type: 'string'
        },
        {
          name: 'custom-item',
          description: '通过该参数指定自定义的输入建议列表项的组件名',
          type: '',
          default: 'string'
        },
        {
          name: 'fetch-suggestions',
          description: '返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它',
          type: 'Function(queryString, callback)'
        },
        {
          name: 'popper-class',
          description: 'Autocomplete 下拉列表的类名',
          type: 'string'
        },
        {
          name: 'trigger-on-focus',
          description: '是否在输入框 focus 时显示建议列表',
          type: 'boolean',
          default: false
        }
      ],
      events: [
        {
          name: 'select',
          description: '点击选中建议项时触发',
          callbackParams: '选中建议项'
        }
      ]
    },
    {
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
    },
    {
      name: 'select',
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
    },
    {
      name: 'elOptionGrop',
      label: '分组',
      description: '备选项进行分组展示',
      props: [
        {
          name: 'label',
          description: '分组的组名',
          type: 'string'
        },
        {
          name: 'disabled',
          description: '是否将该分组下所有选项置为禁用',
          type: 'boolean',
          default: false
        }
      ]
    },
    {
      name: 'elOption',
      label: '选项',
      description: '选项',
      props: [
        {
          name: 'value',
          description: '选项的值',
          type: ['string', 'number', 'object']
        },
        {
          name: 'label',
          description: '分组的组名',
          type: 'string'
        },
        {
          name: 'disabled',
          description: '是否将该分组下所有选项置为禁用',
          type: 'boolean',
          default: false
        }
      ]
    },
    
  ]
}


export default {

}
