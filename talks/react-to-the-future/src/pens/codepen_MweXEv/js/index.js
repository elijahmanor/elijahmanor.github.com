"use strict";

var HelloWorld = React.createClass({
  displayName: "HelloWorld",

  render: function render() {
    return React.createElement(
      "div",
      null,
      "Hello World!"
    );
  }
});

React.render(React.createElement(HelloWorld, null), document.body);