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

export default (theme, images, agenda) => (<SlideSet>
  <Slide id="introduction" bgColor="primary" bgImage={images.react} bgDarken={0.8}>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
    An Intro to
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="primary" margin="0 0 20px 0">
    React
    </Heading>
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
          <Link href="http://bit.ly/intro-to-react" margin="0 0 0 10px" textColor="quartenary">
            bit.ly/intro-to-react
          </Link>
        </Heading>
      </Fill>
    </Layout>
    <Heading size={5} textColor="tertiary" margin="20px 0 0 0">
      <LocalStorage id="contenteditable.introduction" />
    </Heading>
  </Slide>
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
      ⬇️ goto next code prompt
    </Heading>
    <Heading textAlign="left" size={6} caps textColor="tertiary" width="50%">
      ⬆️ goto prev code prompt
    </Heading>
  </Slide>
  <Slide
    id="agenda"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
    onActive={() => {
      const content = document.querySelector(".spectacle-content");
      content.classList.toggle("spectacle-content--full");
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
      } }
    >
      { agenda.reduce((memo, group, index) => {
        if (!groupsToSkip.includes(group.id)) {
          memo.push(<GoToAction style={ {
            textAlign: "left",
            fontFamily: "monospace"
          } } slide={ group.id }
          >
            { `${index.toString().padStart(2, "0")}: ${group.name}` }
          </GoToAction>);
        }
        return memo;
      }, []) }
    </div>
  </Slide>
  <Slide
    id="manorisms"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading textColor="quartenary" caps fit>
      <Link
        href="https://youtube.com/manorisms"
        textColor="quartenary"
      >
        Manorisms YouTube Channel
      </Link>
    </Heading>
    <Layout>
      <Fill style={{ flexGrow: "0", flexBasis: "25%" }}>
        <Link href="https://youtube.com/manorisms">
          <Image src={images.manorismsLogo} style={{ marginTop: "1rem" }} />
        </Link>
      </Fill>
      <Fill style={{ flexGrow: "0", flexBasis: "75%" }}>
        <Link href="https://youtube.com/manorisms">
          <Image src={images.manorisms} style={{ marginTop: "1rem" }} />
        </Link>
      </Fill>
    </Layout>
  </Slide>
</SlideSet>);
