import React from "react";
import {
  SlideSet,
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
  Appear,
  Image
} from "spectacle";
import styled from "styled-components";
import LocalStorage from "./LocalStorage";

export default (theme, images) =>
  (<Slide id="conclusion" bgColor="secondary" bgImage={images.react} bgDarken={0.8}>
    <Heading size={1} fit caps textColor="primary">
      Thank You!
    </Heading>
    <Heading size={2}>
      <Link href="http://bit.ly/intro-to-react" textColor="quartenary">
      bit.ly/intro-to-react
      </Link>
    </Heading>
    <pre style={{ textAlign: "left", fontSize: "4rem" }}>
      <Link textColor="tertiary" href="http://elijahmanor.com" style={{ display: "block" }}>
        http://elijahmanor.com
      </Link>
      <Link
        textColor="tertiary"
        href="http://twitter.com/elijahmanor"
        style={{ display: "block", left: "14.5rem", position: "relative" }}
      >
        @elijahmanor
      </Link>
    </pre>
    <Heading size={5} textColor="primary" margin="20px 0 0 0">
      <LocalStorage id="contenteditable.conclusion" />
    </Heading>
  </Slide>);
