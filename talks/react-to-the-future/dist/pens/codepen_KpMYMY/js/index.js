"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var HelloWorld = (function (_React$Component) {
  function HelloWorld(props) {
    _classCallCheck(this, HelloWorld);

    _get(Object.getPrototypeOf(HelloWorld.prototype), "constructor", this).call(this, props);
    this.state = { count: props.initialCount };
  }

  _inherits(HelloWorld, _React$Component);

  _createClass(HelloWorld, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({ count: this.state.count + 1 });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "Hello ",
          this.props.name,
          ": ",
          this.state.count,
          "!"
        ),
        React.createElement(
          "button",
          { onClick: this.handleClick.bind(this) },
          "Click Me"
        )
      );
    }
  }]);

  return HelloWorld;
})(React.Component);

HelloWorld.propTypes = {
  name: React.PropTypes.string.isRequired,
  initialCount: React.PropTypes.number
};
HelloWorld.defaultProps = {
  name: "JavaScript",
  initialCount: 0
};

React.render(React.createElement(HelloWorld, null), document.body);