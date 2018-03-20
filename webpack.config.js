'use strict';

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'web',

    entry: [
        './public/js/app'
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },

    module: {
        rules: []
    },

    plugins: [
        new CopyWebpackPlugin([
            {
                from: './public/vendor/themes/**',
                to: '.'
            }
        ])
    ],

    devtool: 'source-map',
    stats: true
};
