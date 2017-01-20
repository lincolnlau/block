export default {
  name: 'elTable',
  label: 'Table 表格',
  description: '用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作',
  props: [
    {
      name: 'data',
      description: '显示的数据',
      type: 'array'
    },
    {
      name: 'height',
      description: 'Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则 Table 的高度受控于外部样式',
      type: ['string', 'number']
    },
    {
      name: 'stripe',
      description: '是否为斑马纹 table',
      type: 'boolean',
      default: false
    },
    {
      name: 'border',
      description: '是否带有纵向边框',
      type: 'boolean',
      default: false
    },
    {
      name: 'fit',
      description: '列的宽度是否自撑开',
      type: 'boolean',
      default: false
    },
    {
      name: 'show-header',
      description: '是否显示表头',
      type: 'boolean',
      default: 'true'
    },
    {
      name: 'highlight-current-row',
      description: '是否要高亮当前行',
      type: 'boolean',
      default: false
    },
    {
      name: 'current-row-key',
      description: '当前行的 key，只写属性',
      type: ['string', 'number']
    },
    {
      name: 'row-class-name',
      description: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className. Function(row, index)/String',
      type: 'function'
    },
    {
      name: 'row-style',
      description: '行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style. Function(row, index)/Object',
      type: 'function'
    },
    {
      name: 'row-key',
      description: '行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能的情况下，该属性是必填的. Function(row)/String',
      type: 'function'
    },
    {
      name: 'context',
      description: '设置上下文环境，例如设置当前上下文就是 _self，父级就是 $parent，根组件 $root。优先读取 column 的 context 属性',
      type: 'object'
    },
    {
      name: 'empty-text',
      description: '空数据时显示的文本内容，也可以通过 slot="empty" 设置',
      type: 'string',
      default: '暂无数据'
    },
    {
      name: 'default-expand-all',
      description: '是否默认展开所有行，当 Table 中存在 type="expand" 的 Column 的时候有效',
      type: 'boolean',
      default: false
    },
    {
      name: 'expand-row-keys',
      description: '可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组',
      type: 'array'
    },
    {
      name: 'default-sort-prop',
      description: '默认的排序列的prop',
      type: 'string'
    },
    {
      name: 'default-sort-order',
      description: '设置默认的排序顺序。需要设置default-sort-prop才能使用',
      type: 'string',
      default: 'ascending',
      acceptValues: [
        'ascending',
        'descending'
      ]
    }
  ],
  events:[
    {
      name: 'select',
      description: '当用户手动勾选数据行的 Checkbox 时触发的事件',
      callbackParams: 'selection, row'
    },
    {
      name: 'select-all',
      description: '当用户手动勾选全选 Checkbox 时触发的事件',
      callbackParams: 'selection'
    },
    {
      name: 'selection-change',
      description: '当选择项发生变化时会触发该事件',
      callbackParams: 'selection'
    },
    {
      name: 'cell-mouse-enter',
      description: '当单元格 hover 进入时会触发该事件',
      callbackParams: 'row, column, cell, event'
    },
    {
      name: 'cell-mouse-leave',
      description: '当单元格 hover 退出时会触发该事件',
      callbackParams: 'row, column, cell, event'
    },
    {
      name: 'cell-click',
      description: '当某个单元格被点击时会触发该事件',
      callbackParams: 'row, column, cell, event'
    },
    {
      name: 'row-click',
      description: '当某一行被点击时会触发该事件',
      callbackParams: 'row, event, column'
    },
    {
      name: 'row-contextmenu',
      description: '当某一行被鼠标右键点击时会触发该事件',
      callbackParams: 'row, event'
    },
    {
      name: 'row-dblclick',
      description: '当某一行被双击时会触发该事件',
      callbackParams: 'row, event'
    },
    {
      name: 'header-click',
      description: '当某一列的表头被点击时会触发该事件',
      callbackParams: 'column, event'
    },
    {
      name: 'sort-change',
      description: '当表格的排序条件发生变化的时候会触发该事件',
      callbackParams: '{ column, prop, order }'
    },
    {
      name: 'filter-change',
      description: '当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。',
      callbackParams: 'filters'
    },
    {
      name: 'current-change',
      description: '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性',
      callbackParams: 'currentRow, oldCurrentRow'
    },
    {
      name: 'expand',
      description: '当用户对某一行展开或者关闭的上会触发该事件',
      callbackParams: 'row, expanded'
    }
  ]
}
