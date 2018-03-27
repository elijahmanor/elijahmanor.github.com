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
  errorBoundaries: {
    code: require("raw-loader!../snippets/error-boundaries.code"),
    play: require("raw-loader!../snippets/error-boundaries.play")
  },
  errorBoundaryComponent: {
    code: require("raw-loader!../snippets/error-boundary-component.code"),
    play: require("raw-loader!../snippets/error-boundary-component.play")
  }
};

export default (theme, images) => ([
  <Slide id="what-is-new" bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      What's New in
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      React 16?
    </Heading>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Complete Rewrite
    </Heading>
    <Layout>
      <Fill style={{ marginRight: "0.5rem" }}>
        <Heading fit size={5} textColor="primary" margin={10}>
          Now with
        </Heading>
        <Heading fit size={5} textColor="primary" margin={10}>
          Fiber
        </Heading>
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <Image src={images.fiber.replace("/", "")} style={{ height: "500px" }} />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps fit>React Fiber</Heading>
    <List textColor="primary">
      <ListItem>Prioritize Updates by Importance</ListItem>
      <ListItem>Better Error Handling</ListItem>
      <ListItem>Return Multiple Elements from Render</ListItem>
      <ListItem>Portals</ListItem>
      <ListItem>Etc...</ListItem>
    </List>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps fit>Prioritize Updates by</Heading>
    <Heading caps fit>Importance</Heading>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps fit>Stack Reconciliation Algorithm (&amp;= v15)</Heading>
    <Image src={images.reactStackReconciliation.replace("/", "")} style={{ height: "50vh" }} />
    <Link textSize={24} textColor="tertiary" href="https://www.youtube.com/watch?v=ZCuYPiUIONs" style={{ display: "inline-block" }}>Lin Clark - A Cartoon Intro to Fiber</Link>
    <Text textSize={32} textColor="primary">Blocks the main thread as it calculates the tree</Text>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps fit>Fiber Reconciliation Algorithm (&amp;= v16)</Heading>
    <Image src={images.reactFiberReconciliation.replace("/", "")} style={{ height: "50vh" }} />
    <Link textSize={24} textColor="tertiary" href="https://www.youtube.com/watch?v=ZCuYPiUIONs" style={{ display: "inline-block" }}>Lin Clark - A Cartoon Intro to Fiber</Link>
    <Text textSize={32} textColor="primary">Calculates part of tree & pauses (<Code bgColor="#ccc" textColor="secondary" textSize={30}>window.requestIdleCallback</Code>) to check for updates</Text>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps fit>Prioritize Updates by Importance</Heading>
    <Image src={images.reactFiberPriorities.replace("/", "")} style={{ height: "50vh" }} />
    <Link textColor="tertiary" textSize={24} href="https://www.youtube.com/watch?v=ZCuYPiUIONs" style={{ display: "inline-block" }}>Lin Clark - A Cartoon Intro to Fiber</Link>
  </Slide>,
  <CodeSlide
    lang="jsx"
    code={snippets.errorBoundaries.code}
    ranges={[
      { loc: [0, 47], title: "Error Boundaries" },
      { loc: [5, 8], note: "componentDidCatch is a new lifecycle method" },
      { loc: [6, 7], note: "Can display this information if you want" },
      { loc: [36, 38], note: "Errors from render are thrown and caught" },
      { loc: [39, 42], note: "Errors outside of render (as result of event, etc) are not caught by error boundaries" }
    ]}
  />,
  <Slide maxHeight="100vh" maxWidth="90vw" bgColor="secondary">
    <Heading caps fit>Error Boundaries</Heading>
    <ComponentPlayground theme="light" scope={{ PropTypes, Component }} code={snippets.errorBoundaries.play} />
  </Slide>,
  <CodeSlide
    lang="jsx"
    code={snippets.errorBoundaryComponent.code}
    ranges={[
      { loc: [0, 59], title: "Error Boundaries" },
      { loc: [3, 24], note: "Pull out catch & display into ErrorBoundary component" },
      { loc: [25, 28], note: "Then wrap the component around are that may throw an error" }
    ]}
  />,
  <Slide maxHeight="100vh" maxWidth="90vw" bgColor="secondary">
    <Heading caps fit>Error Boundary Component</Heading>
    <ComponentPlayground theme="light" scope={{ PropTypes, Component }} code={snippets.errorBoundaryComponent.play} />
  </Slide>,
  <Slide bgColor="secondary">
    <Heading fit>Return Multiple Elements from Render</Heading>
    <Layout>
      <Fill style={{ marginRight: "0.5rem" }}>
        <Heading size={5} textColor="primary" margin={10}>
      Bad (&lt;= v16+)
        </Heading>
        <CodePane lang="jsx" theme="light" source={`return (
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
      Okay (&gt;= v16)
        </Heading>
        <CodePane
          lang="jsx"
          theme="light"
          source={`return (
  [
    <div key="1">Test 1</div>,
    <div key="2">Test 2</div>
  ]
);
`}
          margin="20px auto"
          overflow = "overflow"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading fit>Return Multiple Elements from Render</Heading>
    <Layout>
      <Fill style={{ marginRight: "0.5rem" }}>
        <Heading size={5} textColor="primary" margin={10}>
      Okay (&gt;= v16.0)
        </Heading>
        <CodePane lang="jsx" theme="light" source={`return (
  [
    <div key="1">Test 1</div>,
    <div key="2">Test 2</div>
  ]
);
`}
        margin="20px auto"
        overflow = "overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <Heading size={5} textColor="primary" margin={10}>
    Good (&gt;= v16.2)
        </Heading>
        <CodePane
          lang="jsx"
          theme="light"
          source={`return (
  <Fragment>
    <div>Test 1</div>,
    <div>Test 2</div>
  </Fragment>
);
`}
          margin="20px auto"
          overflow = "overflow"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="black">
    <Heading caps size={3} textColor="tertiary">Portals</Heading>
    <BlockQuote>
      <Quote textSize={42}>Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.</Quote>
      <Cite>
        <Link href="https://reactjs.org/docs/portals.html" style={{ display: "inline-block" }}>
          <Text bold caps textColor="tertiary">React Website</Text>
        </Link>
      </Cite>
    </BlockQuote>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading textColor="tertiary" caps size={3}>Portals</Heading>
    <Text textColor="primary">It renders the children into domNode, regardless of its location in the DOM.</Text>
    <Layout>
      <Fill style={{ marginRight: "0.5rem" }}>
        <CodePane lang="jsx" theme="light" source={`
render() {
  return ReactDOM.createPortal(
    this.props.children,
    domNode,
  );
}

`}
          margin="20px auto"
          overflow = "overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <Heading size={5} textColor="primary" margin={10}>
  Possible Use Cases
        </Heading>
        <List textColor="primary" style={{ marginLeft: "2rem" }}>
          <ListItem textSize={32}>Modals</ListItem>
          <ListItem textSize={32}>Lightboxes</ListItem>
          <ListItem textSize={32}>Custom Dropdowns</ListItem>
          <ListItem textSize={32}>Loading Bars</ListItem>
          <ListItem textSize={32}><Link href="https://codepen.io/gaearon/pen/yzMaBd" textColor="tertiary" style={{ display: "inline-block" }}>Example by Dan Abramov</Link></ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
]);
