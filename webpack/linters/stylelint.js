'use strict';

const EasyStylelintPlugin = require('easy-stylelint-plugin');

const defaultOptions = {
    configFile: '.stylelintrc.json',
    context: 'src',
    files: [
        '**/*.css',
        '**/*.mcss'
    ],
    quiet: false
};

module.exports = function(options) {
    return new EasyStylelintPlugin(Object.assign({}, defaultOptions, options));
};
