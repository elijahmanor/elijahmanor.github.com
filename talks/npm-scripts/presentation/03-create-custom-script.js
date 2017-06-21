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
      Create Custom
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
  "scripts": {
    "test": "mocha spec/ --require babel-register",
    "start": "node index.js",
`}</span>
              <span>{"    "}</span>
              <Changed>"eslint": "./node_modules/.bin/eslint --cache --fix ./"</Changed>
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
  "scripts": {
    "test": "mocha spec/ --require babel-register",
    "start": "node index.js",
`}</span>
              <span>{"    \"eslint\": "}</span>
              <Changed>"$(npm bin)/eslint --cache --fix ./"</Changed>
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
          <Prompt path="react-file-size" /><span>npm run env</span>
        </div>,
        <div
          style={{ whiteSpace: "pre-wrap" }}
        >{`> react-file-size@0.1.0 env /Users/elijahm/egghead/react-file-size
> env

npm_config_save_dev=
npm_config_legacy_bundling=
npm_config_dry_run=
npm_package_devDependencies_babel_register=^6.16.3
npm_package_dependencies_request=^2.74.0
NVM_RC_VERSION=
CONSUMER_KEY=AcP5EKFuqxR31zh1RGqZGOmqt
npm_config_viewer=man
npm_config_only=
npm_config_browser=
npm_package_gitHead=2371454810dc6fbad23c91b7c61379bb782ada78
npm_package_dependencies_when=^3.7.7
MANPATH=/Users/elijahm/.nvm/versions/node/v6.3.1/share/man:/usr/local/share/...
npm_config_also=
npm_package_dependencies_inquirer=^0.12.0
npm_package_publishConfig_registry=https://registry.npmjs.org/
npm_config_rollback=true
LC_MONETARY=en_US.UTF-8
TERM_PROGRAM=Hyper
NODE=/Users/elijahm/.nvm/versions/node/v6.3.1/bin/node
npm_config_usage=
npm_package_devDependencies_uglify_js=^2.6.2
npm_package_dependencies_cheerio=^0.22.0
npm_package_devDependencies_sinon=^1.17.6
npm_package_devDependencies_parallelshell=^2.0.0
npm_package_devDependencies_eslint_config_leankit=^1.1.0
npm_config_globalignorefile=/Users/elijahm/.nvm/versions/node/v6.3.1/etc/npm...
npm_package_devDependencies_mocha=^3.1.0
npm_package_devDependencies_jest=^15.1.1
TERM=xterm-256color
SHELL=/bin/zsh
npm_config_shell=/bin/zsh
npm_config_maxsockets=50
npm_config_init_author_url=
npm_config__gulp_sourcemaps_registry=http://registry.npmjs.org/
npm_package_dependencies_ora=^0.3.0
npm_config_shrinkwrap=true
npm_config_parseable=
npm_config_metrics_registry=http://registry.npmjs.org/
npm_package_dependencies_shelljs=^0.5.3
TMPDIR=/var/folders/8h/r6hz2cx13j9bw_cbs42w8w940000gp/T/
npm_config_timing=
npm_config_init_license=ISC
npm_package_dependencies_babel_register=^6.5.2
NVM_PATH=/Users/elijahm/.nvm/versions/node/v6.3.1/lib/node
Apple_PubSub_Socket_Render=/private/tmp/com.apple.launchd.Z0vdG17mYa/Render
npm_config_if_present=
npm_package_devDependencies_mustache=^2.2.1
npm_package_devDependencies_babel_polyfill=^6.13.0
TERM_PROGRAM_VERSION=1.3.3
LC_NUMERIC=en_US.UTF-8
npm_config_sign_git_tag=
npm_config_init_author_email=
npm_config_cache_max=Infinity
npm_config_long=
npm_config_local_address=
npm_config_git_tag_version=true
npm_config_cert=
npm_config_fetch_retries=2
npm_config_registry=http://registry.npmjs.org/
npm_package_devDependencies_sinon_chai=^2.8.0
npm_package_bin_react_file_size=./index.js
LC_ALL=en_US.UTF-8
ZSH=/Users/elijahm/.oh-my-zsh
npm_config_versions=
npm_config_message=%s
npm_config_key=
npm_config___registry=https://puppet.leankit.com:4873/
npm_package_readmeFilename=README.md
TTC_BOTS=FoxNews,bestofhn,cnet
npm_package_description=A tool to generate file size changes for the react l...
NVM_DIR=/Users/elijahm/.nvm
USER=elijahm
npm_package_devDependencies_jade=^1.11.0
npm_package_license=MIT
npm_config_globalconfig=/Users/elijahm/.nvm/versions/node/v6.3.1/etc/npmrc
npm_package_dependencies_gzip_size_cli=^1.0.0
npm_config_prefer_online=
npm_config_logs_max=10
npm_config_always_auth=true
npm_package_devDependencies_babel_jest=^15.0.0
npm_package_dependencies_lodash=^4.0.1
npm_package_dependencies_babel_preset_es2015=^6.6.0
TTC_APIKEYS=true
SSH_AUTH_SOCK=/private/tmp/com.apple.launchd.WlQC6wRCx6/Listeners
npm_package_devDependencies_eslint=^1.10.3
__CF_USER_TEXT_ENCODING=0x1F6:0x0:0x0
npm_execpath=/Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/b...
npm_config_global_style=
npm_config_cache_lock_retries=10
npm_package_devDependencies_proxyquire=^1.7.10
npm_config_cafile=
PAGER=less
npm_config__bahmutov_registry=http://registry.npmjs.org/
npm_package_author_name=Elijah Manor
npm_config_heading=npm
LSCOLORS=Gxfxcxdxbxegedabagacad
npm_config_searchlimit=20
npm_config_proprietary_attribs=true
npm_config_offline=
npm_config_fetch_retry_mintimeout=10000
npm_config_json=
npm_config_access=
npm_config_argv={"remain":[],"cooked":["run","env"],"original":["run","env"]}
PATH=/Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-...
npm_config_allow_same_version=
npm_config__semantic_release_registry=http://registry.npmjs.org/
LC_MESSAGES=en_US.UTF-8
TTC_WEATHER=Nashville, TN
npm_config_https_proxy=
npm_config_engine_strict=
npm_config_description=true
_=/usr/bin/env
ACCESS_TOKEN_SECRET=ZjTNRJXmAEsuD7oMGJizy4xbXGXSDOrdFTkBTDAOgh5Xv
CONSUMER_SECRET=niJr041DPL90OXltlvfZXIfx6Aa0zbkrR1q70HJW44pwa70TYQ
npm_config_userconfig=/Users/elijahm/.npmrc
npm_config_init_module=/Users/elijahm/.npm-init.js
NVM_NODEJS_ORG_MIRROR=https://nodejs.org/dist
LC_COLLATE=en_US.UTF-8
npm_package_dependencies_normalize_scss=^0.1.0
PWD=/Users/elijahm/egghead/react-file-size
npm_config_user=502
npm_config_node_version=6.3.1
TTC_CELSIUS=false
npm_lifecycle_event=env
npm_package_devDependencies_jscs=^2.11.0
npm_package_devDependencies_chai=^3.5.0
npm_package_dependencies_gzip_size=^3.0.0
DEFAULT_USER=elijahm
EDITOR=vim
npm_config_save=true
npm_config_ignore_prepublish=
npm_config_editor=vim
npm_config_auth_type=legacy
npm_package_name=react-file-size
ACCESS_TOKEN=9453872-XCFDcuW302Hb6DTYj6gZ8bvLTuOALy8nP9bnzNSS7F
LANG=en_US.UTF-8
npm_config_tag=latest
npm_config_progress=true
npm_config_global=
npm_package_scripts_start=node index.js
npm_config_searchstaleness=900
npm_config_optional=true
npm_config_ham_it_up=
TTC_UPDATE_INTERVAL=10
XPC_FLAGS=0x0
npm_config_save_prod=
npm_config_force=
npm_config_bin_links=true
npm_config_searchopts=
npm_package_dependencies_commander=^2.9.0
npm_config_depth=Infinity
npm_package_main=index.js
npm_config_sso_poll_frequency=500
npm_config_rebuild_bundle=true
npm_package_dependencies_log_update=^1.0.2
npm_package_version=0.1.0
XPC_SERVICE_NAME=0
npm_config_unicode=true
SHLVL=2
HOME=/Users/elijahm
npm_config_fetch_retry_maxtimeout=60000
npm_package_devDependencies_nyc=^8.3.2
npm_package_dependencies_request_promise=^4.1.1
npm_package_scripts_test=mocha spec/ --require babel-register
npm_config_tag_version_prefix=v
npm_config_strict_ssl=true
npm_config_sso_type=oauth
npm_config_scripts_prepend_node_path=warn-only
npm_config_save_prefix=^
npm_config_loglevel=notice
npm_config_ca=
npm_config_save_exact=
npm_config_group=20
npm_config_fetch_retry_factor=10
npm_config_dev=
npm_package_devDependencies_babel_eslint=^5.0.0-beta6
npm_config_version=
npm_config_prefer_offline=
npm_config_cache_lock_stale=60000
npm_config__lk_registry=https://puppet.leankit.com:4873/
npm_config_cache_min=10
npm_config_searchexclude=
npm_config_cache=/Users/elijahm/.npm
npm_package_devDependencies_gzipped=0.0.5
LESS=-R
LOGNAME=elijahm
npm_lifecycle_script=env
npm_config_color=true
npm_config_proxy=
npm_config_package_lock=true
npm_package_dependencies_pretty_bytes=^3.0.1
LC_CTYPE=en_US.UTF-8
npm_config_save_optional=
NVM_BIN=/Users/elijahm/.nvm/versions/node/v6.3.1/bin
npm_config_ignore_scripts=
npm_config_user_agent=npm/5.0.3 node/v6.3.1 darwin x64
npm_package_devDependencies_dirty_chai=^1.2.2
NVM_IOJS_ORG_MIRROR=https://iojs.org/dist
npm_config_cache_lock_wait=10000
npm_package_dependencies_babel_preset_stage_0=^6.3.13
npm_config_production=
npm_config_send_metrics=
npm_config_save_bundle=
npm_package_dependencies_babel_preset_stage_2=^6.3.13
npm_config_umask=0022
npm_config_init_version=1.0.0
npm_package_devDependencies_push_dir=^0.2.2
npm_config_init_author_name=
npm_config_git=git
npm_config_scope=
npm_package_devDependencies_node_sass=^3.6.0
npm_package_dependencies_colors=^1.1.2
LC_TIME=en_US.UTF-8
TTC_REPOS=~/github/web-lightning-ui,~/github/web-board-slice,~/github/web-co...
npm_config_unsafe_perm=true
npm_config_tmp=/var/folders/8h/r6hz2cx13j9bw_cbs42w8w940000gp/T
npm_config_onload_script=
npm_node_execpath=/Users/elijahm/.nvm/versions/node/v6.3.1/bin/node
npm_config_prefix=/Users/elijahm/.nvm/versions/node/v6.3.1
npm_config_link=
npm_package_devDependencies_onchange=^2.0.0
npm_package_scripts_env=env`}</div>,
        <div>
          <Prompt path="react-file-size" /><span>npm run env | grep "^PATH"</span>
        </div>,
        <div style={{ whiteSpace: "pre-wrap" }}>
          <span style={{ whiteSpace: "pre-wrap" }}>
            {"PATH=/Users/elijahm/.nvm/versions/node/v6.3.1/lib/node_modules/npm/bin/node-gyp-bin:"}
          </span>
          <Highlight>{"/Users/elijahm/egghead/react-file-size/node_modules/.bin"}</Highlight>
          <span style={{ whiteSpace: "pre-wrap" }}>
            {
              ":/Users/elijahm/.nvm/versions/node/v6.3.1/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
            }
          </span>
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
    "start": "node index.js",
`}</span>
              <span>{"    \"eslint\": "}</span>
              <Changed>"eslint --cache --fix ./"</Changed>
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
        [
          <div className={uniqueId("cls")}>
            <Prompt path="react-file-size" />
            <Typist cursor={cursor}><Success>npm</Success> run-script eslint</Typist>
          </div>,
          <div className={uniqueId("cls")}>
            <Prompt path="react-file-size" />
            <span><Success>npm</Success> run eslint</span>
          </div>
        ],
        <div>{`> react-file-size@0.1.0 eslint /Users/elijahm/egghead/react-file-size
> eslint --cache --fix ./
`}</div>,
        <div>
          <Prompt path="react-file-size" /><span>exit</span>
        </div>
      ]}
    />
  </Slide>
];
