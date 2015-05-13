const React = require('react/addons');
const ActionCreator = require('../actions/SlideActions');
// const Playground = require('component-playground');
// const example = require("raw!./examples/component.example");

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
    let { slide } = this.props;

    return (
      <section id={ slide.id } className="Slide" dangerouslySetInnerHTML={{ __html: slide.content }}></section>
    );
  }
});

// <div className="component-documentation">
//   <Playground codeText={`console.log("test");`} scope={{React: React}}/>
// </div>

module.exports = Slide;
