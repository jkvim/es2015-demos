const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

console.log('---------------------' + process.env.environment + '-------------------');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
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
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'postcss-loader', 'sass-loader']
            })
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        }, {
            test: /\.(jpg|png|gif)$/,
            use: ['url-loader']
        }, {
            test: /\.(eot|svg|ttf|woff)$/,
            use: ['file-loader']
        }]
    }
};
