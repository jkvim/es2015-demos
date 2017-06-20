const path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './index.js')
    },
    output: {
        publicPath: '/',
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
        }]
    }
};
