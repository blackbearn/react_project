const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  target: 'web',
  output: {
    filename: 'js/[name].[chunkhash:8].min.js',
    path: path.resolve('./dist'),
    chunkFilename: 'js/[name].[chunkhash:8].min.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',  // 在babel-loader对源码进行编译前进行lint的检查
        exclude: /node_modules/,
        include: path.resolve('./src'),
        loader: 'happypack/loader?id=eslint'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'happypack/loader?id=css'
        })
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'happypack/loader?id=js'
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'happypack/loader?id=less'
        })
      }
    ]
  },
  //定义入口baseUrl
  context: path.resolve('./'),
  resolve: {
    modules: ['node_modules', path.resolve('./node_modules')],
    extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.less'],
    alias: {
      '@': path.resolve('./src')
    }
  },
  plugins: [
    new HappyPack({
      id: 'eslint',
      threadPool: happyThreadPool,
      loaders: ['eslint-loader']
    }),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: ['babel-loader']
    }),
    new HappyPack({
      id: 'less',
      threadPool: happyThreadPool,
      loaders: ['css-loader', 'postcss-loader', 'less-loader']
    }),
    new HappyPack({
      id: 'css',
      threadPool: happyThreadPool,
      loaders: ['css-loader', 'postcss-loader']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.[hash].min.js',
      minChunks: function (module) {
        // 该配置假定你引入的 vendor 存在于 node_modules 目录中
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    //拷贝文件
    // new CopyWebpackPlugin([{
    //     from: './iconfont/iconfont.*',
    //     to: './',
    // }]),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    //banner
    new webpack.BannerPlugin({
      banner: 'Author:BreathlessWay',
      raw: false,
      entryOnly: true
    }),
    new ExtractTextPlugin({
      filename: 'css/style.[contenthash].css',
      disable: false,
      allChunks: true
    })
  ]
};
