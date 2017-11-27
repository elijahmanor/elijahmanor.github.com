import React, { Component } from "react";
import {
  SlideSet,
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

import Typist from "react-typist";
import Loading from "react-loading";
const cursor = {
  show: false,
  blink: true,
  element: "|",
  hideWhenDone: false,
  hideWhenDoneDelay: 1000
};
import Terminal from "spectacle-terminal";
import styled from "styled-components";
import { uniqueId } from "lodash";
import Parser from "html-react-parser";

const Prompt = ({ path }) => {
  return (
    <span>
      <span style={{ color: "#4CAF50" }}>→</span>
      <span> </span>
      <span style={{ color: "#00BCD4" }}>{path}</span>
      <span> </span>
    </span>
  );
};
const Success = styled.span`color: #4caf50;`;
const Highlight = styled.span`
  color: black;
  background-color: white;
`;
const Change = ({ children }) => {
  const Element = styled.span`
    color: #ffeb3b;
    background-color: #212121;
  `;
  return (
    <Typist cursor={cursor}>
      <Element>{children}</Element>
    </Typist>
  );
};
const Changed = ({ children }) => {
  const Element = styled.span`
    color: #ffeb3b;
    background-color: #212121;
  `;
  return <Element>{children}</Element>;
};

export default (theme, images) => <SlideSet>
  <Slide id="npx" bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      npx
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      npm package runner
    </Heading>
  </Slide>
  <Slide transition={["spin", "slide"]} bgColor="primary">
    <Terminal
      isMaximized
      title="npx: npm package runner"
      output={[
        <div>
          <Prompt path="react-file-size" />
          <span>npm -v</span>
        </div>,
        {
          note: (
            <span><code>npx</code> is only included with npm@5.2.0 and above</span>
          ),
          output: (
            <div>{`3.10.3`}</div>
          )
        },
        {
          note: (
            <span>So, either upgrade <code>npm</code> or manually install <code>npm i npx -g</code></span>
          ),
          output: (
            <div>
              <Prompt path="react-file-size" />
              <span>npm i npm -g</span>
          </div>
          )
        },
        {
          note: (
            <span>You can run locally installed dependencies outside of npm scripts!</span>
          ),
          output: (
            <div>
              <Prompt path="react-file-size" />
              <span>npx eslint --cache --fix ./</span>
          </div>
          )
        },
        {
          note: (
            <span>Or install packages temporarily without making them global!</span>
          ),
          output: (
            <div>
              <Prompt path="react-file-size" />
              <span>npx cowsay "This has opened up so many possibilities\!"</span>
        <pre style={{ whiteSpace: "pre-wrap" }}>
        {`  ____________________________
 / This has opened up so many \\
 \\ possibilities!             /
  ----------------------------
         \\   ^__^
          \\  (oo)\\_______
             (__)\\       )\\/\\
                 ||----w |
                 ||     || `}
        </pre>
          </div>
          )
        },
        {
          note: (
            <span>This is handy for tools you run infrequently, but you want the latest version... like when creating a new react project</span>
          ),
          output: (
            <div>
              <Prompt path="react-file-size" />
              <span>npx create-react-app my-cool-new-app</span>
            </div>
          )
        },
        <div style={{ whiteSpace: "pre-wrap" }}>
          <span>{`
Creating a new React app in /Users/elijahm/github/my-cool-new-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

yarn add v0.24.5
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
success Saved lockfile.
success Saved 910 new dependencies.
`}</span>
        </div>,
        <div style={{ display: "flex", alignItems: "center" }}>
          <Loading
            type="bars"
            color="#fff"
            height="30"
            width="30"
            delay="0"
            className="u-inlineBlock"
          />
          <span style={{ marginLeft: "1rem" }}>{"installing node modules..."}</span>
        </div>,
        <div>{`
✨  Done in 18.25s.

Success! Created my-cool-new-app at /Users/elijahm/github/my-cool-new-app
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-cool-new-app
  yarn start

Happy hacking!
`}</div>,
        <div>
        <Prompt path="react-file-size" />
        <span>
        cowsay -f kitty "npx is the cat's meow"
        </span>
        <pre style={{ whiteSpace: "pre-wrap" }}>
        {` _______________________
< npx is the cat's meow >
 -----------------------
     \\
      \\
       ("\`-'  '-/") .___..--' ' "\`-._
         \` *_ *  )    \`-.   (      ) .\`-.__. \`)
         (_Y_.) ' ._   )   \`._\` ;  \`\` -. .-'
      _.. \`--'_..-_/   /--' _ .' ,4
   ( i l ),-''  ( l i),'  ( ( ! .-'`}
        </pre>
        </div>,
        <div>
          <Prompt path="react-file-size" />
          <span>exit</span>
        </div>
      ]}
    />
  </Slide>
</SlideSet>;
