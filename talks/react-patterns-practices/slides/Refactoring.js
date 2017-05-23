import React from "react";
import { BlockQuote, Cite, Heading, Quote, Slide, Link } from "spectacle";
import CodeSlide from "spectacle-code-slide";
import Jokes from "../assets/Jokes.js";
import CatJokes from "../assets/CatJokes.js";
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
      { loc: [0, 270], title: "Remove State" },
      { loc: [4, 12], note: "map over props instead of state" },
      { loc: [17, 34], title: "Move state to App" },
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
      { loc: [9, 17], note: "Our render will still output the same results..." },
      { loc: [13, 14], note: "but the .map will invoke our renderJoke helper" }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-4.example")}
    ranges={[
      { loc: [0, 270], title: "Functional Component" },
      { loc: [9, 16], note: "Use Jokes function instead of a Class" },
      {
        loc: [9, 10],
        note: "You can destrucure the `jokes` property` off of passed props parameter"
      },
      { loc: [0, 8], note: "renderJoke becomes a simple function as well" }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-5.example")}
    ranges={[
      { loc: [0, 270], title: "Container Component" },
      { loc: [17, 32], note: "Stateful JokesContainer" },
      { loc: [33, 34], note: "Simplify the App Component" }
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
  // QUOTE
  // High Level Example
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-6.example")}
    ranges={[
      { loc: [0, 270], title: "fetchJokes HOC" },
      { loc: [17, 33], note: "Function takes a component & returns a component" },
      { loc: [28, 30], note: "returns WrappedComponent spreading props and state" },
      { loc: [33, 34], note: "Use the HOC function to wrap the Jokes component" }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-7.example")}
    ranges={[
      { loc: [0, 270], title: "fetchResource HOC" },
      { loc: [17, 31], note: "Refactor further to extract the actual fetching" },
      {
        loc: [22, 25],
        note: "Invoke the `get` function passed to it and when that has resolved update the state"
      },
      {
        loc: [32, 36],
        note: "Pass in the `get` method that the HOC will use internally in its `componentDidMount`"
      },
      {
        loc: [37, 38],
        note: "Finally pass in the presentational component that'll be wrapped in the HOC!"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-7-cat.example")}
    ranges={[
      { loc: [0, 270], title: "fetchResource Reuse!" },
      { loc: [32, 39], note: "Provide fetchResource with purrfect 😹 jokes!" }
    ]}
  />,
  <Slide maxHeight="100vh" maxWidth="90vw">
    <div>
      <a href="https://codesandbox.io/s/YE3GrJ0BY">
        <img alt="Edit Jokes 1" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
      </a>
    </div>
    <CatJokes />
  </Slide>,
  <Slide transition={["fade"]} bgColor="black">
    <BlockQuote>
      <Quote>
        My favorite part of React is what I loved about MooTools: to use it effectively you learn JavaScript... useful your whole career.
      </Quote>
      <Cite>
        <Link
          href="https://twitter.com/ryanflorence/status/577685415919898625"
          textColor="quartenary"
        >
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
      { loc: [0, 270], title: "Keyboard Shortcuts" },
      { loc: [0, 17], note: "Jokes presentational component now only displays one joke at a time" },
      { loc: [18, 19], note: "JokesContainer handles the state" },
      { loc: [19, 20], note: "State starts with an empty jokes array and an index of 0" },
      {
        loc: [21, 24],
        note: "When the comoponent is mounted start listening to the keydown event to navigate through jokes"
      },
      {
        loc: [24, 28],
        note: "Kick off window.fetch to get our 🤣 jokes and update state once retrieved"
      },
      { loc: [29, 34], note: "Unsubscribe to keydown event when component is unmounted" },
      {
        loc: [34, 41],
        note: "When the up key (38) is pressed it should decrement the index and it should increment when down (40) is pressed"
      },
      { loc: [41, 46], note: "Decrement reduces the index unless it's already at the beginning" },
      { loc: [46, 52], note: "Increment increases the index unless it's already at the end" },
      {
        loc: [52, 55],
        note: "render spreads the contents of `state` (containing jokes and index) onto the Jokes component"
      }
    ]}
  />,
  // NOTE: Talk about performance...
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-9-a.example")}
    ranges={[
      { loc: [0, 270], title: "react-addons-perf" },
      { loc: [4, 5], note: "At the root of your app, import the react-addons-perf module" },
      { loc: [6, 7], note: "Expose Perf off of `window` for use in your Dev Tools" },
      { loc: [8, 17], note: "Keep the rest of your app just the same" }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-9-b.example")}
    ranges={[
      { loc: [0, 270], title: "Using the Perf module" },
      { loc: [0, 1], note: "Start gathering react measurements with the `start` method" },
      { loc: [2, 3], note: "Interact with your react application" },
      { loc: [4, 5], note: "When you are done, call the `stop` method" },
      {
        loc: [6, 7],
        note: "The `printWasted` method will help determine where you may have perf issues"
      }
    ]}
  />,
  // Image or Gif of using Perf.start, stop, printWasted
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-9-c.example")}
    ranges={[
      { loc: [0, 270], title: "why-did-you-update" },
      {
        loc: [0, 270],
        note: "Diving through Perf.printWasted can get confusing and/or cumbersome"
      },
      { loc: [3, 5], note: "Instead import why-did-you-update" },
      { loc: [6, 7], note: "And wrap React with the whyDidYouUpdate function" },
      {
        loc: [8, 17],
        note: "The rest of your app stays the same. Watch your DevTools console for suggestions!"
      }
    ]}
  />,
  // TODO: Add image or gif of using why-did-you-update
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-10-a.example")}
    ranges={[
      { loc: [0, 270], title: "First Wave of Improvements" },
      { loc: [0, 1], note: "The Beginning" },
      { loc: [1, 2], note: "" },
      { loc: [1, 2], note: "Heres a note!" },
      { loc: [2, 3], note: "" }
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
