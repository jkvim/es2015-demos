const baseConfig = require('./webpack.base.config');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

baseConfig.plugins.push(
    new UglifyJSPlugin()
);

module.exports = baseConfig;