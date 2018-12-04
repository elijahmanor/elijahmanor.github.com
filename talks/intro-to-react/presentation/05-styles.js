import React, { Component } from "react";
import ReactDOM from "react-dom";
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
  MarkdownSlides,
  CodePane,
  Code,
  S
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import Terminal from "spectacle-terminal";
import PropTypes from "prop-types";
import Color from "color";
import styled from "styled-components";
import { darken } from "polished";

const snippets = {
  requireAndExtract: {
    code: require("raw-loader!../snippets/require-extract.code")
  },
  styledComponents: {
    code: require("raw-loader!../snippets/styled-components.code"),
    play: require("raw-loader!../snippets/styled-components.play")
  }
};

export default (theme, images) => [
  <Slide id="styles" bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      Styles
    </Heading>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Huge Controversy
    </Heading>
    <svg
      viewBox="-100 0 200 260"
      style={{ height: "75vh" }}
    >
      <title>Pendulum</title>
      <defs>
        <radialGradient id="a" fx="40%" fy="35%" r="65%">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#BEBEBE" offset="40%" />
          <stop stopColor="#505050" offset="100%" />
        </radialGradient>
      </defs>
      <g transform="rotate(21 0 10)">
        <path stroke="#fff" fill="none" d="M0 10v200" />
        <circle cy={230} r={20} fill="url(#a)" />
        <rect
          x={-95}
          y={40}
          width={85}
          height={40}
          rx={15}
          ry={15}
          transform="rotate(-21 0 10)"
          fill="#fff"
          stroke="#ccc"
        />
        <text
          x={-80}
          y={55}
          transform="rotate(-21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Require Styles
        </text>
        <text
          x={-75}
          y={70}
          transform="rotate(-21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Extract CSS
        </text>
      </g>
      <g transform="rotate(-21 0 10)">
        <path stroke="#fff" fill="none" d="M0 10v200" />
        <circle cy={230} r={20} fill="url(#a)" />
        <rect
          x={10}
          y={40}
          width={85}
          height={40}
          rx={15}
          ry={15}
          transform="rotate(21 0 10)"
          fill="#f9f9f9"
          stroke="#ccc"
        />
        <text
          x={16}
          y={55}
          transform="rotate(21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Define in JavaScript
        </text>
        <text
          x={22}
          y={70}
          transform="rotate(21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Pure Inline Styles
        </text>
      </g>
      <path stroke="#fff" fill="none" d="M0 10v200" />
      <circle cy={230} r={20} fill="url(#a)" />
      <rect
        x={-50}
        y={145}
        width={100}
        height={55}
        rx={15}
        ry={15}
        fill="#f9f9f9"
        stroke="#ccc"
      />
      <text x={-25} y={160} fontFamily="Arial" fontSize={8}>
        Require Styles
      </text>
      <text x={-41} y={175} fontFamily="Arial" fontSize={8}>
        Generate Class Names
      </text>
      <text x={-24} y={190} fontFamily="Arial" fontSize={8}>
        Extract CSS
      </text>
    </svg>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Require and Extract
    </Heading>
    <svg
      viewBox="-100 0 200 260"
      style={{ height: "75vh" }}
    >
      <title>Pendulum</title>
      <defs>
        <radialGradient id="a" fx="40%" fy="35%" r="65%">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#BEBEBE" offset="40%" />
          <stop stopColor="#505050" offset="100%" />
        </radialGradient>
      </defs>
      <g transform="rotate(21 0 10)">
        <path stroke="#fff" fill="none" d="M0 10v200" />
        <circle cy={230} r={20} fill="url(#a)" />
        <rect
          x={-95}
          y={40}
          width={85}
          height={40}
          rx={15}
          ry={15}
          transform="rotate(-21 0 10)"
          fill="#49afcd"
          stroke="#ccc"
        />
        <text
          x={-80}
          y={55}
          transform="rotate(-21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Require Styles
        </text>
        <text
          x={-75}
          y={70}
          transform="rotate(-21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Extract CSS
        </text>
      </g>
      <g transform="rotate(-21 0 10)">
        <path stroke="#fff" fill="none" d="M0 10v200" />
        <circle cy={230} r={20} fill="url(#a)" />
        <rect
          x={10}
          y={40}
          width={85}
          height={40}
          rx={15}
          ry={15}
          transform="rotate(21 0 10)"
          fill="#f9f9f9"
          stroke="#ccc"
        />
        <text
          x={16}
          y={55}
          transform="rotate(21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Define in JavaScript
        </text>
        <text
          x={22}
          y={70}
          transform="rotate(21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Pure Inline Styles
        </text>
      </g>
      <path stroke="#fff" fill="none" d="M0 10v200" />
      <circle cy={230} r={20} fill="url(#a)" />
      <rect
        x={-50}
        y={145}
        width={100}
        height={55}
        rx={15}
        ry={15}
        fill="#f9f9f9"
        stroke="#ccc"
      />
      <text x={-25} y={160} fontFamily="Arial" fontSize={8}>
        Require Styles
      </text>
      <text x={-41} y={175} fontFamily="Arial" fontSize={8}>
        Generate Class Names
      </text>
      <text x={-24} y={190} fontFamily="Arial" fontSize={8}>
        Extract CSS
      </text>
    </svg>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={3}
      caps
      lineHeight={1}
      textColor="primary"
    >
      Wait... what!?!
    </Heading>
    <Image
      src={images.babyScared.replace("/", "")}
      style={{ height: "500px" }}
    />
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      Organize Your Files Together
    </Heading>
    <Text textColor="primary">
      (Component, Styles, and Tests)
    </Text>
    <CodePane
      lang="jsx"
      theme="external"
      className="CodePane--large"
      source={`├── media
│   ├── index.jsx
│   ├── index.spec.js
│   └── styles.scss
└── webpack.config.js
`}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={1}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Your Styles
    </Heading>
    <Layout>
      <Fill style={{ marginRight: "0.5rem" }}>
        <CodePane
          lang="css"
          theme="external"
          className="CodePane"
          source={`.Media {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1em;
}

.Media--center { align-items: center; }

.Media-figure { margin-right: 1em; }

/ ... more ... /`}
          margin="20px auto"
          overflow="overflow"
        />
        <Heading size={5} textColor="primary" margin={10}>
          <Code bgColor="#ccc" textSize={30}>
            styles.scss
          </Code>
        </Heading>
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <Text
          textSize={42}
          textColor="primary"
          margin={10}
          style={{ marginBottom: "2rem" }}
        >
          Define the classes you need only for this
          component
        </Text>
        <Text textSize={42} textColor="primary" margin={10}>
          Helps you keep your styles focused and isolated
        </Text>
      </Fill>
    </Layout>
  </Slide>,
  <CodeSlide
    lang="jsx"
    code={snippets.requireAndExtract.code}
    ranges={[
      { loc: [0, 25], title: "Your Component" },
      {
        loc: [3, 4],
        note:
          "Require the Sass file that is needed for this component"
      }
    ]}
  />,
  <Slide bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Why Do This!?!
    </Heading>
    <List>
      <Appear>
        <ListItem textColor="primary">
          Component declares what styles it needs
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="primary">
          Styles are removed if Component isn't needed
        </ListItem>
      </Appear>
    </List>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={2}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      <Link
        textColor="tertiary"
        href="http://glenmaddern.com/articles/css-modules"
        style={{ display: "inline-block" }}
      >
        CSS Modules
      </Link>
    </Heading>
    <svg
      viewBox="-100 0 200 260"
      style={{ height: "75vh" }}
    >
      <title>Pendulum</title>
      <defs>
        <radialGradient id="a" fx="40%" fy="35%" r="65%">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#BEBEBE" offset="40%" />
          <stop stopColor="#505050" offset="100%" />
        </radialGradient>
      </defs>
      <g transform="rotate(21 0 10)">
        <path stroke="#fff" fill="none" d="M0 10v200" />
        <circle cy={230} r={20} fill="url(#a)" />
        <rect
          x={-95}
          y={40}
          width={85}
          height={40}
          rx={15}
          ry={15}
          transform="rotate(-21 0 10)"
          fill="#f9f9f9"
          stroke="#ccc"
        />
        <text
          x={-80}
          y={55}
          transform="rotate(-21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Require Styles
        </text>
        <text
          x={-75}
          y={70}
          transform="rotate(-21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Extract CSS
        </text>
      </g>
      <g transform="rotate(-21 0 10)">
        <path stroke="#fff" fill="none" d="M0 10v200" />
        <circle cy={230} r={20} fill="url(#a)" />
        <rect
          x={10}
          y={40}
          width={85}
          height={40}
          rx={15}
          ry={15}
          transform="rotate(21 0 10)"
          fill="#f9f9f9"
          stroke="#ccc"
        />
        <text
          x={16}
          y={55}
          transform="rotate(21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Define in JavaScript
        </text>
        <text
          x={22}
          y={70}
          transform="rotate(21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Pure Inline Styles
        </text>
      </g>
      <path stroke="#fff" fill="none" d="M0 10v200" />
      <circle cy={230} r={20} fill="url(#a)" />
      <rect
        x={-50}
        y={145}
        width={100}
        height={55}
        rx={15}
        ry={15}
        fill="#49afcd"
        stroke="#ccc"
      />
      <text x={-25} y={160} fontFamily="Arial" fontSize={8}>
        Require Styles
      </text>
      <text x={-41} y={175} fontFamily="Arial" fontSize={8}>
        Generate Class Names
      </text>
      <text x={-24} y={190} fontFamily="Arial" fontSize={8}>
        Extract CSS
      </text>
    </svg>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={3}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Sass vs. CSS Modules
    </Heading>
    <Layout>
      <Fill style={{ marginRight: "0.5rem" }}>
        <Heading size={6} textColor="primary">
          BEM <br />
          (media.scss)
        </Heading>
        <CodePane
          lang="css"
          theme="external"
          className="CodePane"
          source={`.Media           { /*all styles*/ }
.Media--centered { /*some*/ }
.Media--reversed { /*some*/ }
`}
          margin="20px auto"
          overflow="overflow"
        />
        <CodePane
          lang="jsx"
          theme="external"
          className="CodePane"
          source={`require('media.scss');

<div class="Media Media--reversed">
  ...more...
</div>

`}
          margin="20px auto"
          overflow="overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <Heading size={6} textColor="primary">
          CSS Modules (media.css)
        </Heading>
        <CodePane
          lang="css"
          theme="external"
          className="CodePane"
          source={`.normal   { /*all styles*/ }
.centered { /*all styles*/ }
.reversed { /*all styles*/ }
`}
          margin="20px auto"
          overflow="overflow"
        />
        <CodePane
          lang="jsx"
          theme="external"
          className="CodePane"
          source={`/* media.js */
import styles from 'media.css';

<div class={styles.reversed}>
  ...more...
</div>
`}
          margin="20px auto"
          overflow="overflow"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={3}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Composing and Sharing Across Files
    </Heading>
    <Layout>
      <Fill
        style={{
          marginRight: "0.5rem",
          flexGrow: "0",
          flexBasis: "40%"
        }}
      >
        <Heading size={6} textColor="primary">
          colors.css
        </Heading>
        <CodePane
          lang="css"
          theme="external"
          className="CodePane"
          source={`.primary {
  color: #720;
}

.secondary {
  color: #777;
}
`}
          margin="20px auto"
          overflow="overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <Heading size={6} textColor="primary">
          main.css
        </Heading>
        <CodePane
          lang="css"
          theme="external"
          className="CodePane"
          source={`.common { /* font-sizes, border-radius */ }

.normal {
  composes: common;
  composes: primary from "../shared/colors.css";
}

`}
          margin="20px auto"
          overflow="overflow"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={3}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Self Describing
    </Heading>
    <CodePane
      lang="css"
      theme="external"
      className="CodePane--large"
      source={`.element {
  composes: large from "./typography.css";
  composes: dark-text from "./colors.css";
  composes: padding-all-medium from "./layout.css";
  composes: subtle-shadow from "./effect.css";
}
`}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={3}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      <Link
        textColor="tertiary"
        href="https://styled-components.com/"
        style={{ display: "inline-block" }}
      >
        Styled Components
      </Link>
    </Heading>
    <svg
      viewBox="-100 0 200 260"
      style={{ height: "75vh" }}
    >
      <title>Pendulum</title>
      <defs>
        <radialGradient id="a" fx="40%" fy="35%" r="65%">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#BEBEBE" offset="40%" />
          <stop stopColor="#505050" offset="100%" />
        </radialGradient>
      </defs>
      <g transform="rotate(21 0 10)">
        <path stroke="#fff" fill="none" d="M0 10v200" />
        <circle cy={230} r={20} fill="url(#a)" />
        <rect
          x={-95}
          y={40}
          width={85}
          height={40}
          rx={15}
          ry={15}
          transform="rotate(-21 0 10)"
          fill="#f9f9f9"
          stroke="#ccc"
        />
        <text
          x={-80}
          y={55}
          transform="rotate(-21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Require Styles
        </text>
        <text
          x={-75}
          y={70}
          transform="rotate(-21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Extract CSS
        </text>
      </g>
      <g transform="rotate(-21 0 10)">
        <path stroke="#fff" fill="none" d="M0 10v200" />
        <circle cy={230} r={20} fill="url(#a)" />
        <rect
          x={10}
          y={40}
          width={85}
          height={40}
          rx={15}
          ry={15}
          transform="rotate(21 0 10)"
          fill="#f9f9f9"
          stroke="#ccc"
        />
        <text
          x={16}
          y={55}
          transform="rotate(21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Define in JavaScript
        </text>
        <text
          x={22}
          y={70}
          transform="rotate(21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Pure Inline Styles
        </text>
      </g>
      <path stroke="#fff" fill="none" d="M0 10v200" />
      <circle cy={230} r={20} fill="url(#a)" />
      <rect
        x={-50}
        y={145}
        width={100}
        height={55}
        rx={15}
        ry={15}
        fill="#49afcd"
        stroke="#ccc"
      />
      <text x={-25} y={160} fontFamily="Arial" fontSize={8}>
        Require Styles
      </text>
      <text x={-41} y={175} fontFamily="Arial" fontSize={8}>
        Generate Class Names
      </text>
      <text x={-24} y={190} fontFamily="Arial" fontSize={8}>
        Extract CSS
      </text>
    </svg>
  </Slide>,
  <CodeSlide
    lang="jsx"
    code={snippets.styledComponents.code}
    ranges={[
      { loc: [0, 43], title: "Styled Components" },
      {
        loc: [4, 16],
        note:
          "Uses ES6 tagged templates (back-tick) to return a react component"
      },
      {
        loc: [5, 15],
        note: "Provide real CSS as argument..."
      },
      {
        loc: [6, 9],
        note:
          "It also supports interpolated functions for dynamic content"
      },
      {
        loc: [20, 21],
        note:
          "You can base a new component based on another one and override CSS declarations"
      },
      {
        loc: [27, 39],
        note:
          "Leverage new Components as you would normally"
      },
      {
        loc: [31, 34],
        note:
          "The props determine styles based on our interpolated functions "
      }
    ]}
  />,
  <Slide
    maxHeight="100vh"
    maxWidth="90vw"
    bgColor="secondary"
  >
    <Heading caps fit>
      Styled Components
    </Heading>
    <ComponentPlayground
      theme="external"
      scope={{ PropTypes, styled, Component, darken }}
      code={snippets.styledComponents.play}
    />
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={2}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      Pure Inline Styles
    </Heading>
    <svg
      viewBox="-100 0 200 260"
      style={{ height: "75vh" }}
    >
      <title>Pendulum</title>
      <defs>
        <radialGradient id="a" fx="40%" fy="35%" r="65%">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#BEBEBE" offset="40%" />
          <stop stopColor="#505050" offset="100%" />
        </radialGradient>
      </defs>
      <g transform="rotate(21 0 10)">
        <path stroke="#fff" fill="none" d="M0 10v200" />
        <circle cy={230} r={20} fill="url(#a)" />
        <rect
          x={-95}
          y={40}
          width={85}
          height={40}
          rx={15}
          ry={15}
          transform="rotate(-21 0 10)"
          fill="#f9f9f9"
          stroke="#ccc"
        />
        <text
          x={-80}
          y={55}
          transform="rotate(-21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Require Styles
        </text>
        <text
          x={-75}
          y={70}
          transform="rotate(-21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Extract CSS
        </text>
      </g>
      <g transform="rotate(-21 0 10)">
        <path stroke="#fff" fill="none" d="M0 10v200" />
        <circle cy={230} r={20} fill="url(#a)" />
        <rect
          x={10}
          y={40}
          width={85}
          height={40}
          rx={15}
          ry={15}
          transform="rotate(21 0 10)"
          fill="#49afcd"
          stroke="#ccc"
        />
        <text
          x={16}
          y={55}
          transform="rotate(21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Define in JavaScript
        </text>
        <text
          x={22}
          y={70}
          transform="rotate(21 0 10)"
          fontFamily="Arial"
          fontSize={8}
        >
          Pure Inline Styles
        </text>
      </g>
      <path stroke="#fff" fill="none" d="M0 10v200" />
      <circle cy={230} r={20} fill="url(#a)" />
      <rect
        x={-50}
        y={145}
        width={100}
        height={55}
        rx={15}
        ry={15}
        fill="#f9f9f9"
        stroke="#ccc"
      />
      <text x={-25} y={160} fontFamily="Arial" fontSize={8}>
        Require Styles
      </text>
      <text x={-41} y={175} fontFamily="Arial" fontSize={8}>
        Generate Class Names
      </text>
      <text x={-24} y={190} fontFamily="Arial" fontSize={8}>
        Extract CSS
      </text>
    </svg>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={3}
      caps
      lineHeight={1}
      textColor="tertiary"
    >
      <Link
        textColor="tertiary"
        href="http://projects.formidablelabs.com/radium/"
        style={{ display: "inline-block" }}
      >
        Radium
      </Link>
    </Heading>
    <Layout>
      <Fill
        style={{
          marginRight: "0.5rem",
          flexGrow: "0",
          flexBasis: "40%"
        }}
      >
        <CodePane
          lang="js"
          theme="external"
          className="CodePane--scroll"
          source={`const styles = {
  base: {
    color: '#fff',
    ':hover': {
      background:
        color('#0074d9')
          .lighten(0.2)
          .hexString()
    }
  },
  primary: {
    background: '#0074D9'
  },
  warning: {
    background: '#FF4136'
  }
};
`}
          margin="20px auto"
          overflow="overflow"
        />
      </Fill>
      <Fill style={{ leftRight: "0.5rem" }}>
        <CodePane
          lang="jsx"
          theme="external"
          className="CodePane--scroll"
          source={`import Radium from 'radium';
import React, {Component} from 'react';
import color from 'color';

@Radium
class Button extends Component {
  static propTypes = {
    kind: React.PropTypes
      .oneOf(['primary', 'warning']).isRequired
  };

  render() {
    return (
      <button
        style={[
          styles.base,
          styles[this.props.kind]
        ]}>
        {this.props.children}
      </button>
    );
  }
}
`}
          margin="20px auto"
          overflow="overflow"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="primary"
    >
      Resources
    </Heading>
    <List>
      <ListItem textColor="tertiary">
        <Link
          textColor="tertiary"
          href="https://webpack.github.io/"
        >
          Webpack
        </Link>
      </ListItem>
      <ListItem textColor="tertiary">
        <Link
          textColor="tertiary"
          href="https://github.com/FormidableLabs/radium/blob/master/docs/comparison/README.md"
        >
          Comparison of CSS in JS Libraries for React
        </Link>
      </ListItem>
      <ListItem textColor="tertiary">
        <Link
          textColor="tertiary"
          href="https://github.com/MicheleBertoli/css-in-js"
        >
          React: CSS in JS techniques comparison
        </Link>
      </ListItem>
      <ListItem textColor="tertiary">
        <Link
          textColor="tertiary"
          href="http://glenmaddern.com/articles/css-modules"
        >
          CSS Modules
        </Link>
      </ListItem>
      <ListItem textColor="tertiary">
        <Link
          textColor="tertiary"
          href="http://projects.formidablelabs.com/radium/"
        >
          Radium
        </Link>
      </ListItem>
      <ListItem textColor="tertiary">
        <Link
          textColor="tertiary"
          href="https://www.youtube.com/watch?v=ERB1TJBn32c"
        >
          Inline Styles Video
        </Link>
      </ListItem>
    </List>
  </Slide>
];
