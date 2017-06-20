const path = require('path');

module.exports = {
    entry: {
        publicPath: '/',
        app: path.resolve(__dirname, './index.js')
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
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
