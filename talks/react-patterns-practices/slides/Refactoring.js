import React from "react";
import { BlockQuote, Cite, Heading, Quote, Slide, Link } from "spectacle";
import CodeSlide from "spectacle-code-slide";
import Jokes from "../assets/Jokes.js";
import JokesKeyboard from "../assets/JokesKeyboard.js";
import JokesAddBroken from "../assets/JokesAddBroken.js";

export default (theme, images) => [
  <Slide bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Simple React
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Component
    </Heading>
  </Slide>,
  <Slide maxHeight="100vh" maxWidth="90vw">
    <a href="https://codesandbox.io/s/nZz6p1WDl">
      <img alt="Edit Jokes 1" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
    </a>
    <Jokes />
  </Slide>,
  <CodeSlide
    maxHeight="100vh"
    maxWidth="75vw"
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-1.example")}
    ranges={[
      { loc: [0, 270], title: "Simple React Component" },
      { loc: [0, 1], title: "Jokes Component" },
      { loc: [1, 5], title: "constructor" },
      { loc: [3, 4], note: "Initialize state with an empty jokes array" },
      { loc: [5, 10], title: "componentDidMount" },
      { loc: [6, 7], note: "Kick off an Ajax call to retrieve jokes" },
      { loc: [7, 9], note: "Parse response as JSON and update component state" },
      { loc: [10, 24], title: "render" },
      { loc: [13, 21], note: "map over jokes from state" },
      { loc: [14, 20], note: "return a FlipCard with joke content" }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-2.example")}
    ranges={[
      { loc: [0, 270], title: "Remove State from component" },
      { loc: [4, 12], note: "map over props instead of state" },
      { loc: [17, 34], title: "Move state to App component" },
      { loc: [23, 24], note: "Make the fetch in componentDidMount" },
      { loc: [25, 26], note: "Update state with jokes" },
      {
        loc: [28, 30],
        note: "Pull jokes from state and render Jokes component"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-3.example")}
    ranges={[
      { loc: [0, 270], title: "Introduce Render Helpers" },
      { loc: [1, 9], note: "Add a renderJoke method" },
      { loc: [13, 14], note: "Invoke renderJoke when mapping" }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-4.example")}
    ranges={[
      { loc: [0, 270], title: "Stateless Functional Component" },
      { loc: [9, 16], note: "Use function instead of Class" },
      {
        loc: [9, 10],
        note: "Destrucuring jokes off of passed props parameter"
      },
      { loc: [0, 8], note: "renderJoke becomes a simple function" }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-5.example")}
    ranges={[
      { loc: [0, 270], title: "Create a Container Component" },
      { loc: [17, 32], title: "JokesContainer maintains the state" },
      { loc: [33, 34], title: "Keep the App Component Simple" }
    ]}
  />,
  <Slide bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      HOC
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Higher Order Components
    </Heading>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-6.example")}
    ranges={[
      { loc: [0, 270], title: "fetchJokes Higher Order Component" },
      { loc: [17, 3], note: "Function that takes a component and returns a new component" },
      { loc: [30, 31], note: "returns WrappedComponent spreading props and state" },
      { loc: [34, 35], note: "Use the HOC function to wrap the Jokes component" }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-7.example")}
    ranges={[
      { loc: [0, 270], title: "Walking through some code" },
      { loc: [0, 1], title: "The Beginning" },
      { loc: [1, 2] },
      { loc: [1, 2], note: "Heres a note!" },
      { loc: [2, 3] },
      { loc: [8, 10] }
    ]}
  />,
  <Slide transition={["fade"]} bgColor="black">
    <BlockQuote>
      <Quote>
        My favorite part of React is what I loved about MooTools: to use it effectively you learn JavaScript, not a DSL: useful your whole career.
      </Quote>
      <Cite>
        <Link href="https://twitter.com/ryanflorence/status/577685415919898625">
          Ryan Florence
        </Link>
      </Cite>
    </BlockQuote>
  </Slide>,
  <Slide maxHeight="100vh" maxWidth="90vw">
    <div>
      <a href="https://codesandbox.io/s/nZz6p1WDl">
        <img alt="Edit Jokes 1" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
      </a>
    </div>
    <JokesKeyboard />
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-8.example")}
    ranges={[
      { loc: [0, 270], title: "Walking through some code" },
      { loc: [0, 1], title: "The Beginning" },
      { loc: [1, 2] },
      { loc: [1, 2], note: "Heres a note!" },
      { loc: [2, 3] },
      { loc: [8, 10] }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-9-a.example")}
    ranges={[
      { loc: [0, 270], title: "Walking through some code" },
      { loc: [0, 1], title: "The Beginning" },
      { loc: [1, 2] },
      { loc: [1, 2], note: "Heres a note!" },
      { loc: [2, 3] },
      { loc: [8, 10] }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-9-b.example")}
    ranges={[
      { loc: [0, 270], title: "Walking through some code" },
      { loc: [0, 1], title: "The Beginning" },
      { loc: [1, 2] },
      { loc: [1, 2], note: "Heres a note!" },
      { loc: [2, 3] },
      { loc: [8, 10] }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-9-c.example")}
    ranges={[
      { loc: [0, 270], title: "Walking through some code" },
      { loc: [0, 1], title: "The Beginning" },
      { loc: [1, 2] },
      { loc: [1, 2], note: "Heres a note!" },
      { loc: [2, 3] },
      { loc: [8, 10] }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-10-a.example")}
    ranges={[
      { loc: [0, 270], title: "Walking through some code" },
      { loc: [0, 1], title: "The Beginning" },
      { loc: [1, 2] },
      { loc: [1, 2], note: "Heres a note!" },
      { loc: [2, 3] },
      { loc: [8, 10] }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-10-b.example")}
    ranges={[
      { loc: [0, 270], title: "Walking through some code" },
      { loc: [0, 1], title: "The Beginning" },
      { loc: [1, 2] },
      { loc: [1, 2], note: "Heres a note!" },
      { loc: [2, 3] },
      { loc: [8, 10] }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-10-c.example")}
    ranges={[
      { loc: [0, 270], title: "Walking through some code" },
      { loc: [0, 1], title: "The Beginning" },
      { loc: [1, 2] },
      { loc: [1, 2], note: "Heres a note!" },
      { loc: [2, 3] },
      { loc: [8, 10] }
    ]}
  />,
  <Slide maxHeight="100vh" maxWidth="90vw">
    <div>
      <a href="https://codesandbox.io/s/32853L56M">
        <img alt="Edit Jokes 9" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
      </a>
    </div>
    <JokesAddBroken />
  </Slide>,
  <Slide transition={["fade"]} bgColor="black">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Immutability
    </Heading>
  </Slide>,
  // https://egghead.io/lessons/javascript-immutable-js-introduction-easing-the-pains-of-mutability
  <Slide transition={["fade"]} bgColor="black">
    <BlockQuote>
      <Quote>
        Immutable data cannot be changed once created, leading to much simpler application development.
      </Quote>
      <Cite>
        <Link href="https://twitter.com/ryanflorence/status/577685415919898625">
          Immutable.js
        </Link>
      </Cite>
    </BlockQuote>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-10-d.example")}
    ranges={[
      { loc: [0, 270], title: "Walking through some code" },
      { loc: [0, 1], title: "The Beginning" },
      { loc: [1, 2] },
      { loc: [1, 2], note: "Heres a note!" },
      { loc: [2, 3] },
      { loc: [8, 10] }
    ]}
  />
  // https://egghead.io/courses/higher-order-components-with-functional-patterns-using-recompose?utm_source=drip&utm_medium=email&utm_content=react-recompose
];
