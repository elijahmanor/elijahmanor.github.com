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
// import "prismjs/themes/prism.css";
import "prismjs/themes/prism-okaidia.css";
require("normalize.css");
require("../assets/index.css");

import ReactModal from "react-modal";
import mousetrap from "mousetrap";
import Select from "react-select";
import "react-select/dist/react-select.css";
import _ from "lodash";
import Menu from "./Menu";
import Help from "./Help";

const requestFullscreen = element => {
  const request =
    element.requestFullscreen ||
    element.webkitRequestFullscreen ||
    element.mozRequestFullScreen ||
    element.mozRequestFullScreen;

  if (typeof request === "function") {
    request.call(element);
  }
};

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
  mvp: require("../assets/logo-mvp.png"),
  marioSprite: require("../assets/mario-sprite.png"),
  twoWayDataFlow: require("../assets/2-way-binding.png"),
  course: require("../assets/egghead-course.png"),
  rightNow: require("../assets/right-now.gif"),
  iAmDeveloperJsx: require("../assets/iamdeveloper-jsx.png"),
  ohNoYes: require("../assets/oh-no-yes.gif"),
  iAmDeveloperOnClick: require("../assets/iamdeveloper-onclick.png"),
  ryanFlorenceJavaScript: require("../assets/ryanflorence-javascript.png"),
  fastTyping: require("../assets/fast-typing.gif"),
  fiber: require("../assets/fiber-one-nutty.jpg"),
  reactStackReconciliation: require("../assets/react-stack-reconciliation.png"),
  reactFiberReconciliation: require("../assets/react-fiber-reconciliation.png"),
  reactFiberPriorities: require("../assets/react-fiber-priorities.png"),
  babyScared: require("../assets/baby-scared.gif"),
  flux1: require("../assets/flux-1.png"),
  flux2: require("../assets/flux-2.png"),
  flux3: require("../assets/flux-3.png"),
  flux4: require("../assets/flux-4.png"),
  flux5: require("../assets/flux-5.png"),
  flux6: require("../assets/flux-6.png"),
  reduxDevTools: require("../assets/redux-devtools.gif"),
  manorisms: require("../assets/manorisms-screenshot.png"),
  manorismsLogo: require("../assets/manorisms-logo.png")
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
theme.screen.components.codePane.fontSize = "1.25rem";

const groups = [
  {
    id: "introduction",
    name: "Introduction",
    slides: require("./00-introduction").default
  },
  {
    id: "what-is-react",
    name: "What is React",
    slides: require("./01-what-is-react").default
  },
  {
    id: "components",
    name: "Components",
    slides: require("./02-components").default
  },
  {
    id: "gotchas",
    name: "Gotchas",
    slides: require("./03-gotchas").default
  },
  {
    id: "what-is-new",
    name: "What's New",
    slides: require("./04-what-is-new").default
  },
  {
    id: "styles",
    name: "Styles",
    slides: require("./05-styles").default
  },
  {
    id: "flux",
    name: "Flux",
    slides: require("./06-flux").default
  },
  {
    id: "isomorphic",
    name: "Isomorphic",
    slides: require("./07-isomorphic").default
  },
  {
    id: "node-modules",
    name: "node modules",
    slides: require("./08-node-modules").default
  },
  // {
  //   id: "npm-scripts",
  //   name: "npm scripts",
  //   slides: require("./09-npm-scripts").default
  // },
  {
    id: "resources",
    name: "Resources",
    slides: require("./10-resources").default
  },
  {
    id: "conclusion",
    name: "Conclusion",
    slides: require("./99-conclusion").default
  }
];

let selectedGroups = window.localStorage.getItem(
  "selectedGroups"
);
if (selectedGroups) {
  selectedGroups = JSON.parse(selectedGroups);
} else {
  selectedGroups = groups.map(group => group.name);
}

export default class Presentation extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      isHelpOpen: false,
      selectedGroups
    };
    localStorage.clear();
  }
  componentWillMount() {
    const {
      context: { goToSlide }
    } = this;
    mousetrap.bind("a", () => goToSlide("agenda"));
    mousetrap.bind("m", () =>
      this.setState({ isMenuOpen: true })
    );
    mousetrap.bind("esc", () =>
      this.setState({
        isMenuOpen: false,
        isHelpOpen: false
      })
    );
    mousetrap.bind("f", () => {
      requestFullscreen(document.documentElement);
    });
    mousetrap.bind("?", () =>
      this.setState({ isHelpOpen: true })
    );
  }
  componentWillUnmount() {
    mousetrap.unbind("a");
    mousetrap.unbind("m");
    mousetrap.unbind("esc");
    mousetrap.unbind("f");
    mousetrap.unbind("?");
  }
  handleOnClose = () => {
    this.setState({ isMenuOpen: false });
  };
  handleOnUpdate = selectedGroups => {
    window.localStorage.setItem(
      "selectedGroups",
      JSON.stringify(selectedGroups)
    );
    history.pushState(
      "",
      document.title,
      window.location.pathname
    );
    window.location.reload();
  };
  render() {
    const {
      isMenuOpen,
      isHelpOpen,
      selectedGroups
    } = this.state;
    const agenda = groups.filter(g =>
      selectedGroups.includes(g.name)
    );
    const {
      clientHeight,
      clientWidth
    } = document.documentElement;
    const contentHeight = clientHeight * 0.9;
    const contentWidth = clientWidth * 0.9;
    const progress = "bar"; // pacman, bar, number or none

    return (
      <main>
        <Deck
          transition={["slide"]}
          transitionDuration={500}
          theme={theme}
          progress={progress}
          controls={false}
          contentHeight={contentHeight /*700*/}
          contentWidth={contentWidth /*1000*/}
        >
          {groups.reduce((memo, group, index, groups) => {
            if (selectedGroups.includes(group.name)) {
              memo.push(
                group.slides(theme, images, agenda)
              );
            }
            return memo;
          }, [])}
        </Deck>
        <Menu
          isOpen={isMenuOpen}
          groups={groups}
          selectedGroups={selectedGroups}
          onUpdate={this.handleOnUpdate}
          onClose={this.handleOnClose}
        />
        <Help
          isOpen={isHelpOpen}
          onClose={this.handleOnClose}
        />
      </main>
    );
  }
}
