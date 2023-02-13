const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const fs = require("fs");
const baseConfig = require('./webpack.config');

const distDir = path.resolve(__dirname, 'dist');
fs.rmSync(distDir, {recursive: true, force: true});

const serverConfig = {
  ...baseConfig,
  target: "node",
  entry: 'entry-server.tsx',
  output: {
    filename: "ssg.js"
  }
};

const clientConfig = {
  ...baseConfig,
  target: "web",
  entry: 'entry-client.tsx',
  output: {
    filename: "[contenthash].js",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
  },
  externals: {
    'preact': 'preact'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'remote.html',
      template: "./src/remote.html",
      inject: false
    }),
  ]
};

module.exports = [serverConfig, clientConfig];
