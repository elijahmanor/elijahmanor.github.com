<!--
{
  "className": "Slide--title"
}
-->

# Styles

---

# Huge Controversy

<!-- https://commons.wikimedia.org/wiki/File:Animated_pendulum.svg -->

<div style="width: 35%; margin: auto;">
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
      <rect x="-50" y="145" width="100" height="55" rx="15" ry="15" style="fill: #f9f9f9; stroke: #ccc;"/>
      <text x="-25" y="160" style="font-family: Arial; font-size: 8; fill: black;">Require Styles</text>
      <text x="-41" y="175" style="font-family: Arial; font-size: 8; fill: black;">Generate Class Names</text>
      <text x="-24" y="190" style="font-family: Arial; font-size: 8; fill: black;">Extract CSS</text>
    </g>
  </g>
</svg>
</div>

---

# Require and Extract

<div style="width: 35%; margin: auto;">
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
      <rect x="-95" y="40" width="85" height="40" rx="15" ry="15" transform="rotate(-21 0 10)" style="fill: #49afcd; stroke: #ccc;" />
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
      <rect x="-50" y="145" width="100" height="55" rx="15" ry="15" style="fill: #f9f9f9; stroke: #ccc;"/>
      <text x="-25" y="160" style="font-family: Arial; font-size: 8; fill: black;">Require Styles</text>
      <text x="-41" y="175" style="font-family: Arial; font-size: 8; fill: black;">Generate Class Names</text>
      <text x="-24" y="190" style="font-family: Arial; font-size: 8; fill: black;">Extract CSS</text>
    </g>
  </g>
</svg>
</div>

---

# Organize Your Files Together
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

(Component, Styles, and Tests)

<pre class="language-bash language--clean"><code>
├── media
│   ├── index.jsx
│   ├── index.spec.js
│   └── styles.scss
└── webpack.config.js
</code></pre>

---

# Your Styles
<!-- .slide: data-title="Require" data-state="backEndBrian juniorJacob midLevelMelissa" -->

styes.scss

<div class="Split">
  <div class="Split-column Split-column--65">
<pre class="language-scss language--clean language--small"><code>
.Media {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1em;
}

.Media--center { align-items: center; }

.Media-figure { margin-right: 1em; }

/* ... more ... */</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>Define the classes you need only for this component</p>
  </div>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Your Component

<div class="Split">
  <div class="Split-column Split-column--65">
<pre data-line="3" class="language-jsx language--clean language--small"><code>
let React = require('react/addons');
let classNames = require('classnames');
require('./styles.scss');

let Media = React.createClass({
  render() {
    return &lt;div className="{classNames('Media', this.props.className)}"&gt;
      &lt;img className="Media-figure" src="{this.props.imageUrl}"&gt;
      &lt;div className="Media-body"&gt;
        &lt;h3 className="Media-title"&gt;{this.props.title}&lt;/h3&gt;
        &lt;p&gt;{this.props.description}&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;;
  }
});

module.exports = Media;</code></pre>
  </div>
  <div class="Split-column Split-column--35 fragment">
    <p>3. Require the Sass file that is needed for this component</p>
  </div>
</div>

---

# Why Do This!?!

* Component declares what styles it needs
* Styles are removed if Component isn't needed

---

# [CSS Modules](http://glenmaddern.com/articles/css-modules)

<div style="width: 35%; margin: auto;">
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
      <text x="-25" y="160" style="font-family: Arial; font-size: 8; fill: black;">Require Styles</text>
      <text x="-41" y="175" style="font-family: Arial; font-size: 8; fill: black;">Generate Class Names</text>
      <text x="-24" y="190" style="font-family: Arial; font-size: 8; fill: black;">Extract CSS</text>
    </g>
  </g>
</svg>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# Sass vs. CSS Modules

<div class="Split">
  <div class="Split-column">
    <p>BEM (media.scss)</p>
    <pre class="language-scss language--clean language--small"><code>
.Media           { /\*all styles\*/ }
.Media--centered { /\*some\*/ }
.Media--reversed { /\*some\*/ }</code></pre><br />
<pre class="language-jsx language--clean language--small"><code>
require('media.scss');

&lt;div class="Media Media--reversed"&gt;
  ...more...
&lt;/div&gt;</code></pre>
  </div>
  <div class="Split-column fragment">
    <p>CSS Modules (media.css)</p>
    <pre class="language-css language--clean language--small"><code>
.normal   { /\*all styles\*/ }
.centered { /\*all styles\*/ }
.reversed { /\*all styles\*/ }</code></pre><br />
    <pre class="language-jsx language--clean language--small"><code>
/\* media.js \*/
import styles from 'media.css';

&lt;div class={styles.reversed}&gt;
  ...more...
&lt;/div&gt;</code></pre>  
  </div>
</div>  

---

# Composing Styles

<pre class="language-css language--clean language--small"><code>
.common {
  /* all the common styles you want */
}

.normal {
  composes: common;
  /* anything that only applies to Normal */
}
</code></pre>

---

# Sharing Across Files

<div class="Split">
  <div class="Split-column Split-column--30">
<pre class="language-css language--clean language--small"><code>
/\* colors.css \*/
.primary {
  color: #720;
}
.secondary {
  color: #777;
}
</code></pre>
  </div>
  <div class="Split-column Split-column--70">
<pre class="language-css language--clean language--small"><code>
.common { /\* font-sizes, border-radius \*/ }
.normal {
  composes: common;
  composes: primary from "../shared/colors.css";
}
</code></pre>
  </div>
</div>

---

# Self Describing

<pre class="language-css language--clean language--small"><code>
.element {
  composes: large from "./typography.css";
  composes: dark-text from "./colors.css";
  composes: padding-all-medium from "./layout.css";
  composes: subtle-shadow from "./effect.css";
}</code></pre>

---

# Pure Inline Styles

<div style="width: 35%; margin: auto;">
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
      <rect x="10" y="40" width="85" height="40" rx="15" ry="15" transform="rotate(21 0 10)" style="fill: #49afcd; stroke: #ccc;" />
      <text x="16" y="55" style="font-family: Arial; font-size: 8; fill: black;"
        transform="rotate(21 0 10)">Define in JavaScript</text>
      <text x="22" y="70" style="font-family: Arial; font-size: 8; fill: black;"
        transform="rotate(21 0 10)">Pure Inline Styles</text>
    </g>
    <g>
		      <line x1="0" x2="0" y1="10" y2="210" style="stroke: white; stroke-width: 1; fill: none;" />
		      <circle cx="0" cy="230" r="20" fill="url(#light)" stroke="none"/>
      <rect x="-50" y="145" width="100" height="55" rx="15" ry="15" style="fill: #f9f9f9; stroke: #ccc;"/>
      <text x="-25" y="160" style="font-family: Arial; font-size: 8; fill: black;">Require Styles</text>
      <text x="-41" y="175" style="font-family: Arial; font-size: 8; fill: black;">Generate Class Names</text>
      <text x="-24" y="190" style="font-family: Arial; font-size: 8; fill: black;">Extract CSS</text>
    </g>
  </g>
</svg>
</div>

---

<!--
{
  "className": "Slide--static"
}
-->

# [Radium](http://projects.formidablelabs.com/radium/)

<div class="Split">
  <div class="Split-column Split-column--45">
	<pre class="language-jsx language--clean language--small"><code>
var styles = {
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
};</code></pre>
  </div>
  <div class="Split-column Split-column--55">
	<pre class="language-jsx language--clean language--small"><code>
var Radium = require('radium');
var React = require('react');
var color = require('color');

@Radium
class Button extends React.Component {
	static propTypes = {
		kind: React.PropTypes
			.oneOf(['primary', 'warning']).isRequired
	};

	render() {
		return (
			&lt;button
				style={[
					styles.base,
					styles[this.props.kind]
				]}&gt;
				{this.props.children}
			&lt;/button&gt;
		);
	}
}</code></pre>
  </div>
</div>

---

# Resources

* [Webpack](https://webpack.github.io/)
* [Comparison of CSS in JS Libraries for React](https://github.com/FormidableLabs/radium/blob/master/docs/comparison/README.md)
* [React: CSS in JS techniques comparison](https://github.com/MicheleBertoli/css-in-js)
* [CSS Modules](http://glenmaddern.com/articles/css-modules)
* [Radium](http://projects.formidablelabs.com/radium/)
* [Inline Styles: themes, media queries, contexts, & when it's best to use CSS](https://www.youtube.com/watch?v=ERB1TJBn32c) video by Michael Chan
