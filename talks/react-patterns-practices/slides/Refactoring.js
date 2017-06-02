import React, { Component } from "react";
import { render } from "react-dom";
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
import Jokes from "../assets/Jokes.js";
import CatJokes from "../assets/CatJokes.js";
import JokesKeyboard from "../assets/JokesKeyboard.js";
import JokesAddBroken from "../assets/JokesAddBroken.js";
import JokesAddFixed from "../assets/JokesAddFixed.js";
import Playground from "component-playground";
import { defaultCode } from "../assets/hoc-interactive.example";
import "../assets/playground.css";

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
  <Slide
    id="comic-sans"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading size={1} fit caps lineHeight={1} textColor="primary" textFont="comic">
      Did I Just Use "Comic Sans"?
    </Heading>
    <Image src={images.dealWithIt} height="650px" />
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
  <Slide transition={["zoom", "fade"]} bgColor="secondary">
    <Heading caps fit textColor="quartenary">refactor alert</Heading>
    <Text textColor="primary" fit>The component is doing too many things!</Text>
  </Slide>,
  <Slide transition={["zoom", "fade"]} bgColor="secondary" size={6} textColor="quartenary">
    <Heading caps fit textColor="tertiary">Terminology</Heading>
    <Layout>
      <Fill>
        <Heading size={6} caps textColor="secondary" bgColor="primary" margin={10} width="50%">
          Presentational
        </Heading>
        <List>
          <Appear><ListItem textSize="30px">How Things Look</ListItem></Appear>
          <Appear><ListItem textSize="30px">Property Driven</ListItem></Appear>
          <Appear><ListItem textSize="30px">Functional Components</ListItem></Appear>
        </List>
      </Fill>
      <Fill>
        <Heading size={6} caps textColor="secondary" bgColor="primary" margin={10} width="50%">
          Container
        </Heading>
        <List>
          <Appear><ListItem textSize="30px">How Things Work</ListItem></Appear>
          <Appear><ListItem textSize="30px">Stateful Driven</ListItem></Appear>
          <Appear><ListItem textSize="30px">Call Flux Actions</ListItem></Appear>
        </List>
      </Fill>
    </Layout>
  </Slide>,
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
        note: "You can destrucure the `jokes` property off of passed props parameter"
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
      {
        loc: [17, 32],
        note: "Introduce a stateful JokesContainer to keep the App component simple"
      },
      { loc: [33, 34], note: "Now the App Component isn't up to funny business!" }
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
  <Slide bgColor="secondary">
    <BlockQuote>
      <Quote>
        a higher-order component is a function that takes a component and returns a new component
      </Quote>
      <Cite>
        <Link
          href="https://facebook.github.io/react/docs/higher-order-components.html"
          textColor="quartenary"
        >
          Andrew Clark
        </Link>
      </Cite>
    </BlockQuote>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/hoc.example")}
    ranges={[
      { loc: [0, 270], title: "Simple HOC" },
      {
        loc: [16, 18],
        note: "A Higher Order Function is a function that accepts a base component and returns a new wrapped component"
      },
      { loc: [0, 2], note: "Our simple component is just a header (it can be anything)" },
      {
        loc: [3, 15],
        note: "Our HOC is a simple wrapper class around the base passing both props and state"
      },
      { loc: [19, 23], note: "The returned wrapped component can be used like a normal component" }
    ]}
  />,
  <Slide maxHeight="100vh" maxWidth="90vw" bgColor="secondary">
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "0 0 6px 6px",
        height: "100%",
        width: "100%"
      }}
    >
      <Playground
        codeText={defaultCode.trim()}
        scope={{ React, Component, render }}
        noRender={false}
      />
    </div>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-6.example")}
    ranges={[
      { loc: [0, 270], title: "fetchJokes HOC" },
      { loc: [17, 33], note: "Function takes a component & returns a component" },
      { loc: [28, 30], note: "returns WrappedComponent spreading props and state" },
      { loc: [33, 34], note: "Use the HOC function to wrap the Jokes component" },
      { loc: [35, 36], note: "Use the wrapped JokesContainer!" }
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
      },
      { loc: [39, 40], note: "And again... use the wrapped JokesContainer!" }
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
  <Slide
    id="wait-what"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Image src={images.youveGotToBeKittenMe} height="650px" />
  </Slide>,
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
  <Slide transition={["zoom", "fade"]} bgColor="secondary" size={6} textColor="quartenary">
    <Heading caps fit textColor="tertiary">Performance</Heading>
    <Layout>
      <Fill>
        <Heading size={6} caps textColor="secondary" bgColor="primary" margin={10}>
          Identify
        </Heading>
      </Fill>
      <Fill>
        <Heading size={6} caps textColor="secondary" bgColor="primary" margin={10}>
          Isolate
        </Heading>
      </Fill>
      <Fill>
        <Heading size={6} caps textColor="secondary" bgColor="primary" margin={10}>
          Resolve
        </Heading>
      </Fill>
    </Layout>
    <Text fit margin="20px 0 0 0" textColor="quartenary">
      VirtualDOM is fast, but sometimes React needs our help.
    </Text>
  </Slide>,
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
  <Slide
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading size={6} caps textColor="quartenary" margin={10}>
      Perf.printWasted
    </Heading>
    <Image src={images.printWasted} height="650px" />
  </Slide>,
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
  <Slide
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading size={6} caps textColor="quartenary" margin={10}>
      why-did-you-update
    </Heading>
    <Image src={images.whyDidYouUpdate} height="650px" />
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-10-a.example")}
    ranges={[
      { loc: [0, 270], title: "shouldComponentUpdate" },
      {
        loc: [0, 1],
        note: "why-did-you-update told us we had issues with Jokes props when at the beginning or end of the deck"
      },
      {
        loc: [1, 7],
        note: "So, we'll add a shouldComponentUpdate and if props are the same, then return false"
      },
      {
        loc: [26, 27],
        note: "Likewise, why-did-you-update said we had issues in JokesContainer when dealing with state"
      },
      {
        loc: [33, 39],
        note: "So, we'll also add a shouldComponentUpdate and if the state hasn't changed return false"
      },
      { loc: [72, 75], note: "Now, if we run our app... it should be much more performant!" }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-10-b.example")}
    ranges={[
      { loc: [0, 270], title: "PureCompnent" },
      { loc: [0, 3], note: "Extend Jokes with PureComponent instead of Component" },
      {
        loc: [0, 3],
        note: "React will implement shouldComponentUpdate() with a shallow props and state comparison"
      },
      { loc: [20, 21], note: "Likewise, extend JokesContainer with PureComponent" },
      {
        loc: [20, 21],
        note: "NOTE: Shallow compare only. Complex structures may produce false-negatives"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-10-c.example")}
    ranges={[
      { loc: [0, 270], title: "Enhance with New Jokes" },
      { loc: [22, 23], note: "New AddJoke Component" },
      { loc: [104, 110], note: "Add to JokeContainer's render method" },
      { loc: [107, 108], note: "Wire-up the AddJoke's onCreate to this.boundAddJoke" },
      {
        loc: [98, 104],
        note: "Take the joke parameter, update jokes array, and return to setState"
      },
      { loc: [98, 104], note: "...but, will it blend!?!" }
    ]}
  />,
  <Slide
    id="but-will-it-blend"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Image src={images.butWillItBlend} width="100%" />
  </Slide>,
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
      { loc: [0, 270], title: "Add Simple Immutability" },
      {
        loc: [95, 101],
        note: "Instead of pushing to an existing array, call the concat method, which returns a new array!"
      },
      {
        loc: [95, 101],
        note: "Alternately, could have used ECMAScript 2015 (ES6) `jokes = [...jokes, joke];`"
      },
      { loc: [95, 101], note: "...but, will it blend!?!" }
    ]}
  />,
  <Slide maxHeight="100vh" maxWidth="90vw">
    <div>
      <a href="https://codesandbox.io/s/32853L56M">
        <img alt="Edit Jokes 9" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
      </a>
    </div>
    <JokesAddFixed />
  </Slide>,
  <Slide transition={["fade"]} bgColor="black">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Redux
    </Heading>
  </Slide>,
  <Slide
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading size={6} caps textColor="quartenary" margin={10}>
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
        note: "You need to import the react-redux Provider and the store you created (we'll look at that next)"
      },
      {
        loc: [9, 10],
        note: "Now you wrap your app with the Provider and supply your store as a prop"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-11-redux-store.example")}
    ranges={[
      { loc: [0, 270], title: "Redux Store" },
      { loc: [3, 4], note: "Import all of your reducers (we only have one)" },
      { loc: [4, 12], note: "Build your middleware (there are many to choose from)" },
      { loc: [13, 16], note: "Create a store passing your reducers and middleware" }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-11-redux-reducers.example")}
    ranges={[
      { loc: [0, 270], title: "Redux Reducers" },
      { loc: [2, 4], note: "Import default jokes reducer and exported selectors" },
      { loc: [5, 8], note: "Combine all the reducers you have (we only have one)" },
      { loc: [9, 13], note: "Export top level selectors to access the store" }
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
        note: "Typically a big switch statement responding to whatever actions it needs"
      },
      {
        loc: [30, 37],
        note: "Listens to actions that are dispatched and update the store accordingly"
      },
      {
        loc: [30, 37],
        note: "NOTE: Each update should return a new object/array not update an existing one"
      },
      { loc: [49, 51], note: "Provide selectors that the top level reducer can export" }
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
        note: "Export action functions that you app will need. The reducers will respond accordingly."
      },
      { loc: [0, 19], note: "fetchJokes dispatches messages since it's async" },
      { loc: [28, 35], note: "decrement & increment are more straightforward" }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-11-redux-jokesContainer.example")}
    ranges={[
      { loc: [0, 270], title: "Redux JokesContainer" },
      { loc: [2, 3], note: "Import react-redux connect HOC that'll wrap presentational component" },
      { loc: [3, 4], note: "Import selectors to retrieve values from the store" },
      { loc: [4, 5], note: "Import actions that you want available for component" },
      { loc: [38, 42], note: "Define a method to convert state to props" },
      {
        loc: [43, 46],
        note: "Use the redux HOC to connect presentational component with mapStateToProps and imported actions"
      },
      {
        loc: [12, 15],
        note: "componentWillMount has access to the fetchJokes action to be invoked"
      },
      {
        loc: [26, 33],
        note: "When handleKeyDown is called, invoke one of the actions (decrement or increment)"
      },
      {
        loc: [26, 33],
        note: "Notice we aren't using state anywhere in our JokesContainer anymore... it probably should be renamed 😂"
      }
    ]}
  />,
  <Slide transition={["fade"]} bgColor="black">
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Redux
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
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
  </Slide>,
  <Slide transition={["fade"]} bgColor="black">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      React Router
    </Heading>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-12-router-index.example")}
    ranges={[
      { loc: [0, 270], title: "Router Index" },
      { loc: [5, 7], note: "Import Router and Route from react-router-dom" },
      { loc: [11, 21], note: "Add the Router and Routes inside the Redux Provider" },
      {
        loc: [14, 18],
        note: "Define the routes that the app needs. In this case, the index of the joke"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-12-router-actions.example")}
    ranges={[
      { loc: [0, 270], title: "Router Actions" },
      { loc: [28, 45], note: "decrement and increment used to be simple, but not anymore" },
      {
        loc: [28, 36],
        note: "using the react-thunk middleware, our action creator can returns a function to perform an asynchronous dispatch"
      },
      {
        loc: [28, 36],
        note: "decrement initially dispatches 'JOKE_DECREMENT', then gets the resulting state, and updates the router history"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-12-router-jokesContainer.example")}
    ranges={[
      { loc: [0, 270], title: "Router JokesContainer" },
      { loc: [5, 6], note: "Import the withRouter HOC from react-router" },
      { loc: [54, 59], note: "Wrap the redux connect call with withRouter HOC" },
      { loc: [45, 53], note: "In mapStateToProps grab the index from the current route" },
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
  </Slide>,
  <Slide transition={["fade"]} bgColor="black">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Recompose
    </Heading>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-13-recompose-jokesContainer.example")}
    ranges={[
      { loc: [0, 270], title: "Recompose" },
      { loc: [6, 8], note: "Import compose, lifecycle, and withHandlers from `recompose`" },
      { loc: [18, 33], note: "compose takes a list of HOCs that all work together" },
      { loc: [19, 20], note: "Add `react-router` support" },
      { loc: [20, 21], note: "Connect to `react-redux`" },
      {
        loc: [18, 33],
        note: "Most of the code we had before moves into the withHandlers or lifecycle HOCs"
      },
      { loc: [21, 33], note: "Add handleKeyDown handler in the `withHandlers` HOC" },
      { loc: [33, 48], note: "Add some lifecycle hooks with the `likecycle` HOC" },
      { loc: [34, 37], note: "Fetch jokes in componentWillMount" },
      { loc: [37, 42], note: "Add keydown event listener in componentDidMount" },
      { loc: [42, 47], note: "Remove keydown event listener in componentWillUnmount" },
      { loc: [42, 47], note: "There are a lot of other HOCs you can use. This was just a sample." }
    ]}
  />
];
