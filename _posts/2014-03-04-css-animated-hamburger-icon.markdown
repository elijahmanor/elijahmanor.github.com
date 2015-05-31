---
layout: post
title: CSS Animated Hamburger Icon
date: '2014-03-04 03:57:00'
---

## Problem

I've been working more on mobile web these days and thought it would be fun to animate the prolific hamburger nav icon.

## Non-Animated CSS Hamburger Icon

You could use [Font Awesome](http://fortawesome.github.io/Font-Awesome/icon/bars/) or an image to represent the hamburger, but those aren't necessary. Instead, you can create a version of the hamburger only using CSS and the following markup.

<script src="https://gist.github.com/elijahmanor/9331778.js?file=index.html"></script>

The following CSS will make the span the meat of the hamburger and the before and after pseudo-elements will serve as the buns.

<script src="https://gist.github.com/elijahmanor/9331778.js?file=style.css"></script>

The above HTML and CSS are visually represented in the following CodePen. Nothing fancy here, just a hamburger icon... but this does lead us into our next section on animation.

<p data-height="268" data-theme-id="0" data-slug-hash="GxCAn" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/elijahmanor/pen/GxCAn'>GxCAn</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

## Animated CSS Hamburger Icon

Now, we get to the fun stuff... let's animate this hamburger icon! The intent we are going for is to change the hamburger into an `X` so the user knows to click it again to close the menu.

In CSS we are using a `transition` and `transform` to `rotate` the before and after psuedo-elements and fade-out the middle bar to create our `X` shape.

> Note: I am using `transition` and `transform`, which is supported in [IE10+ & other browsers](http://caniuse.com/#feat=css-transitions). If you really wanted oldIE support, then you could use a jQuery fallback or some other JavaScript solution.

<script src="https://gist.github.com/elijahmanor/9331915.js?file=style.css"></script>

> Note: The CodePen is using [-prefix-free](http://leaverou.github.io/prefixfree/), which automatically adds any necessary vendor prefixes. 

In order to kick off our animation we can toggle a class on our hamburger when the user clicks with the following JavaScript.

<script src="https://gist.github.com/elijahmanor/9331915.js?file=script.js"></script>

> Note: [`classList`](http://beta.caniuse.com/#feat=classlist) as limited support (IE10+ & other browsers). You could easily use a [jQuery snippet](https://gist.github.com/elijahmanor/9331915#file-jquery-js) instead or provide a polyfill via [HTML5 Please](http://html5please.com/).

The following is an example of the above CSS Hamburger icon along with the CSS animation. You'll need to click on the hamburger to invoke the animation.

<p data-height="268" data-theme-id="0" data-slug-hash="Igpoe" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/elijahmanor/pen/Igpoe'>CSS Animated Hamburger Icon</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<script async src="//codepen.io/assets/embed/ei.js"></script>

## Conclusion

I hope you enjoyed this brief look into CSS peudo-elements and animation. I didn't go into a lot of detail of exactly how everything is put together. To dig deeper with these concepts I encourage you to look into the following resources...

* [CSS3 Transitions, Transforms, Animation, Filters and more!](http://css3.bradshawenterprises.com/) by Rich Bradshaw ([@richbradshaw](http://twitter.com/richbradshaw))
* [Video Screencasts - #94: Intro to Pseudo Elements](http://css-tricks.com/video-screencasts/94-intro-to-pseudo-elements/) by Chris Coyier ([@chriscoyier](http://twitter.com/chriscoyier))