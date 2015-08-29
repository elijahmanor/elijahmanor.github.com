# Sizing
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> "Both rem and em are relative units, px is not. Before considering rem, it’s important to understand the relationship between em, markup and inheritance." --[Confused About REM and EM?](https://j.eremy.net/confused-about-rem-and-em/) by [Jeremy Church](jeremybchurch)

------

## Scenario <small>([CodePen](http://codepen.io/elijahmanor/pen/VLKaVN?editors=110))</small><!-- .element style="vertical-align: middle;" -->
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob" -->

Have you ever done this?

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-codemirror data-mode="text/html" data-line-numbers="false">
<div class="container">
  <div class="box">Box 1</div>
  <div class="box">
    <div class="box">Box 2a</div>
    <div class="box">
      <div class="box">Box 3a</div>
      <div class="box">Box 3b</div>
    </div>
  </div>
  <div class="box">Box 4</div>
</div></pre>
  </div>
  <div class="Split-column">
    <pre data-codemirror data-mode="text/css" data-line-numbers="false">
html, body {
  font-size: 16px;
}

.container {
  font-size: 24px;
  padding: 1em;
}

.box {
  font-size: 1.25em;
  padding: 0.75em;
  margin: 0.75em;
}</pre>
  </div>
</div>

------

## Scenario <small>([CodePen](http://codepen.io/elijahmanor/pen/VLKaVN?editors=110))</small><!-- .element style="vertical-align: middle;" -->
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob" -->

Ever Growing Fonts!

<div class="Split">
  <div class="Split-column Split-column--70">
    <div class="DemoScenarioSizing-container">
      <div class="DemoScenarioSizing-box">Box 1</div>
      <div class="DemoScenarioSizing-box">
        <div class="DemoScenarioSizing-box">Box 2a</div>
        <div class="DemoScenarioSizing-box">
          <div class="DemoScenarioSizing-box">Box 3a</div>
          <div class="DemoScenarioSizing-box">Box 3b</div>
        </div>
      </div>
      <div class="DemoScenarioSizing-box">Box 4</div>
    </div>
    <style>
    .DemoScenarioSizing-container {
      font-size: 24px !important;
    }
    .DemoScenarioSizing-box {
      font-size: 1.25em !important;
      padding: 0.75em !important;
      margin: 0.75em !important;
      border: 3px solid black !important;
      color: black;
      background-color: white;
    }
    </style>
  </div>
  <div class="Split-column">
    <pre data-codemirror data-mode="text/css" data-line-numbers="false" data-lines="1,5,6,10,11,12">
html, body {
  font-size: 16px;
}

.container {
  font-size: 24px;
  padding: 1em;
}

.box {
  font-size: 1.25em;
  padding: 0.75em;
  margin: 0.75em;
}</pre>
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
  <div class="Split-column Split-column--30">
  <pre data-codemirror data-mode="text/css" data-line-numbers="false">
.container {
  font-size: 16px;
}

.box1 {
  font-size: 1em;
}

.box2 {
  font-size: 2em;
  margin: 0.25em;
}</pre>
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

<div class="Split">
  <div class="Split-column">
    <img src="./imgs/rem.png" style="" />
  </div>
  <div class="Split-column">
    <blockquote>"In the case of rem units, however, the font-size is dependent on the value of the root element (or the html element)." --<a href="https://css-tricks.com/almanac/properties/f/font-size/">CSS Almanac: font-size</a>
  </div>
</div>


------

## `rem` Example
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column Split-column--30">
  <pre data-codemirror data-mode="text/css" data-line-numbers="false">
html {
  font-size: 16px;
}

.box1 {
  font-size: 1rem;
}

.box2 {
  font-size: 2em;
  margin: 0.25rem;
}</pre>
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
  <div class="Split-column Split-column--90">
    <pre data-codemirror data-mode="text/css" data-line-numbers="false">
html { font-size: 62.5%; }
body { font-size: 1.4rem; } /\* =14px \*/
h1   { font-size: 2.4rem; } /\* =24px \*/</pre>
    Source: [Font Sizing with REM](http://snook.ca/archives/html_and_css/font-size-with-rem) by [Jonathan Snook](https://twitter.com/snookca)
  </div>
</div>

------

## Coyier's Idea ([Mixing `rem`s & `em`s](https://css-tricks.com/rems-ems/))
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob midLevelMelissa" -->

![](./imgs/csstricks-ems-rems.svg)

------

## Coyier's Idea ([Mixing `rem`s & `em`s](https://css-tricks.com/rems-ems/))
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<iframe height='538' scrolling='no' src='//codepen.io/chriscoyier/embed/tvheK/?height=538&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/chriscoyier/pen/tvheK/'>Em AND Rem</a> by Chris Coyier (<a href='http://codepen.io/chriscoyier'>@chriscoyier</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

## Resources
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [Font Sizing with REM](http://snook.ca/archives/html_and_css/font-size-with-rem) by [Jonathan Snook](https://twitter.com/snookca)
* [Confused About REM and EM?](https://j.eremy.net/confused-about-rem-and-em/) by [Jeremy Church](jeremybchurch)
* [There’s more to the CSS rem unit than font sizing](https://css-tricks.com/theres-more-to-the-css-rem-unit-than-font-sizing/) by Roman Rudenko
* [Font Size Idea: px at the Root, rem for Components, em for Text Elements](https://css-tricks.com/rems-ems/) by [Chris Coyier](http://twitter.com/chriscoyier)

Notes:

* [CSS Font Sizing](http://bitsofco.de/2015/css-font-sizing/) by [Ire Aderinokun](https://twitter.com/ireaderinokun)
