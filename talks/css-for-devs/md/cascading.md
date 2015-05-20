# Cascading
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> "The notion of a “cascade” is at the heart of CSS (just look at its name). It ultimately determines which properties will modify a given element. The cascade is tied to three main concepts: importance, specificity and source order." --[CSS Specificity And Inheritance](http://www.smashingmagazine.com/2010/04/07/css-specificity-and-inheritance/) by [Inayaili de Leon](https://twitter.com/yaili)

------

## Scenario
<!-- .slide: data-state="backEndBrian juniorJacob InProgress" -->

<!-- TODO: Put some scenario where dev looks to see why style isn't applied... -->

<pre class="language-css"><code>
.container {
border: 1px solid blue; padding: 25px;
position: relative;
}
.box {
width: 100px; height: 100px;
margin: 5px auto; background: red;
border: 1px solid white;
}
.box2 {
position: fixed; top: 0; left: 0;
}</code></pre>


Show example of repeated styles over and over again that aren't needed... like fonts and colors (that could be cascaded)

------

## Importance
<!-- .slide: data-state="backEndBrian juniorJacob" -->

### Sources

1. User Agent <p>Each browser provides its own default style sheet</p>

2. User <p>Specific user overrides specifies via browser options</p>

3. Author <p>Developer specified style sheets (in document or external)</p>

Resource: [W3C: The Cascade](http://www.w3.org/TR/CSS2/cascade.html#cascade)

------

## Importance
<!-- .slide: data-state="backEndBrian juniorJacob" -->

### Priority <small>(lowest to highest)</small><!-- .element style="vertical-align: middle;" -->

1. User Agent's Stylesheet
2. User's Stylesheet
3. Author's Stylesheet
4. Author's !important rules
5. User's !important rules

Resource: [W3C: The Cascade](http://www.w3.org/TR/CSS2/cascade.html#cascade)

------

## CSS Resets & Normalize
<!-- .slide: data-state="backEndBrian juniorJacob InProgress" -->

TODO: Talk about the need for these... with regards to previous slide

------

## [Cascaded properties](http://www.w3.org/TR/CSS21/propidx.html)
<!-- .slide: data-state="backEndBrian juniorJacob" -->

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

## Making Non-Inherited Properties Cascade
<!-- .slide: data-state="backEndBrian juniorJacob midLevelMelissa InProgress" -->

TODO: code snippet showing the inherit value

------

## Leveraging the Cascade
<!-- .slide: data-state="backEndBrian juniorJacob InProgress" -->

TODO: Write some sample code that uses better practices to take advantage of CSS cascade

------

## Resources
<!-- .slide: data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [W3C: CSS Cascading and Inheritance Level 3](http://www.w3.org/TR/css3-cascade/)
* [W3C: Appendix F. Full property table](http://www.w3.org/TR/CSS21/propidx.html)
* [CSS Specificity And Inheritance](http://www.smashingmagazine.com/2010/04/07/css-specificity-and-inheritance/) by [Inayaili de Leon](https://twitter.com/yaili)

Notes:
