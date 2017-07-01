/* eslint-disable */

var webpack = require('webpack');
var path = require('path');
const root = path.join(process.cwd(), 'src');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
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
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1'
        ]
      },
      { test: /\.(eot|png|ttf|svg|woff|woff2)$/, loader: 'url-loader'}
    ]
  },

  resolve: {
    extensions: [ '.js', '.jsx'],
    modules: [
      path.join(process.cwd(), 'src'),
      'node_modules'
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
