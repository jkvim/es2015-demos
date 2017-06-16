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
    devServer: {
        hot: true,
        port: 8080,
        compress: true,
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './template.html',
            filename: 'index.html'
        }),
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }, {
                loader: 'postcss-loader'
            }]
        }, {
            test: /\.html$/,
            use: [{
                loader: 'raw-loader'
            }]
        }, {
            test: /\.font\.js$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'fontgen-loader',
                options: {
                    embed: true,
                }
            }]
        }, {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader'
            }]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10240
                }
            }]
        }, {
            test: /\.(eot|ttf|woff|svg)$/,
            use: [
                {
                    loader: 'url-loader'
                }, {
                    loader: 'file-loader'
                }]
        }],
    },
    devtool: 'source-map'
};
