

// 1.webpack-merge 合并config

// plugins:
// 1.webpack-dev-server 小型node服务器
// 2.html-webpack-plugin 自动生成html页面
// 3.uglifyjs-webpack-plugin 压缩js代码
// 4.copy-webpack-plugin 拷贝资源文件
// 5.optimize-css-assets-webpack-plugin css压缩

// 批量引入文件 require.context
// const mainRoutes = []
// function importAll(r) {
//   r.keys().forEach((key) => {
//     mainRoutes.push(r(key).default)
//   })
// }
// importAll(require.context('./router/modules', false, /\.js$/))
// console.log(mainRoutes)


// filemanager-webpack-plugin:
// 作用：npm run build 执行完自动压缩为.zip格式文件
// 打包完压缩为zip
const FileManagerPlugin = require('filemanager-webpack-plugin')
const { dirname, sep } = require('path')
const projectUrl = `./${dirname(__filename).split(sep).pop()}.zip`

// vue.config.js里
configureWebpack: {
  plugins: [
    new FileManagerPlugin({
      events: {
        onEnd: {
          delete: [projectUrl],
          archive: [{ source: './dist', destination: projectUrl }]
        }
      }
    })
  ]
}



