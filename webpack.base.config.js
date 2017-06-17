const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const packageConfig = require('./package.json');

const vendorList = Object.keys(packageConfig.dependencies);

const absolutePath = (relativePath) => {
    return path.resolve(__dirname, relativePath);
};

const environment = JSON.stringify(process.env.environment);

const openSourceMap = 'production' === environment ? false : true;

console.log('---------------------------' + environment + '----------------------------');

module.exports = {
    entry: {
        app: absolutePath('./index.js'),
        vendor: vendorList
    },
    output: {
        filename: '[name].[hash:5].js',
        publicPath: "./",
        path: absolutePath('./dist/')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: environment
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
        }),
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader: 'sass-loader'
                }]
            })
        }, {
            test: /\.html$/,
            use: [{
                loader: 'raw-loader'
            }]
        }, {
            test: /\.font\.js$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: openSourceMap
                    }
                }, {
                    loader: 'fontgen-loader',
                    options: {
                        embed: true,
                    }
                }]
            })
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
            use: [{
                loader: 'file-loader'
            }]
        }],
    },
    stats: 'errors-only'
};
