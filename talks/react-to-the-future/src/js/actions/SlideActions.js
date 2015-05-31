var Reflux = require('reflux');

var SlideActions = Reflux.createActions(
  ['previous', 'next', 'list', 'offline']
);

module.exports = SlideActions;
