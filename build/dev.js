const webpack = require('webpack'); //to access built-in plugins
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',

    devServer: {
        port: 7777,
        host: 'localhost',
        noInfo: false,
        stats: 'minimal'
    },
    plugins: [
        new FriendlyErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('dev')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
};