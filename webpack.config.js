var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        "index": "./index.js",
        "common": ['vue', 'jquery', 'underscore', 'backbone']
    },
     output: {
        path: './dist',       
        publicPath: '/path/',     
        filename: '[name].[hash].js'   
    },
     module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.less$/,
                loader: extractTextWebpackPlugin.extract("style-loader", "css-loader!less-loader")
                // 配合‘extract-text-webpack-plugin’可以剥离，css
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg)$/,
                loader: 'url-loader?limite=8192'   // limit 是转换base64的文件大小的阀值8兆
            },
            {
                test: /\.html$/,
                loader: 'html-loader'    // 可以用来加载模板
            }
        ]
    },
    resolve: {
        root: [
            path.resolve(__dirname, 'src/lib')
        ],
        extensions: ['', '.js'],
        alias: {
            'underscore': 'underscore.js',
            'backbone': 'backbone.js',
        }
    },
     plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: '[name].[hash].js',
            chunks: ['index', 'common']    // extract commonChunk  from index & common
        }),
        new htmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            chunks: ['index', 'common']
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery"
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new extractTextWebpackPlugin("style.css", {
            allChunks: true
        })
    ]
};