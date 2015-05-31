const React = require('react');
const Reflux = require('reflux');
const SlideStore = require('../stores/SlideStore');
const Slide = require('./Slide.jsx');
const SlideControls = require('./SlideControls.jsx');
const SlideFooter = require('./SlideFooter.jsx');

const SlideManager = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  mixins: [Reflux.connect(SlideStore)],
  componentWillMount() { // TODO: This could be a mixin
    SlideStore.setRouter(this.context.router);
  },
  render() {
    let { setIndex, slideIndex } = this.props.params;
    let slide = SlideStore.gotoSlide(setIndex, slideIndex);

    return (
      <div className="SlideManager">
        <Slide slide={slide} />
        <SlideControls {...this.props.params} />
        <SlideFooter {...this.props.params} />
      </div>
    );
  }
});

module.exports = SlideManager;
