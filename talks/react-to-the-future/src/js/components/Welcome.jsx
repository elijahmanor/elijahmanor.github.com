let React = require('react/addons');
let Link = require('react-router').Link;

const Welcome = React.createClass({
  render() {
    let slide = { setIndex: 0, slideIndex: 0 };

    return (
      <div className="Welcome">
        <h1>React to the Future</h1>
        <h2>&lt;anglebrackets /&gt;</h2>
        <Link to="slide" params={slide}>Start Slides</Link>
      </div>
    );
  }
});

module.exports = Welcome;
