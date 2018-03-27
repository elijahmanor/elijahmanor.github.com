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
  MarkdownSlides
} from "spectacle";

export default (theme, images) => ([
  <Slide id="resources" bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Resources
    </Heading>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={4} caps lineHeight={1} textColor="tertiary">
    General Resources
    </Heading>
    <List>
      <ListItem textSize={32}><Link textColor="primary" href="https://github.com/facebook/react-devtools">React DevTools Extension</Link></ListItem>
      <ListItem textSize={32}><Link textColor="primary" href="https://egghead.io/react-redux-cheatsheets">Egghead.io React & Redux Cheatsheets</Link></ListItem>
      <ListItem textSize={32}><Link textColor="primary" href="https://github.com/enaqx/awesome-react">Huge List of React Resources</Link></ListItem>
      <ListItem textSize={32}><Link textColor="primary" href="https://facebook.github.io/react/docs/perf.html">Performance Tooling</Link></ListItem>
      <ListItem textSize={32}><Link textColor="primary" href="https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.2catsdhne">Webpack: The Confusing Parks</Link></ListItem>
      <ListItem textSize={32}><Link textColor="primary" href="https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6">Redux Cartoons</Link></ListItem>
      <ListItem textSize={32}><Link textColor="primary" href="https://egghead.io/courses/how-to-use-npm-scripts-as-your-build-tool">How to Use npm scripts As Your Build Tool</Link></ListItem>
    </List>
  </Slide>
]);
