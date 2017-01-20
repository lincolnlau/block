export default {
  name: 'elTableColumn',
  label: 'Table-column 列',
  description: '表格中对应的列',
  props: [
    {
      name: 'type',
      description: '对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮',
      type: 'string',
      acceptValues: [
        'selection',
        'index',
        'expand'
      ]
    },
    {
      name: 'column-key',
      description: 'column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件',
      type: 'string'
    },
    {
      name: 'label',
      description: '显示的标题',
      type: 'string'
    },
    {
      name: 'prop',
      description: '对应列内容的字段名，也可以使用 property 属性',
      type: 'string'
    },
    {
      name: 'width',
      description: '对应列的宽度',
      type: 'string'
    },
    {
      name: 'min-width',
      description: '对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列',
      type: 'string'
    },
    {
      name: 'fixed',
      description: '列是否固定在左侧或者右侧',
      type: 'string',
      acceptValues: [
        'left',
        'right'
      ]
    },
    {
      name: 'render-header',
      description: '列标题 Label 区域渲染使用的 Function. Function(h, { column, $index })',
      type: 'function'
    },
    {
      name: 'sortable',
      description: '对应列是否可以排序，如果设置为 \'custom\'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件',
      type: ['boolean', 'string'],
      default: false,
      acceptValues: [
        true,
        false,
        'customer'
      ]
    },
    {
      name: 'sort-method',
      description: '对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效. Function(a, b)',
      type: 'function'
    },
    {
      name: 'resizable',
      description: '对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）',
      type: 'boolean',
      default: true
    },
    {
      name: 'formatter',
      description: '用来格式化内容. Function(row, column)',
      type: 'function'
    },
    {
      name: 'show-overflow-tooltip',
      description: '当内容过长被隐藏时显示 tooltip',
      type: 'boolean',
      default: false
    },
    {
      name: 'align',
      description: '对齐方式',
      type: 'string',
      default: 'left',
      acceptValues: [
        'left',
        'center',
        'right'
      ]
    },
    {
      name: 'header-align',
      description: '表头对齐方式，若不设置该项，则使用表格的对齐方式',
      type: 'string',
      acceptValues: [
        'left',
        'center',
        'right'
      ]
    },
    {
      name: 'class-name',
      description: '列的 className',
      type: 'string'
    },
    {
      name: 'selectable',
      description: '仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选. Function(row, index)',
      type: 'function'
    },
    {
      name: 'reserve-selection',
      description: '仅对 type=selection 的列有效，类型为 Boolean，为 true 则代表会保留之前数据的选项，需要配合 Table 的 clearSelection 方法使用',
      type: 'boolean',
      default: false
    },
    {
      name: 'filters',
      description: '数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性. Array[{ text, value }]',
      type: 'array'
    },
    {
      name: 'filter-multiple',
      description: '数据过滤的选项是否多选',
      type: 'boolean',
      default: true
    },
    {
      name: 'filter-method',
      description: '数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示. Function(value, row)',
      type: 'function'
    },
    {
      name: 'filtered-value',
      description: '选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性',
      type: 'array'
    }
  ]
}
