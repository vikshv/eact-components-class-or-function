'use strict';

const path = require ('path');
const webpack = require ('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
    mode: 'development',
    
    entry: './src/index.js',

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },

    resolve: {
        modules: [
            __dirname,
            'node_modules'
        ],
        alias: {}
    },

    resolveLoader: {
        moduleExtensions: ['-loader']
    },

    plugins: [
        new ExtractTextPlugin('style.css'),
        new CaseSensitivePathsPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },

    stats: {
        children: false
    }
}
