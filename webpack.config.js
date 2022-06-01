const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    module: {
      rules: [
          { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
          { test: /\.(js)$/, use: 'babel-loader' }
      ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ESLintPlugin()
    ],
    mode: 'production',
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
        ignored: /node_modules/,
    },

}