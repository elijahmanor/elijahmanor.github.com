import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  SlideSet,
  Appear,
  Link,
  Layout,
  Fill,
  Image
} from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  react: require("../assets/react.jpg"),
  theManorFamily: require("../assets/the-manor-family.jpg"),
  cross: require("../assets/logo-cross.png"),
  egghead: require("../assets/logo-egghead.png"),
  leankit: require("../assets/logo-leankit.png"),
  mvp: require("../assets/logo-mvp.png")
};
preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

/*
* Elijah Manor explains how to use npm scripts to handle your various build
* needs, covering running scripts in series or parallel, using lifecycle hooks,
* passing arguments, piping data, using environment variables, running scripts
* on file change or when Git hooks are triggered, and organizing our scripts in
* external files—as well as how to modify your scripts to run across Mac,
* Linux, and Windows.
*/

const progress = "bar"; // pacman, bar, number or none

import introduction from "./00-introduction";
import createPackage from "./01-create-package";
import runBasicScripts from "./02-run-basic-scripts";
import createCustomScript from "./03-create-custom-script";
import runScriptsInSeries from "./04-run-scripts-in-series";
import runScriptsInParallel from "./05-run-scripts-in-parallel";
import npmRunAll from "./06-npm-run-all";
import npmRunAllWildcard from "./07-npm-run-all-wildcard";
import prePostLifecycleHooks from "./08-pre-post-lifecycle-hooks";
import passArgsToScripts from "./09-pass-args-to-scripts";
import pipeDataFromScriptToScript from "./10-pipe-data-from-script-to-script";
import onChange from "./11-onchange";
import usePackageVars from "./12-use-package-vars";
import customConfigSettings from "./13-custom-config-settings";
import gitHooks from "./14-git-hooks";
import consoleLogLevel from "./15-console-log-level";
import crossEnvironment from "./16-cross-environment";
import listAvailableScripts from "./17-list-available-scripts";
import bashScripts from "./20-bash-scripts";
import nodeScripts from "./21-node-scripts";
import conclusion from "./99-conclusion";

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    localStorage.clear();
  }
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress={progress}
      >
        {introduction(theme, images)}
        {createPackage(theme, images)}
        {runBasicScripts(theme, images)}
        {createCustomScript(theme, images)}
        {runScriptsInSeries(theme, images)}
        {runScriptsInParallel(theme, images)}
        {npmRunAll(theme, images)}
        {npmRunAllWildcard(theme, images)}
        {prePostLifecycleHooks(theme, images)}
        {passArgsToScripts(theme, images)}
        {pipeDataFromScriptToScript(theme, images)}
        {onChange(theme, images)}
        {usePackageVars(theme, images)}
        {customConfigSettings(theme, images)}
        {gitHooks(theme, images)}
        {consoleLogLevel(theme, images)}
        {crossEnvironment(theme, images)}
        {listAvailableScripts(theme, images)}
        {bashScripts(theme, images)}
        {nodeScripts(theme, images)}
        {conclusion(theme, images)}
      </Deck>
    );
  }
}
