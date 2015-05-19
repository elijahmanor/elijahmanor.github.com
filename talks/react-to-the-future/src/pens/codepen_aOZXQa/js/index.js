"use strict";

var HelloWorld = React.createClass({
  displayName: "HelloWorld",

  getInitialState: function getInitialState() {
    return { count: 0 };
  },
  handleClick: function handleClick() {
    this.setState({ count: ++this.state.count });
    //this.setState(state => ({ count: state.count + 1 }) );
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Hello ",
        this.state.count,
        "!"
      ),
      React.createElement(
        "button",
        { onClick: this.handleClick },
        "Click Me"
      )
    );
  }
});

React.render(React.createElement(HelloWorld, null), document.body);