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

export default (theme, images) => [
  <Slide id="resources" bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      Resources
    </Heading>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={4}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      General Resources
    </Heading>
    <List textColor="primary">
      <ListItem textSize={32}>
        <Link
          textColor="primary"
          href="http://codesandbox.io/"
        >
          CodeSandbox
        </Link>
      </ListItem>
      <ListItem textSize={32}>
        <Link
          textColor="primary"
          href="https://github.com/facebook/create-react-app"
        >
          Create React App
        </Link>
      </ListItem>
      <ListItem textSize={32}>
        <Link
          textColor="primary"
          href="https://egghead.io/react-redux-cheatsheets"
        >
          Egghead.io React & Redux Cheatsheets
        </Link>
      </ListItem>
      <ListItem textSize={32}>
        <Link
          textColor="primary"
          href="https://github.com/enaqx/awesome-react"
        >
          Huge List of React Resources
        </Link>
      </ListItem>
      <ListItem textSize={32}>
        <Link
          textColor="primary"
          href="https://facebook.github.io/react/docs/perf.html"
        >
          Performance Tooling
        </Link>
      </ListItem>
      <ListItem textSize={32}>
        <Link
          textColor="primary"
          href="https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6"
        >
          Redux Cartoons
        </Link>
      </ListItem>
      <ListItem textSize={32}>
        <Link
          textColor="primary"
          href="https://www.youtube.com/manorisms"
        >
          Manorisms YouTube Channel
        </Link>
      </ListItem>
      <ListItem textSize={32}>
        <Link
          textColor="primary"
          href="https://github.com/facebook/react-devtools"
        >
          React DevTools Extension
        </Link>
      </ListItem>
    </List>
  </Slide>
];
