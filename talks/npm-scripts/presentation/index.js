// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  SlideSet,
  Appear,
  Link
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import Terminal from "spectacle-terminal";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { defaultCode } from "../assets/jokes.examples.js";
import LiveEdit from "../assets/LiveEdit.js";
import FlipCard from "react-flipcard";
import "../assets/Jokes.css";
import Typist from "react-typist";
import Loading from "react-loading";
const cursor = {
  show: false,
  blink: true,
  element: "|",
  hideWhenDone: false,
  hideWhenDoneDelay: 1000
};
// import "../assets/react-live.css";

/*
Elijah Manor explains how to use npm scripts to handle your various build needs, covering running scripts in series or parallel, using lifecycle hooks, passing arguments, piping data, using environment variables, running scripts on file change or when Git hooks are triggered, and organizing our scripts in external files—as well as how to modify your scripts to run across Mac, Linux, and Windows.
*/
// http://bit.ly/npm-scripts

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            npm scripts
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            as your build tool
          </Heading>
          <Text margin="10px 0 0" textColor="quartenary" size={1} fit bold>
            by @elijahmanor
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
        <SlideSet>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={2} caps fit textColor="tertiary">Terminal</Heading>
            <Terminal
              title="1. elijahm@elijahm: ~(zsh)"
              output={[
                "npm test",
                <div style={{ color: "#33B969" }}>TOTAL: 174 SUCCESS</div>,
                <div>
                  <div>
                    =============================== Coverage summary ===============================
                  </div>
                  <div style={{ color: "#DEC612" }}>Statements   : 51.29% ( 278/542 )</div>
                  <div style={{ color: "#EE5057" }}>Branches     : 38.78% ( 95/245 )</div>
                  <div style={{ color: "#EE5057" }}>Functions    : 46.21% ( 61/132 )</div>
                  <div style={{ color: "#DEC612" }}>Lines        : 52.69% ( 274/520 )</div>
                  <div>
                    ================================================================================
                  </div>
                </div>
              ]}
            />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={2} caps fit textColor="tertiary"><code>Advanced Demo</code></Heading>
            <Terminal
              title="1. elijahm@elijahm: ~(zsh)"
              output={[
                <Typist cursor={cursor}>npm test</Typist>,
                <div style={{ color: "#33B969" }}>TOTAL: 174 SUCCESS</div>,
                <Typist cursor={cursor}>rm -rf node_modules && npm install && say "done"</Typist>,
                [
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Loading type="bars" color="#fff" height="30" width="30" />
                    <span style={{ marginLeft: "1rem" }}>Installing dependencies...</span>
                  </div>,
                  <div style={{ color: "#33B969" }}>⚡️ Dependencies installed!</div>
                ]
              ]}
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <LiveEdit code={defaultCode} scope={{ FlipCard }} />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <LiveProvider code="<strong>Hello World!</strong>">
              <LiveEditor />
              <LiveError />
              <LivePreview />
            </LiveProvider>
          </Slide>
          <Slide bgColor="secondary" bgImage={images.react} bgDarken={0.8}>
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Thank You!
            </Heading>
            <Heading size={1} fit lineHeight={1}>
              <Link href="http://bit.ly/npm-scripts" textColor="quartenary">
                http://bit.ly/npm-scripts
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
          </Slide>
        </SlideSet>
      </Deck>
    );
  }
}
