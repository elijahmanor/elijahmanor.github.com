'use strict';

var speakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Michele Bustamante', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];

var HelloWorld = React.createClass({
  displayName: 'HelloWorld',

  handleClick: function handleClick(name, e) {
    alert(name);
  },
  render: function render() {
    var _this = this;

    return React.createElement(
      'ul',
      null,
      this.props.names.map(function (name) {
        return React.createElement(
          'li',
          { onClick: _this.handleClick.bind(_this, name) },
          name
        );
      })
    );
  }
});

React.render(React.createElement(HelloWorld, { names: speakers }), document.body);