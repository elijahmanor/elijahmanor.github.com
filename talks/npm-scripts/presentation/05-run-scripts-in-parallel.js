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
  <Slide id="run-scripts-in-parallel" bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      run npm scripts
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      in parallel
    </Heading>
  </Slide>
  <Slide transition={["spin", "slide"]} bgColor="primary">
    <Terminal
      isMaximized
      title="run scripts in parallel"
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
  "bin": {
    "react-file-size": "./index.js"
  },
  "scripts": {
    "start": "node index.js",`}</span>
              <span>
                <span>{`
    "test": `}</span>
                <Highlight>
                  {"\"npm run eslint && npm run stylelint && mocha spec/ --require babel-register\","}
                </Highlight>
              </span>
              <span>{`
    "eslint": "eslint --cache --fix ./",
    "stylelint": "stylelint '**/*.scss' --syntax scss",
    "stylelint:fix": "stylefmt -R src/"
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
            <span><code>&&</code> indicates running in series.</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <span>{`{
  "name": "react-file-size",
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
  "bin": {
    "react-file-size": "./index.js"
  },
  "scripts": {
    "start": "node index.js",
    "test": "npm run eslint `}</span>
              <Highlight>{"&&"}</Highlight>
              <span>{" npm run stylelint "}</span>
              <Highlight>{"&&"}</Highlight>
              <span>{" mocha spec/ --require babel-register\","}</span>
              <span>{`
    "eslint": "eslint --cache --fix ./",
    "stylelint": "stylelint '**/*.scss' --syntax scss",
    "stylelint:fix": "stylefmt -R src/"
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
            <span>Switch to <code>&</code> to run in parallel!</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <span>{`{
  "name": "react-file-size",
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
  "bin": {
    "react-file-size": "./index.js"
  },
  "scripts": {
    "start": "node index.js",
    "test": "npm run eslint `}</span>
              <Changed>{"&"}</Changed>
              <span>{" npm run stylelint "}</span>
              <Changed>{"&"}</Changed>
              <span>{" mocha spec/ --require babel-register\","}</span>
              <span>{`
    "eslint": "eslint --cache --fix ./",
    "stylelint": "stylelint '**/*.scss' --syntax scss",
    "stylelint:fix": "stylefmt -R src/"
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
    "stylefmt": "^4.3.1",
    "stylelint": "^7.5.0",
    "uglify-js": "^2.6.2"
  }
}`}</span>
            </div>
          )
        },
        <div>
          <Prompt path="react-file-size" /><span>npm t</span>
        </div>,
        <div style={{ whiteSpace: "pre-wrap" }}>{`
> react-file-size@0.1.0 test /Users/elijahm/egghead/react-file-size
> npm run eslint & npm run stylelint & mocha spec/ --require babel-register
`}</div>,
        <div style={{ whiteSpace: "pre-wrap" }}>{`
> react-file-size@0.1.0 stylelint /Users/elijahm/egghead/react-file-size
> stylelint '**/*.scss' --syntax scss
`}</div>,
        <div style={{ whiteSpace: "pre-wrap" }}>{`
> react-file-size@0.1.0 eslint /Users/elijahm/egghead/react-file-size
> eslint --cache --fix ./
`}</div>,
        <div>
          {Parser(
            `
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
        </div>,
        //     "test": "npm run eslint & mocha spec/ --require babel-register --watch & npm run stylelint & wait",

        {
          isSolo: true,
          isAutoScroll: false,
          note: (
            <span>Let's add a watch script in the middle of the parallel tasks...</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <span>{`{
  "name": "react-file-size",
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
  "bin": {
    "react-file-size": "./index.js"
  },
  "scripts": {
    "start": "node index.js",
    "test": "npm run eslint & `}</span>
              <Changed>{"mocha spec/ --require babel-register --watch"}</Changed>
              <span>{` & npm run stylelint\",
    "eslint": "eslint --cache --fix ./",
    "stylelint": "stylelint '**/*.scss' --syntax scss",
    "stylelint:fix": "stylefmt -R src/"
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
            <span>
              If you try to <code>ctrl-c</code> from the watch task the process will still be running in the background!
            </span>
            ),
            output: (
              <div>
              <Prompt path="react-file-size" />
              <span>cowsay "But <strong><u>hay</u></strong>, we have en<strong><u>cow</u></strong>ntered a problem"</span>
              <pre style={{ whiteSpace: "pre-wrap" }}>
              {`  _______________________________________ 
< But hay, we have encowntered a problem >
  --------------------------------------- 
        \\   ^__^                    
         \\  (oo)\\_______            
            (__)\\       )\\/\\        
                ||----w |           
                ||     ||           `}
              </pre>
            </div>
            )
        },
        {
          isSolo: true,
          isAutoScroll: false,
          note: (
            <span>To solve this you could append <code>& wait</code> to the end of your parallel scripts!</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <span>{`{
  "name": "react-file-size",
  "version": "0.1.0",
  "description": "A tool to generate file size changes for the react library",
  "main": "index.js",
  "bin": {
    "react-file-size": "./index.js"
  },
  "scripts": {
    "start": "node index.js",
    "test": "npm run eslint & mocha spec/ --require babel-register --watch & npm run stylelint`}</span>
              <Changed>{" & wait\""}</Changed>
              <span>{`
    "eslint": "eslint --cache --fix ./",
    "stylelint": "stylelint '**/*.scss' --syntax scss",
    "stylelint:fix": "stylefmt -R src/"
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
    "stylefmt": "^4.3.1",
    "stylelint": "^7.5.0",
    "uglify-js": "^2.6.2"
  }
}`}</span>
            </div>
          )
        },
        {
          output: (
            <div>
              <Prompt path="react-file-size" />
              <span>cowsay "Whew, now things are <strong><u>udder</u></strong>ly better!"</span>
              <pre style={{ whiteSpace: "pre-wrap" }}>
                {` _____________________________________ 
< Whew, now things are udderly better! >
 ------------------------------------- 
        \\   ^__^                    
         \\  (oo)\\_______            
            (__)\\       )\\/\\        
                ||----w |           
                ||     ||           `}
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
