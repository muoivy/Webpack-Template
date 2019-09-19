const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ( env, argv ) => ({
    entry: './src/assets/js/index.js',
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        watchContentBase: true,
        port: 3000,
        open: true
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-loader',
                        options: argv.mode !== 'production' ? {
                            pretty: true
                        } : {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug'
        })
    ]
});