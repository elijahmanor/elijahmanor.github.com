'use strict';

var webpack = require('webpack');
var base = require('./webpack.base.config');

base.debug = true;
base.devtool = 'eval-source-map';

base.devServer = {
  contentBase: '.',
  hot: true,
  inline: true,
  https: false
};

base.module.loaders.forEach(function (loader) {
  if (loader.name === 'js') {
    loader.loaders.unshift('react-hot');
  }
});

base.plugins.push(new webpack.HotModuleReplacementPlugin());

base.plugins.push(new webpack.NoErrorsPlugin());

base.module.preLoaders = [];

module.exports = base;
