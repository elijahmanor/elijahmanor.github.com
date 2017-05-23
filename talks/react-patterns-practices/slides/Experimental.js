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
import slidesMarkdown from "raw-loader!../assets/markdown.md";

export default (theme, images) => ([
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
    </SlideSet>,
    <Slide maxHeight="100vh" maxWidth="90vw">
        <ComponentPlayground
        theme="dark"
        scope={{ FlipCard }}
        code={require("raw-loader!../assets/jokes-1.example")}
        />
    </Slide>,
    <Slide transition={["fade"]} bgColor="secondary">
        <Heading size={6} textColor="primary" caps>Typography</Heading>
        <Heading size={1} textColor="secondary">Heading 1</Heading>
        <Heading size={2} textColor="secondary">Heading 2</Heading>
        <Heading size={3} textColor="secondary">Heading 3</Heading>
        <Heading size={4} textColor="secondary">Heading 4</Heading>
        <Heading size={5} textColor="secondary">Heading 5</Heading>
        <Text size={6} textColor="secondary">Standard text</Text>
    </Slide>,
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
        <Heading size={6} textColor="secondary" caps>Standard List</Heading>
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
]);
