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
      <span>{" "}</span>
      <span style={{ color: "#00BCD4" }}>{path}</span>
      <span>{" "}</span>
    </span>
  );
};
const Success = styled.span`
  color: #4CAF50;
`;
const Highlight = styled.span`
  color: black;
  background-color: white;
`;
const Changed = ({ children }) => {
  const Element = styled.span`
    color: #FFEB3B;
    background-color: #212121;
  `;
  return <Typist cursor={cursor}><Element>{children}</Element></Typist>;
};

export default (theme, images) => <SlideSet>
  <Slide id="npm-run-all-wildcard" bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      npm-run-all
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      wildcard syntax
    </Heading>
  </Slide>
  <Slide transition={["spin", "slide"]} bgColor="primary">
    <Terminal
      isMaximized
      title="npm-run-all wildcards"
      output={[
        <div>
          <Prompt path="react-file-size" />
          <Success>vim</Success>{" "}<span>package.json</span>
        </div>,
        {
          isSolo: true,
          isAutoScroll: false,
          output: (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <span>{`{
  "name": "react-file-size",
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
  "bin": { "react-file-size": "./index.js" },
  "scripts": {
    "start": "node index.js",
    "test": "npm-run-all `}</span>
              <Highlight>{"eslint stylelint"}</Highlight>
              <span>{` mocha",
    `}</span>
              <Highlight>{"\"eslint\""}</Highlight>
              <span>{`: \"eslint --cache --fix ./",
    `}</span>
              <Highlight>{"\"stylelint\""}</Highlight>
              <span>{`: "stylelint '**/*.scss' --syntax scss",
    "stylelint:fix": "stylefmt -R src/",
    "mocha": "mocha spec/ --require babel-register"
  },
  "bin": { "react-file-size": "./index.js" },
  "author": "Elijah Manor",
  "license": "MIT",
  "publishConfig": {
    "registry": "https://registry.npmjs.org/"
  },
  "dependencies": {
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-stage-0": "^6.3.13",
    "babel-preset-stage-2": "^6.3.13",
    "babel-register": "^6.5.2",
    "cheerio": "^0.22.0",
    "colors": "^1.1.2",
    "commander": "^2.9.0",
    "gzip-size": "^3.0.0",
    "gzip-size-cli": "^1.0.0",
    "inquirer": "^0.12.0",
    "lodash": "^4.0.1",
    "log-update": "^1.0.2",
    "normalize.scss": "^0.1.0",
    "ora": "^0.3.0",
    "pretty-bytes": "^3.0.1",
    "request": "^2.74.0",
    "request-promise": "^4.1.1",
    "shelljs": "^0.5.3",
    "when": "^3.7.7"
  },
  "devDependencies": {
    "babel-eslint": "^5.0.0-beta6",
    "babel-jest": "^15.0.0",
    "babel-polyfill": "^6.13.0",
    "babel-register": "^6.16.3",
    "chai": "^3.5.0",
    "dirty-chai": "^1.2.2",
    "eslint": "^1.10.3",
    "eslint-config-leankit": "^1.1.0",
    "gzipped": "0.0.5",
    "jade": "^1.11.0",
    "jest": "^15.1.1",
    "jscs": "^2.11.0",
    "mocha": "^3.1.0",
    "mustache": "^2.2.1",
    "node-sass": "^3.6.0",
    "nyc": "^8.3.2",
    "onchange": "^2.0.0",
    "parallelshell": "^2.0.0",
    "proxyquire": "^1.7.10",
    "push-dir": "^0.2.2",
    "sinon": "^1.17.6",
    "sinon-chai": "^2.8.0",
    "stylefmt": "^4.3.1",
    "stylelint": "^7.5.0",
    "uglify-js": "^2.6.2"
  }
}`}</span>
            </div>
          )
        },
        {
          isSolo: true,
          isAutoScroll: false,
          note: (
            <span>If you follow the <code>task:subtask</code> naming convention, then you can use <code>npm-run-all task:*</code> to run a dynamic list of tasks.</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <span>{`{
  "name": "react-file-size",
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
  "bin": { "react-file-size": "./index.js" },
  "scripts": {
    "start": "node index.js",
    "test": "npm-run-all `}</span>
              <Changed>{"lint:*"}</Changed>
              <span>{` mocha",
    `}</span>
              <Changed>{"\"lint:js\""}</Changed>
              <span>{`: \"eslint --cache --fix ./",
    `}</span>
              <Changed>{"\"lint:css\""}</Changed>
              <span>{`: "stylelint '**/*.scss' --syntax scss",
    "stylelint:fix": "stylefmt -R src/",
    "mocha": "mocha spec/ --require babel-register"
  },
  "bin": { "react-file-size": "./index.js" },
  "author": "Elijah Manor",
  "license": "MIT",
  "publishConfig": {
    "registry": "https://registry.npmjs.org/"
  },
  "dependencies": {
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-stage-0": "^6.3.13",
    "babel-preset-stage-2": "^6.3.13",
    "babel-register": "^6.5.2",
    "cheerio": "^0.22.0",
    "colors": "^1.1.2",
    "commander": "^2.9.0",
    "gzip-size": "^3.0.0",
    "gzip-size-cli": "^1.0.0",
    "inquirer": "^0.12.0",
    "lodash": "^4.0.1",
    "log-update": "^1.0.2",
    "normalize.scss": "^0.1.0",
    "ora": "^0.3.0",
    "pretty-bytes": "^3.0.1",
    "request": "^2.74.0",
    "request-promise": "^4.1.1",
    "shelljs": "^0.5.3",
    "when": "^3.7.7"
  },
  "devDependencies": {
    "babel-eslint": "^5.0.0-beta6",
    "babel-jest": "^15.0.0",
    "babel-polyfill": "^6.13.0",
    "babel-register": "^6.16.3",
    "chai": "^3.5.0",
    "dirty-chai": "^1.2.2",
    "eslint": "^1.10.3",
    "eslint-config-leankit": "^1.1.0",
    "gzipped": "0.0.5",
    "jade": "^1.11.0",
    "jest": "^15.1.1",
    "jscs": "^2.11.0",
    "mocha": "^3.1.0",
    "mustache": "^2.2.1",
    "node-sass": "^3.6.0",
    "nyc": "^8.3.2",
    "onchange": "^2.0.0",
    "parallelshell": "^2.0.0",
    "proxyquire": "^1.7.10",
    "push-dir": "^0.2.2",
    "sinon": "^1.17.6",
    "sinon-chai": "^2.8.0",
    "stylefmt": "^4.3.1",
    "stylelint": "^7.5.0",
    "uglify-js": "^2.6.2"
  }
}`}</span>
            </div>
          )
        },
        {
          isSolo: true,
          isAutoScroll: false,
          output: (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <span>{`{
  "name": "react-file-size",
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
  "bin": { "react-file-size": "./index.js" },
  "scripts": {
    "start": "node index.js",
    "test": "npm-run-all `}</span>
              <Highlight>{"lint:*"}</Highlight>
              <span>{` mocha",
    `}</span>
              <span>{"\"lint:js\""}</span>
              <span>{`: \"eslint --cache --fix ./",
    `}</span>
              <span>{"\"lint:css\""}</span>
              <span>{`: "stylelint '**/*.scss' --syntax scss",
    `}</span>
              <Highlight>{"\"stylelint:fix\""}</Highlight>
              <span>{`: "stylefmt -R src/",
    "mocha": "mocha spec/ --require babel-register"
  },
  "bin": { "react-file-size": "./index.js" },
  "author": "Elijah Manor",
  "license": "MIT",
  "publishConfig": {
    "registry": "https://registry.npmjs.org/"
  },
  "dependencies": {
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-stage-0": "^6.3.13",
    "babel-preset-stage-2": "^6.3.13",
    "babel-register": "^6.5.2",
    "cheerio": "^0.22.0",
    "colors": "^1.1.2",
    "commander": "^2.9.0",
    "gzip-size": "^3.0.0",
    "gzip-size-cli": "^1.0.0",
    "inquirer": "^0.12.0",
    "lodash": "^4.0.1",
    "log-update": "^1.0.2",
    "normalize.scss": "^0.1.0",
    "ora": "^0.3.0",
    "pretty-bytes": "^3.0.1",
    "request": "^2.74.0",
    "request-promise": "^4.1.1",
    "shelljs": "^0.5.3",
    "when": "^3.7.7"
  },
  "devDependencies": {
    "babel-eslint": "^5.0.0-beta6",
    "babel-jest": "^15.0.0",
    "babel-polyfill": "^6.13.0",
    "babel-register": "^6.16.3",
    "chai": "^3.5.0",
    "dirty-chai": "^1.2.2",
    "eslint": "^1.10.3",
    "eslint-config-leankit": "^1.1.0",
    "gzipped": "0.0.5",
    "jade": "^1.11.0",
    "jest": "^15.1.1",
    "jscs": "^2.11.0",
    "mocha": "^3.1.0",
    "mustache": "^2.2.1",
    "node-sass": "^3.6.0",
    "nyc": "^8.3.2",
    "onchange": "^2.0.0",
    "parallelshell": "^2.0.0",
    "proxyquire": "^1.7.10",
    "push-dir": "^0.2.2",
    "sinon": "^1.17.6",
    "sinon-chai": "^2.8.0",
    "stylefmt": "^4.3.1",
    "stylelint": "^7.5.0",
    "uglify-js": "^2.6.2"
  }
}`}</span>
            </div>
          )
        },
        {
          isSolo: true,
          isAutoScroll: false,
          note: (
            <span>You can also nest subtasks (<code>task:subtask:subtask</code>) and match those with <code>npm-run-all task:**</code>.</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <span>{`{
  "name": "react-file-size",
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
  "bin": { "react-file-size": "./index.js" },
  "scripts": {
    "start": "node index.js",
    "test": "npm-run-all `}</span>
              <Changed>{"lint:**"}</Changed>
              <span>{` mocha",
    `}</span>
              <Highlight>{"\"lint:js\""}</Highlight>
              <span>{`: \"eslint --cache --fix ./",
    `}</span>
              <Highlight>{"\"lint:css\""}</Highlight>
              <span>{`: "stylelint '**/*.scss' --syntax scss",
    `}</span>
              <Changed>{"\"lint:css:fix\""}</Changed>
              <span>{`: "stylefmt -R src/",
    "mocha": "mocha spec/ --require babel-register"
  },
  "bin": { "react-file-size": "./index.js" },
  "author": "Elijah Manor",
  "license": "MIT",
  "publishConfig": {
    "registry": "https://registry.npmjs.org/"
  },
  "dependencies": {
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-stage-0": "^6.3.13",
    "babel-preset-stage-2": "^6.3.13",
    "babel-register": "^6.5.2",
    "cheerio": "^0.22.0",
    "colors": "^1.1.2",
    "commander": "^2.9.0",
    "gzip-size": "^3.0.0",
    "gzip-size-cli": "^1.0.0",
    "inquirer": "^0.12.0",
    "lodash": "^4.0.1",
    "log-update": "^1.0.2",
    "normalize.scss": "^0.1.0",
    "ora": "^0.3.0",
    "pretty-bytes": "^3.0.1",
    "request": "^2.74.0",
    "request-promise": "^4.1.1",
    "shelljs": "^0.5.3",
    "when": "^3.7.7"
  },
  "devDependencies": {
    "babel-eslint": "^5.0.0-beta6",
    "babel-jest": "^15.0.0",
    "babel-polyfill": "^6.13.0",
    "babel-register": "^6.16.3",
    "chai": "^3.5.0",
    "dirty-chai": "^1.2.2",
    "eslint": "^1.10.3",
    "eslint-config-leankit": "^1.1.0",
    "gzipped": "0.0.5",
    "jade": "^1.11.0",
    "jest": "^15.1.1",
    "jscs": "^2.11.0",
    "mocha": "^3.1.0",
    "mustache": "^2.2.1",
    "node-sass": "^3.6.0",
    "nyc": "^8.3.2",
    "onchange": "^2.0.0",
    "parallelshell": "^2.0.0",
    "proxyquire": "^1.7.10",
    "push-dir": "^0.2.2",
    "sinon": "^1.17.6",
    "sinon-chai": "^2.8.0",
    "stylefmt": "^4.3.1",
    "stylelint": "^7.5.0",
    "uglify-js": "^2.6.2"
  }
}`}</span>
            </div>
          )
        },
        {
          isSolo: true,
          isAutoScroll: false,
          note: (
            <span>I tend to like to have a top level script that runs the wildcard scripts.</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <span>{`{
  "name": "react-file-size",
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
  "bin": { "react-file-size": "./index.js" },
  "scripts": {
    "start": "node index.js",
    "test": "npm-run-all `}</span>
              <Changed>{"lint"}</Changed>
              <span>{` mocha",
    `}</span>
              <Changed>{"\"lint\": \"npm-run-all lint:**\","}</Changed>
              <span>{`
    "lint:js": \"eslint --cache --fix ./",
    `}</span>
              <span>{`"lint:css": "stylelint '**/*.scss' --syntax scss",
    `}</span>
              <span>{"\"lint:css:fix\""}</span>
              <span>{`: "stylefmt -R src/",
    "mocha": "mocha spec/ --require babel-register"
  },
  "bin": { "react-file-size": "./index.js" },
  "author": "Elijah Manor",
  "license": "MIT",
  "publishConfig": {
    "registry": "https://registry.npmjs.org/"
  },
  "dependencies": {
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-stage-0": "^6.3.13",
    "babel-preset-stage-2": "^6.3.13",
    "babel-register": "^6.5.2",
    "cheerio": "^0.22.0",
    "colors": "^1.1.2",
    "commander": "^2.9.0",
    "gzip-size": "^3.0.0",
    "gzip-size-cli": "^1.0.0",
    "inquirer": "^0.12.0",
    "lodash": "^4.0.1",
    "log-update": "^1.0.2",
    "normalize.scss": "^0.1.0",
    "ora": "^0.3.0",
    "pretty-bytes": "^3.0.1",
    "request": "^2.74.0",
    "request-promise": "^4.1.1",
    "shelljs": "^0.5.3",
    "when": "^3.7.7"
  },
  "devDependencies": {
    "babel-eslint": "^5.0.0-beta6",
    "babel-jest": "^15.0.0",
    "babel-polyfill": "^6.13.0",
    "babel-register": "^6.16.3",
    "chai": "^3.5.0",
    "dirty-chai": "^1.2.2",
    "eslint": "^1.10.3",
    "eslint-config-leankit": "^1.1.0",
    "gzipped": "0.0.5",
    "jade": "^1.11.0",
    "jest": "^15.1.1",
    "jscs": "^2.11.0",
    "mocha": "^3.1.0",
    "mustache": "^2.2.1",
    "node-sass": "^3.6.0",
    "nyc": "^8.3.2",
    "onchange": "^2.0.0",
    "parallelshell": "^2.0.0",
    "proxyquire": "^1.7.10",
    "push-dir": "^0.2.2",
    "sinon": "^1.17.6",
    "sinon-chai": "^2.8.0",
    "stylefmt": "^4.3.1",
    "stylelint": "^7.5.0",
    "uglify-js": "^2.6.2"
  }
}`}</span>
            </div>
          )
        },
        <div>
          <Prompt path="react-file-size" /><span>npm run lint</span>
        </div>,
        <div style={{ whiteSpace: "pre-wrap" }}>{`
> react-file-size@0.1.0 lint /Users/elijahm/egghead/react-file-size
> npm-run-all lint:**
`}</div>,
        <div style={{ whiteSpace: "pre-wrap" }}>{`
> react-file-size@0.1.0 lint:js /Users/elijahm/egghead/react-file-size
> eslint --cache --fix ./
`}</div>,
        <div style={{ whiteSpace: "pre-wrap" }}>{`
> react-file-size@0.1.0 lint:css /Users/elijahm/egghead/react-file-size
> stylelint '**/*.scss' --syntax scss
`}</div>,
        <div style={{ whiteSpace: "pre-wrap" }}>{`
> react-file-size@0.1.0 lint:css:fix /Users/elijahm/egghead/react-file-size
> stylefmt -R src/
`}</div>,

        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 0,
          output: (
            <div style={{ whiteSpace: "pre" }}>
            <Prompt path="react-file-size" />
            <span>
              cowsay -f elephant "Ivory now and then, wildcards come in handy"
            </span>
            <pre style={{ whiteSpace: "pre-wrap" }}>
              {`
   _______________________________________
  / Ivory now and then, wildcards come in \\
  \\ handy                                 /
   ---------------------------------------
    \\     /\\  ___  /\\
     \\   // \\/   \\/ \\\\
        ((    O O    ))
         \\\\ /     \\ //
          \\/  | |  \\/
           |  | |  |
           |  | |  |
           |   o   |
           | |   | |
           |m|   |m| 
              `}
            </pre>
          </div>
          )
        },
        <div>
          <Prompt path="react-file-size" /><span>exit</span>
        </div>
      ]}
    />
  </Slide>
</SlideSet>;
