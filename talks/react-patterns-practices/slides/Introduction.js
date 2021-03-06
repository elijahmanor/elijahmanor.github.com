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
  Appear,
  Image
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
// import slidesMarkdown from "raw-loader!../assets/markdown.md";

class TitleSlide extends React.Component {
  constructor(...args) {
    super(...args);
    let showSlideUrl = window.localStorage.getItem(
      "showSlideUrl"
    );
    showSlideUrl =
      showSlideUrl === null || showSlideUrl === "true";
    this.state = { showSlideUrl };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKey);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey);
  }
  handleKey = e => {
    this.setState(prevState => {
      const showSlideUrl =
        e.key === "s"
          ? !prevState.showSlideUrl
          : prevState.showSlideUrl;
      window.localStorage.setItem(
        "showSlideUrl",
        showSlideUrl
      );
      return { showSlideUrl };
    });
  };
  render() {
    return (
      <Slide
        bgColor="primary"
        bgImage={this.props.images.react}
        bgDarken={0.8}
      >
        <Heading
          size={1}
          fit
          caps
          lineHeight={1}
          textColor="primary"
        >
          React
        </Heading>
        <Heading
          size={1}
          fit
          caps
          lineHeight={1}
          textColor="tertiary"
          margin="0 0 20px 0"
        >
          Patterns and Practices
        </Heading>
        <Layout>
          <Fill>
            <Heading size={1} fit lineHeight={1}>
              <Link
                href="http://twitter.com/elijahmanor"
                margin="0 10px 0 0"
                textColor="quartenary"
              >
                by @elijahmanor
              </Link>
            </Heading>
          </Fill>
          {this.state.showSlideUrl && (
            <Fill>
              <Heading size={1} fit lineHeight={1}>
                <Link
                  href="http://bit.ly/react-pnp"
                  margin="0 0 0 10px"
                  textColor="quartenary"
                >
                  bit.ly/react-pnp
                </Link>
              </Heading>
            </Fill>
          )}
        </Layout>
      </Slide>
    );
  }
}

export default (theme, images) => [
  <TitleSlide images={images} />,
  <Slide
    id="aboutme"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading caps fit>
      Elijah Manor
    </Heading>
    <Layout>
      <Fill>
        <Image src={images.cross} width="50%" margin="0" />
        <Image
          src={images.leankit}
          width="50%"
          margin="0"
        />
        <Image
          src={images.mvp}
          width="50%"
          margin="-8px 0 0 0"
        />
        <Image
          src={images.egghead}
          width="50%"
          margin="-8px 0 0 0"
        />
      </Fill>
      <Fill>
        <Image
          src={images.theManorFamily}
          width="100%"
          margin="0"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide
    id="navigation"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading textColor="quartenary" caps fit>
      Navigation
    </Heading>
    <Heading
      textAlign="left"
      size={6}
      caps
      textColor="tertiary"
      width="50%"
    >
      ➡️ to go to the next slide
    </Heading>
    <Heading
      textAlign="left"
      size={6}
      caps
      textColor="tertiary"
      width="50%"
    >
      ⬅️ to go to the previous slide
    </Heading>
    <Heading
      textAlign="left"
      size={6}
      caps
      textColor="tertiary"
      width="50%"
    >
      ⬇️ to go down in a code slide
    </Heading>
    <Heading
      textAlign="left"
      size={6}
      caps
      textColor="tertiary"
      width="50%"
    >
      ⬆️ to go up in a code slide
    </Heading>
  </Slide>,
  <Slide
    transition={["fade"]}
    bgColor="secondary"
    textColor="quartenary"
  >
    <Heading size={2} caps textColor="primary">
      Agenda
    </Heading>
    <List>
      <Appear>
        <ListItem>
          Container & Presentational Components
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>Stateless Functional Components</ListItem>
      </Appear>
      <Appear>
        <ListItem>HOCs & Render Props</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Assessing Performance Bottlenecks
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>Introducing Immutability</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Adding <code>redux</code> &{" "}
          <code>redux-devtools</code>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Adding <code>react-router</code>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Adding <code>recompose</code>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Introducing <code>Context API</code>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Introducing <code>Hooks</code>
        </ListItem>
      </Appear>
    </List>
  </Slide>
];
