const path = require('path')
// 启用热更新模块
const webpack = require('webpack')
// 把html页面也放到内存中去，导入在内存中生成的HTML页面的插件
const HTMLWebpackPlugin = require('html-webpack-plugin')

// 把配置对象暴露出去
module.exports = { 
  entry: './src/main.js', // 入口, 可以为相对路径, 当然绝对路径也没错
  output: { // 输出配置
    path: path.join(__dirname, './dist'), // 输出的目录
    filename: 'bundle.js' // 输出的文件名
  },
  mode: 'production',// 打包的模式,production | development
  plugins: [ 
    new webpack.HotModuleReplacementPlugin(), // 一个热更新的模块对象，这是启用热更新的第三步
      new HTMLWebpackPlugin({ // 创建一个在内存中生成html页面的插件
        template: path.join(__dirname, './src/index.html'), //指定的模板页面，将来会根据指定的页面路径，去生成存内存中的页面
        filename: 'index.html' // 输出在服务器根目录的文件名, 文件存放在内存中, 不会在磁盘上显示
      })
    ],
    
    module: { // 配置所有第三方的模块加载器
      rules: [ // 所有第三方的模块匹配规则
        // loader的加载顺序是从右到左的
        // css-loader是帮助webpack编译css文件. 而style-loader是将最终编译的结果放到HTML中生效
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },  // 配置处理.css文件的第三方loader规则
        {
          test: /\.less$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "less-loader" }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ]
        }
      ]
    }
} 



