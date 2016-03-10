# Cascading

> "The notion of a “cascade” is at the heart of CSS (just look at its name). It ultimately determines which properties will modify a given element. The cascade is tied to three main concepts: importance, specificity and source order." --[CSS Specificity And Inheritance](http://www.smashingmagazine.com/2010/04/07/css-specificity-and-inheritance/) by [Inayaili de Leon](https://twitter.com/yaili)

------

## [Scenario <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/pJEyRE?editors=110)
<!-- .slide: data-title="Cascading" data-state="backEndBrian juniorJacob" -->

Have you ever done this?

<div class="Split">
  <div class="Split-column Split-column--55">
    <pre data-codemirror data-mode="text/html" data-line-numbers="false"><h1>Cascades</h1>
<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div></pre>
  </div>
  <div class="Split-column Split-column--45">
    <pre data-codemirror data-mode="text/css" data-line-numbers="false">html, body { color: black; }

h1 {
  font-family: Times, serif;
}

.container { color: black; }

.box {
  font-family: Times, serif;
  color: white;
  width: 100px;
  height: 100px;
  background-color: red;
}</pre>
  </div>
</div>

------

[Scenario <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/pJEyRE?editors=110)
<!-- .slide: data-title="Cascading" data-state="backEndBrian juniorJacob" -->

Repetitive Properties! (non-DRY)

<div class="Split">
  <div class="Split-column Split-column--55">
    <pre data-codemirror data-mode="text/html" data-line-numbers="false"><h1>Cascades</h1>
<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div></pre>
  </div>
  <div class="Split-column Split-column--45">
    <pre data-codemirror data-mode="text/css" data-line-numbers="false" data-lines="0,3,6,9">
html, body { color: black; }

h1 {
  font-family: Times, serif;
}

.container { color: black; }

.box {
  font-family: Times, serif;
  color: white;
  width: 100px;
  height: 100px;
  background-color: red;
}</pre>
  </div>
</div>

<!--
## Importance: Sources
<!-- .slide: data-title="Cascading" data-state="backEndBrian juniorJacob" -->

1. User Agent <p>Each browser provides its own default style sheet</p>

2. User <p>Specific user overrides specifies via browser options</p>

3. Author <p>Developer specified style sheets (in document or external)</p>

Resource: [W3C: The Cascade](http://www.w3.org/TR/CSS2/cascade.html#cascade)
-->

------

## Importance: Priority <small>(lowest to highest)</small>
<!-- .slide: data-title="Cascading" data-state="backEndBrian juniorJacob" -->

1. User Agent's Stylesheet
2. User's Stylesheet
3. Author's Stylesheet
4. Author's !important rules
5. User's !important rules

Resource: [W3C: The Cascade](http://www.w3.org/TR/CSS2/cascade.html#cascade)

------

## CSS Resets & Normalize
<!-- .slide: data-title="Cascading" data-state="backEndBrian juniorJacob" -->

User Agent Stylesheets vary from Browser to Browser

* [Reset CSS](http://meyerweb.com/eric/tools/css/reset/): <p>Will strip pretty much all styles away and let you start from scratch. Think of something like...</p><pre data-codemirror data-mode="text/css" data-line-numbers="false">* {margin: 0; padding: 0;}</pre>
* [Normalize.css](http://necolas.github.io/normalize.css/): <p>Will tear down elements to a reasonable baseline that you can build from</p>

------

## [Cascaded properties <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://www.w3.org/TR/CSS21/propidx.html)
<!-- .slide: data-title="Cascading" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column fragment">
    <h3>Inherited</h3>
    <ul>
      <li>color</li>
      <li>font-family</li>
      <li>font-size</li>
      <li>font-style</li>
      <li>font-variant</li>
      <li>font-weight</li>
      <li>font</li>
      <li>text-align</li>
    </ul>
  </div>
  <div class="Split-column fragment">
    <h3>Non-Inherited</h3>
    <ul>
      <li>background</li>
      <li>border</li>
      <li>display</li>
      <li>float</li>
      <li>width</li>
      <li>height</li>
      <li>top, right, bottom, left</li>
      <li>margin</li>
      <li>padding</li>
    </ul>
  </div>

------

## [Making Non-Inherited Properties Cascade <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/bdwpvE?editors=110)
<!-- .slide: data-title="Cascading" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split">
  <div class="Split-column">
    <pre data-codemirror data-mode="text/html" data-line-numbers="false">
<h1>Inherit</h1>
<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div></pre>
  </div>
  <div class="Split-column">
    <pre data-codemirror data-mode="text/css" data-lines="7">.container {
  padding: 1em;
  border: 1px dashed green;
}

.box {
  margin: 1em;
  border: inherit;
}</pre>
  </div>
</div>

------

## [Leveraging the Cascade <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](http://codepen.io/elijahmanor/pen/aOmNWq?editors=110)
<!-- .slide: data-title="Cascading" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split">
  <div class="Split-column">
    <h4>Old CSS</h4>
    <pre data-codemirror data-mode="text/css" data-line-numbers="false" data-lines="0,3,6,9">
html, body { color: black; }

h1 {
  font-family: Times, serif;
}

.container { color: black; }

.box {
  font-family: Times, serif;
  color: white;
  width: 100px;
  height: 100px;
  background-color: red;
}</pre>
  </div>
  <div class="Split-column">
    <h4>New CSS</h4>
    <pre data-codemirror data-mode="text/css" data-line-numbers="false" data-lines="1,2">html, body {
  font-family: Times, serif;
  color: black;
}

.box {
  color: white;
  width: 100px;
  height: 100px;
  background-color: red;
}</pre>
  </div>
</div>


------

## Resources
<!-- .slide: data-title="Cascading" data-state="backEndBrian juniorJacob midLevelMelissa resources" -->

* [W3C: CSS Cascading and Inheritance Level 3](http://www.w3.org/TR/css3-cascade/)
* [W3C: Appendix F. Full property table](http://www.w3.org/TR/CSS21/propidx.html)
* [CSS Specificity And Inheritance](http://www.smashingmagazine.com/2010/04/07/css-specificity-and-inheritance/) by [Inayaili de Leon](https://twitter.com/yaili)

Notes:
