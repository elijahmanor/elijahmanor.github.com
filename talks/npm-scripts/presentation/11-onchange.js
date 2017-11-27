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
  <Slide id="onchange" bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      onchange
    </Heading>
  </Slide>
  <Slide transition={["spin", "slide"]} bgColor="primary">
    <Terminal
      isMaximized
      title="onchange"
      output={[
        <div>
          <Prompt path="react-file-size" />
          <Success>vim</Success>{" "}<span>package.json</span>
        </div>,
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 310,
          note: (
            <span>Since we have a watch for our unit testing...</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <span>{`{
  "name": "react-file-size",
  "scripts": {
    "start": "node index.js",
    "pretest": "npm run lint",
    "test": "mocha spec/ --require babel-register",
    "cover": "nyc npm t",
    "postcover": "rm -rf .nyc_output",
    "cover:open": "open coverage/index.html",
    "lint": "npm-run-all lint:**",
    "lint:js": "eslint --cache --fix ./",
    "lint:css": "stylelint '**/*.scss' --syntax scss",
    "lint:css:fix": "stylefmt -R src/",
    `}</span>
              <Highlight>{"\"watch:test\": \"npm t -- --watch\""}</Highlight><span>{`,
    "build": "npm-run-all build:*",
    "prebuild": "rm -rf public/",
    "build:html": "pug --obj data.json src/index.pug --out public/",
    "build:css": "node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/index.min.css",
    "build:js": "mustache data.json src/index.mustache.js | uglifyjs > public/index.min.js"
  },
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
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
          scrollTo: 310,
          note: (
            <span>...wouldn't it be nice to add a watch to our linting?</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <span>{`{
  "name": "react-file-size",
  "scripts": {
    "start": "node index.js",
    "pretest": "npm run lint",
    "test": "mocha spec/ --require babel-register",
    "cover": "nyc npm t",
    "postcover": "rm -rf .nyc_output",
    "cover:open": "open coverage/index.html",
    "lint": "npm-run-all lint:**",
    "lint:js": "eslint --cache --fix ./",
    "lint:css": "stylelint '**/*.scss' --syntax scss",
    "lint:css:fix": "stylefmt -R src/",
    `}</span>
              <Highlight>{"\"watch:test\": \"npm t -- --watch\""}</Highlight>
              <span>{`,
    `}</span>
              <Changed>{"\"watch:lint\": \"npm run lint -- --watch\","}</Changed>
              <span>{`
    "build": "npm-run-all build:*",
    "prebuild": "rm -rf public/",
    "build:html": "pug --obj data.json src/index.pug --out public/",
    "build:css": "node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/index.min.css",
    "build:js": "mustache data.json src/index.mustache.js | uglifyjs > public/index.min.js"
  },
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
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
        <Prompt path="react-file-size" />
        <span>cowsay -f moose "Excuse me, I think there's a big mooseunderstanding"</span>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {`  __________________________________
 / Excuse me, I think there's a big \\
 \\ mooseunderstanding               /
  ----------------------------------
   \\
    \\   \\_\\_    _/_/
     \\      \\__/
            (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`}
        </pre>
      </div>,
        {
          note: (
          <span>
            <code>eslint</code> doesn't have a <code>--watch</code> flag, but we can use the <code>onchange</code> package to fill the gap.
          </span>
          ),
          output: (
            <div>
            <Prompt path="react-file-size" /><span>npm i onchange -D</span>
          </div>  
          )
        },
        <div>{`
+ onchange@3.2.1
added 2 packages, removed 374 packages and updated 1 package in 9.655s`}</div>,
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 310,
          output: (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <span>{`{
  "name": "react-file-size",
  "scripts": {
    "start": "node index.js",
    "pretest": "npm run lint",
    "test": "mocha spec/ --require babel-register",
    "cover": "nyc npm t",
    "postcover": "rm -rf .nyc_output",
    "cover:open": "open coverage/index.html",
    "lint": "npm-run-all lint:**",
    "lint:js": "eslint --cache --fix ./",
    "lint:css": "stylelint '**/*.scss' --syntax scss",
    "lint:css:fix": "stylefmt -R src/",
    "watch:test": "npm t -- --watch",
    "watch:lint": `}</span>
              <Changed>{"\"onchange '**/*.js' '**/*.scss' -- npm run lint\""}</Changed><span>{`,
    "build": "npm-run-all build:*",
    "prebuild": "rm -rf public/",
    "build:html": "pug --obj data.json src/index.pug --out public/",
    "build:css": "node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/index.min.css",
    "build:js": "mustache data.json src/index.mustache.js | uglifyjs > public/index.min.js"
  },
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
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
        // "watch": "npm-run-all --parallel watch:*"
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 310,
          output: (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <span>{`{
  "name": "react-file-size",
  "scripts": {
    "start": "node index.js",
    "pretest": "npm run lint",
    "test": "mocha spec/ --require babel-register",
    "cover": "nyc npm t",
    "postcover": "rm -rf .nyc_output",
    "cover:open": "open coverage/index.html",
    "lint": "npm-run-all lint:**",
    "lint:js": "eslint --cache --fix ./",
    "lint:css": "stylelint '**/*.scss' --syntax scss",
    "lint:css:fix": "stylefmt -R src/",
    `}</span>
              <Changed>{"\"watch\": \"npm-run-all --parallel watch:*\","}</Changed><span>{`
    `}</span>
              <Highlight>{"\"watch:test\""}</Highlight>
              <span>{`: "npm t -- --watch",
    `}</span>
              <Highlight>{"\"watch:lint\""}</Highlight>
              <span>{`: "onchange '**/*.js' '**/*.scss' -- npm run lint",
    "build": "npm-run-all build:*",
    "prebuild": "rm -rf public/",
    "build:html": "pug --obj data.json src/index.pug --out public/",
    "build:css": "node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/index.min.css",
    "build:js": "mustache data.json src/index.mustache.js | uglifyjs > public/index.min.js"
  },
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
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
        <Prompt path="react-file-size" />
        <span>cowsay -f moose "That's amazing\! I'm easily amoosed :)"</span>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {`  _______________________________________
< That's amazing! I'm easily amoosed :) >
 ---------------------------------------
  \\
   \\   \\_\\_    _/_/
    \\      \\__/
           (oo)\\_______
           (__)\\       )\\/\\
               ||----w |
               ||     ||`}
        </pre>
      </div>,

        


        <div>
          <Prompt path="react-file-size" /><span>exit</span>
        </div>
      ]}
    />
  </Slide>
</SlideSet>;
