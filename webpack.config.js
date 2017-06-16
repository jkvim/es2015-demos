const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'index.js'),
    },
    output: {
        filename: '[name].js',
    },
    devtool: '#source-map',
    devServer: {
        port: 8080,
        hot: true,
        compress: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            filename: './index.html',
            template: './index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
        ],
    },
};
