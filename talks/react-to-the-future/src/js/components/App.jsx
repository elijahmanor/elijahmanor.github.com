const React = require('react');
const RouteHandler = require('react-router').RouteHandler;

const App = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render() {
    return (
      <div className="Convey">
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = App;
