const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const CommonConfig = require('./base.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const os = require('os');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = function () {
  return Merge(CommonConfig, {
    entry: {
      index: ['babel-polyfill', './src/index.js']
      // vendors: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-router-redux', 'antd', 'prop-types', 'react-redux', 'react-transition-group', 'moment', 'axios', 'immutable', 'q', 'redux-immutablejs', 'redux-promise', 'redux-form', 'redux-immutable']
    },
    output: {
      publicPath: 'http://localhost:63342/react_project/dist/'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      //压缩css
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      }),
      //清理dist目录
      new CleanWebpackPlugin('*', {
        root: path.resolve('./dist'), // node 的path模块  生成绝对路径
        verbose: true, // 输出清除信息
        dry: false // 不清除，测试用
        // exclude: ["files", "to", "ignore"]
      }),
      new ParallelUglifyPlugin({
        workerCount: os.cpus().length,
        cacheDir: '.cache/',
        uglifyJS: {
          beautify: false,
          sourceMap: false,
          mangle: {
            screw_ie8: true,
            keep_fnames: true
          },
          compress: {
            warnings: false,
            screw_ie8: true,
            drop_console: true
          },
          comments: false
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        chunks: ['vendor']
      }),
      new HtmlWebpackPlugin({
        title: 'react-project',
        filename: 'index.html',
        template: './index.html',
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        },
        favicon: '',
        hash: false,
        showErrors: true
      }),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|jsx|html|css|less)$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  });
};
