---
layout: post
title: Using Nested Sass Maps for TypeSetting
date: '2014-07-07 05:01:00'
---

If you've written much CSS then you've probably gotten into the situation where multiple styles are repeated throughout your project. Trying to make a global change in that environment can become **VERY** cumbersome to say the least.

<script src="https://gist.github.com/elijahmanor/9409ba1f97b189fff5a6.js?file=SassMeister-input.scss"></script>

The above example defines a group of type settings over and over again across multiple rule sets. You'll most likely find that as your stylesheets get larger and more complex it will become increasingly more difficult to maintain something like this.

## Using Sass Placeholder Selectors

One way to solve this problem is to define unique a [placeholder selector](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholders) for each Type Setting configuration. These placeholder selectors aren't meant to used by your HTML directly, but rather to be extended with Sass.

<script src="https://gist.github.com/elijahmanor/353daff18bd0e00900f7.js?file=SassMeister-input.scss"></script>

<a href="http://sassmeister.com/gist/353daff18bd0e00900f7">Play with this gist on SassMeister.</a>

This technique allows you to `@extend` the appropriate Type Setting where ever you might need it. The nice thing here is that within the `.Hero-heading` rule set you can reuse the predefined `%secondary-heading` placeholder selector.

This technique (and those below) can be helpful if you have defined a set of approved font guidelines (size, weight, etc) and you want to abide by them across your web application.

## Using Sass 3.2 Nested Lists

Instead of using placeholder selectors, we could refactor the above Sass and write a custom mixin with nested lists to define our various type settings. 

The `typeset` mixin has a parameter of `$level` that is defaulted to `body-copy` if not provided. The `$types` variable stores a nested list containing the type settings for `primary-heading`, `secondary-heading`, and `body-copy`. The mixin loops over the list looking for a match to the passed in `$level` and then picks apart the type metatdata for that entry. 

<script src="https://gist.github.com/elijahmanor/8a6d81b73f3331b1b691.js?file=SassMeister-input.scss"></script>

<a href="http://sassmeister.com/gist/8a6d81b73f3331b1b691">Play with this gist on SassMeister.</a>

This solution isn't very elegant, but it is much more powerful and flexible than the previous placeholder selector version. One of the downsides of this approach is the rigid nature of placing CSS properties at hard-coded indexes (example: `font-size` at the 2nd index of each nested list). In addition the above mixin is getting somewhat complex and could be difficult to grok over time.

## Using Sass 3.3 Maps

Version 3.3 of Sass included a new data structure called the `map`. This enables you to organize data with a familiar key/value type of structure. Along with the `map` feature came a slew of [helper functions](http://sass-lang.com/documentation/Sass/Script/Functions.html#map-functions) that are very helpful.

The following Sass snippet is a refactored version of the above `typeset` mixin, but this time using nested maps. 

<script src="https://gist.github.com/elijahmanor/fd586b18ae44e266de28.js?file=SassMeister-input.scss"></script>

<a href="http://sassmeister.com/gist/fd586b18ae44e266de28">Play with this gist on SassMeister.</a>

Thanks to the `map-get` and `map-has-key` functions the above mixin code is dramatically cleaner than the previous nested list version. I've enjoyed playing with the new map data type and have found it be very powerful.

## Conclusion

Whatever solution you use, I encourage you to treat your Sass as you would your code. Think modularity, reusability, and maintainability!




