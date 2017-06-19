const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

baseConfig.output.publicPath = './';
baseConfig.plugins.push(
    new UglifyJSPlugin({
        mangle: false,
        comments: false,
        compress: {
            warnings: false
        }
    })
);

module.exports = baseConfig;