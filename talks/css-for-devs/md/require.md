# Require
<!-- .slide: data-state="backEndBrian juniorJacob midLevelMelissa" -->

> Use Webpack to require your CSS in your JavaScript!

------

## What... WHAT!?!
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<img src="./imgs/brain-explode.gif" style="height: 450px;" />

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
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

styes.scss

<pre data-codemirror data-mode="text/css">.Media {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1em;
}

.Media--center {
  align-items: center
}

.Media-figure {
  margin-right: 1em;
}

/* ... more ... */</pre>

------

## Your Component
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

index.jsx

<pre data-codemirror data-mode="text/javascript" data-lines="2">let React = require('react/addons');
let classNames = require('classnames');
require('./styles.scss');

let Media = React.createClass({
  render() {
    return <div
      className="{classNames('Media', this.props.className)}">
      <img className="Media-figure"
        src="{this.props.imageUrl}">
      <div className="Media-body">
        <h3 className="Media-title">{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    </div>;
  }
});

module.exports = Media;</pre>

------

## Why Do This!?!
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* Component declares what styles it needs
* Styles are removed if Component isn't needed

------

## [Other CSS in JavaScript Libraries](https://github.com/MicheleBertoli/css-in-js)
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

### ...but, [CSS Modules](http://glenmaddern.com/articles/css-modules) looks most interesting to me

------

## Local by default
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split">
  <div class="Split-column Split-column--45">
    <p>BEM (media.css)</p>
  <pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">.Media { /\*all styles\*/ }
.Media--centered { /\*some\*/ }
.Media--reversed { /\*some\*/ }</pre>
    <pre data-codemirror data-mode="text/javascript" data-line-numbers="false">
require('media.css');

<div
  class="Media Media--reversed">
  ...more...
</div></pre>
  </div>
  <div class="Split-column Split-column--45 fragment">
    <p>CSS Modules (media.css)</p>
  <pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">.normal {   /\*all styles\*/ }
.centered { /\*all styles\*/ }
.reversed { /\*all styles\*/ }</pre>
    <pre data-codemirror data-mode="text/javascript" data-line-numbers="false">
/\* media.js \*/
import styles from 'media.css';

media.outerHTML = \`<div class=${styles.reversed}>
  ...more...
</div>\`;</pre>  
  </div>
</div>  

------

## Composing Styles
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">.common {
  /* all the common styles you want */
}

.normal {
  composes: common;
  /* anything that only applies to Normal */
}
</pre>

------

## Reusable Parts
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">.element {
  composes: large from "./typography.css";
  composes: dark-text from "./colors.css";
  composes: padding-all-medium from "./layout.css";
  composes: subtle-shadow from "./effect.css";
}</pre>

------

## Sharing Across Files
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">/* colors.css */
.primary {
  color: #720;
}
.secondary {
  color: #777;
}
</pre>

<pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">.common { /* font-sizes, padding, border-radius */ }
.normal {
  composes: common;
  composes: primary from "../shared/colors.css";
}
</pre>

------

## Resources
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [Webpack]()
* [Other CSS in JavaScript Libraries](https://github.com/MicheleBertoli/css-in-js)
* [CSS Modules](http://glenmaddern.com/articles/css-modules)

Notes:
