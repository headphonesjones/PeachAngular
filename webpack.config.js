var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname)) + '/app/!html'
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }

        ]
    },
    context: __dirname,
    entry: "./app/index.js",
    plugins: [
        new CopyWebpackPlugin([
            { from: 'app/images', to: 'images' },
        ])
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    devtool: "source-map"
}
