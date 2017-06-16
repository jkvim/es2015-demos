const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

baseConfig.output.filename = '[name].[hash:6].js';

baseConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor'],
    }),
    new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        comments: false,
        compress: {
            warnings: false
        }
    })
);

baseConfig.devtool = 'nosources-source-map';

module.exports = baseConfig;