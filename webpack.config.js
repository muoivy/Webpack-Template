const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

// Our function that generates our html plugins
function generateHtmlPlugins (templateDir) {
    // Read files in template directory
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
    return templateFiles.map(item => {
        // Split names and extension
        const parts = item.split('.')
        const name = parts[0]
        const extension = parts[1]
        // Create new HTMLWebpackPlugin with options
        return new HTMLWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
        })
    })
}

// Call our function on our views directory.
const htmlPlugins = generateHtmlPlugins('./src/html/views')

module.exports = ( env, argv ) => ({
    entry: './src/js/index.js',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        watchContentBase: true,
        port: 3000,
        open: true
    },
    output: {
        filename: 'assets/js/bundle.js',
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

    ].concat(htmlPlugins)
});