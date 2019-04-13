'use strict';

const webpack = require ('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('./webpack/linters/stylelint');

const config = require('./webpack.config.js');
const rules = require('./webpack/rules');

const hotRules = rules({
    hot: true,
    dirname: __dirname
});

module.exports = Object.assign({}, config, {
    devtool: 'cheap-module-source-map',

    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],

    output: Object.assign({}, config.output, {
        publicPath: '/'
    }),

    resolve: Object.assign({}, config.resolve, {
        alias: Object.assign({}, config.resolve.alias, {
            'react-dom': '@hot-loader/react-dom'
        })
    }),

    plugins: config.plugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new ProgressBarPlugin(),
        new WebpackNotifierPlugin({
            title: 'React-components',
            alwaysNotify: true
        }),
        new HtmlWebPackPlugin({
            title: 'React-components',
            template: './src/index.html',
            alwaysWriteToDisk: true
        }),
        StyleLintPlugin()
    ]),

    module: Object.assign({}, config.module, {
        rules: config.module.rules.concat(hotRules)
    })
});
