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
  <Slide id="console-log-level" bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      console
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      log level
    </Heading>
  </Slide>
  <Slide transition={["spin", "slide"]} bgColor="primary">
    <Terminal
      isMaximized
      title="console log level"
      output={[
        [
          <div>
            <Prompt path="react-file-size" /><span>npm start --loglevel silent</span>
          </div>,
          <div>
            <Prompt path="react-file-size" /><span>npm start --silent</span>
          </div>,
          <div>
            <Prompt path="react-file-size" /><span>npm start -s</span>
          </div>
        ],
        <div>{`
✔ Writing data.json with updated statistics for react and react-dom

  rendered /Users/elijahm/egghead/react-file-size/public/0.1.0/index.html
Starting up http-server, serving public/0.1.0
Available on:
  http://127.0.0.1:1337
  http://127.94.0.1:1337
  http://172.20.8.249:1337
  http://172.16.253.1:1337
  http://192.168.33.1:1337
  http://172.16.238.1:1337
  http://169.254.86.70:1337
Hit CTRL-C to stop the server
`}</div>,
        [
          <div>
            <Prompt path="react-file-size" />
            <span>npm start -q <span className="u-muted">#--loglevel quiet</span></span>
          </div>,
          <div>
            <Prompt path="react-file-size" />
            <span>npm start -d <span className="u-muted">#--loglevel info</span></span>
          </div>,
          <div>
            <Prompt path="react-file-size" />
            <span>npm start -dd <span className="u-muted">#--loglevel verbose</span></span>
          </div>,
          <div>
            <Prompt path="react-file-size" />
            <span>npm start -ddd <span className="u-muted">#--loglevel silly</span></span>
          </div>
        ],
        <div>{`
npm info it worked if it ends with ok
npm verb cli [ '/Users/elijahm/.nvm/versions/node/v6.3.1/bin/node',
npm verb cli   '/Users/elijahm/.nvm/versions/node/v6.3.1/bin/npm',
npm verb cli   'start',
npm verb cli   '-ddd' ]
npm info using npm@5.0.3
npm info using node@v6.3.1
npm verb run-script [ 'prestart', 'start', 'poststart' ]
npm info lifecycle react-file-size@0.1.0~prestart: react-file-size@0.1.0
npm sill lifecycle react-file-size@0.1.0~prestart: no script for prestart, continuing
npm info lifecycle react-file-size@0.1.0~start: react-file-size@0.1.0

> react-file-size@0.1.0 start /Users/elijahm/egghead/react-file-size
> node index.js

✔ Writing data.json with updated statistics for react and react-dom
npm verb lifecycle react-file-size@0.1.0~start: unsafe-perm in lifecycle true
npm verb lifecycle react-file-size@0.1.0~start: PATH: /Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
npm verb lifecycle react-file-size@0.1.0~start: CWD: /Users/elijahm/egghead/react-file-size
npm sill lifecycle react-file-size@0.1.0~start: Args: [ '-c', 'node index.js' ]
npm sill lifecycle react-file-size@0.1.0~start: Returned: code: 0  signal: null
npm info lifecycle react-file-size@0.1.0~poststart: react-file-size@0.1.0

> react-file-size@0.1.0 poststart /Users/elijahm/egghead/react-file-size
> npm run build && npm run server

npm info it worked if it ends with ok
npm verb cli [ '/Users/elijahm/.nvm/versions/node/v6.3.1/bin/node',
npm verb cli   '/Users/elijahm/.nvm/versions/node/v6.3.1/bin/npm',
npm verb cli   'run',
npm verb cli   'build' ]
npm info using npm@5.0.3
npm info using node@v6.3.1
npm verb run-script [ 'prebuild', 'build', 'postbuild' ]
npm info lifecycle react-file-size@0.1.0~prebuild: react-file-size@0.1.0

> react-file-size@0.1.0 prebuild /Users/elijahm/egghead/react-file-size
> rm -rf public/$npm_package_version

npm verb lifecycle react-file-size@0.1.0~prebuild: unsafe-perm in lifecycle true
npm verb lifecycle react-file-size@0.1.0~prebuild: PATH: /Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
npm verb lifecycle react-file-size@0.1.0~prebuild: CWD: /Users/elijahm/egghead/react-file-size
npm sill lifecycle react-file-size@0.1.0~prebuild: Args: [ '-c', 'rm -rf public/$npm_package_version' ]
npm sill lifecycle react-file-size@0.1.0~prebuild: Returned: code: 0  signal: null
npm info lifecycle react-file-size@0.1.0~build: react-file-size@0.1.0

> react-file-size@0.1.0 build /Users/elijahm/egghead/react-file-size
> npm-run-all build:*

npm info it worked if it ends with ok
npm verb cli [ '/Users/elijahm/.nvm/versions/node/v6.3.1/bin/node',
npm verb cli   '/Users/elijahm/.nvm/versions/node/v6.3.1/bin/npm',
npm verb cli   'run',
npm verb cli   '--react-file-size:port=1337',
npm verb cli   'build:html' ]
npm info using npm@5.0.3
npm info using node@v6.3.1
npm verb run-script [ 'prebuild:html', 'build:html', 'postbuild:html' ]
npm info lifecycle react-file-size@0.1.0~prebuild:html: react-file-size@0.1.0
npm sill lifecycle react-file-size@0.1.0~prebuild:html: no script for prebuild:html, continuing
npm info lifecycle react-file-size@0.1.0~build:html: react-file-size@0.1.0

> react-file-size@0.1.0 build:html /Users/elijahm/egghead/react-file-size
> pug --obj data.json src/index.pug --out public/$npm_package_version/
  rendered /Users/elijahm/egghead/react-file-size/public/0.1.0/index.html
npm verb lifecycle react-file-size@0.1.0~build:html: unsafe-perm in lifecycle true
npm verb lifecycle react-file-size@0.1.0~build:html: PATH: /Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
npm verb lifecycle react-file-size@0.1.0~build:html: CWD: /Users/elijahm/egghead/react-file-size
npm sill lifecycle react-file-size@0.1.0~build:html: Args: [ '-c',
npm sill lifecycle   'pug --obj data.json src/index.pug --out public/$npm_package_version/' ]
npm sill lifecycle react-file-size@0.1.0~build:html: Returned: code: 0  signal: null
npm info lifecycle react-file-size@0.1.0~postbuild:html: react-file-size@0.1.0
npm sill lifecycle react-file-size@0.1.0~postbuild:html: no script for postbuild:html, continuing
npm verb exit [ 0, true ]
npm info ok
npm info it worked if it ends with ok
npm verb cli [ '/Users/elijahm/.nvm/versions/node/v6.3.1/bin/node',
npm verb cli   '/Users/elijahm/.nvm/versions/node/v6.3.1/bin/npm',
npm verb cli   'run',
npm verb cli   '--react-file-size:port=1337',
npm verb cli   'build:css' ]
npm info using npm@5.0.3
npm info using node@v6.3.1
npm verb run-script [ 'prebuild:css', 'build:css', 'postbuild:css' ]
npm info lifecycle react-file-size@0.1.0~prebuild:css: react-file-size@0.1.0
npm sill lifecycle react-file-size@0.1.0~prebuild:css: no script for prebuild:css, continuing
npm info lifecycle react-file-size@0.1.0~build:css: react-file-size@0.1.0

> react-file-size@0.1.0 build:css /Users/elijahm/egghead/react-file-size
> node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/$npm_package_version/index.min.css

npm verb lifecycle react-file-size@0.1.0~build:css: unsafe-perm in lifecycle true
npm verb lifecycle react-file-size@0.1.0~build:css: PATH: /Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
npm verb lifecycle react-file-size@0.1.0~build:css: CWD: /Users/elijahm/egghead/react-file-size
npm sill lifecycle react-file-size@0.1.0~build:css: Args: [ '-c',
npm sill lifecycle   'node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/$npm_package_version/index.min.css' ]
npm sill lifecycle react-file-size@0.1.0~build:css: Returned: code: 0  signal: null
npm info lifecycle react-file-size@0.1.0~postbuild:css: react-file-size@0.1.0
npm sill lifecycle react-file-size@0.1.0~postbuild:css: no script for postbuild:css, continuing
npm verb exit [ 0, true ]
npm info ok
npm info it worked if it ends with ok
npm verb cli [ '/Users/elijahm/.nvm/versions/node/v6.3.1/bin/node',
npm verb cli   '/Users/elijahm/.nvm/versions/node/v6.3.1/bin/npm',
npm verb cli   'run',
npm verb cli   '--react-file-size:port=1337',
npm verb cli   'build:js' ]
npm info using npm@5.0.3
npm info using node@v6.3.1
npm verb run-script [ 'prebuild:js', 'build:js', 'postbuild:js' ]
npm info lifecycle react-file-size@0.1.0~prebuild:js: react-file-size@0.1.0
npm sill lifecycle react-file-size@0.1.0~prebuild:js: no script for prebuild:js, continuing
npm info lifecycle react-file-size@0.1.0~build:js: react-file-size@0.1.0

> react-file-size@0.1.0 build:js /Users/elijahm/egghead/react-file-size
> mustache data.json src/index.mustache.js | uglifyjs > public/$npm_package_version/index.js

npm verb lifecycle react-file-size@0.1.0~build:js: unsafe-perm in lifecycle true
npm verb lifecycle react-file-size@0.1.0~build:js: PATH: /Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
npm verb lifecycle react-file-size@0.1.0~build:js: CWD: /Users/elijahm/egghead/react-file-size
npm sill lifecycle react-file-size@0.1.0~build:js: Args: [ '-c',
npm sill lifecycle   'mustache data.json src/index.mustache.js | uglifyjs > public/$npm_package_version/index.js' ]
npm sill lifecycle react-file-size@0.1.0~build:js: Returned: code: 0  signal: null
npm info lifecycle react-file-size@0.1.0~postbuild:js: react-file-size@0.1.0
npm sill lifecycle react-file-size@0.1.0~postbuild:js: no script for postbuild:js, continuing
npm verb exit [ 0, true ]
npm info ok
npm verb lifecycle react-file-size@0.1.0~build: unsafe-perm in lifecycle true
npm verb lifecycle react-file-size@0.1.0~build: PATH: /Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
npm verb lifecycle react-file-size@0.1.0~build: CWD: /Users/elijahm/egghead/react-file-size
npm sill lifecycle react-file-size@0.1.0~build: Args: [ '-c', 'npm-run-all build:*' ]
npm sill lifecycle react-file-size@0.1.0~build: Returned: code: 0  signal: null
npm info lifecycle react-file-size@0.1.0~postbuild: react-file-size@0.1.0
npm sill lifecycle react-file-size@0.1.0~postbuild: no script for postbuild, continuing
npm verb exit [ 0, true ]
npm info ok
npm info it worked if it ends with ok
npm verb cli [ '/Users/elijahm/.nvm/versions/node/v6.3.1/bin/node',
npm verb cli   '/Users/elijahm/.nvm/versions/node/v6.3.1/bin/npm',
npm verb cli   'run',
npm verb cli   'server' ]
npm info using npm@5.0.3
npm info using node@v6.3.1
npm verb run-script [ 'preserver', 'server', 'postserver' ]
npm info lifecycle react-file-size@0.1.0~preserver: react-file-size@0.1.0
npm sill lifecycle react-file-size@0.1.0~preserver: no script for preserver, continuing
npm info lifecycle react-file-size@0.1.0~server: react-file-size@0.1.0

> react-file-size@0.1.0 server /Users/elijahm/egghead/react-file-size
> npm-run-all --parallel server:*

npm info it worked if it ends with ok
npm verb cli [ '/Users/elijahm/.nvm/versions/node/v6.3.1/bin/node',
npm verb cli   '/Users/elijahm/.nvm/versions/node/v6.3.1/bin/npm',
npm verb cli   'run',
npm verb cli   '--react-file-size:port=1337',
npm verb cli   'server:launch' ]
npm info using npm@5.0.3
npm info using node@v6.3.1
npm info it worked if it ends with ok
npm verb cli [ '/Users/elijahm/.nvm/versions/node/v6.3.1/bin/node',
npm verb cli   '/Users/elijahm/.nvm/versions/node/v6.3.1/bin/npm',
npm verb cli   'run',
npm verb cli   '--react-file-size:port=1337',
npm verb cli   'server:create' ]
npm info using npm@5.0.3
npm info using node@v6.3.1
npm verb run-script [ 'preserver:launch', 'server:launch', 'postserver:launch' ]
npm verb run-script [ 'preserver:create', 'server:create', 'postserver:create' ]
npm info lifecycle react-file-size@0.1.0~preserver:launch: react-file-size@0.1.0
npm info lifecycle react-file-size@0.1.0~preserver:create: react-file-size@0.1.0
npm sill lifecycle react-file-size@0.1.0~preserver:create: no script for preserver:create, continuing
npm sill lifecycle react-file-size@0.1.0~preserver:launch: no script for preserver:launch, continuing
npm info lifecycle react-file-size@0.1.0~server:create: react-file-size@0.1.0
npm info lifecycle react-file-size@0.1.0~server:launch: react-file-size@0.1.0

> react-file-size@0.1.0 server:create /Users/elijahm/egghead/react-file-size
> http-server public/$npm_package_version -p $npm_package_config_port
> react-file-size@0.1.0 server:launch /Users/elijahm/egghead/react-file-size
> open http://localhost:$npm_package_config_port

npm verb lifecycle react-file-size@0.1.0~server:launch: unsafe-perm in lifecycle true
npm verb lifecycle react-file-size@0.1.0~server:launch: PATH: /Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/elijahm/egghead/react-file-size/node_modules/.bin:/Users/elijahm/.nvm/versions/node/v6.3.1/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
npm verb lifecycle react-file-size@0.1.0~server:launch: CWD: /Users/elijahm/egghead/react-file-size
npm sill lifecycle react-file-size@0.1.0~server:launch: Args: [ '-c', 'open http://localhost:$npm_package_config_port' ]
npm sill lifecycle react-file-size@0.1.0~server:launch: Returned: code: 0  signal: null
npm info lifecycle react-file-size@0.1.0~postserver:launch: react-file-size@0.1.0
npm sill lifecycle react-file-size@0.1.0~postserver:launch: no script for postserver:launch, continuing
npm verb exit [ 0, true ]
npm info ok
Starting up http-server, serving public/0.1.0
Available on:
  http://127.0.0.1:1337
  http://127.94.0.1:1337
  http://172.20.8.249:1337
  http://172.16.253.1:1337
  http://192.168.33.1:1337
  http://172.16.238.1:1337
  http://169.254.86.70:1337
Hit CTRL-C to stop the server
`}</div>,
{
  isSolo: true,
  isAutoScroll: false,
  scrollTo: 0,
  output: (

        <div>
          <Prompt path="react-file-size" />
          <span>
            cowsay -f dragon-and-cow "That's 13 lines compared to 200 lines"
          </span>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {`  _______________________________________
 < That's 13 lines compared to 200 lines >
  ---------------------------------------
                        \\                    ^    /^
                         \\                  / \\  // \\
                          \\   |\\___/|      /   \\//  .\\
                           \\  /O  O  \\__  /    //  | \\ \\           *----*
                             /     /  \\/_/    //   |  \\  \\          \\   |
                             @___@\`    \\/_   //    |   \\   \\         \\/\\ \\
                            0/0/|       \\/_ //     |    \\    \\         \\  \\
                        0/0/0/0/|        \\///      |     \\     \\       |  |
                     0/0/0/0/0/_|_ /   (  //       |      \\     _\\     |  /
                  0/0/0/0/0/0/\`/,_ _ _/  ) ; -.    |    _ _\.-~       /   /
                              ,-}        _      *-.|.-~-.           .~    ~
             \\     \\__/        \`/\\      /                 ~-. _ .-~      /
              \\____(oo)           *.   }            {                   /
              (    (--)          .----~-.\\        \\-\`                 .~
              //__\\\\  \\__ Ack!   ///.----..<        \\             _ -~
             //    \\\\               ///-._ _ _ _ _ _ _{^ - - - - ~`}
          </pre>
        </div>)
              },
        <div>
          <Prompt path="react-file-size" /><span>exit</span>
        </div>
      ]}
    />
  </Slide>
</SlideSet>;
