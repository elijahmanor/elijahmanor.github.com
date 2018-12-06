import React from "react";
import {
  SlideSet,
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
  Image,
  GoToAction
} from "spectacle";
import styled from "styled-components";
import LocalStorage from "./LocalStorage";

const groupsToSkip = [ "introduction", "conclusion" ];

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
	  const { images } = this.props;
	  const { showSlideUrl } = this.state;
    return (
  <Slide id="introduction" bgColor="primary" bgImage={images.react} bgDarken={0.8}>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      npm scripts
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="primary" margin="0 0 20px 0">
      as your build tool
    </Heading>
	    { showSlideUrl ?
    <Layout>
      <Fill>
        <Heading size={1} fit lineHeight={1}>
          <Link href="http://twitter.com/elijahmanor" margin="0 10px 0 0" textColor="quartenary">
            by @elijahmanor
          </Link>
        </Heading>
      </Fill>
      <Fill>
        <Heading size={1} fit lineHeight={1}>
          <Link href="http://bit.ly/npm-scripts" margin="0 0 0 10px" textColor="quartenary">
            bit.ly/npm-scripts
          </Link>
        </Heading>
      </Fill>
    </Layout>
		    :
        <Heading size={1} fit lineHeight={1}>
          <Link href="http://twitter.com/elijahmanor" margin="0 10px 0 0" textColor="quartenary">
            by @elijahmanor
          </Link>
        </Heading>
	    }
    <Heading size={5} textColor="tertiary" margin="20px 0 0 0">
      <LocalStorage id="contenteditable.introduction" />
    </Heading>
  </Slide>
    );
  }
};

export default (theme, images, agenda) => <SlideSet>
  <TitleSlide images={images} />
  <Slide
    id="aboutme"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading caps fit>Elijah Manor</Heading>
    <Layout>
      <Fill>
        <Image src={images.cross} width="50%" margin="0" display="initial" />
        <Image src={images.leankit} width="50%" margin="0" display="initial" />
        <Image src={images.mvp} width="50%" margin="-8px 0 0 0" display="initial" />
        <Image src={images.egghead} width="50%" margin="-8px 0 0 0" display="initial" />
      </Fill>
      <Fill>
        <Image src={images.theManorFamily} width="100%" margin="0" />
      </Fill>
    </Layout>
  </Slide>
  <Slide
    id="navigation"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading textColor="quartenary" caps fit>Navigation</Heading>
    <Heading textAlign="left" size={6} caps textColor="tertiary" width="50%">
      ➡️ goto next slide
    </Heading>
    <Heading textAlign="left" size={6} caps textColor="tertiary" width="50%">
      ⬅️ goto prev slide
    </Heading>
    <Heading textAlign="left" size={6} caps textColor="tertiary" width="50%">
      ⬇️ goto next terminal command
    </Heading>
    <Heading textAlign="left" size={6} caps textColor="tertiary" width="50%">
      ⬆️ goto prev terminal command
    </Heading>
  </Slide>
  <Slide
    id="agenda"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
    onActive={() => {
      const content = document.querySelector(".spectacle-content");
      content.classList.toggle( "spectacle-content--full" );
    }}
  >
    <Heading size={3} textColor="quartenary" caps>Agenda</Heading>
    <div
      style={ {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridColumnGap: "0.5rem",
        // fontSize: "3.5vh",
        fontSize: "1.55rem",
        color: "black",
        margin: "0 0 1rem 0"
      } }>
      { agenda.reduce( ( memo, group, index ) => {
          if ( !groupsToSkip.includes( group.id ) ) {
            memo.push( <GoToAction style={ {
              textAlign: "left",
              fontFamily: "monospace",          
              } } slide={ group.id }>
              { `${index.toString().padStart(2, "0")}: ${group.name}` }
            </GoToAction> );    
          }
          return memo;
        }, [] ) }
    </div>
  </Slide>
  <Slide
    id="egghead"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading textColor="quartenary" caps fit>
      <Link
        href="https://egghead.io/courses/how-to-use-npm-scripts-as-your-build-tool"
        textColor="quartenary"
      >
        egghead.io Course
      </Link>
    </Heading>
    <Link href="https://egghead.io/courses/how-to-use-npm-scripts-as-your-build-tool">
      <Image src={images.course} width="50%" style={{ marginTop: "5rem" }} />
    </Link>
  </Slide>
  <Slide
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading caps fit>
      <Link href="https://elijahmanor.com/react-file-size/" textColor="quartenary">
        react-file-size
      </Link>
    </Heading>
    <iframe
      src="https://elijahmanor.com/react-file-size/"
      frameBorder="0"
      style={{ overflow: "hidden", height: "75vh", width: "100%" }}
      height="100%"
      width="100%"
    />
  </Slide>
</SlideSet>;
