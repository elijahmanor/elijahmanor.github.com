// Import React
import React from "react";

// Import Spectacle Core tags
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
  CodePane,
  ComponentPlayground,
  Fill,
  Layout,
  MarkdownSlides,
  Link,
  Markdown,
  SlideSet,
  Appear,
  Interactive
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  react: require("../assets/react.jpg"),
  dealWithIt: require("../assets/deal-with-it.gif"),
  youveGotToBeKittenMe: require("../assets/youve-got-to-be-kitten-me.gif"),
  theManorFamily: require("../assets/the-manor-family.jpg"),
  cross: require("../assets/logo-cross.png"),
  egghead: require("../assets/logo-egghead.png"),
  leankit: require("../assets/logo-leankit.png"),
  mvp: require("../assets/logo-mvp.png"),
  butWillItBlend: require("../assets/but-will-it-blend.gif"),
  printWasted: require("../assets/print-wasted.png"),
  whyDidYouUpdate: require("../assets/why-did-you-update.gif"),
  reduxDevTools: require("../assets/redux-devtools.gif"),
  reduxFlow: require("../assets/ReduxFlow.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "#ff4081",
    secondary: "#1F2022",
    tertiary: "#AAAFBA",
    quartenary: "white",
    comic: "white"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica",
    comic: "Comic Sans MS"
  }
);

import CodeSlide from "spectacle-code-slide";
import FlipCard from "react-flipcard";
import Jokes from "../assets/Jokes.js";
import JokesKeyboard from "../assets/JokesKeyboard.js";
import JokesAddBroken from "../assets/JokesAddBroken.js";
// import slidesMarkdown from "raw-loader!../assets/markdown.md";
import introduction from "../slides/Introduction.js";
import experimental from "../slides/Experimental.js";
import refactoring from "../slides/Refactoring.js";
import unitTesting from "../slides/UnitTesting.js";
import patternLibrary from "../slides/PatternLibrary.js";
import conclusion from "../slides/Conclusion.js";

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    localStorage.clear();
  }
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        {introduction(theme, images)}
        {/*{experimental(theme, images)}*/}
        {refactoring(theme, images)}
        {unitTesting(theme, images)}
        {patternLibrary(theme, images)}
        {conclusion(theme, images)}
      </Deck>
    );
  }
}
