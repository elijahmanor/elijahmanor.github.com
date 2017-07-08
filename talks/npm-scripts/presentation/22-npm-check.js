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

export default (theme, images) => [
  <Slide bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      npm check
    </Heading>
  </Slide>,
  <Slide transition={["spin", "slide"]} bgColor="primary">
    <Terminal
      isMaximized
      title="npm check"
      output={[
        <div>
          <Prompt path="react-file-size" />
          <Success>npm</Success>{" "}<span>i npm-check -g</span>
        </div>,
        <div>
          <Prompt path="react-file-size" />
          <span>npm-check -u</span>
        </div>,
        <div>{`
+ npm-check@5.4.4
updated 1 package in 5.065s`}</div>,
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 0,
          output: (
            <div>
              {Parser(
                `
? Choose which packages to update. (Press <space> to select)
  
 Major Update Potentially breaking API changes. Use caution.
❯◯ gzip-size-cli                 1.0.0   ❯  2.0.0
 ◯ inquirer                      0.12.0  ❯  3.1.1
 ◯ log-update                    1.0.2   ❯  2.0.0
 ◯ ora                           0.3.0   ❯  1.3.0
 ◯ pretty-bytes                  3.0.1   ❯  4.0.2
 ◯ babel-eslint devDep           5.0.4   ❯  7.2.3
 ◯ babel-jest devDep             15.0.0  ❯  20.0.3
 ◯ chai devDep                   3.5.0   ❯  4.0.2
 ◯ dirty-chai devDep             1.2.2   ❯  2.0.0
 ◯ eslint devDep                 1.10.3  ❯  4.0.0
 ◯ eslint-config-leankit devDep  1.1.0   ❯  3.0.0
 ◯ jest devDep                   15.1.1  ❯  20.0.4
 ◯ jscs devDep                   2.11.0  ❯  3.0.7
 ◯ node-sass devDep              3.13.1  ❯  4.5.3
 ◯ nyc devDep                    8.4.0   ❯  11.0.2
 ◯ onchange devDep               2.5.0   ❯  3.2.1
 ◯ parallelshell devDep          2.0.0   ❯  3.0.1
 ◯ sinon devDep                  1.17.7  ❯  2.3.5
 ◯ uglify-js devDep              2.8.29  ❯  3.0.18
  
 Non-Semver Versions less than 1.0.0, caution.
 ◯ shelljs          0.5.3  ❯  0.7.8
 ◯ push-dir devDep  0.2.2  ❯  0.4.1
  
 Space to select. Enter to start upgrading. Control-C to cancel.
`
              )}
            </div>
          )
        },
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 0,
          output: (
            <div>
              {Parser(
                `
? Choose which packages to update. 
  
 Major Update Potentially breaking API changes. Use caution.
 ◯ gzip-size-cli                 1.0.0   ❯  2.0.0
❯◯ inquirer                      0.12.0  ❯  3.1.1
 ◯ log-update                    1.0.2   ❯  2.0.0
 ◯ ora                           0.3.0   ❯  1.3.0
 ◯ pretty-bytes                  3.0.1   ❯  4.0.2
 ◯ babel-eslint devDep           5.0.4   ❯  7.2.3
 ◯ babel-jest devDep             15.0.0  ❯  20.0.3
 ◯ chai devDep                   3.5.0   ❯  4.0.2
 ◯ dirty-chai devDep             1.2.2   ❯  2.0.0
 ◯ eslint devDep                 1.10.3  ❯  4.0.0
 ◯ eslint-config-leankit devDep  1.1.0   ❯  3.0.0
 ◯ jest devDep                   15.1.1  ❯  20.0.4
 ◯ jscs devDep                   2.11.0  ❯  3.0.7
 ◯ node-sass devDep              3.13.1  ❯  4.5.3
 ◯ nyc devDep                    8.4.0   ❯  11.0.2
 ◯ onchange devDep               2.5.0   ❯  3.2.1
 ◯ parallelshell devDep          2.0.0   ❯  3.0.1
 ◯ sinon devDep                  1.17.7  ❯  2.3.5
 ◯ uglify-js devDep              2.8.29  ❯  3.0.18
  
 Non-Semver Versions less than 1.0.0, caution.
 ◯ shelljs          0.5.3  ❯  0.7.8
 ◯ push-dir devDep  0.2.2  ❯  0.4.1
  
 Space to select. Enter to start upgrading. Control-C to cancel.`
              )}
            </div>
          )
        },
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 0,
          output: (
            <div>
              {Parser(
                `
? Choose which packages to update. 
  
 Major Update Potentially breaking API changes. Use caution.
 ◯ gzip-size-cli                 1.0.0   ❯  2.0.0
❯◉ inquirer                      0.12.0  ❯  3.1.1
 ◯ log-update                    1.0.2   ❯  2.0.0
 ◯ ora                           0.3.0   ❯  1.3.0
 ◯ pretty-bytes                  3.0.1   ❯  4.0.2
 ◯ babel-eslint devDep           5.0.4   ❯  7.2.3
 ◯ babel-jest devDep             15.0.0  ❯  20.0.3
 ◯ chai devDep                   3.5.0   ❯  4.0.2
 ◯ dirty-chai devDep             1.2.2   ❯  2.0.0
 ◯ eslint devDep                 1.10.3  ❯  4.0.0
 ◯ eslint-config-leankit devDep  1.1.0   ❯  3.0.0
 ◯ jest devDep                   15.1.1  ❯  20.0.4
 ◯ jscs devDep                   2.11.0  ❯  3.0.7
 ◯ node-sass devDep              3.13.1  ❯  4.5.3
 ◯ nyc devDep                    8.4.0   ❯  11.0.2
 ◯ onchange devDep               2.5.0   ❯  3.2.1
 ◯ parallelshell devDep          2.0.0   ❯  3.0.1
 ◯ sinon devDep                  1.17.7  ❯  2.3.5
 ◯ uglify-js devDep              2.8.29  ❯  3.0.18
  
 Non-Semver Versions less than 1.0.0, caution.
 ◯ shelljs          0.5.3  ❯  0.7.8
 ◯ push-dir devDep  0.2.2  ❯  0.4.1
  
 Space to select. Enter to start upgrading. Control-C to cancel.`
              )}
            </div>
          )
        },
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 0,
          output: (
            <div>
              {Parser(
                `
? Choose which packages to update. inquirer@3.1.1

$ npm install --save inquirer@3.1.1 --color=always
+ inquirer@3.1.1
added 16 packages and updated 1 package in 4.425s

[npm-check] Update complete!
[npm-check] inquirer@3.1.1
[npm-check] You should re-run your tests to make sure everything works with the updates.`
              )}
            </div>
          )
        },
        <div>
          <Prompt path="react-file-size" />
          <span>
            cowsay "That is mooosic to my hears"
          </span>
          <pre style={{ whiteSpace: "pre" }}>
            {` ____________________________ 
< That is mooosic to my ears >
 ----------------------------
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
];
