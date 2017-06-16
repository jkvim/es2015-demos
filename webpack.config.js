const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const absolutePath = (relativePath) => {
    return path.resolve(__dirname, relativePath);
};

module.exports = {
    entry: {
        app: absolutePath('./index.js'),
    },
    output: {
        filename: '[name].js',
        publicPath: "./",
        path: absolutePath('./dist/')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }],
    },
};
