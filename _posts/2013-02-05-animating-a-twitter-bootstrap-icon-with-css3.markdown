---
layout: post
title: Animating a Twitter BootStrap Icon with CSS3
date: '2013-02-05 06:05:00'
---

<h2>
Introduction</h2>

So, I was already using <a href="http://twitter.github.com/bootstrap/">Twitter Bootstrap</a> on a project recently and I had a refresh icon that I wanted to use a button. The markup for my icon looked very much like the following snippet...

<script src="https://gist.github.com/elijahmanor/4617496.js?file=fiddle.html"></script>
The previous markup renders as the following...

<iframe style="width: 100%; height: 100px" src="http://jsfiddle.net/uDCDh/embedded/result,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

That is all fine and dandy, however, I thought it would be neat if the refresh icon would rotate when the clicked until that action was complete. 

To implement this feature I decided to use a CSS3 animation.

<blockquote>
Note: At the time of writing this CSS3 animation is currently supported in IE10, Firefox 16+, Chrome 23+, Safari 5.1+, Opera 12.1+, iOS 3.2+, Android 2.1+, & Blackberry 7.0+ <a href="http://caniuse.com/#feat=css-animation"><small>Reference: Can I Use?</small></a></blockquote>

<h2>
CSS3 Animation</h2>

If you don't already know about CSS3 Animation you can pick up a primer at the following locations...

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/CSS/Tutorials/Using_CSS_animations">MDN: Using CSS Animations</a></li>
<li><a href="http://coding.smashingmagazine.com/2011/09/14/the-guide-to-css-animation-principles-and-examples/">The Guide to CSS Animation Principles and Examples</a> by <a href="https://twitter.com/2dforever">Tom WaterHouse</a></li>
</ul>

I ended up using the following CSS to get the animation to work...

<script src="https://gist.github.com/elijahmanor/4617496.js?file=fiddle-standard.css"></script>
<blockquote>
Note: You may have noticed that I'm not using vendor prefixes in the above CSS. For this demo I am using only the standard prefix-free styles and using <a href="https://twitter.com/leaverou">Lea Verou</a>'s <a href="http://leaverou.github.com/prefixfree/">-prefix-free</a> library to dynamically add the vendor prefixed styles at runtime. Now, you may or may not want to use this library for production, but it sure makes it nice for blog posts and jsFiddles!</blockquote>

The above CSS defines a class named <code>icon-refresh-animate</code> that assigns the animation, how long it should take, how many times it should iterate, and what type of algorithm to use. The class references the <code>rotateThis</code> keyframes which defines what the beginning and end state of the animation should look like. In this case the animation will rotate the element from 0 degrees to 360 degrees.

Once I got the CSS3 situated, I moved on to writing some JavaScript to wire up the animation. The following code snippet adds the <code>icon-refresh-animation</code> class to the icon when the anchor is clicked. Once the class has been added the animation begins. Then the code kicks off a <code>window.setTimeout</code> to simulate some kind of asynchronous action and when complete the class is removed, therefore stoping the animation.

<script src="https://gist.github.com/elijahmanor/4617496.js?file=fiddle.js"></script>
You can interact with the final solution in the following jsFiddle. You'll need to <strong>click the icon</strong> in order to kick off the 2 second animation.

<iframe style="width: 100%; height: 100px" src="http://jsfiddle.net/kVHbV/embedded/result,html,css,resources" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<h2>
Conclusion</h2>

<img src="https://a248.e.akamai.net/camo.github.com/4e5b8ec5315f5c72410b96c1331a8b37b338b4c0/687474703a2f2f662e636c2e6c792f6974656d732f3247306e304d316131463239314332573230337a2f626162792d6b6f6d6261742e676966" style="padding: 5px 0px 5px 15px; float: right;" />So, instead of looking for a GIF to animate your icon, why don't you try taking your ordinary element and make them come alive with a little CSS3 spice. Who needs animated GIFs anyway? 

Now, get going and get your baby ninja talents to work. Okay, I admit animated GIFs are cool, but not for rotating your icons ;)
