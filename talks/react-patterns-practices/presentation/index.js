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
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081",
  secondary: "#1F2022",
  tertiary: "#AAAFBA",
  quartenary: "white"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

import CodeSlide from "spectacle-code-slide";
import FlipCard from "react-flipcard";
import Jokes from "../assets/Jokes.js";
import JokesKeyboard from "../assets/JokesKeyboard.js";
import JokesAddBroken from "../assets/JokesAddBroken.js";
import slidesMarkdown from "raw-loader!../assets/markdown.md";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary" bgImage={images.react} bgDarken={0.8}>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            React
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Patterns and Practices
          </Heading>
          <Text margin="10px 0 0" textColor="quartenary" bold>
            by @elijahmanor
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="quartenary">
          <Heading size={2} caps textColor="primary">
            Agenda
          </Heading>
          <List>
            <Appear><ListItem>Refactoring a Component</ListItem></Appear>
            <Appear><ListItem>Unit Testing Components</ListItem></Appear>
            <Appear><ListItem>Creating a Pattern Library</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="quartenary">
          <Heading size={2} caps fit textColor="primary">
            Refactoring a Component
          </Heading>
          <List>
            <Appear><ListItem>Container &amp; Presentational Components</ListItem></Appear>
            <Appear><ListItem>Stateless Functional Components</ListItem></Appear>
            <Appear><ListItem>Higher Order Components</ListItem></Appear>
            <Appear><ListItem>Assessing Performance Bottlenecks</ListItem></Appear>
            <Appear><ListItem>Introducting Immutability</ListItem></Appear>
            <Appear><ListItem>Adding `redux` &amp; `redux-devtools`</ListItem></Appear>
            <Appear><ListItem>Adding `react-router`</ListItem></Appear>
            <Appear><ListItem>Adding `recompose`</ListItem></Appear>
          </List>
        </Slide>
        { /*<Slide>
          <Markdown>
            {`
  ![Markdown Logo](${images.markdown.replace("/", "")})
  You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
  * Lists too!
  * With ~~strikethrough~~ and _italic_
  * And let's not forget **bold**
            `}
          </Markdown>
        </Slide> */ }
        { /*
          MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
          ` */
        }
        { /*<SlideSet>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
        </SlideSet> */ }
        <Slide bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Simple React
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Component
          </Heading>
        </Slide>
        <Slide maxHeight="100vh" maxWidth="90vw">
          <a href="https://codesandbox.io/s/nZz6p1WDl">
            <img alt="Edit Jokes 1" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
          </a>
          <Jokes />
        </Slide>
        <CodeSlide
          maxHeight="100vh" maxWidth="75vw"
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/jokes-1.example")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] },
            ]} />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/jokes-2.example")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] },
            ]} />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/jokes-3.example")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] },
            ]} />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/jokes-4.example")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] },
            ]} />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/jokes-5.example")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] },
            ]} />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/jokes-6.example")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] },
            ]} />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/jokes-7.example")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] },
            ]} />
        <Slide transition={["fade"]} bgColor="black">
          <BlockQuote>
            <Quote>My favorite part of React is what I loved about MooTools: to use it effectively you learn JavaScript, not a DSL: useful your whole career.</Quote>
            <Cite><Link href="https://twitter.com/ryanflorence/status/577685415919898625">Ryan Florence </Link></Cite>
          </BlockQuote>
        </Slide>
        <Slide maxHeight="100vh" maxWidth="90vw">
          <div>
            <a href="https://codesandbox.io/s/nZz6p1WDl">
              <img alt="Edit Jokes 1" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
            </a>
          </div>
          <JokesKeyboard />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/jokes-8.example")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] },
            ]} />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/jokes-9-a.example")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] },
            ]} />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/jokes-9-b.example")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] },
            ]} />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/jokes-9-c.example")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] },
            ]} />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/jokes-10-a.example")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] },
            ]} />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/jokes-10-b.example")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] },
            ]} />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/jokes-10-c.example")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] },
            ]} />
        <Slide maxHeight="100vh" maxWidth="90vw">
          <div>
            <a href="https://codesandbox.io/s/32853L56M">
              <img alt="Edit Jokes 9" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
            </a>
          </div>
          <JokesAddBroken />
        </Slide>
        <Slide transition={["fade"]} bgColor="black">
          <Headers></Headers>
        </Slide>
        <Slide transition={["fade"]} bgColor="black">
          <BlockQuote>
            <Quote>Immutable data cannot be changed once created, leading to much simpler application development.</Quote>
            <Cite><Link href="https://twitter.com/ryanflorence/status/577685415919898625">Immutable.js</Link></Cite>
          </BlockQuote>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/jokes-10-d.example")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] },
            ]} />
        { /*<Slide maxHeight="100vh" maxWidth="90vw">
          <ComponentPlayground
            theme="dark"
            scope={{ FlipCard }}
            code={require("raw-loader!../assets/jokes-1.example")}
          />
        </Slide> */ }
        { /*<Slide transition={["fade"]} bgColor="secondary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide> */ }
        { /*<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide> */ }
        { /*<Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide> */ }
        { /* MarkdownSlides`
#### Test
one two three
---
Another Test
1. a
2. b
3. c
        ` */ }
        <Slide bgColor="primary" bgImage={images.react} bgDarken={0.8}>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Thank You!
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Slides <a href="http://bit.ly/react-pnp">http://bit.ly/react-pnp</a>
          </Heading>
          <Text margin="10px 0 0" textColor="quartenary" bold>
            <a href="http://elijahmanor.com" style={{ display: "block" }}>http://elijahmanor.com</a>
            <a href="http://twitter.com/elijahmanor" style={{ display: "block" }}>@elijahmanor</a>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
