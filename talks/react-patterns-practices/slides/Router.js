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
      React Router
    </Heading>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-12-router-index.example")}
    ranges={[
      { loc: [0, 270], title: "Router Index" },
      {
        loc: [5, 7],
        note:
          "Import Router and Route from react-router-dom"
      },
      {
        loc: [11, 21],
        note:
          "Add the Router and Routes inside the Redux Provider"
      },
      {
        loc: [14, 18],
        note:
          "Define the routes that the app needs. In this case, the index of the joke"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-12-router-actions.example")}
    ranges={[
      { loc: [0, 270], title: "Router Actions" },
      {
        loc: [28, 45],
        note:
          "decrement and increment used to be simple, but not anymore"
      },
      {
        loc: [28, 36],
        note:
          "using the react-thunk middleware, our action creator can returns a function to perform an asynchronous dispatch"
      },
      {
        loc: [28, 36],
        note:
          "decrement initially dispatches 'JOKE_DECREMENT', then gets the resulting state, and updates the router history"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-12-router-jokesContainer.example")}
    ranges={[
      { loc: [0, 270], title: "Router JokesContainer" },
      {
        loc: [5, 6],
        note: "Import the withRouter HOC from react-router"
      },
      {
        loc: [54, 59],
        note:
          "Wrap the redux connect call with withRouter HOC"
      },
      {
        loc: [45, 53],
        note:
          "In mapStateToProps grab the index from the current route"
      },
      { loc: [45, 53], note: "PROFIT 💰" }
    ]}
  />,
  <Slide transition={["fade"]} bgColor="black">
    <Heading size={3} lineHeight={1} textColor="white">
      React Router
    </Heading>
    <iframe
      src="https://codesandbox.io/embed/E9nqolNRg?view=preview"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        bordeRadius: "4px",
        overflow: "hidden"
      }}
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  </Slide>
];
