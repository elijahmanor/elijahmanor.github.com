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
  <Slide id="node-scripts" bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      node scripts
    </Heading>
  </Slide>
  <Slide transition={["spin", "slide"]} bgColor="primary">
    <Terminal
      isMaximized
      title="node scripts"
      output={[
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 0,
          output: (        
                <div>
                  <Prompt path="react-file-size" />
                  <span>
                  cowsay -f stegosaurus "I dino, tons of npm scripts make me a nervous rex"
                  </span>
                  <pre style={{ whiteSpace: "pre-wrap" }}>
                    {`  _______________________________________
 / I dino, tons of npm scripts make me a \\
 \\ nervous rex                           /
  ---------------------------------------
 \\                             .       .
  \\                           / \`.   .' "
   \\                  .---.  <    > <    >  .---.
    \\                 |    \\  \\ - ~ ~ - /  /    |
          _____          ..-~             ~-..-~
         |     |   \\~~~\\.'                    \`./~~~/
        ---------   \\__/                        \\__/
       .'  O    \\     /               /       \\  "
      (_____,    \`._.'               |         }  \\/~~~/
       \`----.          /       }     |        /    \\__/
             \`-.      |       /      |       /      \`. ,~~|
                 ~-.__|      /_ - ~ ^|      /- _      \`..-'
                      |     /        |     /     ~-.     \`-. _  _  _
                      |_____|        |_____|         ~ - . _ _ _ _ _>`}
                  </pre>
                </div>)
        },
        <div>
          <Prompt path="react-file-size" />
          <Success>vim</Success>{" "}<span>package.json</span>
        </div>,
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 275,
          note: (
            <span>So, let's pull out the <code>test</code>, <code>build</code>, and <code>server</code> scripts into their own JavaScript files.</span> 
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
    "poststart": "npm run build && npm run server",
    "test": `}</span>
              <Highlight>{"\"babel-node ./scripts/test.js\""}</Highlight><span>{`,
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
    "build": `}</span>
              <Highlight>{"\"babel-node ./scripts/build.js\""}</Highlight><span>{`,
    "server": `}</span>
              <Highlight>{"babel-node ./scripts/server.js"}</Highlight><span>{`,
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
          <Success>vim</Success>{" "}<span>./scripts/test.js</span>
        </div>,
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 0,
          output: (
            <div style={{ whiteSpace: "pre" }}>
              <span>{`
import { exec } from "shelljs";

const isWindows = process.platform === "win32";
const environment = isWindows ? "set BABEL_ENV=test&&" : "BABEL_ENV=test";

exec(\`\${environment} mocha spec/ --require babel-register\`);
`}</span>
            </div>
          )
        },
        <div>
          <Prompt path="react-file-size" />
          <Success>vim</Success>{" "}<span>./scripts/build.js</span>
        </div>,
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 0,
          output: (
            <div style={{ whiteSpace: "pre" }}>
              <span>{`
import { rm, exec } from "shelljs";

const version = process.env.npm_package_version;

rm("-rf", \`public/\${version}\`);
exec(\`pug --obj data.json src/index.pug --out public/\${version}/\`);
exec(
  \`node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/\${version}/index.min.css\`
);
exec(\`mustache data.json src/index.mustache.js | uglifyjs > public/\${version}/index.min.js\`);
`}</span>
            </div>
          )
        },
        <div>
          <Prompt path="react-file-size" />
          <Success>vim</Success>{" "}<span>./scripts/server.js</span>
        </div>,
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 0,
          output: (
            <div style={{ whiteSpace: "pre" }}>
              <span>{`
import { exec } from "shelljs";

const { npm_package_version: version, npm_package_config_port: port } = process.env;

exec(\`http-server public/\${version} -p \${port}\`, { async: true });
exec(\`opn http://localhost:\${port}\`);
`}</span>
            </div>
          )
        },
        <div>
          <Prompt path="react-file-size" />
          <span>
            cowsay "You node you like this, don't you?"
          </span>
          <pre style={{ whiteSpace: "pre" }}>
            {` ___________________________________ 
< You node you like this, don't you? >
 ------------------------------------
        \\   ^__^                    
         \\  (oo)\\_______            
            (__)\\       )\\/\\        
                ||----w |           
                ||     ||           `}
          </pre>
        </div>,
        <div>
          <Prompt path="react-file-size" /><span>exit</span>
        </div>
      ]}
    />
  </Slide>
</SlideSet>;
