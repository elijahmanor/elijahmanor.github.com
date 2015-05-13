const React = require('react');
const Slide = require('./Slide.jsx');
const CSSTransitionGroup = React.addons.CSSTransitionGroup;

let SlideList = React.createClass({
  render() {
    let {slides} = this.props;
    // <CSSTransitionGroup transitionName="carousel">
    //   </CSSTransitionGroup>

    return (
      <div className="SlideList">
        {
          slides.filter(slide => slide.status === 'current')
            .map(slide => <Slide slide={slide} key={slide.id} />)
        }
      </div>
    );
  }
});

module.exports = SlideList;
