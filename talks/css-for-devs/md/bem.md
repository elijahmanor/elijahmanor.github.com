# BEM
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> BEM's "...goal is to help developers better understand the relationship between the HTML and CSS in a given project." --[BEM 101](https://css-tricks.com/bem-101/) by [Joe Richardson](https://twitter.com/joericho)

Notes:

* http://www.sitepoint.com/working-bem-scale-advice-top-developers/

------

## Scenario
<!-- .slide: data-state="backEndBrian juniorJacob InProgress" -->

> TODO: Put some scenario where dev looks to see why style isn't applied...

------

## Origins
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> The BEM methodology was developed at Yandex with the following goals in mind:

1. <!-- .element class="fragment" --> Fast development and long-lasting results for standard projects
2. <!-- .element class="fragment" --> A project involves many people
3. <!-- .element class="fragment" --> Scalable teams
4. <!-- .element class="fragment" --> Code reuse

Source: [Origins of the BEM Methodology](https://en.bem.info/method/#origins-of-the-bem-methodology)

------

## So, What is BEM?
<!-- .slide: data-state="backEndBrian juniorJacob" -->

* **B**<!-- .element style="color: red" -->lock
* **E**<!-- .element style="color: red" -->lement
* **M**<!-- .element style="color: red" -->odifier

------

## Examples
<!-- .slide: data-state="backEndBrian juniorJacob InProgress" -->

TODO: show the official ways to name things

------

## Modified BEM Syntax for Usability
<!-- .slide: data-state="backEndBrian juniorJacob midLevelMelissa InProgress" -->


TODO: Show the Modified syntax that we use

------

## Media Example
<!-- .slide: data-state="backEndBrian juniorJacob midLevelMelissa InProgress" -->

TODO: Show media example with the modified syntax

------

## Media Example with Sass
<!-- .slide: data-state="backEndBrian juniorJacob midLevelMelissa InProgress" -->

```
.block {
  @at-root #{&}__element {
  }
  @at-root #{&}--modifier {
  }
}
```

```
.block {
}
.block__element {
}
.block--modifier {
}
```

## Media Example with Sass
<!-- .slide: data-state="backEndBrian juniorJacob midLevelMelissa InProgress" -->

```
.Media {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1em;

  &--center {
    align-items: center
  }

  &-figure {
    margin-right: 1em;

    &--modifier {
      color: blue;
    }
  }

  &-title {
    margin: 0 0 .5em;
  }

  &-body {
    flex: 1;
  }
}
```

------

## Sass
<!-- .slide: data-state="backEndBrian juniorJacob midLevelMelissa InProgress" -->

Parent Selector with a Suffix

```
.Media {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1em;

  &--center {
    align-items: center
  }

  &-figure {
    margin-right: 1em;

    &--modifier {
      color: blue;
    }
  }

  &-title {
    margin: 0 0 .5em;
  }

  &-body {
    flex: 1;
  }
}
```

------

## Resources
<!-- .slide: data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [Yandex BEM](https://en.bem.info/)
* [BEM 101](https://css-tricks.com/bem-101/) by [Joe Richardson](https://twitter.com/joericho)


Notes:
