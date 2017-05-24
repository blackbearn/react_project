const webpack = require('webpack');

module.exports = function (env) {
    const webpackConfig = './build/' + env + '.js';
    return require(webpackConfig)();
};