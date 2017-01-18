export default {
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
}
