var webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// const CleanCSSPlugin = require("less-plugin-clean-css");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                exclude: /^node_modules$/,
                loader: ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "autoprefixer-loader"
                    }, {
                        loader: "less-loader"/*,
                        options: {
                            plugins: [
                                new CleanCSSPlugin({ advanced: true })
                            ]
                        }*/
                    }]
                })
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),
        new ExtractTextWebpackPlugin( "bundle.css" ),
        new webpack.ProvidePlugin({
            Promise: "bluebird"
        })
    ]
};