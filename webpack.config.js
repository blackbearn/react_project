const configuration = require('./build/base');
const webpack = require('webpack');

let compiler = webpack(configuration);

compiler.apply(new webpack.ProgressPlugin());

compiler.run(function (err, stats) {});

module.exports = configuration;