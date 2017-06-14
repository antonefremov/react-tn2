/* eslint-disable */

var webpack = require('webpack');
var path = require('path');
const root = path.join(process.cwd(), 'src');

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [ "babel-loader", ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
        ],
      }
    ]
  },

  resolve: {
    extensions: [ '.js', '.jsx'],
    modules: [
      path.join(process.cwd(), 'src'),
      'node_modules'
    ]
  }
};
