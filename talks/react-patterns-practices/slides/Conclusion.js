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
      Thank You!
    </Heading>
    <Heading size={1} fit lineHeight={1}>
      <Link href="http://bit.ly/react-pnp" textColor="quartenary">http://bit.ly/react-pnp</Link>
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
  </Slide>
];
