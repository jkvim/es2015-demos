const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: path.resolve(__dirname, './index.js')
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
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
            use: ['babel-loader']
        }, {
            test: /\.(jpg|png|gif)$/,
            use: ['url-loader']
        }, {
            test: /\.(eot|svg|ttf|woff)$/,
            use: ['file-loader']
        }]
    }
};
