"use strict";

var HelloWorld = React.createClass({
  displayName: "HelloWorld",

  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name,
      "!"
    );
  }
});

React.render(React.createElement(HelloWorld, { name: "JavaScript" }), document.getElementById("widget"));