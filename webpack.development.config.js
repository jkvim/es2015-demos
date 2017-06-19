const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

baseConfig.devServer = {
    hot: true,
    port: 8080,
    inline: true,
    host: '0.0.0.0',
    compress: true,
    publicPath: '/'
};
baseConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);

module.exports = baseConfig;