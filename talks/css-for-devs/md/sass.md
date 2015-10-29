# Sass
<!-- .slide: data-state="backEndBrian juniorJacob" -->

> "CSS with superpowers" --[Sass](http://sass-lang.com/)

<!--

## Scenario

TODO: show some nasty code with colors everywhere some crazy selectors, yada yada

-->

------

## Variables
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob" -->

<pre data-codemirror data-mode="text/x-sass">$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}</pre>

------

## Nesting
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob" -->

<pre data-codemirror data-mode="text/x-sass">nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}</pre>

------

## ...but, not too deep!
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column fragment">
    <h3>Sass</h3>
    <pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">.widget {
  .links {
    li {
      a { color: #F00; }
    }
  }
}</pre>
  </div>
  <div class="Split-column fragment">
    <h3>CSS</h3>
    <pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">.widget .links li a {
  color: #F00;
}</pre>
    <div class="Specificity fragment">
      <div class="Specificity-score">
        <div class="Specificity-value Specificity-value--inline">0</div>
        <div class="Specificity-value Specificity-value--ids">0</div>
        <div class="Specificity-value Specificity-value--classes">2</div>
        <div class="Specificity-value Specificity-value--elements">2</div>
      </div>
    </div>
  </div>
</div>

------

## Imports
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob" -->

<pre data-codemirror data-mode="text/x-sass">/* base.scss */

@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}</pre>

<small>Note: These are not the same as CSS `@import`</small>

------

## Mixins
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob" -->

<div class="Split">
  <div class="Split-column Split-column--65 fragment">
    <pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">@mixin center ($axis: false) {
  position: absolute;

  @if not($axis) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @else if $axis == x {
    left: 50%;
    transform: translateX(-50%);
  }
  @else if $axis == y {
    top: 50%;
    transform: translateY(-50%);
  }
}</pre>
  </div>
  <div class="Split-column Split-column--35 fragment">
    <pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">.Widget {
  @include center;
}

.Widget--x {
  @include center(x);
}

.Widget--y {
  @include center(y);
}</pre>
  </div>
</div>

------

## Mixin history
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* <!-- .element: class="fragment" data-fragment-index="1" -->Lots of libraries have mixins that will add vendor prefixes (`-webkit-`, `-moz-`, `-o-`, `-ms-`)
* <!-- .element: class="fragment" data-fragment-index="2" -->These libraries would often generically add all vendor prefixes even if not necessary
* <!-- .element: class="fragment" data-fragment-index="3" -->These days you don't need mixins... you can use [Autoprefixer](https://github.com/postcss/autoprefixer) to code to the spec and let [Can I Use](http://caniuse.com) figure out what is needed for what

------

## Pure CSS using [Autoprefixer](https://github.com/postcss/autoprefixer)
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<pre data-codemirror data-mode="text/css">
.example {
  display: flex;
  transition: all .5s;
  user-select: none;
  background: linear-gradient(to bottom, white, black);
}</pre>

<pre data-codemirror data-mode="text/css">
.example {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition: all .5s;
          transition: all .5s;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background: -webkit-linear-gradient(top, white, black);
  background: linear-gradient(to bottom, white, black);
}</pre>

------

## Extend
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split">
  <div class="Split-column fragment">
    <h3>Sass</h3>
    <pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;

  border-color: green;
}</pre>
  </div>
  <div class="Split-column fragment">
    <h3>CSS</h3>
    <pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">.message, .success {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}</pre>
  </div>
</div>


------

## ..but, be careful
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split">
  <div class="Split-column fragment">
    <h3>Sass</h3>
    <pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">.widget {
  color: blue;
}

.widget + .widget {
  color: red;
}

.superWidget {
  @extend .widget;

  border-color: blue;
}</pre>
  </div>
  <div class="Split-column fragment">
    <h3>CSS</h3>
    <pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">.widget, .superWidget {
  color: blue;
}

