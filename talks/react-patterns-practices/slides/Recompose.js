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
// import slidesMarkdown from "raw-loader!../assets/markdown.md";

export default (theme, images) => [
  <Slide transition={["fade"]} bgColor="black">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      Recompose
    </Heading>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-13-recompose-jokesContainer.example")}
    ranges={[
      { loc: [0, 270], title: "Recompose" },
      {
        loc: [6, 8],
        note:
          "Import compose, lifecycle, and withHandlers from `recompose`"
      },
      {
        loc: [18, 33],
        note:
          "compose takes a list of HOCs that all work together"
      },
      { loc: [19, 20], note: "Add `react-router` support" },
      { loc: [20, 21], note: "Connect to `react-redux`" },
      {
        loc: [18, 33],
        note:
          "Most of the code we had before moves into the withHandlers or lifecycle HOCs"
      },
      {
        loc: [21, 33],
        note:
          "Add handleKeyDown handler in the `withHandlers` HOC"
      },
      {
        loc: [33, 48],
        note:
          "Add some lifecycle hooks with the `likecycle` HOC"
      },
      {
        loc: [34, 37],
        note: "Fetch jokes in componentWillMount"
      },
      {
        loc: [37, 42],
        note:
          "Add keydown event listener in componentDidMount"
      },
      {
        loc: [42, 47],
        note:
          "Remove keydown event listener in componentWillUnmount"
      },
      {
        loc: [42, 47],
        note:
          "There are a lot of other HOCs you can use. This was just a sample."
      }
    ]}
  />
];
