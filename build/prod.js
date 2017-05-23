const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: {
        index: ['babel-polyfill', './src/index.js'],
        // vendors: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-router-redux', 'antd', 'prop-types', 'react-redux', 'react-transition-group', 'moment', 'axios', 'immutable', 'q', 'redux-immutablejs', 'redux-promise', 'redux-form', 'redux-immutable']
    },
    output: {
        publicPath: './static/'
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('prod')
        }),
        //banner
        new webpack.BannerPlugin({
            banner: 'Author:BreathlessWay',
            raw: false,
            entryOnly: true
        })
    ]
};