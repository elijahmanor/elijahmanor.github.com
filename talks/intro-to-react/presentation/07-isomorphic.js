import React, { Component } from "react";
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

export default (theme, images) => ([
  <Slide id="isomorphic" bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Isomorphic JavaScript
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Universal JavaScript
    </Heading>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
    What Does that Mean Exactly?
    </Heading>
    <List>
      <ListItem textColor="primary">Don't Break the Web</ListItem>
      <ListItem textColor="primary">Shared Code across Client and Server</ListItem>
      <ListItem textColor="primary">Progressive Enhancement</ListItem>
    </List>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={4} caps lineHeight={1} textColor="tertiary">
    React Render Component To String (&lt;=v15)
    </Heading>
    <Layout>
      <Fill style={{ marginRight: "0.5rem", flexGrow: "0", flexBasis: "35%" }}>
        <CodePane lang="js" theme="light" className="CodePane" source={`import React from "react";
import {renderToString}
  from "react-dom/server";

renderToString(
  <HelloWorld
    name="JavaScript" />
);
`}
        margin="20px auto"
        overflow = "overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <CodePane lang="jsx" theme="light" className="CodePane" source={`<h1 data-reactroot=""
  data-reactid="1"
  data-react-checksum="764753906">
  <!-- react-text: 2 -->Hello, <!-- /react-text -->
  <!-- react-text: 3 -->JavaScript<!-- /react-text -->
  <!-- react-text: 4 -->!<!-- /react-text -->
</h1>

`}
        margin="20px auto"
        overflow = "overflow"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={4} caps lineHeight={1} textColor="tertiary">
  React Render Component To String (&gt;=v16)
    </Heading>
    <Layout>
      <Fill style={{ marginRight: "0.5rem", flexGrow: "0", flexBasis: "65%" }}>
        <CodePane lang="js" theme="light" className="CodePane" source={`import React from "react";
import {renderToString} from "react-dom/server";

renderToString(<HelloWorld name="JavaScript" />);
`}
        margin="20px auto"
        overflow = "overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <CodePane lang="jsx" theme="light" className="CodePane" source={`<h1 data-reactroot="">
  Hello, JavaScript!
</h1>

`}
        margin="20px auto"
        overflow = "overflow"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={3} caps lineHeight={1} textColor="tertiary">
    Backwards Compatible
    </Heading>
    <Layout>
      <Fill style={{ marginRight: "0.5rem", flexGrow: "0", flexBasis: "50%" }}>
        <CodePane lang="js" theme="light" className="CodePane" source={`import { hydrate } from "react-dom";
import App from "./App";

hydrate(
  <App />,
  document.getElementById("root")
);
`}
          margin="20px auto"
          overflow = "overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <Text textColor="primary" textSize={32} style={{ marginBottom: "1rem" }}><Code bgColor="#ccc" textSize={30}>render()</Code> is deprecated and you should start using  hydrate() instead.</Text>
        <Text textColor="primary" textSize={32}><Code bgColor="#ccc" textSize={30}>render()</Code> will no longer work in React v17 to hydrate server-rendered content.</Text>
      </Fill>
    </Layout>
    <Link textColor="tertiary" textSize={32} href="https://hackernoon.com/whats-new-with-server-side-rendering-in-react-16-9b0d78585d67" style={{ display: "inline-block" }}>What’s New With Server-Side Rendering in React 16</Link>
    <Text textSize={32} textColor="primary"> by </Text>
    <Link textColor="tertiary" textSize={32} href="https://twitter.com/xander76">@xander76</Link>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={1} caps lineHeight={1} textColor="tertiary">
      Example
    </Heading>
    <Link textColor="tertiary" href="http://react-router-mega-demo.herokuapp.com/">React Router Mega Demo</Link><Text textSize={32} textColor="tertiary"> with </Text><Link textColor="tertiary" href="https://github.com/rackt/react-router">React Router</Link>
  </Slide>
//   MarkdownSlides`
// <!--

// NOTES:

// * http://www.smashingmagazine.com/2015/04/21/react-to-the-future-with-isomorphic-apps/
// * http://blog.risingstack.com/from-angularjs-to-react-the-isomorphic-way/
// * https://github.com/petehunt/react-server-rendering-example
// -->
// `,
]);
