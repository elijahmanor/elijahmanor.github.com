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

export default (theme, images) => ([
    <Slide bgColor="primary" bgImage={images.react} bgDarken={0.8}>
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Thank You!
        </Heading>
        <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        Slides <a href="http://bit.ly/react-pnp">http://bit.ly/react-pnp</a>
        </Heading>
        <Text margin="10px 0 0" textColor="quartenary" bold>
        <a href="http://elijahmanor.com" style={{ display: "block" }}>http://elijahmanor.com</a>
        <a href="http://twitter.com/elijahmanor" style={{ display: "block" }}>@elijahmanor</a>
        </Text>
    </Slide>
]);
