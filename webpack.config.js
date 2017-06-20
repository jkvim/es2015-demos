const path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './index.js')
    },
    output: {
        publicPath: '/',
        filename: '[name].js'
    }
};
