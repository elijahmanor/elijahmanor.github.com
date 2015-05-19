const React = require('react');
const Link = require('react-router').Link;
const SlideStore = require('../stores/SlideStore');
const classNames = require('classnames');

const SlideFooter = React.createClass({
  render() {
    let progress = SlideStore.getProgress(); //TODO: Pass in data instead of using store
    let classes = classNames(
      { 'SlideManager-progress': true },
      'SlideManager-progress--' + Math.floor(progress.current / progress.total * 100)
    );

    return (
      <footer className="SlideManager-footer">
        <div className={classes} data-progress={`${progress.current} / ${progress.total}`}></div>
      </footer>
    );
  }
});

module.exports = SlideFooter;
