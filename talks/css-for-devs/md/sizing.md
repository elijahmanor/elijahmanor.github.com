# Sizing

> "Both rem and em are relative units, px is not. Before considering rem, it’s important to understand the relationship between em, markup and inheritance." --[Confused About REM and EM?](https://j.eremy.net/confused-about-rem-and-em/) by [Jeremy Church](jeremybchurch)

------

## Avoiding Pixels
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob" -->

You've probably heard to stay away from pixels...

* <!-- .element: class="fragment" data-fragment-index="1" -->Historically there were issues with pixels in oldIE (6 & 7) when zooming
* <!-- .element: class="fragment" data-fragment-index="2" -->Also pixels (fixed-sized unit) encouraged pixel-perfect representation in a world of multiple devices
* <!-- .element: class="fragment" data-fragment-index="3" -->Relative units open up the ability to adjust fonts, margin, & padding based on breakpoints

------

## [Scenario <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/VLKaVN?editors=110)
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

## [Scenario <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/VLKaVN?editors=110)
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

<pre data-codemirror data-mode="text/html" data-line-numbers="false"><div class="container">
  <div class="box1">
    <div class="box2"></div>
  </div>
</div>
</pre>
<pre data-codemirror data-mode="text/css" data-line-numbers="false">.container { font-size: 16px; }

.box1 {
  font-size: 1em;  /* 1em * 16px = 16px */
}

.box2 {
  font-size: 2em;  /* 2em * 16px = 32px */
  margin: 0.25em;  /* 0.25em * 32px = 8px */
}</pre>

------

## `rem`
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob" -->

> "In the case of rem units, however, the font-size is dependent on the value of the root element (or the html element)." --<a href="https://css-tricks.com/almanac/properties/f/font-size/">CSS Almanac: font-size

------

## `rem` Example
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob" -->

<pre data-codemirror data-mode="text/html" data-line-numbers="false"><div class="container">
  <div class="box1">
    <div class="box2"></div>
  </div>
</div>
</pre>
<pre data-codemirror data-mode="text/css" data-line-numbers="false">html { font-size: 16px; }

.box1 {
  font-size: 1rem; /* 1em * 16px = 16px */
}

.box2 {
  font-size: 2em;  /* 2em * 16px = 32px */
  margin: 0.25rem; /* 0.25em * 16 = 4px */
}</pre>

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
<!-- .slide: data-title="Sizing" data-state="backEndBrian juniorJacob midLevelMelissa resources" -->

* [Font Sizing with REM](http://snook.ca/archives/html_and_css/font-size-with-rem) by [Jonathan Snook](https://twitter.com/snookca)
* [Confused About REM and EM?](https://j.eremy.net/confused-about-rem-and-em/) by [Jeremy Church](jeremybchurch)
* [There’s more to the CSS rem unit than font sizing](https://css-tricks.com/theres-more-to-the-css-rem-unit-than-font-sizing/) by Roman Rudenko
* [Font Size Idea: px at the Root, rem for Components, em for Text Elements](https://css-tricks.com/rems-ems/) by [Chris Coyier](http://twitter.com/chriscoyier)

Notes:

* [CSS Font Sizing](http://bitsofco.de/2015/css-font-sizing/) by [Ire Aderinokun](https://twitter.com/ireaderinokun)
* http://nicolas-hoizey.com/2016/03/people-don-t-change-the-default-16px-font-size-in-their-browser.html
