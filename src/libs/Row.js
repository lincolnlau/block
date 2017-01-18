export  default {
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
}
