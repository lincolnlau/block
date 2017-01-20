export default {
  name: 'elPagination',
  label: 'Pagination 分页',
  description: '当数据量过多时，使用分页分解数据',
  props:[
    {
      name: 'small',
      description: '是否使用小型分页样式',
      type: 'boolean',
      default: false
    },
    {
      name: 'page-size',
      description: '每页显示条目个数',
      type: 'number',
      default: 10
    },
    {
      name: 'total',
      description: '总条目数',
      type: 'number'
    },
    {
      name: 'page-count',
      description: '总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性',
      type: 'number'
    },
    {
      name: 'current-page',
      description: '当前页数',
      type: 'number',
      default: 1
    },
    {
      name: 'layout',
      description: '组件布局，子组件名用逗号分隔',
      type: 'string',
      default: 'prev, pager, next, jumper, ->, total'
    },
    {
      name: 'page-sizes',
      description: '每页显示个数选择器的选项设置, Array<Number>',
      type: 'array',
      default: [10, 20, 30, 40, 50, 100]
    }
  ],
  events:[
    {
      name: 'size-change',
      description: 'pageSize 改变时会触发',
      callbackParams: '每页条数size'
    },
    {
      name: 'current-change',
      description: 'currentPage 改变时会触发',
      callbackParams: '当前页currentPage'
    }
  ]
}
