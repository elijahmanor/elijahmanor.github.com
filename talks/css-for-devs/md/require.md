# Require

> Use Webpack to require your CSS in your JavaScript!

------

## What... WHAT!?!
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<img src="./imgs/brain-explode.gif" style="height: 450px;" />

------

## Huge Controversy
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa extended" -->

<div style="width: 40%; margin: auto;">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 viewBox="-100 0 200 260">
<title>Pendulum</title>
<defs>
	  <radialGradient id = "light1" cx = "50%" cy = "50%" fx = "40%" fy = "35%" r = "65%">
	    	<stop stop-color = "rgb(255,255,255)" offset = "0%"/>
		    <stop stop-color = "rgb(190,190,190)" offset = "40%"/>
		    <stop stop-color = "rgb(80,80,80)" offset = "100%"/>
	  </radialGradient>
</defs>
  <g>
	    <g transform="rotate(21 0 10)">
		      <line x1="0" x2="0" y1="10" y2="210" style="stroke: white; stroke-width: 1; fill: none;" />
		      <circle cx="0" cy="230" r="20" fill="url(#light1)" stroke="none"/>
      <rect x="-95" y="40" width="85" height="40" rx="15" ry="15" transform="rotate(-21 0 10)" style="fill: #f9f9f9; stroke: #ccc;" />
      <text x="-80" y="55" style="font-family: Arial; font-size: 8px; fill: black;"
            transform="rotate(-21 0 10)">Require Styles</text>
      <text x="-75" y="70" style="font-family: Arial; font-size: 8px; fill: black;"
            transform="rotate(-21 0 10)">Extract CSS</text>
    </g>
	    <g transform="rotate(-21 0 10)">
		      <line x1="0" x2="0" y1="10" y2="210" style="stroke: white; stroke-width: 1; fill: none;" />
		      <circle cx="0" cy="230" r="20" fill="url(#light1)" stroke="none"/>
      <rect x="10" y="40" width="85" height="40" rx="15" ry="15" transform="rotate(21 0 10)" style="fill: #f9f9f9; stroke: #ccc;" />
      <text x="16" y="55" style="font-family: Arial; font-size: 8px; fill: black;"
        transform="rotate(21 0 10)">Define in JavaScript</text>
      <text x="22" y="70" style="font-family: Arial; font-size: 8px; fill: black;"
        transform="rotate(21 0 10)">Pure Inline Styles</text>
    </g>
    <g>
		      <line x1="0" x2="0" y1="10" y2="210" style="stroke: white; stroke-width: 1; fill: none;" />
		      <circle cx="0" cy="230" r="20" fill="url(#light1)" stroke="none"/>
      <rect x="-50" y="145" width="100" height="55" rx="15" ry="15" style="fill: #f9f9f9; stroke: #ccc;"/>
      <text x="-25" y="160" style="font-family: Arial; font-size: 8px; fill: black;">Require Styles</text>
      <text x="-41" y="175" style="font-family: Arial; font-size: 8px; fill: black;">Generate Class Names</text>
      <text x="-24" y="190" style="font-family: Arial; font-size: 8px; fill: black;">Extract CSS</text>
    </g>
  </g>
</svg>
</div>

------

## Require and Extract
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div style="width: 40%; margin: auto;">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 viewBox="-100 0 200 260">
<title>Pendulum</title>
<defs>
	  <radialGradient id = "light2" cx = "50%" cy = "50%" fx = "40%" fy = "35%" r = "65%">
	    	<stop stop-color = "rgb(255,255,255)" offset = "0%"/>
		    <stop stop-color = "rgb(190,190,190)" offset = "40%"/>
		    <stop stop-color = "rgb(80,80,80)" offset = "100%"/>
	  </radialGradient>
