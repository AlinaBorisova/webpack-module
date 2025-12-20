const path = require('path');
const ESLintPlugin = require("eslint-webpack-plugin");
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  plugins: [
    new ESLintPlugin({
      context: path.resolve(__dirname, 'src'),
      extensions: ['ts'],
      exclude: ['node_modules', 'dist'],
    }),
  ],
});