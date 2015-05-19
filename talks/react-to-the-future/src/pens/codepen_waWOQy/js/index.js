"use strict";

var HelloWorld = React.createClass({
  displayName: "HelloWorld",

  getInitialState: function getInitialState() {
    return { count: 0 };
  },
  componentDidMount: function componentDidMount() {
    this.refs.count.getDOMNode().textContent = "42";
  },
  handleClick: function handleClick() {
    this.setState({ count: ++this.state.count });
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Hello ",
        React.createElement(
          "span",
          { ref: "count" },
          this.state.count
        ),
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