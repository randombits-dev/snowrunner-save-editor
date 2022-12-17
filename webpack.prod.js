const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

require('dotenv').config();
const deps = require("./package.json").dependencies;
const HOST = process.env.HOST;

module.exports = {
  mode: 'production',
  output: {
    filename: "[name].[contenthash].js",
    publicPath: HOST,
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
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "snowrunner",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './SnowrunnerIndex': './src/bootstrap'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps["react-dom"]
        }
      },
    })
  ],
};