</defs>
  <g>
	    <g transform="rotate(21 0 10)">
		      <line x1="0" x2="0" y1="10" y2="210" style="stroke: white; stroke-width: 1; fill: none;" />
		      <circle cx="0" cy="230" r="20" fill="url(#light2)" stroke="none"/>
      <rect x="-95" y="40" width="85" height="40" rx="15" ry="15" transform="rotate(-21 0 10)" style="fill: #49afcd; stroke: #ccc;" />
      <text x="-80" y="55" style="font-family: Arial; font-size: 8px; fill: black;"
            transform="rotate(-21 0 10)">Require Styles</text>
      <text x="-75" y="70" style="font-family: Arial; font-size: 8px; fill: black;"
            transform="rotate(-21 0 10)">Extract CSS</text>
    </g>
	    <g transform="rotate(-21 0 10)">
		      <line x1="0" x2="0" y1="10" y2="210" style="stroke: white; stroke-width: 1; fill: none;" />
		      <circle cx="0" cy="230" r="20" fill="url(#light2)" stroke="none"/>
      <rect x="10" y="40" width="85" height="40" rx="15" ry="15" transform="rotate(21 0 10)" style="fill: #f9f9f9; stroke: #ccc;" />
      <text x="16" y="55" style="font-family: Arial; font-size: 8px; fill: black;"
        transform="rotate(21 0 10)">Define in JavaScript</text>
      <text x="22" y="70" style="font-family: Arial; font-size: 8px; fill: black;"
        transform="rotate(21 0 10)">Pure Inline Styles</text>
    </g>
    <g>
		      <line x1="0" x2="0" y1="10" y2="210" style="stroke: white; stroke-width: 1; fill: none;" />
		      <circle cx="0" cy="230" r="20" fill="url(#light2)" stroke="none"/>
      <rect x="-50" y="145" width="100" height="55" rx="15" ry="15" style="fill: #f9f9f9; stroke: #ccc;"/>
      <text x="-25" y="160" style="font-family: Arial; font-size: 8px; fill: black;">Require Styles</text>
      <text x="-41" y="175" style="font-family: Arial; font-size: 8px; fill: black;">Generate Class Names</text>
      <text x="-24" y="190" style="font-family: Arial; font-size: 8px; fill: black;">Extract CSS</text>
    </g>
  </g>
</svg>
</div>

------

## Organize Your Files Together
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

(Component, Styles, and Tests)

<pre data-codemirror data-mode="text/shell">.
├── media
│   ├── index.jsx
│   ├── index.spec.js
│   └── styles.scss
└── webpack.config.js</pre>

------

## Your Styles
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa extended" -->

### styes.scss

<div class="Split">
  <div class="Split-column Split-column--65">
<pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">.Media {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1em;
}

.Media--center { align-items: center; }

.Media-figure { margin-right: 1em; }

/\* ... more ... \*/</pre>
  </div>
  <div class="Split-column Split-column--25">
    <p>Only define the classes you need for this component</p>
  </div>
</div>

------

## Your Component: Require
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div style="width: 110%; left: 50%; transform: translateX(-50%); position: relative;">
  <textarea data-codemirror data-mode="text/javascript" data-lines="2">
let React = require("react");
let classNames = require("classnames");
require("./styles.scss");

