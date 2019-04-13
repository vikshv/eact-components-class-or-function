const path = require ('path');

module.exports = function(params) {
    const { debug = true } = params;

    const result = [
        eslintRule(params),
        jsRule(params)
    ];

    return result;
};

function eslintRule(params) {
    const { jsParams = {} } = params;
    return Object.assign({
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint',
        include: path.resolve(params.dirname, 'src/')
    }, jsParams.eslint);
}

function jsRule(params) {
    const { debug = true } = params;
    return {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel',
                options: {
                    plugins: [
                        '@babel/plugin-proposal-export-default-from',
                        '@babel/plugin-proposal-class-properties'
                    ],
                    presets: [
                        [
                            '@babel/env', {
                                modules: false
                            }
                        ],
                        '@babel/react'
                    ],
                    env: {
                        development: {
                            plugins: ['react-hot-loader/babel']
                        },
                        production: {
                            plugins: []
                        }
                    },
                    cacheDirectory: debug
                }
            }
        ]
    };
}
