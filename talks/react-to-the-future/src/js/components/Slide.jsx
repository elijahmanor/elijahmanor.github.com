const React = require('react/addons');
// const ActionCreator = require('../actions/SlideActions');
const SlideStore = require('../stores/SlideStore');
const classNames = require('classnames');

const Slide = React.createClass({
  propTypes: {
    slide: React.PropTypes.object.isRequired
  },
  componentDidMount() { // TODO: Think of a better way?
    window.Prism.highlightAll();
    window.mermaid.init();
  },
  componentDidUpdate() { // TODO: Think of a better way?
    window.Prism.highlightAll();
    window.mermaid.init();
  },
  render() {
    let { slide } = this.props;
    let metadata = slide.metadata || {};
    let classes = classNames('SlideManager-slide', metadata.className);

    return (
      <section id={metadata.id} className={classes}
        dangerouslySetInnerHTML={{ __html: slide.content }}></section>
    );
  }
});

module.exports = Slide;
