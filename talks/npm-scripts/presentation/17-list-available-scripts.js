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
      list available
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
          <span>npm run</span>
        </div>,
        <div>{`
Lifecycle scripts included in react-file-size:
  start
    node index.js
  poststart
    npm run build && npm run server
  pretest
    npm run lint
  test
    BABEL_ENV=test mocha spec/ --require babel-register

`}</div>,
        <div>{`
available via 'npm run-script':
  cover
    nyc npm t
  postcover
    rm -rf .nyc_output
  cover:open
    open coverage/index.html
  lint
    npm-run-all lint:**
  lint:js
    eslint --cache --fix ./
  lint:css
    stylelint '**/*.scss' --syntax scss
  lint:css:fix
    stylefmt -R src/
  watch
    npm-run-all --parallel watch:*
  watch:test
    npm t -- --watch
  watch:lint
    onchange 'src/**/*.js' 'src/**/*.scss' -- npm run lint
  build
    npm-run-all build:*
  prebuild
    rm -rf public/$npm_package_version
  build:html
    pug --obj data.json src/index.pug --out public/$npm_package_version/
  build:css
    node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/$npm_package_version/index.min.css
  build:js
    mustache data.json src/index.mustache.js | uglifyjs > public/$npm_package_version/index.min.js
  server
    npm-run-all --parallel server:*
  server:create
    http-server public/$npm_package_version -p $npm_package_config_port
  server:launch
    open http://localhost:$npm_package_config_port
  prepush
    npm run lint
`}</div>,
        <div>
          <Prompt path="react-file-size" />
          <span>npm run | less</span>
        </div>,
        {
          isSolo: true,
          isAutoScroll: false,
          scrollTo: 0,
          output: (
            <div>{`
Lifecycle scripts included in react-file-size:
  start
    node index.js
  poststart
    npm run build && npm run server
  pretest
    npm run lint
  test
    BABEL_ENV=test mocha spec/ --require babel-register

available via 'npm run-script':
  cover
:
`}</div>
          )
        },
        [
          <div>
            <Prompt path="react-file-size" />
            <span>
              npm completion &gt;&gt; ~/.bashrc
            </span>
          </div>,
          <div>
            <Prompt path="react-file-size" />
            <span>
              npm completion &gt;&gt; ~/.zshrc
            </span>
          </div>
        ],
        <div>
          <Prompt path="react-file-size" />
          <span>
            source ~/.zshrc
          </span>
        </div>,
        <div>
          <Prompt path="react-file-size" />
          <span>
            npm run <span className="u-muted">&lt;tab&gt;</span>
          </span>
        </div>,
        [
          <div>
            {Parser(
              `build          lint           prebuild       start        
build:css      lint:css       prepush        test         
build:html     lint:css:fix   pretest        watch        
build:js       lint:js        server         watch:lint   
cover          postcover      server:create  watch:test   
cover:open     poststart      server:launch            `
            )}
          </div>,
          <div>
            {Parser(
              `<span className="u-selected">build</span>          lint           prebuild       start        
build:css      lint:css       prepush        test         
build:html     lint:css:fix   pretest        watch        
build:js       lint:js        server         watch:lint   
cover          postcover      server:create  watch:test   
cover:open     poststart      server:launch            `
            )}
          </div>,
          <div>
            {Parser(
              `build          <span className="u-selected">lint</span>           prebuild       start        
build:css      lint:css       prepush        test         
build:html     lint:css:fix   pretest        watch        
build:js       lint:js        server         watch:lint   
cover          postcover      server:create  watch:test   
cover:open     poststart      server:launch            `
            )}
          </div>,
          <div>
            {Parser(
              `build          lint           prebuild       start        
build:css      <span className="u-selected">lint:css</span>       prepush        test         
build:html     lint:css:fix   pretest        watch        
build:js       lint:js        server         watch:lint   
cover          postcover      server:create  watch:test   
cover:open     poststart      server:launch            `
            )}
          </div>,
          <div>
            {Parser(
              `build          lint           prebuild       start        
build:css      lint:css       prepush        test         
build:html     <span className="u-selected">lint:css:fix</span>   pretest        watch        
build:js       lint:js        server         watch:lint   
cover          postcover      server:create  watch:test   
cover:open     poststart      server:launch            `
            )}
          </div>
        ],
        <div>
          <Prompt path="react-file-size" />
          <span>
            npm run build<span className="u-muted">&lt;tab&gt;</span>
          </span>
        </div>,
        [
          <div>
            {Parser("build       build:css   build:html  build:js ")}
          </div>,
          <div>
            {Parser(
              "<span className=\"u-selected\">build</span>       build:css   build:html  build:js "
            )}
          </div>,
          <div>
            {Parser(
              "build       <span className=\"u-selected\">build:css</span>   build:html  build:js "
            )}
          </div>
        ],
        <div>
          <Prompt path="react-file-size" />
          <span>
            npm i ntl -g
          </span>
        </div>,
        <div>{`
/Users/elijahm/.nvm/versions/node/v6.3.1/bin/ntl -> /Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/ntl/cli.js
+ ntl@1.2.0
added 31 packages in 2.368s`}</div>,
        <div>
          <Prompt path="react-file-size" />
          <span>
            ntl
          </span>
        </div>,
        [
          <div>
            {Parser(
              `
Npm Task List - v1.2.0
<span className="u-success">?</span> Select a task to run: <span className="u-muted">(Use arrow keys)</span>
<span className="u-ntlSelection">❯ start</span>
  test 
  cover 
  cover:open 
  lint 
  lint:js 
  lint:css 
<span className="u-muted">(Move up and down to reveal more choices)</span>`
            )}
          </div>,
          <div>
            {Parser(
              `
Npm Task List - v1.2.0
<span className="u-success">?</span> Select a task to run: 
  start 
<span className="u-ntlSelection">❯ test</span> 
  cover 
  cover:open 
  lint 
  lint:js 
  lint:css 
<span className="u-muted">(Move up and down to reveal more choices)</span>
`
            )}
          </div>,
          <div>
            {Parser(
              `
Npm Task List - v1.2.0
? Select a task to run: 
  start 
  test 
<span className="u-ntlSelection">❯ cover</span>
  cover:open 
  lint 
  lint:js 
  lint:css 
<span className="u-muted">(Move up and down to reveal more choices)</span>
`
            )}
          </div>,
          <div>
            {Parser(
              `
Npm Task List - v1.2.0
? Select a task to run: 
  start 
  test 
  cover 
<span className="u-ntlSelection">❯ cover:open</span> 
  lint 
  lint:js 
  lint:css 
<span className="u-muted">(Move up and down to reveal more choices)</span>
`
            )}
          </div>
        ],
        <div>
          <Prompt path="react-file-size" />
          <span>
            cowsay "I like the tab Cowpletion"
          </span>
          <pre style={{ whiteSpace: "pre" }}>
            {` __________________________ 
< I like the tab Cowpletion >
 -------------------------- 
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
