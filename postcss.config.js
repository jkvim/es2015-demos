const postcssConfig = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 200 versions'],
        })
    ]
};
if (true || 'production' === process.env.environment) {
    postcssConfig.plugins.push(
        require('cssnano')({
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
                discardUnused: false
            }]
        })
    );
}
module.exports = postcssConfig;