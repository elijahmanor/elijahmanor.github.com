'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var vendors = [ 'react', 'reflux', 'react-router', 'postal', 'marked', 'classnames', 'keymaster', 'screenfull', 'lodash-node' ];

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: {
    javascript: './js/index.jsx',
    vendors: vendors,
    stylesheet: './css/main.scss'
  },
  output: {
    filename: 'app-[chunkhash].js',
    path: path.join(__dirname, '/dist')
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'normalize.scss': path.join(__dirname, '/node_modules/normalize.scss')
    }
  },
  resolveLoader: {
    fallback: path.join(__dirname, '/node_modules')
  },
  module: {
    loaders: [
      {
        test: /(\.md)|(\.ttf)|(\.css)|(vendor\/.*(js|css))$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        name: 'js',
        test: /\.jsx?$/,
        exclude: [/node_modules/, /src\/vendor/],
        loaders: ['babel?optional[]=runtime&stage=0'],
      },
      {
        test: /\.(png|jpg|svg|gif|mp4|webm)$/,
        loader: 'url?limit=8192'
      },
      {
        name: 'styles',
        test: /\.scss$/,
        loader: 'style!css!autoprefixer?browsers=last 2 version!sass'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors-[hash].js',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new TransferWebpackPlugin([
      { from: './img', to: './img' },
      { from: './pens', to: './pens' },
      { from: './vendor', to: './vendor' }
    ]),
    new WebpackNotifierPlugin()
  ],
  node: {
    dns: 'mock',
    net: 'mock'
  }
};
