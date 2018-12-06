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
require("../assets/index.css");

import ReactModal from "react-modal";
import mousetrap from "mousetrap";
import Select from "react-select";
import "react-select/dist/react-select.css";
import _ from "lodash";
import Menu from "./Menu";

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
  course: require("../assets/egghead-course.png"),
  npxCourse: require("../assets/egghead-course-npx.png")
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

const groups = [
  {
    id: "introduction",
    name: "Introduction",
    slides: require("./00-introduction").default
  },
  {
    id: "create-package",
    name: "Create Package",
    slides: require("./01-create-package").default
  },
  {
    id: "run-basic-scripts",
    name: "Run Basic Scripts",
    slides: require("./02-run-basic-scripts").default
  },
  {
    id: "create-custom-script",
    name: "Create Custom Script",
    slides: require("./03-create-custom-script").default
  },
  {
    id: "run-scripts-in-series",
    name: "Run Scripts In Series",
    slides: require("./04-run-scripts-in-series").default
  },
  {
    id: "run-scripts-in-parallel",
    name: "Run Scripts In Parallel",
    slides: require("./05-run-scripts-in-parallel").default
  },
  {
    id: "npm-run-all",
    name: "npm-run-all",
    slides: require("./06-npm-run-all").default
  },
  {
    id: "npm-run-all-wildcard",
    name: "npm-run-all Wildcard",
    slides: require("./07-npm-run-all-wildcard").default
  },
  {
    id: "pre-post-hooks",
    name: "Pre & Post Hooks",
    slides: require("./08-pre-post-lifecycle-hooks").default
  },
  {
    id: "pass-args-to-scripts",
    name: "Pass Args to Scripts",
    slides: require("./09-pass-args-to-scripts").default
  },
  {
    id: "pipe-script-data",
    name: "Pipe Script Data",
    slides: require("./10-pipe-data-from-script-to-script").default
  },
  {
    id: "onchange",
    name: "onChange",
    slides: require("./11-onchange").default
  },
  {
    id: "use-package-vars",
    name: "Use Package Vars",
    slides: require("./12-use-package-vars").default
  },
  {
    id: "custom-config-settings",
    name: "Custom Config Settings",
    slides: require("./13-custom-config-settings").default
  },
  {
    id: "git-hooks",
    name: "git Hooks",
    slides: require("./14-git-hooks").default
  },
  {
    id: "lint-staged",
    name: "Lint Staged",
    slides: require("./14b-lint-staged").default
  },
  {
    id: "console-log-level",
    name: "Console Log Level",
    slides: require("./15-console-log-level").default
  },
  {
    id: "cross-environment",
    name: "Cross Environment",
    slides: require("./16-cross-environment").default
  },
  {
    id: "list-available-scripts",
    name: "List Available Scripts",
    slides: require("./17-list-available-scripts").default
  },
  {
    id: "bash-scripts",
    name: "Bash Scripts",
    slides: require("./20-bash-scripts").default
  },
  {
    id: "node-scripts",
    name: "Node Scripts",
    slides: require("./21-node-scripts").default
  },
  {
    id: "npm-check",
    name: "npm Check",
    slides: require("./22-npm-check").default
  },
  {
    id: "npx",
    name: "npx",
    slides: require("./23-npx").default
  },
  {
    id: "conclusion",
    name: "Conclusion",
    slides: require("./99-conclusion").default
  },
];

let selectedGroups = window.localStorage.getItem("selectedGroups");
if (selectedGroups) {
  selectedGroups = JSON.parse(selectedGroups);
} else {
  selectedGroups = groups.map( group => group.name );
}

export default class Presentation extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      selectedGroups
    };
  }
  componentWillMount() {
    const { context: { goToSlide } } = this;
    mousetrap.bind("a", () => goToSlide("agenda"));
    mousetrap.bind("m", () => this.setState({ isMenuOpen: true }));
    mousetrap.bind("esc", () => this.setState({ isMenuOpen: false }));
    mousetrap.bind("f", () => {
      const content = document.querySelector(".spectacle-content");
      content.classList.toggle( "spectacle-content--full" );
    });
  }
  componentWillUnmount() {
    mousetrap.unbind("a");
    mousetrap.unbind("m");
    mousetrap.unbind("esc");
    mousetrap.unbind("f");
  }
  handleOnClose = () => {
    this.setState({ isMenuOpen: false });
  };
  handleOnUpdate = selectedGroups => {
    window.localStorage.setItem("selectedGroups", JSON.stringify(selectedGroups));
    history.pushState("", document.title, window.location.pathname);
    window.location.reload();
  };
  render() {
    const { isMenuOpen, isHelpOpen, selectedGroups } = this.state;
    const agenda = groups.filter(g => selectedGroups.includes(g.name));
    
    return (
      <main>
        <Deck
          transition={["zoom", "slide"]}
          transitionDuration={500}
          theme={theme}
          progress={progress}
        >
          {groups.reduce((memo, group, index, groups) => {
            if (selectedGroups.includes(group.name)) {
              memo.push(group.slides(theme, images, agenda));
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
      </main>
    );
  }
}