let Media = React.createClass({
  render() {
    return <div className={classNames('Media', this.props.className)}>
      <img className="Media-figure" src={this.props.imageUrl}>
      <div className="Media-body">
        <h3 className="Media-title">{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    </div>;
  }
});

module.exports = Media;
</textarea>
</div>

------

## Your Component: Import
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa extended" -->

<div style="width: 110%; left: 50%; transform: translateX(-50%); position: relative;">
  <textarea data-codemirror data-mode="text/javascript" data-lines="2">
import React from "react";
import classNames = "classnames";
import "./styles.scss";

export class Media extends React.Component {
  render() {
    return <div className={classNames('Media', this.props.className)}>
      <img className="Media-figure" src={this.props.imageUrl} />
      <div className="Media-body">
        <h3 className="Media-title">{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    </div>;
  }
}
</textarea>
</div>

------

## Why Do This!?!
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* Component declares what styles it needs
* Styles are removed if Component isn't needed

------

## [CSS Modules](http://glenmaddern.com/articles/css-modules)
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div style="width: 40%; margin: auto;">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 viewBox="-100 0 200 260">
<title>Pendulum</title>
<defs>
	  <radialGradient id = "light3" cx = "50%" cy = "50%" fx = "40%" fy = "35%" r = "65%">
	    	<stop stop-color = "rgb(255,255,255)" offset = "0%"/>
		    <stop stop-color = "rgb(190,190,190)" offset = "40%"/>
		    <stop stop-color = "rgb(80,80,80)" offset = "100%"/>
	  </radialGradient>
</defs>
  <g>
	    <g transform="rotate(21 0 10)">
		      <line x1="0" x2="0" y1="10" y2="210" style="stroke: white; stroke-width: 1; fill: none;" />
		      <circle cx="0" cy="230" r="20" fill="url(#light3)" stroke="none"/>
      <rect x="-95" y="40" width="85" height="40" rx="15" ry="15" transform="rotate(-21 0 10)" style="fill: #f9f9f9; stroke: #ccc;" />
      <text x="-80" y="55" style="font-family: Arial; font-size: 8px; fill: black;"
            transform="rotate(-21 0 10)">Require Styles</text>
      <text x="-75" y="70" style="font-family: Arial; font-size: 8px; fill: black;"
            transform="rotate(-21 0 10)">Extract CSS</text>
    </g>
	    <g transform="rotate(-21 0 10)">
		      <line x1="0" x2="0" y1="10" y2="210" style="stroke: white; stroke-width: 1; fill: none;" />
		      <circle cx="0" cy="230" r="20" fill="url(#light3)" stroke="none"/>
      <rect x="10" y="40" width="85" height="40" rx="15" ry="15" transform="rotate(21 0 10)" style="fill: #f9f9f9; stroke: #ccc;" />
      <text x="16" y="55" style="font-family: Arial; font-size: 8px; fill: black;"
        transform="rotate(21 0 10)">Define in JavaScript</text>
      <text x="22" y="70" style="font-family: Arial; font-size: 8px; fill: black;"
        transform="rotate(21 0 10)">Pure Inline Styles</text>
    </g>
    <g>
		      <line x1="0" x2="0" y1="10" y2="210" style="stroke: white; stroke-width: 1; fill: none;" />
		      <circle cx="0" cy="230" r="20" fill="url(#light3)" stroke="none"/>
      <rect x="-50" y="145" width="100" height="55" rx="15" ry="15" style="fill: #49afcd; stroke: #ccc;"/>
      <text x="-25" y="160" style="font-family: Arial; font-size: 8px; fill: black;">Require Styles</text>
      <text x="-41" y="175" style="font-family: Arial; font-size: 8px; fill: black;">Generate Class Names</text>
      <text x="-24" y="190" style="font-family: Arial; font-size: 8px; fill: black;">Extract CSS</text>
    </g>
  </g>
</svg>
</div>

------

## Sass vs. CSS Modules
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split" style="width: 120%; left: 50%; transform: translateX(-50%); position: relative;">
  <div class="Split-column Split-column--45">
    <p>BEM (media.scss)</p>
    <pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">
.Media           { /\*all styles\*/ }
.Media--centered { /\*some\*/ }
.Media--reversed { /\*some\*/ }</pre><br />
<pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">
/\* media.js \*/
require('media.scss');

<div class="Media Media--reversed">
  ...more...
</div></pre>
  </div>
  <div class="Split-column Split-column--45 fragment">
    <p>CSS Modules (media.css)</p>
<pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">
.normal   { /\*all styles\*/ }
.centered { /\*all styles\*/ }
.reversed { /\*all styles\*/ }</pre><br />
<pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">
/\* media.js \*/
import styles from 'media.css';

<div class={styles.reversed}>
  ...more...
</div></pre>
  </div>
</div>

------

## Composing Styles
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split" style="width: 120%; left: 50%; transform: translateX(-50%); position: relative;">
  <div class="Split-column Split-column--40">
    <p>Composing Locally</p>
<textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false">
.common {
  background-color: #ccc;
  border: 1px solid black;
}

.normal {
  composes: common;

  padding: 1rem;
}
</textarea>
  </div>
  <div class="Split-column Split-column--60">
    <p>Composing Externally</p>
    <pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">
.element {
  composes: large from "./typography.css";
  composes: dark-text from "./colors.css";
  composes: padding-all from "./layout.css";
  composes: big-shadow from "./effect.css";
}</pre>
  </div>
</div>

<!-- ## Self Describing -->
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

Notes:

<pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">
.element {
  composes: large from "./typography.css";
  composes: dark-text from "./colors.css";
  composes: padding-all-medium from "./layout.css";
  composes: subtle-shadow from "./effect.css";
}</pre>

------

## [Styled Components](https://styled-components.com/)
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div style="width: 40%; margin: auto;">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 viewBox="-100 0 200 260">
<title>Pendulum</title>
<defs>
    <radialGradient id = "light" cx = "50%" cy = "50%" fx = "40%" fy = "35%" r = "65%">
        <stop stop-color = "rgb(255,255,255)" offset = "0%"/>
        <stop stop-color = "rgb(190,190,190)" offset = "40%"/>
        <stop stop-color = "rgb(80,80,80)" offset = "100%"/>
    </radialGradient>
</defs>
  <g>
      <g transform="rotate(21 0 10)">
          <line x1="0" x2="0" y1="10" y2="210" style="stroke: white; stroke-width: 1; fill: none;" />
          <circle cx="0" cy="230" r="20" fill="url(#light)" stroke="none"/>
      <rect x="-95" y="40" width="85" height="40" rx="15" ry="15" transform="rotate(-21 0 10)" style="fill: #f9f9f9; stroke: #ccc;" />
      <text x="-80" y="55" style="font-family: Arial; font-size: 8; fill: black;"
            transform="rotate(-21 0 10)">Require Styles</text>
      <text x="-75" y="70" style="font-family: Arial; font-size: 8; fill: black;"
            transform="rotate(-21 0 10)">Extract CSS</text>
    </g>
      <g transform="rotate(-21 0 10)">
          <line x1="0" x2="0" y1="10" y2="210" style="stroke: white; stroke-width: 1; fill: none;" />
          <circle cx="0" cy="230" r="20" fill="url(#light)" stroke="none"/>
      <rect x="10" y="40" width="85" height="40" rx="15" ry="15" transform="rotate(21 0 10)" style="fill: #f9f9f9; stroke: #ccc;" />
      <text x="16" y="55" style="font-family: Arial; font-size: 8; fill: black;"
        transform="rotate(21 0 10)">Define in JavaScript</text>
      <text x="22" y="70" style="font-family: Arial; font-size: 8; fill: black;"
        transform="rotate(21 0 10)">Pure Inline Styles</text>
    </g>
    <g>
          <line x1="0" x2="0" y1="10" y2="210" style="stroke: white; stroke-width: 1; fill: none;" />
          <circle cx="0" cy="230" r="20" fill="url(#light)" stroke="none"/>
      <rect x="-50" y="145" width="100" height="55" rx="15" ry="15" style="fill: #49afcd; stroke: #ccc;"/>
      <text x="-30" y="160" style="font-family: Arial; font-size: 8; fill: black;">Use Components</text>
      <text x="-25" y="175" style="font-family: Arial; font-size: 8; fill: black;">CSS-like Syntax</text>
      <text x="-35" y="190" style="font-family: Arial; font-size: 8; fill: black;">React &amp; React Native</text>
    </g>
  </g>
</svg>
</div>

------

## Styled Components
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div style="width: 125%; left: 50%; transform: translateX(-50%); position: relative;">
<textarea data-codemirror data-mode="text/javascript">
import styled from 'styled-components';
import Color from 'color';

const Button = styled.button\`
  min-width: 6em;
  /&ast; ... more code ... &ast;/
  background-color: ${p => (p.primary ? '#95c83e' : '#F0F0F0')};
  color: ${p => (p.primary ? '#FFF' : '#7F7F7F')};
  border-bottom: ${p => \`0.25em solid ${p.primary ? '#5D7C2D' : '#D7D7D7'}\`};
  cursor: ${props => (p.disabled ? 'not-allowed' : 'inherit')};
  opacity: ${props => (p.disabled ? '.5' : '1')};
  /&ast; ... more code ... &ast;/
\`;

const darkenColor = color => amount => Color(color).darken(amount).toString();
const darkenTomato = darkenColor('#FF6347');
const TomatoButton = styled(Button)\`
  color: white;
  background-color: #ff6347;
  border-bottom: 0.25em solid ${darkenTomato(0.3)};
\`;
</textarea>
</div>

------

## Styled Components
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<textarea data-codemirror data-mode="text/html">
const App = () => (
  &lt;main style={{ display: 'flex', flexDirection: 'column' }}&gt;
    &lt;Button primary&gt;Primary&lt;/Button&gt;
    &lt;Button&gt;Secondary&lt;/Button&gt;
    &lt;Button primary disabled&gt;
      Primary Disabled
    &lt;/Button&gt;
    &lt;TomatoButton&gt;Composed&lt;/TomatoButton&gt;
  &lt;/main>
);

render(&lt;App />, document.getElementById('root'));
</textarea>

------

## Styled Components
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

![](./imgs/styled-components.gif)

------

## Pure Inline Styles
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div style="width: 40%; margin: auto;">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 viewBox="-100 0 200 260">
<title>Pendulum</title>
<defs>
	  <radialGradient id = "light4" cx = "50%" cy = "50%" fx = "40%" fy = "35%" r = "65%">
	    	<stop stop-color = "rgb(255,255,255)" offset = "0%"/>
		    <stop stop-color = "rgb(190,190,190)" offset = "40%"/>
		    <stop stop-color = "rgb(80,80,80)" offset = "100%"/>
	  </radialGradient>
</defs>
  <g>
	    <g transform="rotate(21 0 10)">
		      <line x1="0" x2="0" y1="10" y2="210" style="stroke: white; stroke-width: 1; fill: none;" />
		      <circle cx="0" cy="230" r="20" fill="url(#light4)" stroke="none"/>
      <rect x="-95" y="40" width="85" height="40" rx="15" ry="15" transform="rotate(-21 0 10)" style="fill: #f9f9f9; stroke: #ccc;" />
      <text x="-80" y="55" style="font-family: Arial; font-size: 8px; fill: black;"
            transform="rotate(-21 0 10)">Require Styles</text>
      <text x="-75" y="70" style="font-family: Arial; font-size: 8px; fill: black;"
            transform="rotate(-21 0 10)">Extract CSS</text>
    </g>
	    <g transform="rotate(-21 0 10)">
		      <line x1="0" x2="0" y1="10" y2="210" style="stroke: white; stroke-width: 1; fill: none;" />
		      <circle cx="0" cy="230" r="20" fill="url(#light4)" stroke="none"/>
      <rect x="10" y="40" width="85" height="40" rx="15" ry="15" transform="rotate(21 0 10)" style="fill: #49afcd; stroke: #ccc;" />
      <text x="16" y="55" style="font-family: Arial; font-size: 8px; fill: black;"
        transform="rotate(21 0 10)">Define in JavaScript</text>
      <text x="22" y="70" style="font-family: Arial; font-size: 8px; fill: black;"
        transform="rotate(21 0 10)">Pure Inline Styles</text>
    </g>
    <g>
		      <line x1="0" x2="0" y1="10" y2="210" style="stroke: white; stroke-width: 1; fill: none;" />
		      <circle cx="0" cy="230" r="20" fill="url(#light4)" stroke="none"/>
      <rect x="-50" y="145" width="100" height="55" rx="15" ry="15" style="fill: #f9f9f9; stroke: #ccc;"/>
      <text x="-25" y="160" style="font-family: Arial; font-size: 8px; fill: black;">Require Styles</text>
      <text x="-41" y="175" style="font-family: Arial; font-size: 8px; fill: black;">Generate Class Names</text>
      <text x="-24" y="190" style="font-family: Arial; font-size: 8px; fill: black;">Extract CSS</text>
    </g>
  </g>
</svg>
</div>

------

## [Radium](http://projects.formidablelabs.com/radium/)
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" data-menu-title="Radium: Styles Object" -->

<pre data-codemirror data-mode="text/javascript" data-line-numbers="false">var color = require('color');

const styles = {
  base: {
    color: '#fff',
    ':hover': {
      background: color('#0074d9').lighten(0.2).hexString()
    }
  },
  primary: {
    background: '#0074D9'
  },
  warning: {
    background: '#FF4136'
  }
};</pre>

------

## [Radium](http://projects.formidablelabs.com/radium/)
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" data-menu-title="Radium: JavaScript" -->

<textarea data-codemirror data-mode="text/javascript" data-line-numbers="false">
import Radium from "radium";
import React from "react";

@Radium
class Button extends React.Component {
  static propTypes = {
    kind: React.PropTypes
      .oneOf(["primary", "warning"]).isRequired
  };

  render() {
    return (
      <button
        style={[ styles.base, styles[this.props.kind] ]}>
        {this.props.children}
      </button>
    );
  }
}</textarea>

------

## Resources
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa resources" -->

* [Webpack](https://webpack.github.io/)
* [Comparison of CSS in JS Libraries for React](https://github.com/FormidableLabs/radium/blob/master/docs/comparison/README.md)
* [React: CSS in JS techniques comparison](https://github.com/MicheleBertoli/css-in-js)
* [CSS Modules](http://glenmaddern.com/articles/css-modules)
* [Styled Components](https://github.com/styled-components/styled-components)
* [Radium](http://projects.formidablelabs.com/radium/)
* [Inline Styles: themes, media queries, contexts, & when it's best to use CSS](https://www.youtube.com/watch?v=ERB1TJBn32c) video by Michael Chan