.widget + .widget, .superWidget + .widget, .widget + .superWidget, .superWidget + .superWidget {
  color: red;
}

.superWidget {
  border-color: blue;
}</pre>
  </div>
</div>

------

## Extending Place Holders
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split">
  <div class="Split-column fragment">
    <h3>Sass</h3>
    <pre data-codemirror data-mode="text/x-sass" data-lines="0,9" data-line-numbers="true">%widget, .widget {
  color: blue;
}

.widget + .widget {
  color: red;
}

.superWidget {
  @extend %widget;

  border-color: blue;
}
</pre>
  </div>
  <div class="Split-column fragment">
    <h3>CSS</h3>
    <pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">.superWidget, .widget {
  color: blue;
}

.widget + .widget {
  color: red;
}

.superWidget {
  border-color: blue;
}
</pre>
  </div>
</div>

------

## [Scut <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](https://davidtheclark.github.io/scut/index.html)
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

> "You can think of the word Scut as an acronym for Sass-CSS Utitilies. Or think of it this way: Scut will help you, the frontend laborer, do your scut work." --[Scut](https://davidtheclark.github.io/scut/)

------

## [Scut <sup><svg style="width: 1rem; height: 1rem;" fill="white" xmlns="http://www.w3.org/2000/svg" data-icon="external-link" viewBox="0 0 16 20"><path d="M11 0l1.78 1.78-.5.5-4 4-.687.72L9 8.406l.718-.688 4-4 .5-.5 1.78 1.78V0h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"/></svg></sup>](https://davidtheclark.github.io/scut/index.html)
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split">
  <div class="Split-column Split-column--75 fragment">
    <h3>Sass</h3>
    <pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">.eg-absolute-2 {
  @include
    scut-absolute(n .5em 1em n);
}

.eg-margin-1 {
  @include scut-margin(1em n);
}</pre>
  </div>
  <div class="Split-column fragment">
    <h3>CSS</h3>
    <pre data-codemirror data-mode="text/x-sass" data-line-numbers="false">.eg-absolute-2 {
  position: absolute;
  right: 0.5em;
  bottom: 1em;
}

.eg-margin-1 {
  margin-top: 1em;
  margin-bottom: 1em;
}</pre>
  </div>
</div>

------

## LibSass
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* Ruby Sass
* LibSass

<a href="https://sass-compatibility.github.io/" data-preview-link>Sass Compatibility Guide</a>

------

## Style Guidelines
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [CSS Tricks: Sass Style Guide](https://css-tricks.com/sass-style-guide/
)
* [Sass Guidelines](http://sass-guidelin.es/)

------

## Finding Unused Sass variables
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<pre data-codemirror data-mode="text/x-sh">#!/usr/bin/env bash
# HOW TO USE
# Save code to file
# Run as "SCRIPT_FILE_NAME SASS_DIRECTORY"
# e.g "./find_unused_variables.sh ./sass"

VAR_NAME_CHARS='A-Za-z0-9_-'

find "$1" -type f -name "*.scss" -exec grep -o "\$[$VAR_NAME_CHARS]*" {} ';' | sort | uniq -u</pre>

<pre data-codemirror data-mode="text/x-sh">./find_unused_variables.sh src/assets/stylesheets/
$card-height-active
$card-height
$font-family-serif
</pre>

Source: [Finding unused SCSS variables](http://blog.gospodarets.com/finding_unused_scss_variables/)

------

## Resources
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [Sass Compatibility Guide](https://sass-compatibility.github.io/)
* [CSS Tricks: Sass Style Guide](https://css-tricks.com/sass-style-guide/
)
* [Sass Guidelines](http://sass-guidelin.es/)
* [Scut](https://davidtheclark.github.io/scut/)
* [Autoprefixer](https://github.com/postcss/autoprefixer)

Notes:

https://medium.com/@drublic/learnings-from-using-sass-in-large-scale-projects-4a37d02acb6b
http://www.smashingmagazine.com/2015/05/04/extending-in-sass-without-mess/
