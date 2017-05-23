const webpack = require('webpack');

module.exports = function (env) {
    const webpackConfig = './build/' + env + '.js';
    const configuration = require(webpackConfig)();

    let compiler = webpack(configuration);

    compiler.apply(new webpack.ProgressPlugin());

    compiler.run(function (err, stats) {
    });
    return configuration;
};