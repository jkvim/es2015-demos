const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const absolutePath = (relativePath) => {
    return path.resolve(__dirname, relativePath);
};

console.log('---------------------' + process.env.environment + '-------------------');

module.exports = {
    entry: {
        app: absolutePath('./index.js')
    },
    output: {
        publicPath: '/',
        filename: '[name].js',
        path: absolutePath('./dist')
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: process.env.environment
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'postcss-loader', 'sass-loader']
            })
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        }, {
            test: /\.(jpg|png|gif)$/,
            exclude: /node_modules/,
            use: ['url-loader']
        }, {
            test: /\.(eot|svg|ttf|woff)$/,
            exclude: /node_modules/,
            use: ['file-loader']
        }]
    }
};
