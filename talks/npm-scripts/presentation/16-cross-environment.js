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
const Change = ({ children }) => {
  const Element = styled.span`
    color: #FFEB3B;
    background-color: #212121;
  `;
  return <Typist cursor={cursor}><Element>{children}</Element></Typist>;
};
const Changed = ({ children }) => {
  const Element = styled.span`
    color: #FFEB3B;
    background-color: #212121;
  `;
  return <Element>{children}</Element>;
};

export default (theme, images) => <SlideSet>
  <Slide id="cross-environment" bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      cross friendly
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      environment
    </Heading>
  </Slide>
  <Slide transition={["spin", "slide"]} bgColor="primary">
    <Terminal
      isMaximized
      title="cross environment"
      output={[
        <div>
          <Prompt path="react-file-size" />
          <Success>vim</Success>{" "}<span>package.json</span>
        </div>,
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 255,
          note: (
            <span>All these highlighted scripts have cross-environment problems!</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre" }}>
              <span>{`{
  "name": "react-file-size",
  "config": {
   "port": "1337"
  },
  "scripts": {
    "start": "node index.js",
    "poststart": "npm-run-all build server",
    "pretest": "npm run lint",
    "test": `}</span>
              <Highlight>{"\"BABEL_ENV=test mocha spec/ --require babel-register\""}</Highlight>
              <span>{`,
    "cover": "nyc npm t",
    "postcover": `}</span>
              <Highlight>{"\"rm -rf .nyc_output\""}</Highlight><span>{`,
    "cover:open": `}</span>
              <Highlight>{"\"open coverage/index.html\""}</Highlight><span>{`,
    "lint": "npm-run-all lint:**",
    "lint:js": "eslint --cache --fix ./",
    "lint:css": `}</span>
              <Highlight>{"\"stylelint '**/*.scss' --syntax scss\""}</Highlight><span>{`,
    "lint:css:fix": "stylefmt -R src/",
    "watch": "npm-run-all --parallel watch:*",
    "watch:test": "npm t -- --watch",
    "watch:lint": `}</span>
              <Highlight>{"\"onchange 'src/**/*.js' 'src/**/*.scss' -- npm run lint\""}</Highlight>
              <span>{`,
    "build": "npm-run-all build:*",
    "prebuild": `}</span>
              <Highlight>{"\"rm -rf public/$npm_package_version\""}</Highlight><span>{`,
    "build:html": `}</span>
              <Highlight>
                {"\"pug --obj data.json src/index.pug --out public/$npm_package_version/\""}
              </Highlight>
              <span>{`,
    "build:css": `}</span>
              <Highlight>
                {
                  "\"node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/$npm_package_version/index.min.css\""
                }
              </Highlight>
              <span>{`,
    "build:js": `}</span>
              <Highlight>
                {
                  "\"mustache data.json src/index.mustache.js | uglifyjs > public/$npm_package_version/index.min.js\""
                }
              </Highlight>
              <span>{`,
    "server": "npm-run-all --parallel server:*",
    "server:create": `}</span>
              <Highlight>
                {"\"http-server public/$npm_package_version -p $npm_package_config_port\""}
              </Highlight>
              <span>{`,
    "server:launch": `}</span>
              <Highlight>{"\"open http://localhost:$npm_package_config_port\""}</Highlight><span>{`,
    "prepush": "npm run lint"
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
        <span>
        cowsay -f bunny "Thankfully, hare are some tips and tricks fur you to burrow"
        </span>
        <pre style={{ whiteSpace: "pre" }}>
          {`  ____________________________________
/ Thankfully, hare are some tips and \\
\\ tricks fur you to burrow           /
------------------------------------
 \\
  \\   \\
       \\ /\\
       ( )
     .( o ).`}
        </pre>
      </div>,
        <div>
          <Prompt path="react-file-size" />
          <span>npm i cross-env -D</span>
        </div>,
        <div>{`
+ cross-env@5.0.1
added 4 packages, removed 1146 packages and updated 33 packages in 17.408s
`}</div>,
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 255,
          note: (
            <span><code>cross-env</code> let's you access environment variables in a cross-environment way</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre" }}>
              <span>{`{
  "name": "react-file-size",
  "config": {
   "port": "1337"
  },
  "scripts": {
    "start": "node index.js",
    "poststart": "npm-run-all build server",
    "pretest": "npm run lint",
    "test": `}</span>
              <Change>{"\"cross-env BABEL_ENV=test mocha spec/ --require babel-register\""}</Change>
              <span>{`,
    "cover": "nyc npm t",
    "postcover": `}</span>
              <Highlight>{"\"rm -rf .nyc_output\""}</Highlight><span>{`,
    "cover:open": `}</span>
              <Highlight>{"\"open coverage/index.html\""}</Highlight><span>{`,
    "lint": "npm-run-all lint:**",
    "lint:js": "eslint --cache --fix ./",
    "lint:css": `}</span>
              <Highlight>{"\"stylelint '**/*.scss' --syntax scss\""}</Highlight><span>{`,
    "lint:css:fix": "stylefmt -R src/",
    "watch": "npm-run-all --parallel watch:*",
    "watch:test": "npm t -- --watch",
    "watch:lint": `}</span>
              <Highlight>{"\"onchange 'src/**/*.js' 'src/**/*.scss' -- npm run lint\""}</Highlight>
              <span>{`,
    "build": "npm-run-all build:*",
    "prebuild": `}</span>
              <Highlight>{"\"rm -rf public/$npm_package_version\""}</Highlight><span>{`,
    "build:html": `}</span>
              <Highlight>
                {"\"pug --obj data.json src/index.pug --out public/$npm_package_version/\""}
              </Highlight>
              <span>{`,
    "build:css": `}</span>
              <Highlight>
                {
                  "\"node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/$npm_package_version/index.min.css\""
                }
              </Highlight>
              <span>{`,
    "build:js": `}</span>
              <Highlight>
                {
                  "\"mustache data.json src/index.mustache.js | uglifyjs > public/$npm_package_version/index.min.js\""
                }
              </Highlight>
              <span>{`,
    "server": "npm-run-all --parallel server:*",
    "server:create": `}</span>
              <Highlight>
                {"\"http-server public/$npm_package_version -p $npm_package_config_port\""}
              </Highlight>
              <span>{`,
    "server:launch": `}</span>
              <Highlight>{"\"open http://localhost:$npm_package_config_port\""}</Highlight><span>{`,
    "prepush": "npm run lint"
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
          <span>npm i rimraf -D</span>
        </div>,
        <div>{`
+ rimraf@2.6.1
added 12 packages and removed 74 packages in 1.465s
`}</div>,
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 255,
          note: (
            <span><code>rimraf</code> let's you remove folders in a cross-environment way</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre" }}>
              <span>{`{
  "name": "react-file-size",
  "config": {
   "port": "1337"
  },
  "scripts": {
    "start": "node index.js",
    "poststart": "npm-run-all build server",
    "pretest": "npm run lint",
    "test": `}</span>
              <Changed>{"\"cross-env BABEL_ENV=test mocha spec/ --require babel-register\""}</Changed>
              <span>{`,
    "cover": "nyc npm t",
    "postcover": `}</span>
              <Change>{"\"rimraf .nyc_output\""}</Change><span>{`,
    "cover:open": `}</span>
              <Highlight>{"\"open coverage/index.html\""}</Highlight><span>{`,
    "lint": "npm-run-all lint:**",
    "lint:js": "eslint --cache --fix ./",
    "lint:css": `}</span>
              <Highlight>{"\"stylelint '**/*.scss' --syntax scss\""}</Highlight><span>{`,
    "lint:css:fix": "stylefmt -R src/",
    "watch": "npm-run-all --parallel watch:*",
    "watch:test": "npm t -- --watch",
    "watch:lint": `}</span>
              <Highlight>{"\"onchange 'src/**/*.js' 'src/**/*.scss' -- npm run lint\""}</Highlight>
              <span>{`,
    "build": "npm-run-all build:*",
    "prebuild": `}</span>
              <Highlight>{"\"rm -rf public/$npm_package_version\""}</Highlight><span>{`,
    "build:html": `}</span>
              <Highlight>
                {"\"pug --obj data.json src/index.pug --out public/$npm_package_version/\""}
              </Highlight>
              <span>{`,
    "build:css": `}</span>
              <Highlight>
                {
                  "\"node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/$npm_package_version/index.min.css\""
                }
              </Highlight>
              <span>{`,
    "build:js": `}</span>
              <Highlight>
                {
                  "\"mustache data.json src/index.mustache.js | uglifyjs > public/$npm_package_version/index.min.js\""
                }
              </Highlight>
              <span>{`,
    "server": "npm-run-all --parallel server:*",
    "server:create": `}</span>
              <Highlight>
                {"\"http-server public/$npm_package_version -p $npm_package_config_port\""}
              </Highlight>
              <span>{`,
    "server:launch": `}</span>
              <Highlight>{"\"open http://localhost:$npm_package_config_port\""}</Highlight><span>{`,
    "prepush": "npm run lint"
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
          <span>npm i opn-cli -D</span>
        </div>,
        <div>{`
+ opn-cli@3.1.0
added 47 packages, removed 72 packages and updated 2 packages in 3.03s
`}</div>,
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 255,
          note: (
            <span><code>opn-cli</code> let's you remove folders in a cross-environment way</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre" }}>
              <span>{`{
  "name": "react-file-size",
  "config": {
   "port": "1337"
  },
  "scripts": {
    "start": "node index.js",
    "poststart": "npm-run-all build server",
    "pretest": "npm run lint",
    "test": `}</span>
              <Changed>{"\"cross-env BABEL_ENV=test mocha spec/ --require babel-register\""}</Changed>
              <span>{`,
    "cover": "nyc npm t",
    "postcover": `}</span>
              <Changed>{"\"rimraf .nyc_output\""}</Changed><span>{`,
    "cover:open": `}</span>
              <Change>{"\"opn coverage/index.html\""}</Change><span>{`,
    "lint": "npm-run-all lint:**",
    "lint:js": "eslint --cache --fix ./",
    "lint:css": `}</span>
              <Highlight>{"\"stylelint '**/*.scss' --syntax scss\""}</Highlight><span>{`,
    "lint:css:fix": "stylefmt -R src/",
    "watch": "npm-run-all --parallel watch:*",
    "watch:test": "npm t -- --watch",
    "watch:lint": `}</span>
              <Highlight>{"\"onchange 'src/**/*.js' 'src/**/*.scss' -- npm run lint\""}</Highlight>
              <span>{`,
    "build": "npm-run-all build:*",
    "prebuild": `}</span>
              <Highlight>{"\"rm -rf public/$npm_package_version\""}</Highlight><span>{`,
    "build:html": `}</span>
              <Highlight>
                {"\"pug --obj data.json src/index.pug --out public/$npm_package_version/\""}
              </Highlight>
              <span>{`,
    "build:css": `}</span>
              <Highlight>
                {
                  "\"node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/$npm_package_version/index.min.css\""
                }
              </Highlight>
              <span>{`,
    "build:js": `}</span>
              <Highlight>
                {
                  "\"mustache data.json src/index.mustache.js | uglifyjs > public/$npm_package_version/index.min.js\""
                }
              </Highlight>
              <span>{`,
    "server": "npm-run-all --parallel server:*",
    "server:create": `}</span>
              <Highlight>
                {"\"http-server public/$npm_package_version -p $npm_package_config_port\""}
              </Highlight>
              <span>{`,
    "server:launch": `}</span>
              <Highlight>{"\"open http://localhost:$npm_package_config_port\""}</Highlight><span>{`,
    "prepush": "npm run lint"
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
          scrollTo: 500,
          note: (
            <span>You can't used single-quotes inside your scripts. You need to replace them with double-quotes and escape them.</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre" }}>
              <span>{`{
  "name": "react-file-size",
  "config": {
   "port": "1337"
  },
  "scripts": {
    "start": "node index.js",
    "poststart": "npm-run-all build server",
    "pretest": "npm run lint",
    "test": `}</span>
              <Changed>{"\"cross-env BABEL_ENV=test mocha spec/ --require babel-register\""}</Changed>
              <span>{`,
    "cover": "nyc npm t",
    "postcover": `}</span>
              <Changed>{"\"rimraf .nyc_output\""}</Changed><span>{`,
    "cover:open": `}</span>
              <Changed>{"\"opn coverage/index.html\""}</Changed><span>{`,
    "lint": "npm-run-all lint:**",
    "lint:js": "eslint --cache --fix ./",
    "lint:css": `}</span>
              <Change>{"\"stylelint \\\"**/*.scss\\\" --syntax scss\""}</Change><span>{`,
    "lint:css:fix": "stylefmt -R src/",
    "watch": "npm-run-all --parallel watch:*",
    "watch:test": "npm t -- --watch",
    "watch:lint": `}</span>
              <Change>{"\"onchange \\\"src/**/*.js\\\" \\\"src/**/*.scss\\\" -- npm run lint\""}</Change>
              <span>{`,
    "build": "npm-run-all build:*",
    "prebuild": `}</span>
              <Highlight>{"\"rm -rf public/$npm_package_version\""}</Highlight><span>{`,
    "build:html": `}</span>
              <Highlight>
                {"\"pug --obj data.json src/index.pug --out public/$npm_package_version/\""}
              </Highlight>
              <span>{`,
    "build:css": `}</span>
              <Highlight>
                {
                  "\"node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/$npm_package_version/index.min.css\""
                }
              </Highlight>
              <span>{`,
    "build:js": `}</span>
              <Highlight>
                {
                  "\"mustache data.json src/index.mustache.js | uglifyjs > public/$npm_package_version/index.min.js\""
                }
              </Highlight>
              <span>{`,
    "server": "npm-run-all --parallel server:*",
    "server:create": `}</span>
              <Highlight>
                {"\"http-server public/$npm_package_version -p $npm_package_config_port\""}
              </Highlight>
              <span>{`,
    "server:launch": `}</span>
              <Highlight>{"\"open http://localhost:$npm_package_config_port\""}</Highlight><span>{`,
    "prepush": "npm run lint"
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
          scrollTo: 500,
          note: (
            <span>We'll update these scripts to use <code>cross-env</code> and <code>rimraf</code>.</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre" }}>
              <span>{`{
  "name": "react-file-size",
  "config": {
   "port": "1337"
  },
  "scripts": {
    "start": "node index.js",
    "poststart": "npm-run-all build server",
    "pretest": "npm run lint",
    "test": `}</span>
              <Changed>{"\"cross-env BABEL_ENV=test mocha spec/ --require babel-register\""}</Changed>
              <span>{`,
    "cover": "nyc npm t",
    "postcover": `}</span>
              <Changed>{"\"rimraf .nyc_output\""}</Changed><span>{`,
    "cover:open": `}</span>
              <Changed>{"\"opn coverage/index.html\""}</Changed><span>{`,
    "lint": "npm-run-all lint:**",
    "lint:js": "eslint --cache --fix ./",
    "lint:css": `}</span>
              <Changed>{"\"stylelint \\\"**/*.scss\\\" --syntax scss\""}</Changed><span>{`,
    "lint:css:fix": "stylefmt -R src/",
    "watch": "npm-run-all --parallel watch:*",
    "watch:test": "npm t -- --watch",
    "watch:lint": `}</span>
              <Changed>
                {"\"onchange \\\"src/**/*.js\\\" \\\"src/**/*.scss\\\" -- npm run lint\""}
              </Changed>
              <span>{`,
    "build": "npm-run-all build:*",
    "prebuild": `}</span>
              <Change>{"\"cross-env rimraf public/$npm_package_version\""}</Change><span>{`,
    "build:html": `}</span>
              <Change>
                {"\"cross-env pug --obj data.json src/index.pug --out public/$npm_package_version/\""}
              </Change>
              <span>{`,
    "build:css": `}</span>
              <Highlight>
                {
                  "\"node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/$npm_package_version/index.min.css\""
                }
              </Highlight>
              <span>{`,
    "build:js": `}</span>
              <Highlight>
                {
                  "\"mustache data.json src/index.mustache.js | uglifyjs > public/$npm_package_version/index.min.js\""
                }
              </Highlight>
              <span>{`,
    "server": "npm-run-all --parallel server:*",
    "server:create": `}</span>
              <Highlight>
                {"\"http-server public/$npm_package_version -p $npm_package_config_port\""}
              </Highlight>
              <span>{`,
    "server:launch": `}</span>
              <Highlight>{"\"open http://localhost:$npm_package_config_port\""}</Highlight><span>{`,
    "prepush": "npm run lint"
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
          scrollTo: 700,
          note: (
            <span>Since these scripts use a redirect with an environment variable we'll need to use <code>cross-var</code>, but hopefully soon <code>cross-env</code> will also take care of that for us.</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre" }}>
              <span>{`{
  "name": "react-file-size",
  "config": {
   "port": "1337"
  },
  "scripts": {
    "start": "node index.js",
    "poststart": "npm-run-all build server",
    "pretest": "npm run lint",
    "test": `}</span>
              <Changed>{"\"cross-env BABEL_ENV=test mocha spec/ --require babel-register\""}</Changed>
              <span>{`,
    "cover": "nyc npm t",
    "postcover": `}</span>
              <Changed>{"\"rimraf .nyc_output\""}</Changed><span>{`,
    "cover:open": `}</span>
              <Changed>{"\"opn coverage/index.html\""}</Changed><span>{`,
    "lint": "npm-run-all lint:**",
    "lint:js": "eslint --cache --fix ./",
    "lint:css": `}</span>
              <Changed>{"\"stylelint \\\"**/*.scss\\\" --syntax scss\""}</Changed><span>{`,
    "lint:css:fix": "stylefmt -R src/",
    "watch": "npm-run-all --parallel watch:*",
    "watch:test": "npm t -- --watch",
    "watch:lint": `}</span>
              <Changed>
                {"\"onchange \\\"src/**/*.js\\\" \\\"src/**/*.scss\\\" -- npm run lint\""}
              </Changed>
              <span>{`,
    "build": "npm-run-all build:*",
    "prebuild": `}</span>
              <Changed>{"\"cross-env rimraf public/$npm_package_version\""}</Changed><span>{`,
    "build:html": `}</span>
              <Changed>
                {"\"cross-env pug --obj data.json src/index.pug --out public/$npm_package_version/\""}
              </Changed>
              <span>{`,
    "build:css": `}</span>
              <Change>
                {
                  "\"cross-var \\\"node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/$npm_package_version/index.min.css\\\"\""
                }
              </Change>
              <span>{`,
    "build:js": `}</span>
              <Change>
                {
                  "\"cross-var \\\"mustache data.json src/index.mustache.js | uglifyjs > public/$npm_package_version/index.min.js\\\"\""
                }
              </Change>
              <span>{`,
    "server": "npm-run-all --parallel server:*",
    "server:create": `}</span>
              <Highlight>
                {"\"http-server public/$npm_package_version -p $npm_package_config_port\""}
              </Highlight>
              <span>{`,
    "server:launch": `}</span>
              <Highlight>{"\"open http://localhost:$npm_package_config_port\""}</Highlight><span>{`,
    "prepush": "npm run lint"
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
          scrollTo: 700,
          note: (
            <span>Here we'll update our scripts to use <code>cross-env</code> and <code>opn-cli</code></span>
          ),
          output: (
            <div style={{ whiteSpace: "pre" }}>
              <span>{`{
  "name": "react-file-size",
  "config": {
   "port": "1337"
  },
  "scripts": {
    "start": "node index.js",
    "poststart": "npm-run-all build server",
    "pretest": "npm run lint",
    "test": `}</span>
              <Changed>{"\"cross-env BABEL_ENV=test mocha spec/ --require babel-register\""}</Changed>
              <span>{`,
    "cover": "nyc npm t",
    "postcover": `}</span>
              <Changed>{"\"rimraf .nyc_output\""}</Changed><span>{`,
    "cover:open": `}</span>
              <Changed>{"\"opn coverage/index.html\""}</Changed><span>{`,
    "lint": "npm-run-all lint:**",
    "lint:js": "eslint --cache --fix ./",
    "lint:css": `}</span>
              <Changed>{"\"stylelint \\\"**/*.scss\\\" --syntax scss\""}</Changed><span>{`,
    "lint:css:fix": "stylefmt -R src/",
    "watch": "npm-run-all --parallel watch:*",
    "watch:test": "npm t -- --watch",
    "watch:lint": `}</span>
              <Changed>
                {"\"onchange \\\"src/**/*.js\\\" \\\"src/**/*.scss\\\" -- npm run lint\""}
              </Changed>
              <span>{`,
    "build": "npm-run-all build:*",
    "prebuild": `}</span>
              <Changed>{"\"cross-env rimraf public/$npm_package_version\""}</Changed><span>{`,
    "build:html": `}</span>
              <Changed>
                {"\"cross-env pug --obj data.json src/index.pug --out public/$npm_package_version/\""}
              </Changed>
              <span>{`,
    "build:css": `}</span>
              <Changed>
                {
                  "\"cross-var \\\"node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/$npm_package_version/index.min.css\\\"\""
                }
              </Changed>
              <span>{`,
    "build:js": `}</span>
              <Changed>
                {
                  "\"cross-var \\\"mustache data.json src/index.mustache.js | uglifyjs > public/$npm_package_version/index.min.js\\\"\""
                }
              </Changed>
              <span>{`,
    "server": "npm-run-all --parallel server:*",
    "server:create": `}</span>
              <Change>
                {"\"cross-env http-server public/$npm_package_version -p $npm_package_config_port\""}
              </Change>
              <span>{`,
    "server:launch": `}</span>
              <Change>{"\"cross-env opn http://localhost:$npm_package_config_port\""}</Change><span>{`,
    "prepush": "npm run lint"
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
        <span>
        cowsay -f flaming-sheep "Nothing to see here. Please disperse."
        </span>
        <pre style={{ whiteSpace: "pre" }}>
          {`  _______________________________________
 < Nothing to see here. Please disperse. >
  ---------------------------------------
   \\            .    .     .
    \\      .  . .     \`  ,
     \\    .; .  : .' :  :  : .
      \\   i..\`: i\` i.i.,i  i .
       \\   \`,--.|i |i|ii|ii|i:
            UooU\\.'@@@@@@\`.||'
            \\__/(@@@@@@@@@@)'
                 (@@@@@@@@)
                 \`YY~~~~YY'
                  ||    || `}
        </pre>
      </div>,
        <div>
          <Prompt path="react-file-size" /><span>exit</span>
        </div>
      ]}
    />
  </Slide>
</SlideSet>;
