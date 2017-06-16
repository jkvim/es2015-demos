module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 200 versions'],
        }),
        require('cssnano')({
            discardComments: {
                removeAll: true,
            },
            discardUnused: false
        })
    ]
};