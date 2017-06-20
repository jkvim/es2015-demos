const baseConfig = require('./webpack.base.config');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

baseConfig.output.publicPath = './';
baseConfig.plugins.push(
    new UglifyJSPlugin()
);

module.exports = baseConfig;