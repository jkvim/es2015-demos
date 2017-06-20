const path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './index.js')
    },
    output: {
        filename: '[name].js'
    }
};
