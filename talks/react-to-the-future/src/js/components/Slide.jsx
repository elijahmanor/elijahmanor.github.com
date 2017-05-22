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
    let metadata = this.props.slide.metadata || {};

    let iframe = this.refs.slide.getDOMNode().querySelector('iframe');
    if (iframe) {
      let src = this.props.slide.isOffline ?
        iframe.getAttribute('data-offline') : iframe.getAttribute('data-online');
      iframe.setAttribute('src', src);
      if ( metadata && metadata.className.includes('Slide--reload') ) {
        console.log( "attempt to reload iframe" );
        iframe.contentWindow.location.reload(true);
        iframe.src = iframe.src;
      }
    }

    if ( metadata && metadata.className.includes('Slide--static') ) {
      document.body.scrollTop = 0;
    }
  },
  render() {
    let { slide } = this.props;
    let metadata = slide.metadata || {};
    let classes = classNames('SlideManager-slide', metadata.className);

    return (
      <section ref="slide" id={metadata.id} className={classes}
        dangerouslySetInnerHTML={{ __html: slide.content }}></section>
    );
  }
});

module.exports = Slide;
