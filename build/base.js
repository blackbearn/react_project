const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'web',
    output: {
        filename: 'js/[name].[chunkhash:8].min.js',
        path: path.resolve('./dist'),
        chunkFilename: "js/[name].[chunkhash:8].min.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',  // 在babel-loader对源码进行编译前进行lint的检查
                exclude: /node_modules/,
                include: path.resolve('./src'),
                loader: 'eslint-loader'
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
                use: [
                    "cache-loader",
                    "babel-loader"
                ],
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
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: './image/[name].[hash:8].[ext]',
                },
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
    context: path.resolve("./"),
    resolve: {
        modules: ['node_modules', path.resolve('./node_modules')],
        extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.less'],
        alias: {
            '@': path.resolve('./src')
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/vendor.[hash].min.js',
            minChunks: function (module) {
                // 该配置假定你引入的 vendor 存在于 node_modules 目录中
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        //拷贝文件
        new CopyWebpackPlugin([{
            from: './iconfont/iconfont.*',
            to: './',
        }]),
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
            filename: "css/style.[contenthash].css",
            disable: false,
            allChunks: true
        })
    ]
};