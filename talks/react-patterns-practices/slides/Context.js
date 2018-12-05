import React from "react";
import {
  BlockQuote,
  Cite,
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
  Appear
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
// import slidesMarkdown from "raw-loader!../assets/markdown.md";

export default (theme, images) => [
  <Slide transition={["fade"]} bgColor="black">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      Context API
    </Heading>
  </Slide>,
  <Slide
    bgColor="secondary"
    className="spectacle-content--full"
  >
    <Heading
      size={4}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Props Drilling
    </Heading>
    <CodePane
      lang="jsx"
      theme="dark"
      className="CodePane CodePane--large CodePane--scroll"
      source={`App
├── Navigation
│   ├── Logo
│   ├── Menu
│   │   ├── MenuItems
│   │   └── Logout (needs user)
│   └── CurrentUser (needs user)
├── Sidebar
│   ├── Categories
│   └── Specials (needs user)
├── ShoppingCart
│   └── ShoppingList (needs user)
└── Footer
`}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>,

  <Slide
    bgColor="secondary"
    className="spectacle-content--full"
  >
    <Heading
      size={4}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      createContext
    </Heading>
    <CodePane
      lang="jsx"
      theme="dark"
      className="CodePane CodePane--large CodePane--scrollx"
      source={`const MyContext = React.createContext("Hi");

/* {
  Consumer: Object,
  Provider: Object,
  currentValue: "Hi"
  defaultValue: "Hi"
} */`}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>,
  <Slide
    bgColor="secondary"
    className="spectacle-content--full"
  >
    <Heading
      size={4}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Provider
    </Heading>
    <CodePane
      lang="jsx"
      theme="dark"
      className="CodePane CodePane--large CodePane--scrollx"
      source={`const MyContext = React.createContext("Hi");

const MyProvider = ({ children }) =>
  <MyContext.Provider value="world">
    {children}
  </MyContext.Provider>;`}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>,
  <Slide
    bgColor="secondary"
    className="spectacle-content--full"
  >
    <Heading
      size={4}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Consumer
    </Heading>
    <CodePane
      lang="jsx"
      theme="dark"
      className="CodePane CodePane--large CodePane--scrollx"
      source={`const App = () => (
  <MyProvider>
    <MyContext.Consumer>
      {value => <h1>Hello, {value}!</h1>}
    </MyContext.Consumer>
  </MyProvider>
);`}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>,
  <Slide transition={["fade"]} bgColor="black">
    <Heading size={4} lineHeight={1} textColor="white">
      Localization Example
    </Heading>
    <iframe
      src="https://codesandbox.io/embed/6lxxo1x5vn?view=preview"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        bordeRadius: "4px",
        overflow: "hidden"
      }}
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  </Slide>,
  <Slide
    bgColor="secondary"
    className="spectacle-content--full"
  >
    <Heading
      size={4}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Localization Example
    </Heading>
    <CodePane
      lang="jsx"
      theme="dark"
      className="CodePane CodePane--large CodePane--scroll"
      source={`import React, { Component } from "react";
import { render } from "react-dom";
import { CDNFlagIcon } from "react-flag-kit";
import "./index.css";

const ThemeContext = React.createContext();

const localeMap = {
  "en-US": { locale: "en-US", flag: "US", content: "Hello, World!" },
  "fr-FR": { locale: "fr-FR", flag: "FR", content: "Bonjour le monde!" },
  "es-ES": { locale: "es-ES", flag: "ES", content: "¡Hola Mundo!" }
};

class LocaleFlag extends Component {
  static contextType = ThemeContext;
  render() {
    return <CDNFlagIcon code={this.context.flag} size={256} />;
  }
}
// LocaleFlag.contextType = ThemeContext;

const LocaleContent = () => (
  <ThemeContext.Consumer>
    {theme => <h1>{theme.content}</h1>}
  </ThemeContext.Consumer>
);

class App extends React.Component {
  state = { theme: localeMap["en-US"] };
  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={theme}>
        <select
          value={theme.locale}
          onChange={e => this.setState({ theme: localeMap[e.target.value] })}>
          <option value="en-US">English</option>
          <option value="fr-FR">French</option>
          <option value="es-ES">Spanish</option>
        </select>
        <LocaleFlag />
        <LocaleContent />
      </ThemeContext.Provider>
    );
  }
}

render(<App />, document.getElementById("⚛️"));
`}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>
  // <CodeSlide
  //   transition={[]}
  //   lang="js"
  //   code={require("raw-loader!../assets/jokes-13-recompose-jokesContainer.example")}
  //   ranges={[
  //     { loc: [0, 270], title: "Context API" },
  //     {
  //       loc: [6, 8],
  //       note:
  //         "Import compose, lifecycle, and withHandlers from `recompose`"
  //     },
  //     {
  //       loc: [18, 33],
  //       note:
  //         "compose takes a list of HOCs that all work together"
  //     },
  //     { loc: [19, 20], note: "Add `react-router` support" },
  //     { loc: [20, 21], note: "Connect to `react-redux`" },
  //     {
  //       loc: [18, 33],
  //       note:
  //         "Most of the code we had before moves into the withHandlers or lifecycle HOCs"
  //     },
  //     {
  //       loc: [21, 33],
  //       note:
  //         "Add handleKeyDown handler in the `withHandlers` HOC"
  //     },
  //     {
  //       loc: [33, 48],
  //       note:
  //         "Add some lifecycle hooks with the `likecycle` HOC"
  //     },
  //     {
  //       loc: [34, 37],
  //       note: "Fetch jokes in componentWillMount"
  //     },
  //     {
  //       loc: [37, 42],
  //       note:
  //         "Add keydown event listener in componentDidMount"
  //     },
  //     {
  //       loc: [42, 47],
  //       note:
  //         "Remove keydown event listener in componentWillUnmount"
  //     },
  //     {
  //       loc: [42, 47],
  //       note:
  //         "There are a lot of other HOCs you can use. This was just a sample."
  //     }
  //   ]}
  // />,
];
