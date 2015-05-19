const React = require('react');
const SlideActions = require('../actions/SlideActions');
const SlideStore = require('../stores/SlideStore');
const Link = require('react-router').Link;
const key = require('keymaster');
const screenfull = require('screenfull');

const SlideControls = React.createClass({
  // contextTypes: {
  //   router: React.PropTypes.func
  // },
  componentDidMount() {
    key('left, up, p', SlideActions.previous);
    key('right, down, space, enter, n', SlideActions.next);
    key('esc', SlideActions.list);
    key('f', () => {
      screenfull.toggle();
    });
  },
  componentWillUnmount() {
    key.unbind('left, up, p');
    key.unbind('right, down, space, enter, n');
    key.unbind('esc');
    key.unbind('f');
  },
  render() {
    return (
      <nav className="SlideManager-controls">
        <Link to="slide" params={SlideStore.getPrevious()} className="Arrow Arrow--left"></Link>
        <Link to="slide" params={SlideStore.getNext()} className="Arrow Arrow--right"></Link>
      </nav>
    );
  }
});

module.exports = SlideControls;
