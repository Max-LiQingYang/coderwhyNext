let path = require('path');
let nodeExternals = require('webpack-node-externals');
let baseConfig = require('./base.config');
let { merge } = require('webpack-merge');

module.exports = merge(baseConfig, {
    entry: "./src/server/index.js", // 入口
    output: {
        filename: "server_bundle.js",
        path: path.resolve(__dirname, '../build/server'),
    },
    externals: [nodeExternals()],
});