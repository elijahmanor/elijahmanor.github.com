# Sizing
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> "Both rem and em are relative units, px is not. Before considering rem, it’s important to understand the relationship between em, markup and inheritance." --[Confused About REM and EM?](https://j.eremy.net/confused-about-rem-and-em/) by [Jeremy Church](jeremybchurch)

------

## Scenario <small>([CodePen](http://codepen.io/elijahmanor/pen/VLKaVN?editors=110))</small><!-- .element style="vertical-align: middle;" -->
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column">
    <pre class="language-markup"><code>
&lt;h1&gt;Sizing&lt;/h1&gt;
&lt;div class="container"&gt;
  &lt;div class="box"&gt;Box 1&lt;/div&gt;
  &lt;div class="box"&gt;
    &lt;div class="box"&gt;Box 2a&lt;/div&gt;
    &lt;div class="box"&gt;
      &lt;div class="box"&gt;Box 3a&lt;/div&gt;
      &lt;div class="box"&gt;Box 3b&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="box"&gt;Box 4&lt;/div&gt;
&lt;/div&gt;</code></pre>
  </div>
  <div class="Split-column">
    <pre class="language-css" data-line="4-5,9-11"><code>html, body { font-size: 16px; }

.container {
  font-size: 24px;
  padding: 1em;
}

.box {
  font-size: 1.25em;
  padding: 0.75em;
  margin: 0.75em;
  border: 1px solid black;
}</code></pre>
  </div>
</div>

------

## List Font Size Units
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob" -->

<!-- TODO: Highlight commons ones (green), Old way (red), Bad support (yellow) -->

<div class="Split">
  <div class="Split-column">
    <ul>
      <li>em</li>
      <li>ex</li>
      <li>%</li>
      <li>px</li>
      <li>cm</li>
      <li>mm</li>
      <li>in</li>
    </ul>
  </div>
  <div class="Split-column">
    <ul>
      <li>pt</li>
      <li>pc</li>
      <li>ch</li>
      <li>rem</li>
      <li>vh</li>
      <li>vw</li>
      <li>vmin</li>
      <li>vmax</li>
    </ul>
  </div>
</div>

------

## `em`
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob" -->

> "The em unit is a relative unit based on the computed value of the font size of the parent element. This means that child elements are always dependent on their parent to set their font-size." --[CSS Almanac: font-size](https://css-tricks.com/almanac/properties/f/font-size/)

------

## `em` Example
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column">
  <pre class="language-css"><code>
.container {
  font-size: 16px;
}

.box1 {
  font-size: 1em;
}

.box2 {
  font-size: 2em;
  margin: 0.25em;
}</code></pre>
  </div>
  <div class="Split-column">
    <p>`.box1` will have a  `font-size` of `16px` because `1em * 16px = 16px`</p>
    <p>`.box2` will have a  `font-size` of `32px` because `2em * 16px = 32px`</p>
    <p>`.box2` will have a  `margin` of `8x` because `0.25em * 32px = 8px`</p>
  </div>
</div>

------

## `rem`
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob" -->

> "In the case of rem units, however, the font-size is dependent on the value of the root element (or the html element)." --[CSS Almanac: font-size](https://css-tricks.com/almanac/properties/f/font-size/)

------

## `rem` Example
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column">
  <pre class="language-css"><code>
.container {
  font-size: 16px;
}

.box1 {
  font-size: 1rem;
}

.box2 {
  font-size: 2em;
  margin: 0.25rem;
}</code></pre>
  </div>
  <div class="Split-column">
    <p>`.box1` will have a  `font-size` of `16px` because `1em * 16px = 16px`</p>
    <p>`.box2` will have a  `font-size` of `32px` because `2em * 16px = 32px`</p>
    <p>`.box2` will have a  `margin` of `4px` because `0.25rem * 16px = 4px`</p>
  </div>
</div>

------

## 62.5%
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split">
  <div class="Split-column">
    <blockquote>"The technique modifies the base font-size on the body using a percentage. This adjusts things so that 1em equals 10px, instead of the default 16px."</blockquote>
  </div>
  <div class="Split-column">
    <pre class="language-css"><code>
html { font-size: 62.5%; }
body { font-size: 1.4rem; } /* =14px */
h1   { font-size: 2.4rem; } /* =24px */</code></pre>
    Source: [Font Sizing with REM](http://snook.ca/archives/html_and_css/font-size-with-rem) by [Jonathan Snook](https://twitter.com/snookca)
  </div>
</div>



------

## Coyier's Idea ([Mixing `rem`s & `em`s](https://css-tricks.com/rems-ems/))
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob midLevelMelissa" -->

![](./imgs/csstricks-ems-rems.svg)

------

## Resources
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [Font Sizing with REM](http://snook.ca/archives/html_and_css/font-size-with-rem) by [Jonathan Snook](https://twitter.com/snookca)
* [Confused About REM and EM?](https://j.eremy.net/confused-about-rem-and-em/) by [Jeremy Church](jeremybchurch)
* [There’s more to the CSS rem unit than font sizing](https://css-tricks.com/theres-more-to-the-css-rem-unit-than-font-sizing/) by Roman Rudenko
* [Font Size Idea: px at the Root, rem for Components, em for Text Elements](https://css-tricks.com/rems-ems/) by [Chris Coyier](http://twitter.com/chriscoyier)

Notes:

* [CSS Font Sizing](http://bitsofco.de/2015/css-font-sizing/) by [Ire Aderinokun](https://twitter.com/ireaderinokun)
