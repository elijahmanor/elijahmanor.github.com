# BEM
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> BEM's "...goal is to help developers better understand the relationship between the HTML and CSS in a given project." --[BEM 101](https://css-tricks.com/bem-101/) by [Joe Richardson](https://twitter.com/joericho)

Notes:

* http://www.sitepoint.com/working-bem-scale-advice-top-developers/

## Scenario
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> TODO: Put some scenario where dev looks to see why style isn't applied...

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
<!-- .slide: data-title="BEM" data-state="backEndBrian juniorJacob" -->

<pre class="language-css"><code>
/* Block */
.block-name {}

/* Element */
.block-name__element-name {}

/* Modifier */
.block-name--modifier-name {}

/* Element with Modifier */
.block-name__element-name--modifier-name {}</code></pre>

------

## Modified BEM Syntax for Usability
<!-- .slide: data-title="BEM" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<pre class="language-css"><code>
/* Block */
.BlockName {}

/* Element */
.BlockName-elementName {}

/* Modifier */
.BlockName--modifierName {}

/* Element with Modifier */
.BlockName-elementName--modifierName {}</code></pre>

Source: [A BEM syntax with UX in mind](http://simurai.com/blog/2013/10/24/BEM-syntax-with-ux-in-mind/)

------

## Media Example
<!-- .slide: data-title="BEM" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<pre class="language-css"><code>
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
}

.Media-title {
  margin: 0 0 .5em;
}

.Media-body {
  flex: 1;
}</code></pre>

------

## Sass @at-root
<!-- .slide: data-title="BEM" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<pre class="language-css"><code>
.block {
  @at-root #{&}__element {}
  @at-root #{&}--modifier {}
}</code></pre>

<pre class="language-css"><code>
.block {}
.block__element {}
.block--modifier {}</code></pre>

------

## Media Example with Sass
<!-- .slide: data-title="BEM" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<pre class="language-css"><code>
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
}</code></pre>

------

## Resources
<!-- .slide: data-title="BEM" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [Yandex BEM](https://en.bem.info/)
* [BEM 101](https://css-tricks.com/bem-101/) by [Joe Richardson](https://twitter.com/joericho)
* [A BEM syntax with UX in mind](http://simurai.com/blog/2013/10/24/BEM-syntax-with-ux-in-mind/)

Notes:
