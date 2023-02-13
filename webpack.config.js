module.exports = {
  mode: "production",
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
      'react-dom': "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime"
    }
  }
};
