const React = require('react');
const Slide = require('./Slide.jsx');
const CSSTransitionGroup = React.addons.CSSTransitionGroup;

let SlideList = React.createClass({
  render() {
    let {slides} = this.props;

    return (
      <div className="SlideList">
        <CSSTransitionGroup transitionName="carousel">
        {
          slides.filter(slide => slide.status === 'current')
            .map(slide => <Slide slide={slide} key={slide.title} />)
        }
        </CSSTransitionGroup>
      </div>
    );
  }
});

module.exports = SlideList;
