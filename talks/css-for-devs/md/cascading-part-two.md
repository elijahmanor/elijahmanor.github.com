# Cascading: Part 2

> "The cascade is tied to three main concepts: importance, specificity and source order." --[CSS Specificity And Inheritance](http://www.smashingmagazine.com/2010/04/07/css-specificity-and-inheritance/) by [Inayaili de Leon](https://twitter.com/yaili)

------

## Scenario
<!-- .slide: data-title="Cascading: Part 2" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column">
    <div class="fragment">
      <h4>Your text was green, but you wanted blue.</h4>
      <textarea data-codemirror data-mode="text/html" data-line-numbers="false">
<div class="redClass greenClass"></div></textarea>
    </div>
    <div class="fragment">
      <h4>So you added a class that has blue text...</h4>
      <textarea data-codemirror data-mode="text/html" data-line-numbers="false">
<div class="redClass greenClass blueClass"></div></textarea>
    </div>
  </div>
  <div class="Split-column">
    <div class="fragment">
      <h4>But it didn't work so you did this...</h4>
      <textarea data-codemirror data-mode="text/html" data-line-numbers="false">
<div class="redClass greenClass blueClass blueClass"></div></textarea>
    </div>
    <div class="fragment">
      <h4>Or maybe you tried this...</h4>
      <pre data-codemirror data-mode="text/css" data-line-numbers="false">.blueClass {
  color: blue !important;
}</pre>
    </div>
  </div>
</div>

------

## Cascading Order
<!-- .slide: data-title="Cascading: Part 2" data-state="backEndBrian juniorJacob" -->

> "Finally, sort by order specified: if two declarations have the same weight, origin and specificity, __the latter specified wins__. Declarations in imported style sheets are considered to be before any declarations in the style sheet itself." --[www.w3.org](https://www.w3.org/TR/CSS2/cascade.html#cascading-order)

------

## Scenario 1
<!-- .slide: data-title="Cascading: Part 2" data-state="backEndBrian juniorJacob" -->

<style>
.CascadingPartTwo-blueClass--scenario1 { color: blue; }
.CascadingPartTwo-redClass--scenario1 { color: red; }
.CascadingPartTwo-greenClass--scenario1 { color: #61CE3C; }
</style>
<div class="Split">
  <div class="Split-column Split-column--55">
    <pre data-codemirror data-mode="text/html">
<div class="redClass greenClass blueClass"></div>
</pre>
    <pre data-codemirror data-mode="text/css">
.blueClass { color: blue; }
.redClass { color: red; }
.greenClass { color: green; }
</pre>
  </div>
  <div class="Split-column Split-column--45">
    <div class="Split-box CascadingPartTwo-redClass--scenario1 CascadingPartTwo-greenClass--scenario1 CascadingPartTwo-blueClass--scenario1">What color am I?</div>
    <div class="fragment" style="text-align: left; margin-top: 1rem;">Since the classes share the same specificity, precedence goes to the last specificed (`green`)</div>
  </div>
</div>

------

## Scenario 2: Change Order
<!-- .slide: data-title="Cascading: Part 2" data-state="backEndBrian juniorJacob" -->

<style>
.CascadingPartTwo-redClass--scenario2 { color: red; }
.CascadingPartTwo-greenClass--scenario2 { color: #61CE3C; }
.CascadingPartTwo-blueClass--scenario2 { color: blue; }
</style>
<div class="Split">
  <div class="Split-column Split-column--55">
    <pre data-codemirror data-mode="text/html">
<div class="redClass greenClass blueClass"></div>
</pre>
    <pre data-codemirror data-mode="text/css">
/\* Change the order of declarations \*/
.redClass { color: red; }
.greenClass { color: green; }
.blueClass { color: blue; }
</pre>
  </div>
  <div class="Split-column Split-column--45">
    <div class="Split-box CascadingPartTwo-redClass--scenario2 CascadingPartTwo-greenClass--scenario2 CascadingPartTwo-blueClass--scenario2">What color am I?</div>
    <div class="fragment" style="text-align: left; margin-top: 1rem;">Since we moved the `blueClass` to the end, precedence goes to that one (`blue`)</div>
  </div>
</div>

------

## Scenario 3: Make More Specific
<!-- .slide: data-title="Cascading: Part 2" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<style>
.CascadingPartTwo-blueClass--scenario3.CascadingPartTwo-blueClass--scenario3 { color: blue; }
.CascadingPartTwo-redClass--scenario3 { color: red; }
.CascadingPartTwo-greenClass--scenario3 { color: #61CE3C; }
</style>
<div class="Split">
  <div class="Split-column Split-column--55">
    <pre data-codemirror data-mode="text/html">
<div class="redClass greenClass blueClass"></div>
</pre>
    <pre data-codemirror data-mode="text/css">
/\* Make more specific \*/
.blueClass.blueClass {
  color: blue;
}
.redClass { color: red; }
.greenClass { color: green; }
</pre>
  </div>
  <div class="Split-column Split-column--45">
    <div class="Split-box CascadingPartTwo-redClass--scenario3 CascadingPartTwo-greenClass--scenario3 CascadingPartTwo-blueClass--scenario3">What color am I?</div>
    <div class="fragment" style="text-align: left; margin-top: 1rem;">Since we made the `blueClass` selector a tiny bit more specific than the others, precedence goes to that one (`blue`)</div>
  </div>
</div>

------

## Scenario 4: Important! 🤷‍♂️
<!-- .slide: data-title="Cascading: Part 2" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<style>
.CascadingPartTwo-blueClass--scenario4 { color: blue !important; }
.CascadingPartTwo-redClass--scenario4 { color: red; }
.CascadingPartTwo-greenClass--scenario4 { color: #61CE3C; }
</style>
<div class="Split">
  <div class="Split-column Split-column--55">
    <pre data-codemirror data-mode="text/html">
<div class="redClass greenClass blueClass"></div>
</pre>
    <pre data-codemirror data-mode="text/css">
/\* Make WAY more specific \*/
.blueClass {
  color: blue !important;
}
.redClass { color: red; }
.greenClass { color: green; }
</pre>
  </div>
  <div class="Split-column Split-column--45">
    <div class="Split-box CascadingPartTwo-redClass--scenario4 CascadingPartTwo-greenClass--scenario4 CascadingPartTwo-blueClass--scenario4">What color am I?</div>
    <div class="fragment" style="text-align: left; margin-top: 1rem;">Since we used `!important` in the `blueClass` selector it'll take precedence (`blue`)</div>
  </div>
</div>

------

## Importing Stylesheet
<!-- .slide: data-title="Cascading: Part 2" data-state="backEndBrian juniorJacob midLevelMelissa" -->

For this reason, it's considered best practice to add your custom CSS after external or 3rd party styles to give you an opportunity to override them.

<textarea data-codemirror data-mode="text/html">
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<style>
  .btn {
    border-radius: 0;
  }
</style>
</textarea>

------

## Resources
<!-- .slide: data-title="Cascading: Part 2" data-state="backEndBrian juniorJacob midLevelMelissa resources" -->

* [W3C: CSS Cascading and Inheritance Level 3](http://www.w3.org/TR/css3-cascade/)
* [W3C: Appendix F. Full property table](http://www.w3.org/TR/CSS21/propidx.html)
* [CSS Specificity And Inheritance](http://www.smashingmagazine.com/2010/04/07/css-specificity-and-inheritance/) by [Inayaili de Leon](https://twitter.com/yaili)

Notes:
