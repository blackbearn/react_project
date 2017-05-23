const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    target: 'web',
    entry: {
        index: ['babel-polyfill', './src/index.js'],
        // vendors: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-router-redux', 'antd', 'prop-types', 'react-redux', 'react-transition-group', 'moment', 'axios', 'immutable', 'q', 'redux-immutablejs', 'redux-promise', 'redux-form', 'redux-immutable']
    },
    output: {
        filename: '[name].[chunkhash:8].min.js',
        path: path.resolve('./dist'),
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: "pre",
                loader: "eslint-loader",
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "postcss-loader"
                    ]
                })
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "postcss-loader",
                        {
                            loader: 'less-loader',
                            options: {
                                modifyVars: ''
                            }
                        }
                    ]
                })
            }
        ]
    },
    resolve: {
        modules: ['node_modules', path.resolve(__dirname, '../node_modules')],
        extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.less'],
    },
    plugins: [
        //压缩
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            sourceMap: true,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
            },
            comments: false
        }),
        new HtmlWebpackPlugin({
            title: 'react-project',
            filename: 'index.html',
            template: './index.html',
            inject: true,
            minify: {
                "removeAttributeQuotes": true,
                "removeComments": true,
                "removeEmptyAttributes": true,
                "collapseWhitespace": true
            },
            favicon: '',
            hash: false,
            showErrors: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.[hash].min.js',
            minChunks: function (module) {
                // 该配置假定你引入的 vendor 存在于 node_modules 目录中
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        //banner
        new webpack.BannerPlugin({
            banner: 'Author:BreathlessWay',
            raw: false,
            entryOnly: true
        }),
        new ExtractTextPlugin({
            filename: "bundle.css",
            disable: false,
            allChunks: true
        })
    ]
};