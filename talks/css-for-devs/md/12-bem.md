# BEM

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
