var Reflux = require('reflux');

var SlideActions = Reflux.createActions(
  ['previous', 'next', 'list']
);

module.exports = SlideActions;
