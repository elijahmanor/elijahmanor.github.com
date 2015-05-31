---
layout: post
title: jQuery HTML5 :dataAttr Pseudo Selector
date: '2012-05-09 05:06:00'
---

<h3>
Problem</h3>

A while back someone on twitter was asking me how they might find a set of DOM elements by using doing a partial search on their HTML5 data attribute.

<blockquote>
I'm not actually sure what type of use case you would need for such problem, but I thought it was an interesting issue to work on, so I went ahead and took a stab at solving it.</blockquote>

<script src="https://gist.github.com/1844955.js?file=fiddle.html"></script>
<h3>
Desired Solution</h3>

In order to solve the above example of finding elements that start with a certain HTML5 data attribute, I wanted to follow a similar API to that of jQuery Attribute Selectors with the <code>^=</code>, <code>$=</code>, etc... syntax. The following is an example of how I thought the solution should look like.

<script src="https://gist.github.com/1844955.js?file=selector.js"></script>
<h3>
Custom Pseudo Selector</h3>

In order to create an API like the above I needed to create a custom pseudo selector, much like what you've seen when using <code>:last</code>, <code>:odd</code>, <code>:eq( number )</code>, and numerous other common selectors.

<script src="https://gist.github.com/1844955.js?file=fiddle.js"></script>
<h3>
Unit Tests</h3>

I didn't want to just have some code laying around that wasn't thoroughly tested, so I went ahead and created a set of unit tests to cover various scenarios. I could have kept going, but I thought the following was a decent set of tests to start with.

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="http://jsfiddle.net/ZZhQ6/embedded/result,js/presentation" style="height: 500px; width: 100%;"></iframe>
