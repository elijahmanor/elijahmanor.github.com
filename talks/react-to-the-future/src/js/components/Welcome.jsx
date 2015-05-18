const React = require('react');
const Link = require('react-router').Link;

const Welcome = React.createClass({
  render() {
    var slide = { setIndex: 0, slideIndex: 0 };

    return (
      <div className="Welcome">
        <h1>Welcome!</h1>
        <ul>
          <li><Link to="list">List</Link></li>
          <li><Link to="slide" params={slide}>Start</Link></li>
        </ul>
      </div>
    );
  }
});

module.exports = Welcome;
