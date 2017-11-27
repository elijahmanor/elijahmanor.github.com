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
  <Slide id="use-package-vars" bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      use package
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      variables
    </Heading>
  </Slide>
  <Slide transition={["spin", "slide"]} bgColor="primary">
    <Terminal
      isMaximized
      title="use package variables"
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
            <span>Wouldn't it be nice to be able to use the <code>version</code> information from your <code>package.json</code> in your scripts?</span>
          ),
          output: (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <span>{`{
  `}</span>
              <Highlight>{"\"name\": \"react-file-size\""}</Highlight><span>{`,
  `}</span>
              <Highlight>{"\"version\": \"0.1.0\","}</Highlight>
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
    "prebuild": "rm -rf public/",
    "build:html": "pug --obj data.json src/index.pug --out public/",
    "build:css": "node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/index.css",
    "build:js": "mustache data.json src/index.mustache.js | uglifyjs > public/index.js"
  },
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
          <Prompt path="react-file-size" /><span>npm run env | grep "npm_package" | less</span>
        </div>,
        {
          note: (
            <span>Thankfully there are TONS of environment variables you can leverage (example: <code>npm run env | grep "npm_package" | less</code>)</span>
          ),
          output: (
            <div>
            <span>{`
  npm_package_devDependencies_babel_register=^6.16.3                                                                                
  npm_package_dependencies_request=^2.74.0
  npm_package_gitHead=4074c3f24a7bf8c0524e801ddbca2c8677fd1801
  npm_package_dependencies_when=^3.7.7
  npm_package_dependencies_inquirer=^1.2.2
  npm_package_publishConfig_registry=https://registry.npmjs.org/
  npm_package_scripts_cover=nyc npm t
  npm_package_devDependencies_uglify_js=^2.6.2
  npm_package_dependencies_cheerio=^0.22.0
  npm_package_devDependencies_sinon=^1.17.6
  npm_package_devDependencies_parallelshell=^2.0.0
  npm_package_devDependencies_eslint_config_leankit=^3.0.0
  npm_package_devDependencies_mocha=^3.1.0
  npm_package_devDependencies_jest=^16.0.2
  npm_package_dependencies_ora=^0.3.0
  npm_package_dependencies_shelljs=^0.7.5
  npm_package_dependencies_babel_register=^6.5.2
  npm_package_scripts_watch_lint=onchange 'src/**/*.js' 'src/**/*.scss' -- npm run lint
  npm_package_scripts_lint_css=stylelint '**/*.scss' --syntax scss
  npm_package_scripts_lint=npm-run-all lint:**
  npm_package_devDependencies_mustache=^2.2.1
  npm_package_devDependencies_babel_polyfill=^6.13.0
  `}</span>
            <Highlight>{"npm_package_version=0.1.0"}</Highlight>
            <span>{`
  npm_package_scripts_pretest=npm run lint
  npm_package_scripts_build_html=pug --obj data.json src/index.pug --out public/
  npm_package_devDependencies_sinon_chai=^2.8.0
  npm_package_bin_react_file_size=./index.js
  npm_package_readmeFilename=README.md
  npm_package_description=A tool to generate file size changes for the react library
  npm_package_license=MIT
  :`}</span>
          </div>  
          )
        },
        {
          isSolo: true,
          isAutoScroll: false,
          note: (
            <span>Use the <code>$</code> prefix to reference the environment variable in your scripts.</span>
          ),
          scrollTo: 600,
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
    "watch": "npm-run-all --parallel watch:*",
    "watch:test": "npm t -- --watch",
    "watch:lint": "onchange 'src/**/*.js' 'src/**/*.scss' -- npm run lint",
    "build": "npm-run-all build:*",
    "prebuild": "rm -rf public/`}</span><Changed>{"$npm_package_version/"}</Changed><span>{`",
    "build:html": "pug --obj data.json src/index.pug --out public/`}</span>
              <Changed>{"$npm_package_version/"}</Changed>
              <span>{`",
    "build:css": "node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/`}</span>
              <Changed>{"$npm_package_version/"}</Changed>
              <span>{`index.css",
    "build:js": "mustache data.json src/index.mustache.js | uglifyjs > public/`}</span>
              <Changed>{"$npm_package_version/"}</Changed>
              <span>{`index.js"
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
          <span>npm run build</span>
        </div>,
        <div>{`
> react-file-size@0.1.0 prebuild /Users/elijahm/egghead/react-file-size
> rm -rf public/$npm_package_version

> react-file-size@0.1.0 build /Users/elijahm/egghead/react-file-size
> npm-run-all build:*

> react-file-size@0.1.0 build:html /Users/elijahm/egghead/react-file-size
> pug --obj data.json src/index.pug --out public/$npm_package_version/

  rendered /Users/elijahm/egghead/react-file-size/public/0.1.0/index.html

> react-file-size@0.1.0 build:css /Users/elijahm/egghead/react-file-size
> node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/$npm_package_version/index.css

> react-file-size@0.1.0 build:js /Users/elijahm/egghead/react-file-size
> mustache data.json src/index.mustache.js | uglifyjs > public/$npm_package_version/index.js
`}</div>,
        <div>
          <Prompt path="react-file-size" />
          <span>tree public</span>
        </div>,
        <div>{`
public
└── 0.1.0
    ├── index.css
    ├── index.html
    └── index.js

1 directory, 3 files
`}</div>,
        <div>
          <Prompt path="react-file-size" /><span>exit</span>
        </div>
      ]}
    />
  </Slide>
</SlideSet>;
