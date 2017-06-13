const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const Merge = require('webpack-merge');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const CommonConfig = require('./base.js');

module.exports = function () {
  return Merge(CommonConfig, {
    entry: {
      index: [
        'babel-polyfill',
        //babel-polyfill

        'react-hot-loader/patch',
        // 开启 React 代码的模块热替换(HMR)

        'webpack-dev-server/client?http://localhost:5566',
        // 为 webpack-dev-server 的环境打包代码
        // 然后连接到指定服务器域名与端口

        'webpack/hot/only-dev-server',
        // 为热替换(HMR)打包好代码
        // only- 意味着只有成功更新运行代码才会执行热替换(HMR)

        './src/index.js'
        // 我们 app 的入口文件
      ]
    },
    output: {
      publicPath: '/'
      // 输出解析文件的目录，url 相对于 HTML 页面
    },
    module: {
      rules: [
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          use: [
            {
              loader: 'url-loader',
              query: {
                limit: 10000,
                name: './image/[name].[hash:8].[ext]'
              }
            },
            'image-webpack-loader' //图片压缩
          ]
        },
        {
          test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: './iconfont/[name].[hash:7].[ext]'
          }
        }
      ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      noInfo: true,
      port: '5566',
      hot: true,
      // quiet: true,
      compress: true,
      watchContentBase: true,
      historyApiFallback: true,  //配合browserHistory
      // stats: 'minimal',  //和noInfo不共用
      contentBase: path.resolve('./dist'),
      publicPath: '/',
      // 确保 publicPath 总是以斜杠(/)开头和结尾。
      overlay: {
        warnings: true,
        errors: true
      }
      //全屏显示错误信息
    },
    plugins: [
      //自动打开浏览器
      new OpenBrowserPlugin({
        url: 'http://localhost:5566'
      }),
      //报错不退出
      new webpack.NoEmitOnErrorsPlugin(),
      //设置全局环境变量
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('dev')
      }),
      new webpack.HotModuleReplacementPlugin(),
      // 开启全局的模块热替换(HMR)
      new webpack.NamedModulesPlugin(),
      // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
      new HtmlWebpackPlugin({
        title: 'react-project',
        filename: 'index.html',
        template: './index.html',
        inject: true
      })
    ]
  });
};
