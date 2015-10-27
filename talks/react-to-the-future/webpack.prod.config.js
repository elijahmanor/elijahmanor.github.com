'use strict';

var webpack = require('webpack');
var base = require('./webpack.base.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractScss = new ExtractTextPlugin(1, "styles-[contenthash].css");

base.module.loaders.forEach(function (loader) {
  if (loader.name === 'styles') {
    var loaders = loader.loader.split('!');
    var lastLoader = loaders.shift();

    loader.loader = extractScss.extract(
      lastLoader, loaders.join('!')
    );
  }
});

base.plugins.push(extractScss);

base.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  })
);

module.exports = base;
