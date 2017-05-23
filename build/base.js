const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const theme = require('../theme');

module.exports = {
    target: 'web',
    output: {
        filename: '[name].[chunkhash:8].min.js',
        path: path.resolve('./dist'),
        chunkFilename: "[name].[chunkhash:8].min.js"
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
                        "less-loader"
                    ]
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    resolve: {
        modules: ['node_modules', path.resolve('./node_modules')],
        extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.less'],
    },
    plugins: [
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
            filename: "bundle.css",
            disable: false,
            allChunks: true
        })
    ]
};