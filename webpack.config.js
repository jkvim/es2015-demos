const path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './index.js')
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
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
