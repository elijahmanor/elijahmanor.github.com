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
  return (
    <Typist cursor={cursor}>
      <Element>{children}</Element>
    </Typist>
  );
};

export default (theme, images) => <SlideSet>
  <Slide id="custom-config-settings" bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      custom config
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      settings
    </Heading>
  </Slide>
  <Slide transition={["spin", "slide"]} bgColor="primary">
    <Terminal
      isMaximized
      title="custom config settings"
      output={[
        <div>
          <Prompt path="react-file-size" />
          <Success>vim</Success>{" "}<span>package.json</span>
        </div>,
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 0,
          note: (
            <span>There is a special <code>config</code> section in your <code>package.json</code> where you can add special information.</span>
          ),
          output: (
            <div>
              <span>{`{
  "name": "react-file-size",
  `}</span>
              <Changed>{`"config": {
  "port": "1337"
},`}</Changed>
              <span>{`
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
    "watch": "npm-run-all --parallel watch:*",
    "watch:test": "npm t -- --watch",
    "watch:lint": "onchange 'src/**/*.js' 'src/**/*.scss' -- npm run lint",
    "build": "npm-run-all build:*",
    "prebuild": "rm -rf public/$npm_package_version",
    "build:html": "pug --obj data.json src/index.pug --out public/$npm_package_version/",
    "build:css": "node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/$npm_package_version/index.min.css",
    "build:js": "mustache data.json src/index.mustache.js | uglifyjs > public/$npm_package_version/index.min.js"
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
          <Prompt path="react-file-size" /><span>npm run env | grep "config_port"</span>
        </div>,
        {
          note: (
            <span>This information is available to you via environment variables.</span>
          ),
          output: (
            <div>{`
npm_package_config_port = 1337;
            `}</div>
          )
        },
        {
          note: (
            <span>We'll install <code>http-server</code> to kick off a web server for our website.</span>
          ),
          output: (
            <div>
              <Prompt path="react-file-size" />
              <span>npm i http-server -D</span>
            </div>
          )
        },
        <div>{`
+ http-server@0.10.0
added 13 packages, removed 1154 packages and updated 10 packages in 13.134s
`}</div>,
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 0,
          note: (
            <span>Now we can use the <code>$npm_package_config_port</code> environment variable as a custom port when launching our server.</span>
          ),
          output: (
            <div>
              <span>{`{
  "name": "react-file-size",
  `}</span>
              <Highlight>{`"config": {
    "port": "1337"
  },`}</Highlight>
              <span>{`
  "scripts": {
    "start": "node index.js",
    `}</span>
              <Changed>{`"server": "npm-run-all --parallel server:*",
"server:create": "http-server public/$npm_package_version -p $npm_package_config_port",
"server:launch": "open http://localhost:$npm_package_config_port",
"poststart": "npm-run-all build server",`}</Changed>
              <span>{`
    "pretest": "npm run lint",
    "test": "mocha spec/ --require babel-register",
    "cover": "nyc npm t",
    "postcover": "rm -rf .nyc_output",
    "cover:open": "open coverage/index.html",
    "lint": "npm-run-all lint:**",
    "lint:js": "eslint --cache --fix ./",
    "lint:css": "stylelint '**/*.scss' --syntax scss",
    "lint:css:fix": "stylefmt -R src/",
    "watch": "npm-run-all --parallel watch:*",
    "watch:test": "npm t -- --watch",
    "watch:lint": "onchange 'src/**/*.js' 'src/**/*.scss' -- npm run lint",
    "build": "npm-run-all build:*",
    "prebuild": "rm -rf public/$npm_package_version",
    "build:html": "pug --obj data.json src/index.pug --out public/$npm_package_version/",
    "build:css": "node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/$npm_package_version/index.min.css",
    "build:js": "mustache data.json src/index.mustache.js | uglifyjs > public/$npm_package_version/index.min.js"
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
          note: (
            <span>You can override the <code>config</code> values with <code>npm config set</code></span>
          ),
          output: (
            <div>
              <Prompt path="react-file-size" />
              <span>npm config set react-file-size:port 1138</span>
            </div>
          )
        },
        {
          note: (
            <span>You can verify what <code>config</code> values are set with <code>npm config list</code></span>
          ),
          output: (
            <div>
              <Prompt path="react-file-size" />
              <span>npm config list | grep "react"</span>
            </div>
          )
        },
        <div>{`
react-file-size:port = "1138"
; cwd = /Users/elijahm/egghead/react-file-size`}</div>,
        {
          note: (
            <span>You can also delete those overrides with <code>npm config delete</code></span>
          ),
          output: (
            <div>
              <Prompt path="react-file-size" />
              <span>npm config delete react-file-size:port</span>
            </div>
          )
        },
        <div>
          <Prompt path="react-file-size" />
          <span>npm config list | grep "react"</span>
        </div>,
        <div>{`
; cwd = /Users/elijahm/egghead/react-file-size`}</div>,
        <div>
          <Prompt path="react-file-size" /><span>exit</span>
        </div>
      ]}
    />
  </Slide>
</SlideSet>;
