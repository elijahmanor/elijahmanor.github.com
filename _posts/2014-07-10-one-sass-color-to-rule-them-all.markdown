---
layout: post
title: One Sass Color to Rule Them All
date: '2014-07-10 05:01:00'
---

Have you ever gotten into the situation where you have a set of colors that are all quite similar, but you need each of them defined to create gradients, text shadows, borders, and the like?

For example, look at the following buttons. There are 3 variations of the button and each one uses a variety of different colors to control its look and feel.

#### Demo

<p data-height="88" data-theme-id="0" data-slug-hash="xsBuH" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/elijahmanor/pen/xsBuH/'>xsBuH</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

#### Sample Code

You might even end up having some Sass that look something like the following. Does this look familar to anything in your codebase?

<script src="https://gist.github.com/elijahmanor/ded683c456fb6ab08ec7.js?file=repetitive-colors.scss"></script>

#### Reaction

<img src="/assets/images/2014/Jul/frodo_sad.gif" style="float: right; margin-left: 1.5em;" /> If you are anything like Frodo, the sight of the above Sass code might have you shedding a tear or two yourself. However, don't fear, there is a better way!

### Refactor with a Mixin and 3 colors

Before we start addressing the color issue let's first refactor the Sass so it's moduldar. Step one will be to create a mixin to abstract the common set of Sass used in each button variation.

Our mixin will accept 3 color parameters that will serve as its base color, a darker color that will double as the border and a color-stop, and a third color that will be used for the text shadow.

#### Sample Code

<script src="https://gist.github.com/elijahmanor/ded683c456fb6ab08ec7.js?file=Button-theme-colors.scss"></script>

#### Reaction

<img src="/assets/images/2014/Jul/frodo_happier.gif" style="float: left; margin-right: 1.5em;" />

We can breath a little bit easier now that the repeated rules have been abstracted into a common Sass mixin.

The buttons are now the result of importing `Button-theme(#006dcc, #085191, #031b30)` for the primary button, `Button-theme(#5bb75b, #4f904f, #2b4e2b)` for the success button, and `Button-theme(#da4f49, #bb3a35, #BB3A35)` for the danger button. 

Things are a little bit more organized, but let's take a look at how we can make this even better and tackle the origional color issue.

### Refactor with a Mixin and 1 color

I really like the idea of having one color to rule them all...

<img src="/assets/images/2014/Jul/one_ring_wiggle.gif" style="float: right; margin-left: 1.5em;" />

> One Color to rule them all, One Color to find them,
One Color to bring them all and in the darkness bind them

But in all seriousness, I'd rather not require 3 different colors for every new button variation we decide to add to our styleguide. Instead, I'd rather progrmatically figure out the color variations based on one base color, which is exactly what we are going to do.

The following mixin uses a combination of the [`darken`](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) and [`desaturate`](http://sass-lang.com/documentation/Sass/Script/Functions.html#desaturate-instance_method) Sass functions to dynamically determine the other colors needed for our button. In addition to these functions, there are many other [Sass functions](http://sass-lang.com/documentation/Sass/Script/Functions.html#hsl_functions) that you can use to modify colors.

#### Sample Code

<script src="https://gist.github.com/elijahmanor/ded683c456fb6ab08ec7.js?file=Button-theme-color.scss"></script>

#### Reaction

<img src="/assets/images/2014/Jul/gandalf.gif" style="float: left; margin-right: 1.5em" />

The following buttons are the result of importing `Button-theme(#006dcc)` for the primary button, `Button-theme(#5bb75b)` for the success button, and `Button-theme(#da4f49)` for the danger button. The rest of the colors were determined during the Sass compilation process.

#### Demo

<p data-height="90" data-theme-id="0" data-slug-hash="pJKgD" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/elijahmanor/pen/pJKgD/'>pJKgD</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

The result of the updated mixin is the same as we had before we started refactoring all this color madness. Win, win, win!
