var path = require('path');
var webpack = require('webpack');
var publicPath = '/';
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ExtractLess = new ExtractTextPlugin('./dist/components.css');
module.exports = {
  entry: {
    "build/app": "./src/app.js"
  },
  output: {
    path: __dirname + publicPath,
    filename: "[name].js",
    publicPath: publicPath,
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css!postcss" },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader") },
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.(jpg|png|gif)$/, loader: 'url-loader' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  postcss:[autoprefixer({browsers:['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8']})],
  plugins: [
    ExtractLess
  ],
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  devtool: 'source-map',
  watch: true
};