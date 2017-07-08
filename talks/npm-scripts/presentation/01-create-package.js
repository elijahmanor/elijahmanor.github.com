import React, { Component } from "react";
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

const Prompt = ({ path }) => {
  return (
    <span>
      <span style={{ color: "#4CAF50" }}>→</span>
      <span>{" "}</span>
      <span style={{ color: "#00BCD4" }}>{path}</span>
      <span>{" "}</span>
    </span>
  );
};
const Success = styled.span`
  color: #4CAF50;
`;

export default (theme, images) => [
  <Slide bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Create
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Package
    </Heading>
  </Slide>,
  <Slide transition={["spin", "slide"]} bgColor="primary">
    {/*<Heading size={2} caps fit textColor="tertiary">Terminal</Heading>*/}
    <Terminal
      isMaximized
      title="create package"
      output={[
        <div>
          <Prompt path="react-file-size" />
          <Typist cursor={cursor}><Success>npm</Success>{" "}<span>init</span></Typist>
        </div>,
        <div style={{ whiteSpace: "pre-wrap" }}>
          <div>This utility will walk you through creating a package.json file.</div>
          <div>It only covers the most common items, and tries to guess sensible defaults.</div>
          <br />
          <div>
            See `npm help json` for definitive documentation on these fields and exactly what they do.
          </div>
          <br />
          <div>
            Use `npm install &lt;pkg&gt;` afterwards to install a package and save it as a dependency in the package.json file.
          </div>
          <br />
          <div>Press ^C at any time to quit.</div>
          <div>package name: (react-file-size)</div>
        </div>,
        <div>
          <span>version: (1.0.0)</span>
          {" "}
          <Typist cursor={cursor}>0.1.0</Typist>
        </div>,
        <div>
          <span>description: </span>
          <Typist cursor={cursor}>
            A tool to generate file size changes for the react library
          </Typist>
        </div>,
        <div>entry point: (index.js)</div>,
        <div>test command:</div>,
        <div>git repository: (https://github.com/elijahmanor/react-file-size.git)</div>,
        <div>keywords: <Typist cursor={cursor}>react, file</Typist></div>,
        <div>author: <Typist cursor={cursor}>Elijah Manor</Typist></div>,
        <div>license: (ISC) <Typist cursor={cursor}>MIT</Typist></div>,
        <div>
          <div>About to write to /Users/elijahm/react-file-size/package.json:</div>
          <br />
          {`{
  "name": "react-file-size",
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Elijah Manor",
  "license": "MIT"
}`}
        </div>,
        <div>Is this ok? (yes)</div>,
        <div>
          <Prompt path="react-file-size" />
          <Typist cursor={cursor}><Success>ls</Success></Typist>
        </div>,
        <div>package.json</div>,
        <div>
          <Prompt path="react-file-size" />
          <Typist cursor={cursor}><Success>cat</Success>{" "}<span>package.json</span></Typist>
        </div>,
        <div>{`{
  "name": "react-file-size",
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Elijah Manor",
  "license": "MIT"
}`}</div>,
        <div>
          <Prompt path="react-file-size" />
          <Typist cursor={cursor}><div><Success>rm</Success> package.json</div></Typist>
        </div>,
        [
          {
            note: (
              <span>
                Instead of answering questions, <code>npm init</code> can auto-generate a
                {" "}
                <code>package.json</code>
                {" "}
                file based on defaults without prompting you for answers.
              </span>
            ),
            output: (
              <div className={uniqueId("cls")}>
                <Prompt path="react-file-size" />
                <Typist cursor={cursor}><Success>npm</Success> init --force</Typist>
              </div>
            )
          },
          <div className={uniqueId("cls")}>
            <Prompt path="react-file-size" />
            <span><Success>npm</Success> init --yes</span>
          </div>,
          <div className={uniqueId("cls")}>
            <Prompt path="react-file-size" />
            <span><Success>npm</Success> init -y</span>
          </div>
        ],
        `Wrote to /Users/elijahm/react-file-size/package.json:

{
  "name": "react-file-size",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}`,
        <div>
          <Prompt path="react-file-size" />
          <Typist cursor={cursor}><Success>npm</Success>{" "}<span>run</span></Typist>
        </div>,
        `Lifecycle scripts included in react-file-size:
test
  echo "Error: no test specified" && exit 1`,
        [
          <div>
            <Prompt path="react-file-size" />
            <Typist cursor={cursor}><Success>npm</Success>{" "}<span>test</span></Typist>
          </div>,
          <div>
            <Prompt path="react-file-size" /><Success>npm</Success>{" "}<span>t</span>
          </div>
        ],
        `> react-file-size@1.0.0 test /Users/elijahm/react-file-size
> echo "Error: no test specified" && exit 1

Error: no test specified`,
        <div>
          <Prompt path="react-file-size" /><span>exit</span>
        </div>
      ]}
    />
  </Slide>
];
