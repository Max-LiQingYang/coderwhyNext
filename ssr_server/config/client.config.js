let path = require('path');
let baseConfig = require('./base.config');
let { merge } = require('webpack-merge');

module.exports = merge(baseConfig, {
    entry: "./src/client/index.js", // 入口
    output: {
        filename: "client_bundle.js",
        path: path.resolve(__dirname, '../build/client'),
    }
})