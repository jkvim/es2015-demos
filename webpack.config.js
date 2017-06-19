const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const absolutePath = (relativePath) => {
    return path.resolve(__dirname, relativePath);
};

module.exports = {
    entry: {
        app: absolutePath('./index.js')
    },
    output: {
        filename: '[name].js'
    },
    devServer: {
        hot: true,
        port: 8080,
        inline: true,
        host: '0.0.0.0',
        compress: true,
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
