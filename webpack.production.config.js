const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.base.config');

baseConfig.output.filename = '[name].[hash:6].js';

baseConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        comments: false,
        compress: {
            warnings: false
        }
    }),
    new BundleAnalyzerPlugin()
);

baseConfig.devtool = 'nosources-source-map';

module.exports = baseConfig;