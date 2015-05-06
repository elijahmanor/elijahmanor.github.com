# BEM
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> TODO: Quote here...

Notes:

* http://www.sitepoint.com/working-bem-scale-advice-top-developers/

------

## Scenario

> TODO: Put some scenario where dev looks to see why style isn't applied...

------

## Resources
<!-- .slide: data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [x](#)

Notes:

https://css-tricks.com/bem-101/

For those of you writing Sass and enjoy nesting as a way of scoping styles, you can still author in a nested format, but get CSS that isn't nested, with @at-root:

.block {
  @at-root #{&}__element {
  }
  @at-root #{&}--modifier {
  }
}

.block {
}
.block__element {
}
.block--modifier {
}

https://sass-compatibility.github.io/#at_root_directive

3.3
parent selector with a suffix

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

.Media-body,
.Media-body :last-child {
  margin-bottom: 0
}

.Media--reverse > .Media-figure {
  order: 1;
  margin: 0 0 0 1em
}
