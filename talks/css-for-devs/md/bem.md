# BEM
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> BEM's "...goal is to help developers better understand the relationship between the HTML and CSS in a given project." --[BEM 101](https://css-tricks.com/bem-101/) by [Joe Richardson](https://twitter.com/joericho)

Notes:

* http://www.sitepoint.com/working-bem-scale-advice-top-developers/

## Scenario
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> TODO: Put some scenario where dev looks to see why style isn't applied...

------

<!-- .slide: data-title="BEM" data-state="backEndBrian juniorJacob" -->

<blockquote>
<a href="https://twitter.com/addyosmani/status/634779064335794180">"When you try deleting a line of CSS..."</a> &mdash; Addy Osmani (@addyosmani)
</blockquote>

<img src="./imgs/css-jinga.gif" style="height: 450px;" />

------

## Origins
<!-- .slide: data-title="BEM" data-state="backEndBrian juniorJacob" -->

> The BEM methodology was developed at Yandex with the following goals in mind:

1. <!-- .element class="fragment" --> Fast development and long-lasting results for standard projects
2. <!-- .element class="fragment" --> A project involves many people
3. <!-- .element class="fragment" --> Scalable teams
4. <!-- .element class="fragment" --> Code reuse

Source: [Origins of the BEM Methodology](https://en.bem.info/method/#origins-of-the-bem-methodology)

------

## So, What is BEM?
<!-- .slide: data-title="BEM" data-state="backEndBrian juniorJacob" -->

* **B**<!-- .element style="color: red" -->lock
* **E**<!-- .element style="color: red" -->lement
* **M**<!-- .element style="color: red" -->odifier

------

## Examples
<!-- .slide: data-title="BEM" data-state="backEndBrian juniorJacob codeMirror--xlg" -->

<pre data-codemirror data-mode="text/css">
/* Block */
.block-name {}

/* Element */
.block-name__element-name {}

/* Modifier */
.block-name--modifier-name {}

/* Element with Modifier */
.block-name__element-name--modifier-name {}</pre>

------

### Modified BEM Syntax for Usability
<!-- .slide: data-title="BEM" data-state="backEndBrian juniorJacob midLevelMelissa codeMirror--xlg" -->

<pre data-codemirror data-mode="text/css">
/* Block */
.BlockName {}

/* Element */
.BlockName-elementName {}

/* Modifier */
.BlockName--modifierName {}

/* Element with Modifier */
.BlockName-elementName--modifierName {}</pre>

Source: [A BEM syntax with UX in mind](http://simurai.com/blog/2013/10/24/BEM-syntax-with-ux-in-mind/)

------

## Media Example
<!-- .slide: data-title="BEM" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split">
  <div class="Split-column">
    <pre data-codemirror data-mode="text/css" data-line-numbers="false">
.Media {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1em;
}

.Media--center {
  align-items: center
}

.Media-figure {
  margin-right: 1em;
}</pre>
  </div>
  <div class="Split-column Split-column--60">
    <textarea data-codemirror data-mode="text/css" data-line-numbers="false">
.Media-title {
  margin: 0 0 .5em;
}

.Media-body { flex: 1; }

.Media--reverse > .Media-figure {
  order: 1;
  margin: 0 0 0 1em;
}</textarea>
    <textarea data-codemirror data-mode="text/html" data-line-numbers="false">
<div
  class="Media Media--reverse">
  <!-- ... more ... -->
</div></textarea>
  </div>
</div>

------

## Sass @at-root
<!-- .slide: data-title="BEM" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<textarea data-codemirror data-mode="text/css">
.block {
  @at-root #{&}__element {}
  @at-root #{&}--modifier {}
}</textarea>

<pre data-codemirror data-mode="text/css">
.block {}
.block__element {}
.block--modifier {}</pre>

------

## Sass 3.3 Parent Selector
<!-- .slide: data-title="BEM" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<textarea data-codemirror data-mode="text/css">.block {
  &-element {}
  &--modifier {}
}</textarea>

<pre data-codemirror data-mode="text/css">.block {}
.block-element {}
.block--modifier {}</pre>

------

## Media Example with Sass
<!-- .slide: data-title="BEM" data-state="backEndBrian juniorJacob midLevelMelissa overflowYScroll" -->

<textarea data-codemirror data-mode="text/css">
.Media {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1em;

  &--center {
    align-items: center
  }

  &-figure {
    margin-right: 1em;
  }

  &-title {
    margin: 0 0 .5em;
  }

  &-body {
    flex: 1;
  }
}</textarea>

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

------

## Resources
<!-- .slide: data-title="BEM" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [Yandex BEM](https://en.bem.info/)
* [BEM 101](https://css-tricks.com/bem-101/) by [Joe Richardson](https://twitter.com/joericho)
* [A BEM syntax with UX in mind](http://simurai.com/blog/2013/10/24/BEM-syntax-with-ux-in-mind/)

Notes:
