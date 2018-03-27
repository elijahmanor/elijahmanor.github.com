import React, { Component } from "react";
import {
  SlideSet,
  BlockQuote,
  Cite,
  Heading,
  Quote,
  Slide,
  Link,
  Image,
  Layout,
  Fill,
  Text,
  Appear,
  List,
  ListItem,
  ComponentPlayground,
  MarkdownSlides
} from "spectacle";

export default (theme, images) => ([
  <Slide id="node-modules" bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      node modules
    </Heading>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={4} caps lineHeight={1} textColor="tertiary">
    node modules
    </Heading>
    <Layout>
      <Fill style={{ marginRight: "0.5rem" }}>
        <List>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">autoprefixer-loader</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">babel</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">chance</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">classnames</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">eslint-plugin-react</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">eslint</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">immutable</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">joi</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">karma</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">lodash-node</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">machina</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">mailcheck</Link></ListItem>
        </List>
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <List>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">lux.js</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">normalize.scss</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">pre-commit</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://formatjs.io/react/">react-intl</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">react-modal</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">react-onclickoutside</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="https://github.com/rackt/react-router">react-router</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">redux</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="https://github.com/ded/reqwest">reqwest</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">webpack</Link></ListItem>
          <ListItem textSize={25}><Link textColor="primary" href="http://elijahmanor.com/talks/react-to-the-future/dist/">react-helmet</Link></ListItem>
        </List>
      </Fill>
    </Layout>
    <Link textColor="tertiary" href="https://github.com/voronianski/flux-comparison">Flux Comparison</Link>
  </Slide>
]);
