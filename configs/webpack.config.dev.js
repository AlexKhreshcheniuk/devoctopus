const path = require('path');
const glob = require('glob');

const webpack = require('webpack');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.config.common.js');

const generateHTMLPlugins = () => glob.sync('./src/**/*.html').map(
  (dir) => new HTMLWebpackPlugin({
    filename: path.basename(dir), // Output
    template: dir, // Input
  }),
);

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: 'src',
    watchContentBase: true,
    hot: true,
    open: true,
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...generateHTMLPlugins(),
  ],
});
