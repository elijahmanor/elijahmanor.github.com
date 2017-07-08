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
      git hooks
    </Heading>
  </Slide>,
  <Slide transition={["spin", "slide"]} bgColor="primary">
    <Terminal
      isMaximized
      title="git hooks"
      output={[
        <div>
          <Prompt path="react-file-size" />
          <Success>vim</Success>{" "}<span>package.json</span>
        </div>,
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 1000,
          output: (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <span>{`{
  "name": "react-file-size",
  "config": {
   "port": "1337"
  },
  "scripts": {
    "start": "node index.js",
    "poststart": "npm run build && npm run server",
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
    "build:js": "mustache data.json src/index.mustache.js | uglifyjs > public/$npm_package_version/index.min.js",
    "server": "npm-run-all --parallel server:*",
    "server:create": "http-server public/$npm_package_version -p $npm_package_config_port",
    "server:launch": "open http://localhost:$npm_package_config_port",
    `}</span>
              <Changed>{"\"precommit\": \"npm run lint\","}</Changed><span>{`
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
            cowsay "Wait, it doesn't work like that..."
          </span>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {` ____________________________________ 
< Wait, it doesn't work like that... >
 ------------------------------------ 
        \\   ^__^                    
         \\  (oo)\\_______            
            (__)\\       )\\/\\        
                ||----w |           
                ||     ||           `}
          </pre>
        </div>,
        <div>
          <Prompt path="react-file-size" /><span>npm i husky -D</span>
        </div>,
        <div>{`
+ husky@0.11.9
added 4 packages and removed 98 packages in 1.277s
`}</div>,
        <div>
          <Prompt path="react-file-size" />
          <span>git commit -am "I made a linting error"</span>
        </div>,
        <div>
          {Parser(
            `
> react-file-size@0.1.0 precommit /Users/elijahm/egghead/react-file-size
> npm run lint


> react-file-size@0.1.0 lint /Users/elijahm/egghead/react-file-size
> npm-run-all lint:**


> react-file-size@0.1.0 lint:js /Users/elijahm/egghead/react-file-size
> eslint --cache --fix ./


/Users/elijahm/egghead/react-file-size/src/utils.js
  8:8  <span className="u-error">error</span>  'test' is assigned a value but never used  no-unused-vars

<span className="u-error">✖ 1 problem (1 error, 0 warnings)</span>
`
          )}
        </div>,
        <div>
          {Parser(
            `
npm <span className="u-error">ERR!</span> code ELIFECYCLE
npm <span className="u-error">ERR!</span> errno 1
npm <span className="u-error">ERR!</span> react-file-size@0.1.0 lint:js: 'eslint --cache --fix ./'
npm <span className="u-error">ERR!</span> Exit status 1
npm <span className="u-error">ERR!</span>
npm <span className="u-error">ERR!</span> Failed at the react-file-size@0.1.0 lint:js script.
npm <span className="u-error">ERR!</span> This is probably not a problem with npm. There is likely additional logging output above.

npm <span className="u-error">ERR!</span> A complete log of this run can be found in:
npm <span className="u-error">ERR!</span>     /Users/elijahm/.npm/_logs/2017-06-21T11_10_47_601Z-debug.log
ERROR: "lint:js" exited with 1.
npm <span className="u-error">ERR!</span> code ELIFECYCLE
npm <span className="u-error">ERR!</span> errno 1
npm <span className="u-error">ERR!</span> react-file-size@0.1.0 lint: 'npm-run-all lint:**'
npm <span className="u-error">ERR!</span> Exit status 1
npm <span className="u-error">ERR!</span>
npm <span className="u-error">ERR!</span> Failed at the react-file-size@0.1.0 lint script.
npm <span className="u-error">ERR!</span> This is probably not a problem with npm. There is likely additional logging output above.

npm <span className="u-error">ERR!</span> A complete log of this run can be found in:
npm <span className="u-error">ERR!</span>     /Users/elijahm/.npm/_logs/2017-06-21T11_10_47_622Z-debug.log
npm <span className="u-error">ERR!</span> code ELIFECYCLE
npm <span className="u-error">ERR!</span> errno 1
npm <span className="u-error">ERR!</span> react-file-size@0.1.0 precommit: 'npm run lint'
npm <span className="u-error">ERR!</span> Exit status 1
npm <span className="u-error">ERR!</span>
npm <span className="u-error">ERR!</span> Failed at the react-file-size@0.1.0 precommit script.
npm <span className="u-error">ERR!</span> This is probably not a problem with npm. There is likely additional logging output above.

npm <span className="u-error">ERR!</span> A complete log of this run can be found in:
npm <span className="u-error">ERR!</span>     /Users/elijahm/.npm/_logs/2017-06-21T11_10_47_638Z-debug.log

husky - pre-commit hook failed (add --no-verify to bypass)
`
          )}
        </div>,
        <div>
          <Prompt path="react-file-size" />
          <span>git commit -am "I really want to commit this" --no-verify</span>
        </div>,
        <div>{`
[master 11c49c1] I really want to commit this
 1 file changed, 3 insertions(+), 1 deletion(-)
`}</div>,
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 1000,
          output: (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <span>{`{
  "name": "react-file-size",
  "config": {
   "port": "1337"
  },
  "scripts": {
    "start": "node index.js",
    "poststart": "npm run build && npm run server",
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
    "build:js": "mustache data.json src/index.mustache.js | uglifyjs > public/$npm_package_version/index.min.js",
    "server": "npm-run-all --parallel server:*",
    "server:create": "http-server public/$npm_package_version -p $npm_package_config_port",
    "server:launch": "open http://localhost:$npm_package_config_port",
    `}</span>
              <Changed>{"\"prepush\""}</Changed><span>{`: "npm run lint",
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
          <span>git commit -am "Changed precommit to prepush"</span>
        </div>,
        <div>{`
[master 84e1809] Changed precommit to prepush
 1 file changed, 1 insertion(+), 1 deletion(-)`}</div>,
        <div>
          <Prompt path="react-file-size" />
          <span>git push origin master</span>
        </div>,
        <div>
          {Parser(
            `
> react-file-size@0.1.0 precommit /Users/elijahm/egghead/react-file-size
> npm run lint


> react-file-size@0.1.0 lint /Users/elijahm/egghead/react-file-size
> npm-run-all lint:**


> react-file-size@0.1.0 lint:js /Users/elijahm/egghead/react-file-size
> eslint --cache --fix ./


/Users/elijahm/egghead/react-file-size/src/utils.js
  8:8  <span className="u-error">error</span>  'test' is assigned a value but never used  no-unused-vars

<span className="u-error">✖ 1 problem (1 error, 0 warnings)</span>
`
          )}
        </div>,
        <div>
          {Parser(
            `
npm <span className="u-error">ERR!</span> code ELIFECYCLE
npm <span className="u-error">ERR!</span> errno 1
npm <span className="u-error">ERR!</span> react-file-size@0.1.0 lint:js: 'eslint --cache --fix ./'
npm <span className="u-error">ERR!</span> Exit status 1
npm <span className="u-error">ERR!</span>
npm <span className="u-error">ERR!</span> Failed at the react-file-size@0.1.0 lint:js script.
npm <span className="u-error">ERR!</span> This is probably not a problem with npm. There is likely additional logging output above.

npm <span className="u-error">ERR!</span> A complete log of this run can be found in:
npm <span className="u-error">ERR!</span>     /Users/elijahm/.npm/_logs/2017-06-21T11_10_47_601Z-debug.log
ERROR: "lint:js" exited with 1.
npm <span className="u-error">ERR!</span> code ELIFECYCLE
npm <span className="u-error">ERR!</span> errno 1
npm <span className="u-error">ERR!</span> react-file-size@0.1.0 lint: 'npm-run-all lint:**'
npm <span className="u-error">ERR!</span> Exit status 1
npm <span className="u-error">ERR!</span>
npm <span className="u-error">ERR!</span> Failed at the react-file-size@0.1.0 lint script.
npm <span className="u-error">ERR!</span> This is probably not a problem with npm. There is likely additional logging output above.

npm <span className="u-error">ERR!</span> A complete log of this run can be found in:
npm <span className="u-error">ERR!</span>     /Users/elijahm/.npm/_logs/2017-06-21T11_10_47_622Z-debug.log
npm <span className="u-error">ERR!</span> code ELIFECYCLE
npm <span className="u-error">ERR!</span> errno 1
npm <span className="u-error">ERR!</span> react-file-size@0.1.0 precommit: 'npm run lint'
npm <span className="u-error">ERR!</span> Exit status 1
npm <span className="u-error">ERR!</span>
npm <span className="u-error">ERR!</span> Failed at the react-file-size@0.1.0 precommit script.
npm <span className="u-error">ERR!</span> This is probably not a problem with npm. There is likely additional logging output above.

npm <span className="u-error">ERR!</span> A complete log of this run can be found in:
npm <span className="u-error">ERR!</span>     /Users/elijahm/.npm/_logs/2017-06-21T11_10_47_638Z-debug.log

husky - pre-push hook failed (add --no-verify to bypass)

error: failed to push some refs to 'https://github.com/elijahmanor/react-file-size.git'
`
          )}
        </div>,
        <div>
          <Prompt path="react-file-size" /><span>exit</span>
        </div>
      ]}
    />
  </Slide>
];
