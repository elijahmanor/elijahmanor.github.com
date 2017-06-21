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

export default (theme, images) => [
  <Slide bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Run Basic
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      npm scripts
    </Heading>
  </Slide>,
  <Slide transition={["spin", "slide"]} bgColor="primary">
    <Terminal
      title="1. elijahm@elijahm: ~(zsh)"
      output={[
        <div>
          <Prompt path="react-file-size" />
          <Success>vim</Success>{" "}<span>package.json</span>
        </div>,
        {
          isSolo: true,
          isAutoScroll: false,
          output: (
            <div>
              <span>{`{
  "name": "react-file-size",
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
  "scripts": {`}</span>
              <span>
                <span>{`
    "test": `}</span>
                <Highlight>{"\"echo \"Error: no test specified\" && exit 1\""}</Highlight>
              </span>
              <span>{`
  },
  "bin": {
    "react-file-size": "./index.js"
  },
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
            <div>
              <span>{`{
  "name": "react-file-size",
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
  "scripts": {`}</span>
              <span>
                <span>{`
    "test": `}</span><Changed>"mocha spec/ --require babel-register"</Changed>
              </span>
              <span>{`
  },
  "bin": {
    "react-file-size": "./index.js"
  },
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
    "uglify-js": "^2.6.2"
  }
}`}</span>
            </div>
          )
        },
        <div>
          <Prompt path="react-file-size" />
          <Typist cursor={cursor}><Success>npm</Success>{" "}<span>t</span></Typist>
        </div>,
        <div>
          <div>
            {Parser(
              `> react-file-size@0.1.0 test /Users/elijahm/egghead/react-file-size
> mocha spec/ --require babel-register



  Index
    createFolder
      <span className="u-success">✓</span> <span className="u-should">should create a vendor folder</span>
    getAllReactVersions
      <span className="u-success">✓</span> <span className="u-should">should return a promise</span>
      <span className="u-success">✓</span> <span className="u-should">should call getVersions with a cdnjs url to react</span>
    getAllStats
      <span className="u-success">✓</span> <span className="u-should">should return a promise</span>
      <span className="u-success">✓</span> <span className="u-should">should call getStatistics for react and react-dom</span>
    mapStats
      <span className="u-success">✓</span> <span className="u-should">should coalesce react version stats</span>
      <span className="u-success">✓</span> <span className="u-should">should default to zero bytes if size is undefined</span>
    writeFile
      <span className="u-success">✓</span> <span className="u-should">should write out formatted JSON</span>
    bootstrap
      <span className="u-success">✓</span> <span className="u-should">should have started ora status</span>
      <span className="u-success">✓</span> <span className="u-should">should have succeed ora status after getAllStatus</span>
      <span className="u-success">✓</span> <span className="u-should">should fail when getAllStats is rejected</span>
      <span className="u-success">✓</span> <span className="u-should">should fail when getAllReactVersions is rejected</span>

  Utils
    scrapeVersions
      <span className="u-success">✓</span> <span className="u-should">should grab all of the version options</span>
    getVersions
      <span className="u-success">✓</span> <span className="u-should">should make a request to the supplied url</span>
      <span className="u-success">✓</span> <span className="u-should">should parse the body content with cheerio</span>
      <span className="u-success">✓</span> <span className="u-should">should return a list of versions</span>
    fileExists
      <span className="u-success">✓</span> <span className="u-should">should check the file system for its stats</span>
      <span className="u-success">✓</span> <span className="u-should">should check to see if the path is a file</span>
      <span className="u-success">✓</span> <span className="u-should">should return false if throws an error</span>
    getFile
      <span className="u-success">✓</span> <span className="u-should">should return a promise</span>
      <span className="u-success">✓</span> <span className="u-should">should read the file if it already exists</span>
      <span className="u-success">✓</span> <span className="u-should">should request the file if it doesn't exists</span>
      <span className="u-success">✓</span> <span className="u-should">should return an empty body if request failed</span>
    getStatistics
      <span className="u-success">✓</span> <span className="u-should">should return a promise</span>
      <span className="u-success">✓</span> <span className="u-should">should get normal and minified files</span>
      <span className="u-success">✓</span> <span className="u-should">should get gZip of 0 if file is empty</span>
      <span className="u-success">✓</span> <span className="u-should">should get normal and minified files for each version provided</span>


  <span className="u-success">27 passing<span> <span className="u-muted">(1s)</span>
`
            )}
          </div>
        </div>,
        <div>
          <Prompt path="react-file-size" />
          <Success>vim</Success>{" "}<span>package.json</span>
        </div>,
        {
          isSolo: true,
          isAutoScroll: false,
          output: (
            <div>
              <span>{`{
  "name": "react-file-size",
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
  "scripts": {
    "test": "mocha spec/ --require babel-register",
`}</span>
              <span>{"    "}</span>
              <Changed>"start": "node index.js"</Changed>
              <span>{`
  },
  "bin": {
    "react-file-size": "./index.js"
  },
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
    "uglify-js": "^2.6.2"
  }
}`}</span>
            </div>
          )
        },
        <div>
          <Prompt path="react-file-size" /><span>npm start</span>
        </div>,
        `> react-file-size@0.1.0 start /Users/elijahm/egghead/react-file-size
> node index.js`,
        [
          <div style={{ display: "flex", alignItems: "center" }}>
            <Loading
              type="bars"
              color="#fff"
              height="30"
              width="30"
              delay="0"
              className="u-inlineBlock"
            />
            <span style={{ marginLeft: "1rem" }}>
              {"Getting list of available react versions from cdnjs.com..."}
            </span>
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
            <span style={{ marginLeft: "1rem" }}>
              {"indicator Getting statistics for react..."}
            </span>
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
            <span style={{ marginLeft: "1rem" }}>{"react-dom.js v15.5.4"}</span>
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
            <span style={{ marginLeft: "1rem" }}>{"react.min.js v15.4.0"}</span>
          </div>,
          <div>
            <Success>✔</Success> Writing data.json with updated statistics for react and react-dom
          </div>
        ],
        <div><Prompt path="react-file-size" /><span>ls</span></div>,
        <div>
          {`README.md    index.js     package.json spec         vendor
data.json    node_modules public       src`}
        </div>,
        <div>
          <Prompt path="react-file-size" />
          <Success>vim</Success>{" "}<span>data.json</span>
        </div>,
        {
          isSolo: true,
          isAutoScroll: false,
          output: (
            <div>{`{
  "combined": [
    {
      "version": "0.3.0",
      "react": 271893,
      "reactGz": 60254,
      "reactMin": 62213,
      "reactMinGz": 18060,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.3.1",
      "react": 271893,
      "reactGz": 60296,
      "reactMin": 62213,
      "reactMinGz": 18060,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.3.2",
      "react": 271893,
      "reactGz": 60296,
      "reactMin": 62213,
      "reactMinGz": 18063,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.3.3",
      "react": 272097,
      "reactGz": 60335,
      "reactMin": 62311,
      "reactMinGz": 18089,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.4.0",
      "react": 355743,
      "reactGz": 75106,
      "reactMin": 76815,
      "reactMinGz": 21677,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.4.1",
      "react": 360142,
      "reactGz": 75468,
      "reactMin": 77547,
      "reactMinGz": 21811,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.4.2",
      "react": 359939,
      "reactGz": 75411,
      "reactMin": 77355,
      "reactMinGz": 21758,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.5.0",
      "react": 443624,
      "reactGz": 92061,
      "reactMin": 92797,
      "reactMinGz": 25969,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.5.1",
      "react": 444062,
      "reactGz": 92157,
      "reactMin": 92974,
      "reactMinGz": 26024,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.5.2",
      "react": 444084,
      "reactGz": 92160,
      "reactMin": 92977,
      "reactMinGz": 26025,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.6.0",
      "react": 105852,
      "reactGz": 25736,
      "reactMin": 41933,
      "reactMinGz": 12284,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.6.1",
      "react": 97834,
      "reactGz": 23606,
      "reactMin": 38708,
      "reactMinGz": 10937,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.6.2",
      "react": 97909,
      "reactGz": 23515,
      "reactMin": 39894,
      "reactMinGz": 11600,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.6.3",
      "react": 98472,
      "reactGz": 23586,
      "reactMin": 40298,
      "reactMinGz": 11666,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.7.0",
      "react": 99322,
      "reactGz": 23744,
      "reactMin": 40760,
      "reactMinGz": 11784,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.7.1",
      "react": 99322,
      "reactGz": 23744,
      "reactMin": 40760,
      "reactMinGz": 11784,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.8.0",
      "react": 458736,
      "reactGz": 94042,
      "reactMin": 94460,
      "reactMinGz": 26490,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.9.0",
      "react": 528848,
      "reactGz": 107630,
      "reactMin": 108607,
      "reactMinGz": 30241,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.10.0",
      "react": 549985,
      "reactGz": 111616,
      "reactMin": 112351,
      "reactMinGz": 30949,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.11.0",
      "react": 592869,
      "reactGz": 121266,
      "reactMin": 126275,
      "reactMinGz": 34576,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.11.1",
      "react": 593628,
      "reactGz": 121514,
      "reactMin": 126354,
      "reactMinGz": 34596,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.11.2",
      "react": 594461,
      "reactGz": 121723,
      "reactMin": 126490,
      "reactMinGz": 34643,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.12.0",
      "react": 570900,
      "reactGz": 125763,
      "reactMin": 130289,
      "reactMinGz": 35776,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.12.1",
      "react": 571026,
      "reactGz": 125848,
      "reactMin": 130289,
      "reactMinGz": 35776,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.12.2",
      "react": 571784,
      "reactGz": 126053,
      "reactMin": 130436,
      "reactMinGz": 35818,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.13.0",
      "react": 598400,
      "reactGz": 134009,
      "reactMin": 120732,
      "reactMinGz": 35907,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.13.1",
      "react": 598504,
      "reactGz": 134030,
      "reactMin": 120797,
      "reactMinGz": 35923,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.13.2",
      "react": 599376,
      "reactGz": 134165,
      "reactMin": 121458,
      "reactMinGz": 35941,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.13.3",
      "react": 600572,
      "reactGz": 134488,
      "reactMin": 121738,
      "reactMinGz": 36037,
      "reactDom": 0,
      "reactDomMin": 0
    },
    {
      "version": "0.14.0",
      "react": 640047,
      "reactGz": 144251,
      "reactMin": 135334,
      "reactMinGz": 39290,
      "reactDom": 1170,
      "reactDomMin": 706
    },
    {
      "version": "0.14.1",
      "react": 640971,
      "reactGz": 144450,
      "reactMin": 135480,
      "reactMinGz": 39336,
      "reactDom": 1170,
      "reactDomMin": 706
    },
    {
      "version": "0.14.2",
      "react": 641226,
      "reactGz": 144515,
      "reactMin": 135543,
      "reactMinGz": 39367,
      "reactDom": 1170,
      "reactDomMin": 706
    },
    {
      "version": "0.14.3",
      "react": 641366,
      "reactGz": 144540,
      "reactMin": 135618,
      "reactMinGz": 39387,
      "reactDom": 1170,
      "reactDomMin": 706
    },
    {
      "version": "0.14.4",
      "react": 641356,
      "reactGz": 144517,
      "reactMin": 135528,
      "reactMinGz": 39367,
      "reactDom": 1170,
      "reactDomMin": 706
    },
    {
      "version": "0.14.5",
      "react": 641356,
      "reactGz": 144517,
      "reactMin": 135528,
      "reactMinGz": 39367,
      "reactDom": 1170,
      "reactDomMin": 706
    },
    {
      "version": "0.14.6",
      "react": 641479,
      "reactGz": 144554,
      "reactMin": 135572,
      "reactMinGz": 39377,
      "reactDom": 1170,
      "reactDomMin": 706
    },
    {
      "version": "0.14.7",
      "react": 641547,
      "reactGz": 144586,
      "reactMin": 135581,
      "reactMinGz": 39389,
      "reactDom": 1171,
      "reactDomMin": 706
    },
    {
      "version": "0.14.8",
      "react": 641672,
      "reactGz": 144623,
      "reactMin": 135647,
      "reactMinGz": 39384,
      "reactDom": 1171,
      "reactDomMin": 706
    },
    {
      "version": "0.14.9",
      "react": 642026,
      "reactGz": 144843,
      "reactMin": 135992,
      "reactMinGz": 39425,
      "reactDom": 1171,
      "reactDomMin": 706
    },
    {
      "version": "15.0.0",
      "react": 655607,
      "reactGz": 148523,
      "reactMin": 145410,
      "reactMinGz": 42657,
      "reactDom": 1174,
      "reactDomMin": 709
    },
    {
      "version": "15.0.1",
      "react": 656686,
      "reactGz": 148818,
      "reactMin": 145685,
      "reactMinGz": 42735,
      "reactDom": 1174,
      "reactDomMin": 709
    },
    {
      "version": "15.0.2",
      "react": 659291,
      "reactGz": 149528,
      "reactMin": 146648,
      "reactMinGz": 42998,
      "reactDom": 1174,
      "reactDomMin": 709
    },
    {
      "version": "15.1.0",
      "react": 668793,
      "reactGz": 150158,
      "reactMin": 147112,
      "reactMinGz": 43212,
      "reactDom": 1174,
      "reactDomMin": 709
    },
    {
      "version": "15.2.0",
      "react": 690515,
      "reactGz": 155322,
      "reactMin": 153133,
      "reactMinGz": 45270,
      "reactDom": 1174,
      "reactDomMin": 709
    },
    {
      "version": "15.2.1",
      "react": 691206,
      "reactGz": 154707,
      "reactMin": 147398,
      "reactMinGz": 43578,
      "reactDom": 1174,
      "reactDomMin": 709
    },
    {
      "version": "15.3.0",
      "react": 703233,
      "reactGz": 157080,
      "reactMin": 148583,
      "reactMinGz": 44048,
      "reactDom": 1174,
      "reactDomMin": 709
    },
    {
      "version": "15.3.1",
      "react": 702373,
      "reactGz": 157363,
      "reactMin": 148665,
      "reactMinGz": 44143,
      "reactDom": 1174,
      "reactDomMin": 709
    },
    {
      "version": "15.3.2",
      "react": 701412,
      "reactGz": 157665,
      "reactMin": 148805,
      "reactMinGz": 44186,
      "reactDom": 1174,
      "reactDomMin": 709
    },
    {
      "version": "15.4.0",
      "react": 127469,
      "reactGz": 30345,
      "reactMin": 21339,
      "reactMinGz": 7316,
      "reactDom": 619047,
      "reactDomMin": 123922
    },
    {
      "version": "15.4.1",
      "react": 127517,
      "reactGz": 30368,
      "reactMin": 21339,
      "reactMinGz": 7316,
      "reactDom": 619308,
      "reactDomMin": 123996
    },
    {
      "version": "15.4.2",
      "react": 127694,
      "reactGz": 30461,
      "reactMin": 21203,
      "reactMinGz": 7286,
      "reactDom": 620424,
      "reactDomMin": 123889
    },
    {
      "version": "15.5.0",
      "react": 136018,
      "reactGz": 31415,
      "reactMin": 17488,
      "reactMinGz": 6247,
      "reactDom": 645755,
      "reactDomMin": 124656
    },
    {
      "version": "15.5.4",
      "react": 136397,
      "reactGz": 31669,
      "reactMin": 21335,
      "reactMinGz": 7328,
      "reactDom": 646420,
      "reactDomMin": 128505
    },
    {
      "version": "15.6.0",
      "react": 142442,
      "reactGz": 33804,
      "reactMin": 22631,
      "reactMinGz": 7788,
      "reactDom": 651537,
      "reactDomMin": 129791
    },
    {
      "version": "15.6.1",
      "react": 145032,
      "reactGz": 34341,
      "reactMin": 23040,
      "reactMinGz": 7915,
      "reactDom": 653066,
      "reactDomMin": 130293
    }
  ]
}`}</div>
          )
        },
        <div>
          <Prompt path="react-file-size" /><span>exit</span>
        </div>
      ]}
    />
  </Slide>
];
