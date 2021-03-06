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
  SlideSet
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
// import slidesMarkdown from "raw-loader!../assets/markdown.md";
import Tweet from "../assets/Tweet.js";
import Interactive from "../assets/interactive.js";
import FlipCard from "react-flipcard";
import { defaultCode } from "../assets/jokes-1.example.js";

export default (theme, images) => [
  <Slide>
    <Heading caps size={2} textColor="secondary" margin="0 0 1rem 0">
      Stateful Component
    </Heading>
    <Layout>
      <Fill>
        <svg width="50%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <rect height="296" width="296" y="2" x="2" strokeWidth="2" stroke="#000" fill="#fff" />
        </svg>
      </Fill>
    </Layout>
  </Slide>,
  <Slide>
    <Heading caps size={2} textColor="secondary" margin="0 0 1rem 0">
      Stateless Component
    </Heading>
    <Layout>
      <Fill>
        <svg width="50%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <ellipse stroke="#000" ry="149" rx="149" cy="150" cx="150" strokeWidth="2" fill="#fff" />
        </svg>
      </Fill>
    </Layout>
  </Slide>,
  <Slide>
    <Heading caps size={2} textColor="secondary" margin="0 0 1rem 0">
      Container Component
    </Heading>
    <Layout>
      <Fill>
        <svg width="50%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <rect height="296" width="296" y="2" x="2" strokeWidth="2" stroke="#000" fill="#fff" />
          <ellipse stroke="#000" ry="125" rx="125" cy="150" cx="150" strokeWidth="2" fill="#fff" />
        </svg>
      </Fill>
    </Layout>
  </Slide>,
  <Slide>
    <Heading caps size={2} textColor="secondary" margin="0 0 1rem 0">
      Function
    </Heading>
    <Layout>
      <Fill>
        <svg width="50%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <polygon
            strokeWidth="2"
            stroke="#000"
            fill="#FFF"
            points="2,2 2,298 298,150"
            class="triangle"
          />
        </svg>
      </Fill>
    </Layout>
  </Slide>,
  <Slide>
    <Heading caps size={2} textColor="secondary" margin="0 0 1rem 0">
      Render Props
    </Heading>
    <Layout>
      <Fill>
        <svg width="50%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <rect height="296" width="296" y="2" x="2" strokeWidth="2" stroke="#000" fill="#fff" />
          <polygon
            strokeWidth="2"
            stroke="#000"
            fill="transparent"
            points="25,25 25,275 275,150"
            class="triangle"
          />
          <ellipse stroke="#000" ry="50" rx="50" cy="150" cx="100" strokeWidth="2" fill="#fff" />
        </svg>
      </Fill>
    </Layout>
  </Slide>,
  <Slide>
    <Heading caps size={2} textColor="secondary" margin="0 0 1rem 0">
      HOC
    </Heading>
    <Layout>
      <Fill>
        <svg style={{ margin: "1rem" }} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <ellipse stroke="#000" ry="149" rx="149" cy="150" cx="150" strokeWidth="2" fill="#fff" />
        </svg>
      </Fill>
      <Fill>
        <svg style={{ margin: "1rem" }} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <polygon
            strokeWidth="2"
            stroke="#000"
            fill="#FFF"
            points="2,2 2,298 298,150"
            class="triangle"
          />
        </svg>
      </Fill>
      <Fill>
        <svg style={{ margin: "1rem" }} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <rect height="296" width="296" y="2" x="2" strokeWidth="2" stroke="#000" fill="#fff" />
          <ellipse stroke="#000" ry="125" rx="125" cy="150" cx="150" strokeWidth="2" fill="#fff" />
        </svg>
      </Fill>
    </Layout>
  </Slide>
  /*
  <Slide>
    <Tweet>
      <blockquote className="twitter-tweet" data-lang="en">
        <p lang="en" dir="ltr">
          q: Why did the child component have such great self-esteem?
          <br />
          a. Because its parent kept giving it `props`!
          <a href="https://twitter.com/hashtag/reactjs?src=hash">#reactjs</a>{" "}
          <a href="https://twitter.com/hashtag/devpun?src=hash">#devpun</a>
        </p>
        — npm i elijahmanor (@elijahmanor){" "}
        <a href="https://twitter.com/elijahmanor/status/866682359646748678">May 22, 2017</a>
      </blockquote>
    </Tweet>
  </Slide>,
  <Slide>
    <Markdown>
      {`
![Markdown Logo](${images.markdown.replace("/", "")})
You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And let's not forget **bold**
        `}
    </Markdown>
  </Slide>,
  MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
    `,
  <SlideSet>
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
      <List>
        <Appear>
          <ListItem>Inline style based theme system</ListItem>
        </Appear>
        <Appear>
          <ListItem>Autofit text</ListItem>
        </Appear>
        <Appear>
          <ListItem>Flexbox layout system</ListItem>
        </Appear>
        <Appear>
          <ListItem>PDF export</ListItem>
        </Appear>
        <Appear>
          <ListItem>And...</ListItem>
        </Appear>
      </List>
    </Slide>
    <Slide transition={["slide"]} bgColor="primary">
      <Heading size={1} caps fit textColor="tertiary">
        Your presentations are interactive
      </Heading>
      <Interactive />
    </Slide>
  </SlideSet>,
  <Slide maxHeight="100vh" maxWidth="90vw">
    <ComponentPlayground theme="dark" scope={{ FlipCard }} code={defaultCode} />
  </Slide>,
  <Slide transition={["fade"]} bgColor="secondary">
    <Heading size={6} textColor="primary" caps>
      Typography
    </Heading>
    <Heading size={1} textColor="secondary">
      Heading 1
    </Heading>
    <Heading size={2} textColor="secondary">
      Heading 2
    </Heading>
    <Heading size={3} textColor="secondary">
      Heading 3
    </Heading>
    <Heading size={4} textColor="secondary">
      Heading 4
    </Heading>
    <Heading size={5} textColor="secondary">
      Heading 5
    </Heading>
    <Text size={6} textColor="secondary">
      Standard text
    </Text>
  </Slide>,
  <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Standard List
    </Heading>
    <List>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
      <ListItem>Item 4</ListItem>
    </List>
  </Slide>,
  <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
    <BlockQuote>
      <Quote>Example Quote</Quote>
      <Cite>Author</Cite>
    </BlockQuote>
  </Slide>,
  MarkdownSlides`
#### Test
one two three
---
Another Test
1. a
2. b
3. c
    `
*/
];
