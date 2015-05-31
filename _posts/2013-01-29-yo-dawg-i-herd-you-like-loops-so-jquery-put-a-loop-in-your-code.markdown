---
layout: post
title: Yo dawg, I herd you like loops, so jQuery put a loop in your code
date: '2013-01-29 06:05:00'
---

<a href="http://memegenerator.net/instance/33339848" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="258" src="http://1.bp.blogspot.com/-zAsVWpN4dFM/UPOO4gDupfI/AAAAAAAAWWU/wpN9tjWSf4Y/s400/yo-dawg-jquery-herd.png" width="400" /></a><h3>
Do You Know When You Are Looping in jQuery?</h3>

A common misunderstanding I see when looking at jQuery code is a lack of understanding about loops. 

Most developers seem to grok the <code><a href="http://api.jquery.com/each/">.each()</a></code> method, but that can be both a good and a bad thing. 

It is important to know the difference between an Implicit Loop and an Explicit Loop.

<h3>
Implicit Loops</h3>

The following code snippet is something that you would typically see from a jQuery developer. You are probably aware of the "Find something, Do something" mentality of jQuery. The code first queries the DOM for all elements that have the <code>widget</code> class and then jQuery proceeds to implicitly loop over all of the elements matching the query and adds the <code>highlight</code> class.

<script src="https://gist.github.com/elijahmanor/4646532.js?file=implicit-loops.js"></script>
<h3>
Explicit Loops</h3>

An explicit loop in jQuery is much more obvious. The code for the loop is visible via the <code>.each</code> method. This is pretty straight forward and typically developers understand that there could be performance issues for any code inside the <code>.each</code> loop.

<script src="https://gist.github.com/elijahmanor/4646532.js?file=explicit-loops.js"></script>
<h3>
Indications of Confusion</h3>

You can start to tell if a developer doesn't realize the different between implicit and explicit loops if you start to see something like the following code snippet. 

<script src="https://gist.github.com/elijahmanor/4646532.js?file=confusion.js"></script>
In this example there is no reason for using the <code>.each</code> method because there was nothing inside of the loop that is unique. A simple implicit loop, like the following snippet, would have been sufficient. 

<script src="https://gist.github.com/elijahmanor/4646532.js?file=confusion-fixed.js"></script>
<img src="http://s2.favim.com/orig/28/fruit-loops-yummy-Favim.com-235858.gif" style="float: right; padding: 0px 0px 15px 15px; width: 250px;" /><h3>
Method Overloads</h3>

Knowing about implicit loops also sheds some light of the following situation. 

In the following snippet of code jQuery is looping over the matches elements twice (once to change the color and a second time to change the font-size). 

<script src="https://gist.github.com/elijahmanor/4646532.js?file=slowness.js"></script>
If you needed to write code similar to the previous, you could do something like the following instead and use the "overloaded" <code>.css</code> method that takes an object containing the key/value pairs you wish to apply. 

<script src="https://gist.github.com/elijahmanor/4646532.js?file=slowness-fixed.js"></script>
It might seem like the above snippet is slower than the following, but when it comes down to it they are about the same speed. I tend to recommend the last snippet as it is cleaner and more flexible down the road as you can pass in a variable containing all your options. 

<blockquote>
As a side note, it is preferable to use the <code>.addClass()</code> / <code>.removeClass()</code> / <code>.toggleClass()</code> methods instead of the <code>.css()</code> method to manipulate your elements unless you need to change their width/height/position/etc. The output of the <code>.css()</code> method gets attached to the <code>style</code> attribute of your element. The browser is highly optimized to deal with CSS classes and also whoever is maintaining will thank you for using classes instead of hardcoding style in your code.</blockquote>

<h3>
Conclusion</h3>

Although these concepts may seem very basic, I often run across code that doesn't require an <code>.each</code> method. It is helpful knowing some of these under the cover concepts. I hope you found it insightful. 