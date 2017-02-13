// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

import CodeSlide from "spectacle-code-slide";
import Terminal from "spectacle-terminal";
import Typist from "react-typist";
import Loading from "react-loading";
import Spinner from "react-spinkit";

const cursor = {
  show: false,
  blink: true,
  element: "|",
  hideWhenDone: false,
  hideWhenDoneDelay: 1000
};

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="pacman">
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle
            </Heading>
            <Heading size={1} fit caps>
              A ReactJS Presentation Library
            </Heading>
            <Heading size={1} fit caps textColor="black">
              Where You Can Write Your Decks In JSX
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
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
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
            <Text>http://aresluna.org/add-chrome/</Text>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={ require("raw!../assets/code.example") }
            ranges={[
              { loc: [0, 270], title: "Walking through some code" },
              { loc: [0, 1], title: "The Beginning" },
              { loc: [1, 2] },
              { loc: [1, 2], note: "Heres a note!" },
              { loc: [2, 3] },
              { loc: [8, 10] }
            ] }
          />
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={2} caps fit textColor="tertiary">Terminal 1</Heading>
            <Terminal showFirstEntry={ true } title="1. elijahm@elijahm: ~(zsh)" output={[
              "npm test",
              <div style={{ color: "#33B969"}}>TOTAL: 174 SUCCESS</div>,
              <div>
                <div>=============================== Coverage summary ===============================</div>
                <div style={{ color: "#DEC612"}}>Statements   : 51.29% ( 278/542 )</div>
                <div style={{ color: "#EE5057"}}>Branches     : 38.78% ( 95/245 )</div>
                <div style={{ color: "#EE5057"}}>Functions    : 46.21% ( 61/132 )</div>
                <div style={{ color: "#DEC612"}}>Lines        : 52.69% ( 274/520 )</div>
                <div>================================================================================</div>
              </div>]} { ...this.props } { ...this.context } testing="123"
            />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={2} caps fit textColor="tertiary"><code>spectacle-terminal</code></Heading>
            <Terminal title="1. elijahm@elijahm: ~(zsh)" output={ [
              <Typist cursor={ cursor }>npm test</Typist>,
              <div style={{ color: "#33B969"}}>TOTAL: 174 SUCCESS</div>,
              <div>
                <div>=============================== Coverage summary ===============================</div>
                <div style={{ color: "#DEC612"}}>Statements   : 51.29% ( 278/542 )</div>
                <div style={{ color: "#EE5057"}}>Branches     : 38.78% ( 95/245 )</div>
                <div style={{ color: "#EE5057"}}>Functions    : 46.21% ( 61/132 )</div>
                <div style={{ color: "#DEC612"}}>Lines        : 52.69% ( 274/520 )</div>
                <div>================================================================================</div>
              </div>,
              <Typist cursor={ cursor }>rm -rf node_modules && npm install && say "done"</Typist>,
              [
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Loading type="bars" color="#fff" height="30" width="30" />
                  <span style={{ marginLeft: "1rem" }}>Installing dependencies...</span>
                </div>,
                <div style={{ color: "#33B969"}}>⚡️ Dependencies installed!</div>
              ],
              <Typist cursor={ cursor }>npm i elijahmanor</Typist>,
              <div>
                <div>&gt; elijahmanor@1.1.0 postinstall /Users/elijahm/github/devtools-frontend/node_modules/elijahmanor</div>
                <div>&gt; cat me.json; say 'Elijah Manor says Hello'</div>
              </div>,
              <div> { `
{
  "name": "Elijah Manor",
  "priorities": [
    "Christian", "Family", "Work"
  ],
  "work": [
    "@leankit", "@eggheadio", "@pluralsight"
  ],
  "twitter": "@elijahmanor",
  "tech": [
    "HTML", "CSS", "JavaScript",
    "React", "jQuery"
  ],
  "titles": [
    "Microsoft MVP"
  ]
}`
              } </div>,
              <div> { `
myproject@ /Users/elijahm/github/react-slides
└── elijahmanor@1.1.0 
              ` } </div>
              ] }
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
