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
  Appear,
  Image
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
      Redux
    </Heading>
  </Slide>,
  <Slide
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading
      size={6}
      caps
      textColor="quartenary"
      margin={10}
    >
      Redux Flow
    </Heading>
    <Image src={images.reduxFlow} height="500px" />
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-11-redux-index.example")}
    ranges={[
      { loc: [0, 270], title: "Redux Index" },
      {
        loc: [3, 5],
        note:
          "You need to import the react-redux Provider and the store you created (we'll look at that next)"
      },
      {
        loc: [9, 10],
        note:
          "Now you wrap your app with the Provider and supply your store as a prop"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-11-redux-store.example")}
    ranges={[
      { loc: [0, 270], title: "Redux Store" },
      {
        loc: [3, 4],
        note:
          "Import all of your reducers (we only have one)"
      },
      {
        loc: [4, 12],
        note:
          "Build your middleware (there are many to choose from)"
      },
      {
        loc: [13, 16],
        note:
          "Create a store passing your reducers and middleware"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-11-redux-reducers.example")}
    ranges={[
      { loc: [0, 270], title: "Redux Reducers" },
      {
        loc: [2, 4],
        note:
          "Import default jokes reducer and exported selectors"
      },
      {
        loc: [5, 8],
        note:
          "Combine all the reducers you have (we only have one)"
      },
      {
        loc: [9, 13],
        note:
          "Export top level selectors to access the store"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-11-redux-jokesReducer.example")}
    ranges={[
      { loc: [0, 270], title: "Redux jokesReducer" },
      {
        loc: [9, 14],
        note:
          "Typically a big switch statement responding to whatever actions it needs"
      },
      {
        loc: [30, 37],
        note:
          "Listens to actions that are dispatched and update the store accordingly"
      },
      {
        loc: [30, 37],
        note:
          "NOTE: Each update should return a new object/array not update an existing one"
      },
      {
        loc: [49, 51],
        note:
          "Provide selectors that the top level reducer can export"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-11-redux-actions.example")}
    ranges={[
      { loc: [0, 270], title: "Redux Actions" },
      {
        loc: [0, 270],
        note:
          "Export action functions that you app will need. The reducers will respond accordingly."
      },
      {
        loc: [0, 19],
        note:
          "fetchJokes handles getting jokes & letting redux know what's happening"
      },
      { loc: [2, 5], note: "dispatch pending action" },
      {
        loc: [6, 9],
        note: "actually fetch and parse jokes"
      },
      {
        loc: [10, 19],
        note:
          "on success: filter questions & dispath success action"
      },
      {
        loc: [19, 25],
        note: "on failure: dispath rejected action"
      },
      {
        loc: [28, 35],
        note:
          "decrement & increment are more straightforward"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-11-redux-jokesContainer.example")}
    ranges={[
      { loc: [0, 270], title: "Redux JokesContainer" },
      {
        loc: [2, 3],
        note:
          "Import react-redux connect HOC that'll wrap presentational component"
      },
      {
        loc: [3, 4],
        note:
          "Import selectors to retrieve values from the store"
      },
      {
        loc: [4, 5],
        note:
          "Import actions that you want available for component"
      },
      {
        loc: [38, 42],
        note: "Define a method to convert state to props"
      },
      {
        loc: [43, 46],
        note:
          "Use the redux HOC to connect presentational component with mapStateToProps and imported actions"
      },
      {
        loc: [12, 15],
        note:
          "componentWillMount has access to the fetchJokes action to be invoked"
      },
      {
        loc: [26, 33],
        note:
          "When handleKeyDown is called, invoke one of the actions (decrement or increment)"
      },
      {
        loc: [26, 33],
        note:
          "Notice we aren't using state anywhere in our JokesContainer anymore... it probably should be renamed 😂"
      }
    ]}
  />,
  <Slide transition={["fade"]} bgColor="black">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Redux
    </Heading>
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      Dev Tools
    </Heading>
  </Slide>,
  <Slide
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Link
      href="https://github.com/gaearon/redux-devtools"
      size={6}
      caps
      textColor="quartenary"
      margin={10}
    >
      Redux Dev Tools
    </Link>
    <Image src={images.reduxDevTools} width="100%" />
  </Slide>
];
