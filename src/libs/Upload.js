export default {
  name: 'elUpload',
  label: 'Upload 上传',
  description: '通过点击或者拖拽上传文件',
  props: [
    {
      name: 'action',
      description: '必选参数, 上传的地址',
      type: 'string',
      required: true
    },
    {
      name: 'headers',
      description: '可选参数, 设置上传的请求头部',
      type: 'object'
    },
    {
      name: 'multiple',
      description: '可选参数, 是否支持多选文件',
      type: 'boolean'
    },
    {
      name: 'data',
      description: '可选参数, 上传时附带的额外参数',
      type: 'object'
    },
    {
      name: 'name',
      description: '可选参数, 上传的文件字段名',
      type: 'string',
      default: 'file'
    },
    {
      name: 'with-credentials',
      description: '支持发送 cookie 凭证信息',
      type: 'boolean',
      default: false
    },
    {
      name: 'show-upload-list',
      description: '是否显示已上传文件列表',
      type: 'boolean',
      default: true
    },
    {
      name: 'type',
      description: '上传控件类型',
      type: 'string',
      default: 'select',
      acceptValues:['select', 'drag']
    },
    {
      name: 'accept',
      description: '可选参数, 接受上传的文件类型（thumbnail-mode 模式下此参数无效）',
      type: 'string'
    },
    {
      name: 'on-preview',
      description: '可选参数, 点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据. function(file)',
      type: 'function'
    },
    {
      name: 'on-remove',
      description: '可选参数, 文件列表移除文件时的钩子. function(file, fileList)',
      type: 'function'
    },
    {
      name: 'on-success',
      description: '可选参数, 文件上传成功时的钩子. function(response, file, fileList)',
      type: 'function'
    },
    {
      name: 'on-error',
      description: '可选参数, 文件上传失败时的钩子. function(err, response, file)',
      type: 'function'
    },
    {
      name: 'on-progress',
      description: '可选参数, 文件上传时的钩子. function(event, file, fileList)',
      type: 'function'
    },
    {
      name: 'before-upload',
      description: '可选参数, 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传. function(file)',
      type: 'function'
    },
    {
      name: 'thumbnail-mode',
      description: '是否设置为图片模式，该模式下会显示图片缩略图',
      type: 'boolean',
      default: false
    },
    {
      name: 'default-file-list',
      description: '默认已上传的文件列表, 例如: [{name: \'food.jpeg\', url: \'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100\'}]	',
      type: 'array',
      default: []
    },
    {
      name: '',
      description: '',
      type: '',
      default: '',
      acceptValues:[]
    },
    {
      name: '',
      description: '',
      type: '',
      default: '',
      acceptValues:[]
    }
  ]
}
