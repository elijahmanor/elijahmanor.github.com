---
layout: post
title: Dynamic Repeating Sass Colors
date: '2015-03-19 17:50:56'
---

I've recently added a new feature to [EveryDollar](http://everydollar.com) that involved creating a donut chart with an associated colorful legend. The mock-ups had a few colors represented, but I soon wondered what colors should I should used if more items existed.

After talking with the designer, we decided that there would be an initial set of predefined colors (<span style="background-color: #56c7fa;">`#56c7fa`</span>, <span style="background-color: #f76540;">`#f76540`</span>, <span style="background-color: #ffcb05;">`#ffcb05`</span>, <span style="background-color: #62cd9f;">`#62cd9f`</span>, <span style="background-color: #b67baa;">`#b67baa`</span>) that would gradually get darker (<span style="background-color: #068dcb;">`#068dcb`</span>, <span style="background-color: #b02907;">`#b02907`</span>, <span style="background-color: #846900;">`#846900`</span>, <span style="background-color: #2a855e;">`#2a855e`</span>, <span style="background-color: #723f68;">`#723f68`</span>) and then cycle back around if more were needed.

## Dynamic Sass Colors

So, I first assigned the initial set of colors to a Sass list (`$chartColors`) and iterated over them and appended a sligtly darker version of each one to the list. Thanks to built-in Sass directives and functions ([`for`](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_10), [`append`](http://sass-lang.com/documentation/Sass/Script/Functions.html#append-instance_method), and [`darken`](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method)) that didn't prove to be too difficult. 

<script src="https://gist.github.com/elijahmanor/29c80c3f76f7690425e2.js?file=colors.scss"></script>

## CSS Repeating Colors

In order to cycle through the final list of colors I used the `:nth-of-type` pseudo-class in CSS ([supported in IE9+](http://caniuse.com/#feat=css-sel3) and all other major browser versions).  The selector `.color:nth-of-type(10n+3) { background-color: #ffcb05; }` sets the background color of the 3rd, 13th, 23rd, 33rd, etc... `.color` elements to <span style="background-color: #ffcb05;">`#ffcb05`</span>.

<script src="https://gist.github.com/elijahmanor/29c80c3f76f7690425e2.js?file=repeated-colors.css"></script>

#### Resources

* [How nth-child Works](https://css-tricks.com/how-nth-child-works/) by [Chris Coyier](http://twitter.com/chriscoyier)
* [Mastering the :nth-child](http://nthmaster.com/)

## Sass Repeating Colors

Using a simple Sass [`for`](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_10) loop I was able to create the 10 selectors needed to target our dynamically supported colors and enable them to continually cycle (using `:nth-of-type`) if there are lots of chart elements. 

<script src="https://gist.github.com/elijahmanor/29c80c3f76f7690425e2.js?file=repeated-colors.scss"></script>

## Demo

Here is a demo of all the pieces working together. You'll notice that the `color` logic is completely outside the HTML markup (`<div class="color"></div>`). Sass is doing most of the manual work during the procompilation step and the resulting CSS `:nth-of-type` pseudo-classes are the magic that takes over during runtime. 

<p data-height="317" data-theme-id="0" data-slug-hash="jEKMbg" data-default-tab="result" data-user="elijahmanor" class='codepen'>See the Pen <a href='http://codepen.io/elijahmanor/pen/jEKMbg/'>jEKMbg</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>