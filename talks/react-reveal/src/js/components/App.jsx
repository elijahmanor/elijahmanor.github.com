const React = require('react');
const Reflux = require('reflux');
const SlideStore = require('../stores/SlideStore');
const SlideActions = require('../actions/SlideActions');
const SlideList = require('./SlideList.jsx');

let App = React.createClass({
  mixins: [Reflux.connect(SlideStore)],
  handlePrevious(e) {
    SlideActions.previous();
  },
  handleNext(e) {
    console.log('App', 'handleNext');
    SlideActions.next();
  },
  render() {
    let {slides} = this.state;

    return (
      <div className="Convey">
        <SlideList slides={slides} />
        <nav className="Controls">
          <button onClick={this.handlePrevious}>Previous</button>
          <button onClick={this.handleNext}>Next</button>
        </nav>
        <footer></footer>
      </div>
    );
  }
});

module.exports = App;
