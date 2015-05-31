# Cascading
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> "The notion of a “cascade” is at the heart of CSS (just look at its name). It ultimately determines which properties will modify a given element. The cascade is tied to three main concepts: importance, specificity and source order." --[CSS Specificity And Inheritance](http://www.smashingmagazine.com/2010/04/07/css-specificity-and-inheritance/) by [Inayaili de Leon](https://twitter.com/yaili)

------

## Scenario <small>([CodePen](http://codepen.io/elijahmanor/pen/pJEyRE?editors=110))</small><!-- .element style="vertical-align: middle;" -->
<!-- .slide: data-title="Cascading" data-state="backEndBrian juniorJacob" -->

### Have you ever done this?

<div class="Split">
  <div class="Split-column">
    <pre class="language-markup"><code>
&lt;h1&gt;Cascades&lt;/h1&gt;
&lt;div class="container"&gt;
  &lt;div class="box"&gt;Box 1&lt;/div&gt;
  &lt;div class="box"&gt;Box 2&lt;/div&gt;
  &lt;div class="box"&gt;Box 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
  </div>
  <div class="Split-column">
    <pre class="language-css"><code>
html, body { color: black; }

h1 {
  font-family: Verdana, Arial, Serif;
}

.container { color: black; }

.box {
  font-family: Verdana, Arial, Serif;
  color: white;
  width: 100px; height: 100px;
  background-color: red;
}</code></pre>
  </div>
</div>

------

## Importance
<!-- .slide: data-title="Cascading" data-state="backEndBrian juniorJacob" -->

### Sources

1. User Agent <p>Each browser provides its own default style sheet</p>

2. User <p>Specific user overrides specifies via browser options</p>

3. Author <p>Developer specified style sheets (in document or external)</p>

Resource: [W3C: The Cascade](http://www.w3.org/TR/CSS2/cascade.html#cascade)

------

## Importance
<!-- .slide: data-title="Cascading" data-state="backEndBrian juniorJacob" -->

### Priority <small>(lowest to highest)</small><!-- .element style="vertical-align: middle;" -->

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

* [Reset CSS](http://meyerweb.com/eric/tools/css/reset/): <p>Will strip pretty much all styles away and let you start from scratch. Think of something like...</p><pre class="language-css"><code>* {margin: 0; padding: 0;}</code></pre>
* [Normalize.css](http://necolas.github.io/normalize.css/): <p>Will tear down elements to a reasonable baseline that you can build from</p>

------

## [Cascaded properties](http://www.w3.org/TR/CSS21/propidx.html)
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

## Making Non-Inherited Properties Cascade <small>([CodePen](http://codepen.io/elijahmanor/pen/bdwpvE?editors=110))</small><!-- .element style="vertical-align: middle;" -->
<!-- .slide: data-title="Cascading" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split">
  <div class="Split-column">
    <pre class="language-markup"><code>
&lt;h1&gt;Inherit&lt;/h1&gt;
&lt;div class="container"&gt;
  &lt;div class="box"&gt;Box 1&lt;/div&gt;
  &lt;div class="box"&gt;Box 2&lt;/div&gt;
  &lt;div class="box"&gt;Box 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
  </div>
  <div class="Split-column">
    <pre class="language-css" data-line="8"><code>.container {
  padding: 1em;
  border: 1px dashed green;
}

.box {
  margin: 1em;
  border: inherit;
}</code></pre>
  </div>
</div>

------

## Leveraging the Cascade <small>([CodePen](http://codepen.io/elijahmanor/pen/aOmNWq?editors=110))</small><!-- .element style="vertical-align: middle;" -->
<!-- .slide: data-title="Cascading" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column">
    <h4>Old CSS</h4>
    <pre class="language-css"><code>
html, body { color: black; }

h1 {
  font-family: Verdana, Arial, Serif;
}

.container { color: black; }

.box {
  font-family: Verdana, Arial, Serif;
  color: white;
  width: 100px; height: 100px;
  background-color: red;
}</code></pre>
  </div>
  <div class="Split-column">
    <h4>New CSS</h4>
    <pre class="language-css"><code>
html, body {
  font-family: Verdana, Arial, Serif;
  color: black;
}

.box {
  color: white;
  width: 100px;
  height: 100px;
  background-color: red;
}</code></pre>
  </div>
</div>


------

## Resources
<!-- .slide: data-title="Cascading" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [W3C: CSS Cascading and Inheritance Level 3](http://www.w3.org/TR/css3-cascade/)
* [W3C: Appendix F. Full property table](http://www.w3.org/TR/CSS21/propidx.html)
* [CSS Specificity And Inheritance](http://www.smashingmagazine.com/2010/04/07/css-specificity-and-inheritance/) by [Inayaili de Leon](https://twitter.com/yaili)

Notes:
