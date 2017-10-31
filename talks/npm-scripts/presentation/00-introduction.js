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
import styled from "styled-components";

export default (theme, images) => [
  <Slide bgColor="primary" bgImage={images.react} bgDarken={0.8}>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      npm scripts
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="primary" margin="0 0 20px 0">
      as your build tool
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
          <Link href="http://bit.ly/npm-scripts" margin="0 0 0 10px" textColor="quartenary">
            bit.ly/npm-scripts
          </Link>
        </Heading>
      </Fill>
    </Layout>
  </Slide>,
  // ⌥ Option + m || Alt + m (maximize / minimize terminal)
  <Slide
    id="aboutme"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading caps fit>Elijah Manor</Heading>
    <Layout>
      <Fill>
        <Image src={images.cross} width="50%" margin="0" />
        <Image src={images.leankit} width="50%" margin="0" />
        <Image src={images.mvp} width="50%" margin="-8px 0 0 0" />
        <Image src={images.egghead} width="50%" margin="-8px 0 0 0" />
      </Fill>
      <Fill>
        <Image src={images.theManorFamily} width="100%" margin="0" />
      </Fill>
    </Layout>
  </Slide>,
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
      ⬅️ goto previous slide
    </Heading>
    <Heading textAlign="left" size={6} caps textColor="tertiary" width="50%">
      ⬇️ goto next terminal command
    </Heading>
    <Heading textAlign="left" size={6} caps textColor="tertiary" width="50%">
      ⬆️ goto previous terminal command
    </Heading>
  </Slide>,
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
        Free egghead.io Course
      </Link>
    </Heading>
    <Link href="https://egghead.io/courses/how-to-use-npm-scripts-as-your-build-tool">
      <Image src={images.course} width="50%" margin="0" style={{ marginTop: "5rem" }} />
    </Link>
  </Slide>,
  <Slide
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading caps fit>
      <Link href="http://elijahmanor.com/react-file-size/" textColor="quartenary">
        react-file-size
      </Link>
    </Heading>
    <iframe
      src="http://elijahmanor.com/react-file-size/"
      frameBorder="0"
      style={{ overflow: "hidden", height: "75vh", width: "100%" }}
      height="100%"
      width="100%"
    />
  </Slide>
];