const React = require('react/addons');
const ActionCreator = require('../actions/SlideActions');
// const Playground = require('component-playground');
// const example = require("raw!./examples/component.example");
const markdown = require( "markdown" ).markdown;

let Slide = React.createClass({
  propTypes: {
    content: React.PropTypes.string.isRequired
  },
  getDefaultProps() {
    return {
      content: ''
    };
  },
  render() {
    let {slide} = this.props;

    console.log(markdown.toHTML("Hello *World*!"));

    return (
      <section className="Slide">{slide.content}</section>
    );
  }
});

// <div className="component-documentation">
//   <Playground codeText={`console.log("test");`} scope={{React: React}}/>
// </div>

module.exports = Slide;
