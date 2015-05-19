'use strict';

var speakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Michele Bustamante', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];

var HelloWorld = React.createClass({
  displayName: 'HelloWorld',

  getInitialState: function getInitialState() {
    return this.props;
  },
  handleSort: function handleSort() {
    this.setState({ names: this.state.names.sort() });
  },
  handleScott: function handleScott() {
    var scotts = this.state.names.filter(function (name) {
      return name.indexOf('Scott') > -1;
    });

    this.setState({ names: scotts });
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'ul',
        null,
        this.state.names.map(function (name) {
          return React.createElement(
            'li',
            null,
            name
          );
        })
      ),
      React.createElement(
        'button',
        { onClick: this.handleSort },
        'Sort'
      ),
      React.createElement(
        'button',
        { onClick: this.handleScott },
        'Scott'
      )
    );
  }
});

React.render(React.createElement(HelloWorld, { names: speakers }), document.body);