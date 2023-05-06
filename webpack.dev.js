const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config');

module.exports = {
  ...baseConfig,
  mode: 'development',
  entry: 'dev.tsx',
  output: {
    filename: "[name].js",
  },
  devServer: {
    port: 3101,
    hot: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  externals: {
    'preact': 'preact'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'remote.html',
      template: "./src/dev.html",
      inject: false
    }),
  ]
};
