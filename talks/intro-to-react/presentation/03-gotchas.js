import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  SlideSet,
  BlockQuote,
  Cite,
  Heading,
  Quote,
  Slide,
  Link,
  Image,
  Layout,
  Fill,
  Fit,
  Text,
  Appear,
  List,
  ListItem,
  ComponentPlayground,
  MarkdownSlides,
  CodePane,
  Code,
  S
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import Terminal from "spectacle-terminal";
import PropTypes from "prop-types";

const snippets = {
  passingArgs: {
    code: require("raw-loader!../snippets/passing-args.code"),
    play: require("raw-loader!../snippets/passing-args.play")
  },
  comments: {
    code: require("raw-loader!../snippets/comments.code")
  }
};

export default (theme, images) => ([
  <Slide id="gotchas" bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Gotchas
    </Heading>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading fit>JSX Tree from Render</Heading>
    <Layout>
      <Fill style={{ marginRight: "0.5rem" }}>
        <Heading size={5} textColor="primary" margin={10}>
        Bad (Alt React 16+)
        </Heading>
        <CodePane lang="jsx" theme="external" source={`
return (
  <div>Test 1</div>
  <div>Test 2</div>
);
          `}
        margin="20px auto"
        overflow = "overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <Heading size={5} textColor="primary" margin={10}>
        Good
        </Heading>
        <CodePane
          lang="jsx"
          theme="external"
          source={`
return (
  <div>
    <div>Test 1</div>
    <div>Test 2</div>
  </div>
);
          `}
          margin="20px auto"
          overflow = "overflow"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading fit>JSX Tree from Render</Heading>
    <Layout>
      <Fill style={{ flexGrow: "0", flexBasis: "30%", marginRight: "0.5rem" }}>
        <Heading size={5} textColor="primary" margin={10}>
          JSX
        </Heading>
        <CodePane lang="jsx" theme="external" source={`
return (
  <div>
    <div>Test 1</div>
    <div>Test 2</div>
  </div>
);
        `}
          margin="20px auto"
          overflow = "overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <Heading size={5} textColor="primary" margin={10}>
          JavaScript
        </Heading>
        <CodePane
          lang="jsx"
          theme="external"
          source={`
return (
  React.createElement("div", null,
    React.createElement("div", null, "Test 1"),
    React.createElement("div", null, "Test 2")
  )
);
        `}
          margin="20px auto"
          overflow = "overflow"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading fit>Attribute Names</Heading>
    <Layout>
      <Fill style={{ marginRight: "0.5rem" }}>
        <Heading size={5} textColor="primary" margin={10}>
        HTML
        </Heading>
        <CodePane lang="jsx" theme="external" source={`
<div class="Media">
  <img class="Media-figure" src="/react.jpg">
  <div class="Media-body">
    <h3 class="Media-title">React</h3>
    <p>Lorem Ipsum</p>
  </div>
</div>
      `}
        margin="20px auto"
        overflow = "overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <Heading size={5} textColor="primary" margin={10}>
        JSX
        </Heading>
        <CodePane
          lang="jsx"
          theme="external"
          source={`
return (
  <div className="Media">
    <img className="Media-figure" src="/react.jpg">
    <div className="Media-body">
      <h3 className="Media-title">React</h3>
      <p>Lorem Ipsum</p>
    </div>
  </div>
);
      `}
          margin="20px auto"
          overflow = "overflow"
        />
      </Fill>
    </Layout>
  </Slide>,
  <CodeSlide
    lang="jsx"
    code={snippets.passingArgs.code}
    ranges={[
      { loc: [0, 31], title: <div><div>Passing Arguments to</div><div>Event Handlers</div></div> },
      { loc: [14, 20], note: "You can pass an extra parameter to the bind method" },
      { loc: [15, 18], note: "Although it does bind on every render, it's not a huge hit (measure if in doubt)" }
    ]}
  />,
  <Slide maxHeight="100vh" maxWidth="90vw" bgColor="secondary">
    <Heading caps fit>Passing Arguments to Event Handlers</Heading>
    <ComponentPlayground theme="external" scope={{ PropTypes, Component }} code={snippets.passingArgs.play} />
  </Slide>,
  <CodeSlide
    lang="jsx"
    code={snippets.comments.code}
    ranges={[
      { loc: [0, 21], title: "Adding Comments" },
      { loc: [4, 6], note: "Within the JavaScript you can write comments using normal single-line or multi-line syntax" },
      { loc: [10, 11], note: "Within JSX you can use multi-line comment syntax inside a JavaScript expression" }
    ]}
  />
//   MarkdownSlides`
// <div class="Split">
//   <div class="Split-column Split-column--60">
//     <pre data-line="2-3,9" class="language-jsx language--clean language--small"><code>
// var HelloWorld = React.createClass({
//   // Single-line comment
//   /\* Multi-line comment \*/
//   getDefaultProps: function () {
//     return { name: "JavaScript" };
//   }
//   render: function() {
//     return &lt;div&gt;
//       {/\* JS Expression multi-line \*/}
//       &lt;p&gt;Hello {this.props.name}!&lt;/p&gt;
//     &lt;/div&gt;;
//   }
// });</code></pre>
//   </div>
//   <div class="Split-column Split-column--40">
//     <p>2-3. Within the JavaScript you can write comments using normal single-line or multi-line syntax.</p>
//     <p>9. Within JSX you can use multi-line comment syntax inside a JavaScript expression.</p>
//   </div>
// </div>

// ---

// # \`isMounted()\` before calling \`setState\`

// <div class="Split">
//   <div class="Split-column Split-column--40">
//     <p>Try to avoid code like this...</p>
//     <pre data-line="1" class="language-jsx language--clean language--small"><code>
// if (this.isMounted()) {
//   this.setState({ ... });
// }</code></pre>
//     <p>1. Try to **avoid** \`isMounted()\`</p>
//     <p>7. Unsubscribe to change events when component is unmounted (<a href="https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html">source</a>)</p>
//   </div>
//   <div class="Split-column Split-column--60">
//     <p>Instead there are ways to get around...</p>
//     <pre data-line="7" class="language-jsx language--clean language--small"><code>
// class MyComponent extends React.Component {
//   componentDidMount() {
//     mydatastore.subscribe(this);
//   }
//   render() { /\* ... \*/ }
//   componentWillUnmount() {
//     mydatastore.unsubscribe(this);
//   }
// }</code></pre>
//   </div>
// </div>
// `
]);
