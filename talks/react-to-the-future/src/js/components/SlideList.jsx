const React = require('react');
const Reflux = require('reflux');
const SlideStore = require('../stores/SlideStore');
const Link = require('react-router').Link;
const _pluck = require('lodash-node/modern/collection/pluck');
const _flattenDeep = require('lodash-node/modern/array/flattenDeep');

const SlideList = React.createClass({
  mixins: [Reflux.connect(SlideStore)],
  contextTypes: { // TODO: Isn't there a Mixin for this?
    router: React.PropTypes.func
  },
  render() {
    let sets = this.state.slides;
    let slides = _flattenDeep(_pluck(sets, 'slides')); // TODO: Organize into SETS later

    return (
      <div className="SlideList">
        {
          slides.map(slide => {
            return <Link to="slide" params={slide}>{slide.title}</Link>
          })
        }
      </div>
    );
  }
});

module.exports = SlideList;
