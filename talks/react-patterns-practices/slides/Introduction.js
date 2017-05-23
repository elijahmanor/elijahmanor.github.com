import React from "react";
import {
  BlockQuote,
  Cite,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  ComponentPlayground,
  Fill,
  Layout,
  MarkdownSlides,
  Link,
  Markdown,
  Appear
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import slidesMarkdown from "raw-loader!../assets/markdown.md";

export default (theme, images) => [
  <Slide bgColor="primary" bgImage={images.react} bgDarken={0.8}>
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      React
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Patterns and Practices
    </Heading>
    <Text margin="10px 0 0" textColor="quartenary" bold>
      by @elijahmanor
    </Text>
  </Slide>,
  <Slide bgColor="primary" bgImage={images.react} bgDarken={0.8}>
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      WHO AM I?
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      BIO
    </Heading>
  </Slide>,
  <Slide transition={["fade"]} bgColor="secondary" textColor="quartenary">
    <Heading size={2} caps textColor="primary">
      Agenda
    </Heading>
    <List>
      <Appear><ListItem>Refactoring a Component</ListItem></Appear>
      <Appear><ListItem>Unit Testing Components</ListItem></Appear>
      <Appear><ListItem>Creating a Pattern Library</ListItem></Appear>
    </List>
  </Slide>,
  <Slide transition={["fade"]} bgColor="secondary" textColor="quartenary">
    <Heading size={2} caps fit textColor="primary">
      Refactoring a Component
    </Heading>
    <List>
      <Appear><ListItem>Container & Presentational Components</ListItem></Appear>
      <Appear><ListItem>Stateless Functional Components</ListItem></Appear>
      <Appear><ListItem>Higher Order Components</ListItem></Appear>
      <Appear><ListItem>Assessing Performance Bottlenecks</ListItem></Appear>
      <Appear><ListItem>Introducting Immutability</ListItem></Appear>
      <Appear><ListItem>Adding `redux` & `redux-devtools`</ListItem></Appear>
      <Appear><ListItem>Adding `react-router`</ListItem></Appear>
      <Appear><ListItem>Adding `recompose`</ListItem></Appear>
    </List>
  </Slide>
];
