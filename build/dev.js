const webpack = require('webpack'); //to access built-in plugins
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const Merge = require('webpack-merge');
const path = require('path');
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
        devtool: 'cheap-module-source-map',
        devServer: {
            compress: false, //压缩
            noInfo: true,
            port: '5566',
            inline: true,
            hot: true,
            // stats: 'minimal',  //和noInfo不共用
            contentBase: path.resolve("./dist"),
            publicPath: "/"
            // 确保 publicPath 总是以斜杠(/)开头和结尾。
        },
        plugins: [
            new webpack.NoEmitOnErrorsPlugin(),
            new FriendlyErrorsPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('dev')
            }),
            new webpack.HotModuleReplacementPlugin(),
            // 开启全局的模块热替换(HMR)
            new webpack.NamedModulesPlugin(),
            // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            })
        ]
    })
};