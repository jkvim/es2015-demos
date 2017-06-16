const postcssConfig = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 200 versions'],
        })
    ]
};
if ('production' === process.env.environment) {
    postcssConfig.plugins.push(
        require('cssnano')({
            discardComments: {
                removeAll: true,
            },
            discardUnused: false
        })
    );
}
module.exports = postcssConfig;