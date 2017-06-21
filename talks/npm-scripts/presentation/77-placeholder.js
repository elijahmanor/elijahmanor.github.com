import React, { Component } from "react";
import {
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
  ListItem
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import Typist from "react-typist";
import Loading from "react-loading";
const cursor = {
  show: false,
  blink: true,
  element: "|",
  hideWhenDone: false,
  hideWhenDoneDelay: 1000
};
import Terminal from "spectacle-terminal";
import styled from "styled-components";
import { uniqueId } from "lodash";

export default (theme, images) => [
  <Slide transition={["spin", "slide"]} bgColor="primary">
    <Heading size={2} caps fit textColor="tertiary"><code>Advanced Demo</code></Heading>
    <Terminal
      title="1. elijahm@elijahm: ~(zsh)"
      output={[
        <Typist cursor={cursor}>npm test</Typist>,
        <div style={{ color: "#33B969" }}>TOTAL: 174 SUCCESS</div>,
        <Typist cursor={cursor}>rm -rf node_modules && npm install && say "done"</Typist>,
        [
          <div style={{ display: "flex", alignItems: "center" }}>
            <Loading type="bars" color="#fff" height="30" width="30" />
            <span style={{ marginLeft: "1rem" }}>Installing dependencies...</span>
          </div>,
          <div style={{ color: "#33B969" }}>⚡️ Dependencies installed!</div>
        ]
      ]}
    />
  </Slide>
), (
  <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
    <BlockQuote>
      <Quote>Example Quote</Quote>
      <Cite>Author</Cite>
    </BlockQuote>
  </Slide>
), (
  <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
    <List>
      <Appear><ListItem>Inline style based theme system</ListItem></Appear>
      <Appear><ListItem>Autofit text</ListItem></Appear>
      <Appear><ListItem>Flexbox layout system</ListItem></Appear>
      <Appear><ListItem>PDF export</ListItem></Appear>
      <Appear><ListItem>And...</ListItem></Appear>
    </List>
  </Slide>
) ];
