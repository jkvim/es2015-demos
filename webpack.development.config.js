const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

baseConfig.devtool = "source-map";
baseConfig.devServer = {
    hot: true,
    port: 8080,
    inline: true,
    compress: true,
    publicPath: '/'
};

baseConfig.output.filename = '[name].js';

baseConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);

module.exports = baseConfig;