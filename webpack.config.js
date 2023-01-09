const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
  mode: 'production',
  output: {
    filename: "[name].[contenthash].js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: 'url-loader',
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      'src'
    ],
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      react: "preact/compat",
      'react-dom': "preact/compat"
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "snowrunner",
      filename: "remoteEntry.js",
      exposes: {
        './bootstrap': './src/bootstrap'
      },
      shared: {
        ...deps,
        'preact': {
          singleton: true,
          requiredVersion: deps.preact
        },
        'preact/hooks': {
          singleton: true,
          requiredVersion: deps.preact
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ],
};
