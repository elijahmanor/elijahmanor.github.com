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
  Fit,
  Text,
  Appear,
  List,
  ListItem,
  Code,
  CodePane,
  MarkdownSlides
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import Jokes from "../assets/Jokes.js";
import CatJokes from "../assets/CatJokes.js";
import RenderPropsJokes from "../assets/RenderPropsJokes.js";
import RenderPropsCatJokes from "../assets/RenderPropsCatJokes.js";
import JokesKeyboard from "../assets/JokesKeyboard.js";
import JokesAddBroken from "../assets/JokesAddBroken.js";
import JokesAddFixed from "../assets/JokesAddFixed.js";
import Playground from "component-playground";
import { defaultCode as hocInteractive } from "../assets/hoc-interactive.example";
import { defaultCode as renderPropsInteractive } from "../assets/render-props-interactive.example";
import faker from "faker";
import _ from "lodash";
import "../assets/playground.css";

export default (theme, images) => [
  <Slide bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      Simple React
    </Heading>
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Component
    </Heading>
  </Slide>,
  <Slide maxHeight="100vh" maxWidth="90vw">
    <a href="https://codesandbox.io/s/nZz6p1WDl">
      <img
        alt="Edit Jokes 1"
        src="https://codesandbox.io/static/img/play-codesandbox.svg"
      />
    </a>
    <Jokes />
  </Slide>,
  <Slide
    id="comic-sans"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
      textFont="comic"
    >
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
      {
        loc: [3, 4],
        note: "Initialize state with an empty jokes array"
      },
      { loc: [5, 10], title: "componentDidMount" },
      {
        loc: [6, 7],
        note: "Kick off an Ajax call to retrieve jokes"
      },
      {
        loc: [7, 9],
        note:
          "Parse response as JSON and update component state"
      },
      { loc: [10, 24], title: "render" },
      { loc: [13, 21], note: "map over jokes from state" },
      {
        loc: [14, 20],
        note: "return a FlipCard with joke content"
      }
    ]}
  />,
  <Slide transition={["zoom", "fade"]} bgColor="secondary">
    <Heading caps fit textColor="quartenary">
      refactor
    </Heading>
    <Heading caps fit textColor="quartenary">
      alert
    </Heading>
    <Text textColor="primary" fit>
      The component is doing too many things!
    </Text>
  </Slide>,
  <Slide
    transition={["zoom", "fade"]}
    bgColor="secondary"
    size={6}
    textColor="quartenary"
  >
    <Heading caps fit textColor="tertiary">
      Terminology
    </Heading>
    <Layout>
      <Fill>
        <div style={{ margin: "0 0.5rem 0 0" }}>
          <Heading
            size={6}
            caps
            textColor="primary"
            margin={15}
            width="33%"
          >
            Statefull
          </Heading>
          <svg
            width="75%"
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              height="296"
              width="296"
              y="2"
              x="2"
              strokeWidth="2"
              stroke="#000"
              fill="#fff"
            />
          </svg>
          <List>
            <ListItem textSize="22px">
              How Things Work
            </ListItem>
            <ListItem textSize="22px">
              Stateful Driven
            </ListItem>
            <ListItem textSize="22px">
              Call Flux Actions
            </ListItem>
          </List>
        </div>
      </Fill>
      <Fill>
        <Appear>
          <div>
            <div style={{ margin: "0 0.5rem 0 0.5rem" }}>
              <Heading
                size={6}
                caps
                textColor="primary"
                margin={15}
                width="33%"
              >
                Stateless
              </Heading>
              <svg
                width="75%"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  stroke="#000"
                  ry="149"
                  rx="149"
                  cy="150"
                  cx="150"
                  strokeWidth="2"
                  fill="#fff"
                />
              </svg>
              <List>
                <ListItem textSize="22px">
                  How Things Look
                </ListItem>
                <ListItem textSize="22px">
                  Props Driven
                </ListItem>
                <ListItem textSize="22px">
                  Functional Comp
                </ListItem>
              </List>
            </div>
          </div>
        </Appear>
      </Fill>
      <Fill>
        <Appear>
          <div>
            <div style={{ margin: "0 0 0 0.5rem" }}>
              <Heading
                size={6}
                caps
                textColor="primary"
                margin={15}
                width="33%"
              >
                Container
              </Heading>
              <svg
                width="75%"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  height="296"
                  width="296"
                  y="2"
                  x="2"
                  strokeWidth="2"
                  stroke="#000"
                  fill="#fff"
                />
                <ellipse
                  stroke="#000"
                  ry="125"
                  rx="125"
                  cy="150"
                  cx="150"
                  strokeWidth="2"
                  fill="#fff"
                />
              </svg>
              <List>
                <ListItem textSize="22px">
                  How Things Compose
                </ListItem>
                <ListItem textSize="22px">
                  Statefull manages State
                </ListItem>
                <ListItem textSize="22px">
                  Passes props to Stateless
                </ListItem>
              </List>
            </div>
          </div>
        </Appear>
      </Fill>
    </Layout>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-2.example")}
    ranges={[
      { loc: [0, 270], title: "Remove State" },
      {
        loc: [4, 12],
        note: "map over props instead of state"
      },
      { loc: [17, 34], title: "Move state to App" },
      {
        loc: [23, 24],
        note: "Make the fetch in componentDidMount"
      },
      { loc: [25, 26], note: "Update state with jokes" },
      {
        loc: [28, 30],
        note:
          "Pull jokes from state and render Jokes component"
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
      {
        loc: [9, 17],
        note:
          "Our render will still output the same results..."
      },
      {
        loc: [13, 14],
        note:
          "but the .map will invoke our renderJoke helper"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-4.example")}
    ranges={[
      { loc: [0, 270], title: "Functional Component" },
      {
        loc: [9, 16],
        note: "Use Jokes function instead of a Class"
      },
      {
        loc: [9, 10],
        note:
          "You can destrucure the `jokes` property off of passed props parameter"
      },
      {
        loc: [0, 8],
        note: "renderJoke becomes a simple function as well"
      }
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
        note:
          "Introduce a stateful JokesContainer to keep the App component simple"
      },
      {
        loc: [33, 34],
        note:
          "Now the App Component isn't up to funny business!"
      }
    ]}
  />,
  <Slide bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      HOC
    </Heading>
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Higher Order Components
    </Heading>
  </Slide>,
  <Slide bgColor="secondary">
    <BlockQuote>
      <Quote>
        a higher-order component is a function that takes a
        component and returns a new component
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
  <Slide bgColor="secondary" textColor="quartenary">
    <Heading
      caps
      size={1}
      textColor="primary"
      margin="0 0 1rem 0"
    >
      HOC
    </Heading>
    <Layout>
      <Fill>
        <svg
          style={{ margin: "1rem" }}
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            stroke="#000"
            ry="149"
            rx="149"
            cy="150"
            cx="150"
            strokeWidth="2"
            fill="#fff"
          />
        </svg>
      </Fill>
      <Fill>
        <svg
          style={{ margin: "1rem" }}
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            strokeWidth="2"
            stroke="#000"
            fill="#FFF"
            points="2,2 2,298 298,150"
            class="triangle"
          />
        </svg>
      </Fill>
      <Fill>
        <svg
          style={{ margin: "1rem" }}
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            height="296"
            width="296"
            y="2"
            x="2"
            strokeWidth="2"
            stroke="#000"
            fill="#fff"
          />
          <ellipse
            stroke="#000"
            ry="125"
            rx="125"
            cy="150"
            cx="150"
            strokeWidth="2"
            fill="#fff"
          />
        </svg>
      </Fill>
    </Layout>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/hoc.example")}
    ranges={[
      { loc: [0, 270], title: "Simple HOC" },
      {
        loc: [16, 18],
        note:
          "A Higher Order Function is a function that accepts a base component and returns a new wrapped component"
      },
      {
        loc: [0, 2],
        note:
          "Our simple component is just a header (it can be anything)"
      },
      {
        loc: [3, 15],
        note:
          "Our HOC is a simple wrapper class around the base passing both props and state"
      },
      {
        loc: [19, 23],
        note:
          "The returned wrapped component can be used like a normal component"
      }
    ]}
  />,
  <Slide
    maxHeight="100vh"
    maxWidth="90vw"
    bgColor="secondary"
  >
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "0 0 6px 6px",
        height: "100%",
        width: "100%"
      }}
    >
      <Playground
        codeText={hocInteractive.trim()}
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
      {
        loc: [17, 33],
        note:
          "Function takes a component & returns a component"
      },
      {
        loc: [28, 30],
        note:
          "returns WrappedComponent spreading props and state"
      },
      {
        loc: [33, 34],
        note:
          "Use the HOC function to wrap the Jokes component"
      },
      {
        loc: [35, 36],
        note: "Use the wrapped JokesContainer!"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-7.example")}
    ranges={[
      { loc: [0, 270], title: "fetchResource HOC" },
      {
        loc: [17, 31],
        note:
          "Refactor further to extract the actual fetching"
      },
      {
        loc: [22, 25],
        note:
          "Invoke the `get` function passed to it and when that has resolved update the state"
      },
      {
        loc: [32, 36],
        note:
          "Pass in the `get` method that the HOC will use internally in its `componentDidMount`"
      },
      {
        loc: [37, 38],
        note:
          "Finally pass in the presentational component that'll be wrapped in the HOC!"
      },
      {
        loc: [39, 40],
        note: "And again... use the wrapped JokesContainer!"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-7-cat.example")}
    ranges={[
      { loc: [0, 270], title: "fetchResource Reuse!" },
      { loc: [32, 39], note: "icanhazdadjoke please?" },
      { loc: [39, 40], note: "Parse as JSON" },
      {
        loc: [40, 51],
        note:
          "Reduce (Filter & Map) to question/answer structure"
      }
    ]}
  />,
  <Slide
    id="wait-what"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Image
      src={images.youveGotToBeKittenMe}
      height="650px"
    />
  </Slide>,
  <Slide maxHeight="100vh" maxWidth="90vw">
    <div>
      <a href="https://codesandbox.io/s/YE3GrJ0BY">
        <img
          alt="Edit Jokes 1"
          src="https://codesandbox.io/static/img/play-codesandbox.svg"
        />
      </a>
    </div>
    <CatJokes />
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      Render Props
    </Heading>
    <Heading size={5} lineHeight={1} textColor="tertiary">
      Function as Child Components
    </Heading>
    <Heading size={5} lineHeight={1} textColor="tertiary">
      Children as a Function
    </Heading>
  </Slide>,
  <Slide bgColor="secondary">
    <BlockQuote>
      <Quote>
        A render prop is a function prop that a component
        uses to know what to render.
      </Quote>
      <Cite>
        <Link
          href="https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce"
          textColor="quartenary"
        >
          Michael Jackson
        </Link>
      </Cite>
    </BlockQuote>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      Cool, cool, cool
    </Heading>
    <Layout>
      <Fill>
        <Image src={images.cool} width="100%" margin="0" />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      Wait... What!?!
    </Heading>
    <Layout>
      <Fill>
        <Image src={images.what} width="100%" margin="0" />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary" textColor="quartenary">
    <Heading
      caps
      size={2}
      textColor="primary"
      margin="0 0 1rem 0"
    >
      Render Props
    </Heading>
    <Layout>
      <Fill>
        <svg
          width="50%"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            height="296"
            width="296"
            y="2"
            x="2"
            strokeWidth="2"
            stroke="#000"
            fill="#fff"
          />
          <polygon
            strokeWidth="2"
            stroke="#000"
            fill="transparent"
            points="25,25 25,275 275,150"
            class="triangle"
          />
          <ellipse
            stroke="#000"
            ry="50"
            rx="50"
            cy="150"
            cx="100"
            strokeWidth="2"
            fill="#fff"
          />
        </svg>
      </Fill>
    </Layout>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/render-props.example")}
    ranges={[
      { loc: [0, 999], title: "Simple Render Props" },
      {
        loc: [0, 2],
        note:
          "NameComponent accepts props and invokes the children prop passing a name."
      },
      {
        loc: [3, 8],
        note:
          "When we use NameComponent we provide a function as it's child."
      },
      {
        loc: [4, 7],
        note:
          "NameComponent invokes the children prop and passes name arguments that are used to determine what to render."
      }
    ]}
  />,
  <Slide
    id="render-props-interactive"
    maxHeight="100vh"
    maxWidth="90vw"
    bgColor="secondary"
  >
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "0 0 6px 6px",
        height: "100%",
        width: "100%"
      }}
    >
      <Playground
        codeText={renderPropsInteractive.trim()}
        scope={{ React, Component, render, faker, _ }}
        noRender={false}
      />
    </div>
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="secondary"
    textColor="quartenary"
  >
    <Heading size={1} caps fit textColor="primary">
      Why Render Props?
    </Heading>
    <List>
      <ListItem>Dynamic Composition</ListItem>
      <ListItem>No Magical Props</ListItem>
      <ListItem>No Worry of Naming Collisions</ListItem>
      <ListItem>More Flexible</ListItem>
    </List>
    <div>
      <a href="https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce">
        Use a Render Prop!
      </a>{" "}
      by{" "}
      <a href="https://twitter.com/mjackson">@mjackson</a>
    </div>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-render-prop.example")}
    ranges={[
      { loc: [0, 270], title: "JokeResource Render Prop" },
      {
        loc: [3, 15],
        note:
          "JokeResource uses `url` and `parser` props to fetch jokes and invoke the children function prop."
      },
      {
        loc: [5, 14],
        note:
          "`componentDidMount` calls `window.fetch` and updates state with resulting jokes."
      },
      {
        loc: [14, 19],
        note:
          "`render` invokes the children prop with jokes from state."
      },
      {
        loc: [29, 33],
        note:
          "Using JokeResoure is easy, just pass a `url` and provide a function as it's child"
      },
      {
        loc: [30, 31],
        note:
          "Whatever is returned from the child function is what is rendered in `JokeResource`"
      }
    ]}
  />,
  <Slide bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      and it still works! and that's no joke!
    </Heading>
    <Layout>
      <Fill>
        <RenderPropsJokes />
      </Fill>
    </Layout>
  </Slide>,
  <Slide transition={["fade"]} bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
      margin="0 0 2rem 0"
    >
      well, maybe a small one?
    </Heading>
    <Text
      textColor="quartenary"
      textSize="55"
      margin="0 0 2rem 0"
    >
      q. Why did the React Higher Order Component give up?
    </Text>
    <Appear>
      <Text
        textColor="quartenary"
        textSize="55"
        margin="0 0 2rem 0"
      >
        a. Because it sur-<u>rendered to the prop</u>
        -aganda!
      </Text>
    </Appear>
  </Slide>,
  <Slide bgColor="secondary">
    <Layout>
      <Fill>
        <Heading
          size={1}
          caps
          lineHeight={1}
          textColor="primary"
          margin="0 1rem 2rem 0"
        >
          yes!
        </Heading>
        <Heading
          size={3}
          caps
          lineHeight={1}
          textColor="quartenary"
          margin="0 1rem 0 0"
        >
          icanhaz-dadjoke
        </Heading>
      </Fill>
      <Fill>
        <Image
          src={images.catTyping}
          width="90%"
          margin="0"
        />
      </Fill>
    </Layout>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-render-prop-cats.example")}
    ranges={[
      {
        loc: [0, 270],
        title: "JokeResource: icanhazdadjoke"
      },
      {
        loc: [39, 50],
        note:
          "Provide a `url` and pass custom `headers` and `parser`"
      },
      {
        loc: [17, 21],
        note:
          "Previous code worked because default `parser` and `headers`"
      },
      {
        loc: [22, 26],
        note:
          "Update `url` and provide custom `parser` that understands a text resource and pass it to `JokeResource`."
      },
      {
        loc: [26, 37],
        note:
          "We can provide our own complex parser and filter/map as needed."
      }
    ]}
  />,
  <Slide bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      Show and tail
    </Heading>
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="quartenary"
    >
      A sight fur sore eyes
    </Heading>
    <Layout>
      <Fill>
        <RenderPropsCatJokes />
      </Fill>
    </Layout>
  </Slide>,
  // more thoughts
  // https://medium.com/merrickchristensen/function-as-child-components-5f3920a9ace9
  // https://reactrocket.com/post/turn-your-hocs-into-render-prop-components/
  // https://codesandbox.io/s/nwjoj04rkl
  // END - Render Props
  <Slide transition={["fade"]} bgColor="black">
    <BlockQuote>
      <Quote>
        My favorite part of React is what I loved about
        MooTools: to use it effectively you learn
        JavaScript... useful your whole career.
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
        <img
          alt="Edit Jokes 1"
          src="https://codesandbox.io/static/img/play-codesandbox.svg"
        />
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
      {
        loc: [0, 17],
        note:
          "Jokes presentational component now only displays one joke at a time"
      },
      {
        loc: [18, 19],
        note: "JokesContainer handles the state"
      },
      {
        loc: [19, 20],
        note:
          "State starts with an empty jokes array and an index of 0"
      },
      {
        loc: [21, 24],
        note:
          "When the comoponent is mounted start listening to the keydown event to navigate through jokes"
      },
      {
        loc: [24, 28],
        note:
          "Kick off window.fetch to get our 🤣 jokes and update state once retrieved"
      },
      {
        loc: [29, 34],
        note:
          "Unsubscribe to keydown event when component is unmounted"
      },
      {
        loc: [34, 41],
        note:
          "When the up key (38) is pressed it should decrement the index and it should increment when down (40) is pressed"
      },
      {
        loc: [41, 46],
        note:
          "Decrement reduces the index unless it's already at the beginning"
      },
      {
        loc: [46, 52],
        note:
          "Increment increases the index unless it's already at the end"
      },
      {
        loc: [52, 55],
        note:
          "render spreads the contents of `state` (containing jokes and index) onto the Jokes component"
      }
    ]}
  />,
  <Slide
    transition={["zoom", "fade"]}
    bgColor="secondary"
    size={6}
    textColor="quartenary"
  >
    <Heading caps fit textColor="tertiary">
      Performance
    </Heading>
    <Layout>
      <Fill>
        <Heading
          size={6}
          caps
          textColor="secondary"
          bgColor="primary"
          margin={10}
        >
          Identify
        </Heading>
      </Fill>
      <Fill>
        <Heading
          size={6}
          caps
          textColor="secondary"
          bgColor="primary"
          margin={10}
        >
          Isolate
        </Heading>
      </Fill>
      <Fill>
        <Heading
          size={6}
          caps
          textColor="secondary"
          bgColor="primary"
          margin={10}
        >
          Resolve
        </Heading>
      </Fill>
    </Layout>
    <Text fit margin="20px 0 0 0" textColor="quartenary">
      VirtualDOM is fast, but sometimes React needs our
      help.
    </Text>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-9-a.example")}
    ranges={[
      { loc: [0, 270], title: "react-addons-perf" },
      {
        loc: [4, 5],
        note:
          "At the root of your app, import the react-addons-perf module"
      },
      {
        loc: [6, 7],
        note:
          "Expose Perf off of `window` for use in your Dev Tools"
      },
      {
        loc: [8, 17],
        note: "Keep the rest of your app just the same"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-9-b.example")}
    ranges={[
      { loc: [0, 270], title: "Using the Perf module" },
      {
        loc: [0, 1],
        note:
          "Start gathering react measurements with the `start` method"
      },
      {
        loc: [2, 3],
        note: "Interact with your react application"
      },
      {
        loc: [4, 5],
        note: "When you are done, call the `stop` method"
      },
      {
        loc: [6, 7],
        note:
          "The `printWasted` method will help determine where you may have perf issues"
      }
    ]}
  />,
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
        note:
          "Diving through Perf.printWasted can get confusing and/or cumbersome"
      },
      {
        loc: [3, 5],
        note: "Instead import why-did-you-update"
      },
      {
        loc: [6, 7],
        note:
          "And wrap React with the whyDidYouUpdate function"
      },
      {
        loc: [8, 17],
        note:
          "The rest of your app stays the same. Watch your DevTools console for suggestions!"
      }
    ]}
  />,
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
      why-did-you-update
    </Heading>
    <Image src={images.whyDidYouUpdate} height="600px" />
  </Slide>,

  <Slide
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
    className="spectacle-content--full"
  >
    <Heading
      size={6}
      caps
      textColor="quartenary"
      margin={10}
    >
      React Profiler
    </Heading>
    <Text textColor="tertiary" textSize="24">
      Image from{" "}
      <Link
        href="https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html"
        margin="0 0 0 10px"
        textColor="primary"
      >
        Introducing the React Profiler
      </Link>
    </Text>
    <Image
      src={images.reactProfiler1}
      style={{ height: "425px" }}
    />
  </Slide>,
  <Slide
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
    className="spectacle-content--full"
  >
    <Heading
      size={6}
      caps
      textColor="quartenary"
      margin={10}
    >
      React Profiler
    </Heading>
    <Text textColor="tertiary" textSize="24">
      Image from{" "}
      <Link
        href="https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html"
        margin="0 0 0 10px"
        textColor="primary"
      >
        Introducing the React Profiler
      </Link>
    </Text>
    <Image
      src={images.reactProfiler2}
      style={{ height: "425px" }}
    />
  </Slide>,

  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-10-a.example")}
    ranges={[
      { loc: [0, 270], title: "shouldComponentUpdate" },
      {
        loc: [0, 1],
        note:
          "why-did-you-update told us we had issues with Jokes props when at the beginning or end of the deck"
      },
      {
        loc: [1, 7],
        note:
          "So, we'll add a shouldComponentUpdate and if props are the same, then return false"
      },
      {
        loc: [26, 27],
        note:
          "Likewise, why-did-you-update said we had issues in JokesContainer when dealing with state"
      },
      {
        loc: [33, 39],
        note:
          "So, we'll also add a shouldComponentUpdate and if the state hasn't changed return false"
      },
      {
        loc: [72, 75],
        note:
          "Now, if we run our app... it should be much more performant!"
      }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-10-b.example")}
    ranges={[
      { loc: [0, 270], title: "PureCompnent" },
      {
        loc: [0, 3],
        note:
          "Extend Jokes with PureComponent instead of Component"
      },
      {
        loc: [0, 3],
        note:
          "React will implement shouldComponentUpdate() with a shallow props and state comparison"
      },
      {
        loc: [20, 21],
        note:
          "Likewise, extend JokesContainer with PureComponent"
      },
      {
        loc: [20, 21],
        note:
          "NOTE: Shallow compare only. Complex structures may produce false-negatives"
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
      {
        loc: [104, 110],
        note: "Add to JokeContainer's render method"
      },
      {
        loc: [107, 108],
        note:
          "Wire-up the AddJoke's onCreate to this.boundAddJoke"
      },
      {
        loc: [98, 104],
        note:
          "Take the joke parameter, update jokes array, and return to setState"
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
  <Slide
    maxHeight="100vh"
    maxWidth="90vw"
    className="spectacle-content--full"
  >
    <div>
      <a href="https://codesandbox.io/s/32853L56M">
        <img
          alt="Edit Jokes 9"
          src="https://codesandbox.io/static/img/play-codesandbox.svg"
        />
      </a>
    </div>
    <JokesAddBroken />
  </Slide>,
  <Slide transition={["fade"]} bgColor="black">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      Immutability
    </Heading>
  </Slide>,
  <Slide transition={["fade"]} bgColor="black">
    <BlockQuote>
      <Quote>
        Immutable data cannot be changed once created,
        leading to much simpler application development.
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
        note:
          "Instead of pushing to an existing array, call the concat method, which returns a new array!"
      },
      {
        loc: [95, 101],
        note:
          "Alternately, could have used ECMAScript 2015 (ES6) `jokes = [...jokes, joke];`"
      },
      { loc: [95, 101], note: "...but, will it blend!?!" }
    ]}
  />,
  <Slide
    maxHeight="100vh"
    maxWidth="90vw"
    className="spectacle-content--full"
  >
    <div>
      <a href="https://codesandbox.io/s/32853L56M">
        <img
          alt="Edit Jokes 9"
          src="https://codesandbox.io/static/img/play-codesandbox.svg"
        />
      </a>
    </div>
    <JokesAddFixed />
  </Slide>
];
