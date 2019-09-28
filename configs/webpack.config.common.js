const glob = require('glob');
const path = require('path');

const StyleLintPlugin = require('stylelint-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const generateHTMLPlugins = () => glob.sync('./src/**/*.html').map(
  dir => new HTMLWebpackPlugin({
    filename: path.basename(dir), // Output
    template: dir, // Input
  }),
);

module.exports = {
  node: {
    fs: 'empty',
  },
  entry: [
    './src/js/app.js',
    './src/styles/main.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
    ],
  },
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.scss',
      failOnError: false,
      quiet: false,
    }),
    new CopyWebpackPlugin([
      {
        from: './src/assets/',
        to: './assets/',
      },
    ]),
    ...generateHTMLPlugins(),
  ],
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};
