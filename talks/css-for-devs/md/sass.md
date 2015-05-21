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

<pre class="language-scss"><code>
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
</code></pre>

------

## Nesting
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob" -->

<pre class="language-scss"><code>
nav {
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
}
</code></pre>

------

## Imports
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob" -->

<pre class="language-scss"><code>
/* base.scss */

@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
</code></pre>

------

## Mixins
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob" -->

<pre class="language-scss"><code>
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
</code></pre>

------

## Extend
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob" -->

<pre class="language-scss"><code>
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;

  border-color: green;
}
</code></pre>

------

## Extending Place Holders
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<pre class="language-scss"><code>
%message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend %message;

  border-color: green;
}
</code></pre>

------

## Scut
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

> "You can think of the word Scut as an acronym for Sass-CSS Utitilies. Or think of it this way: Scut will help you, the frontend laborer, do your scut work." --[Scut](https://davidtheclark.github.io/scut/)

------

## Scut
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<pre class="language-scss"><code>
.eg-absolute-2 {
  @include scut-absolute(n 0.5em 1em n);
}

.eg-margin-1 {
  @include scut-margin(1em n);
}
</code></pre>

------

## LibSass
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* Ruby Sass
* LibSass

[Sass Compatibility Guide](https://sass-compatibility.github.io/)

------

## Style Guidelines
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [CSS Tricks: Sass Style Guide](https://css-tricks.com/sass-style-guide/
)
* [Sass Guidelines](http://sass-guidelin.es/)

------

## Finding Unused Sass variables
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<pre class="language-bash"><code>
#!/usr/bin/env bash
# HOW TO USE
# Save code to file
# Run as "SCRIPT_FILE_NAME SASS_DIRECTORY"
# e.g "./find_unused_variables.sh ./sass"

VAR_NAME_CHARS='A-Za-z0-9_-'

find "$1" -type f -name "*.scss" -exec grep -o "\$[$VAR_NAME_CHARS]*" {} ';' | sort | uniq -u
</code></pre>

Source: [Finding unused SCSS variables](http://blog.gospodarets.com/finding_unused_scss_variables/)

------

## Resources
<!-- .slide: data-title="Sass" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* [Sass Compatibility Guide](https://sass-compatibility.github.io/)
* [CSS Tricks: Sass Style Guide](https://css-tricks.com/sass-style-guide/
)
* [Sass Guidelines](http://sass-guidelin.es/)
* [Scut](https://davidtheclark.github.io/scut/)

Notes:

https://medium.com/@drublic/learnings-from-using-sass-in-large-scale-projects-4a37d02acb6b
http://www.smashingmagazine.com/2015/05/04/extending-in-sass-without-mess/
