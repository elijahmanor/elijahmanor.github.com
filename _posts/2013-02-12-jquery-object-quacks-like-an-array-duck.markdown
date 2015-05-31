---
layout: post
title: jQuery Object Quacks like an Array Duck
date: '2013-02-12 06:01:00'
---

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-sYshvcU0kH8/URnJNP0cEfI/AAAAAAAAXWk/Q6Va0wZnPOc/s1600/Screen+Shot+2013-02-11+at+8.44.07+PM.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="200" src="http://1.bp.blogspot.com/-sYshvcU0kH8/URnJNP0cEfI/AAAAAAAAXWk/Q6Va0wZnPOc/s200/Screen+Shot+2013-02-11+at+8.44.07+PM.png" width="200" /></a></div>
<h3>
jQuery Array-like Object</h3>

I'm sure you've heard of the old saying, "If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck".

Well, a simular statement could be said about the <code>jQuery Object</code>. If the <code>jQuery Object</code> looks like an array, indexes like an array, console.logs like an array, then it probably is an array... err, well, but in this case it's NOT an array!

Let's unpack this a little more and see what sense we can make out of it. The following snippet of code invokes the <code>jQuery Function</code> and performs a selection from the DOM and then accesses the returned <code>jQuery Object</code> to locate the DOM element at index 2, which feels an awful lot like an array.

<script src="https://gist.github.com/elijahmanor/4759928.js?file=jquery-array-like-object.js"></script>
Upon further examination in the console the <code>jQuery Object</code> is indeed an <code>object</code> (not an array) as indicated by the <code>$.type()</code> utility method.

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-rPee0xBDS-s/URnKs5b1_3I/AAAAAAAAXXI/xoRpgfGk1Ew/s1600/jquery-array-like-object.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://1.bp.blogspot.com/-rPee0xBDS-s/URnKs5b1_3I/AAAAAAAAXXI/xoRpgfGk1Ew/s1600/jquery-array-like-object.png" /></a></div>

<blockquote>
Note: You might notice that I am using the lesser known <code>$.type()</code> utility method to determine the type of the variable. I am not using the <code>typeof</code> operator because it evaluates to "object" for both arrays and objects. The <code>$.type()</code> method returns much more useful data <a href="http://api.jquery.com/jquery.type/">http://api.jquery.com/jquery.type/</a></blockquote>

Something of interest in the above screenshot is the grayed out <code>__proto__</code> property. That is where all the jQuery goodness (functionality) can be found such as <code>.fadeOut()</code>, <code>.on()</code>, <code>.addClass()</code>, and all the other methods jQuery provides.

After some digging in the jQuery source code I came across the following <code>merge</code> method where the array results of the DOM selection gets copied over to the <code>jQuery Object</code>. In addition to mapping over these values jQuery also provides a <code>.length</code> property and a <code>.splice()</code> method which enables itself to mimic an array.

<script src="https://gist.github.com/elijahmanor/4759928.js?file=jquery-internal-object-array-merge.js"></script>
<h3>
Making a Custom Array-like Object</h3>

So, what about making our own custom array-like object!?! The following small snippet of JavaScript defines an object and then assigns a set of key/value pairs. In order to mimic an array we need to add a <code>.length</code> property and expose a <code>.splice()</code> method borrowed from the array. 

<script src="https://gist.github.com/elijahmanor/4759928.js?file=custom-array-like-object.js"></script>
The following is a screenshot of what is console.logged after executing the above code snippet. You will see that our <code>array_like</code> object is treated as if it were an array just the like <code>jQuery Object</code>... yay!

<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-mXHqq1rDo30/URnKyAezvrI/AAAAAAAAXXQ/Rm9eNRrGVMM/s1600/custom-array-like-object.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://3.bp.blogspot.com/-mXHqq1rDo30/URnKyAezvrI/AAAAAAAAXXQ/Rm9eNRrGVMM/s1600/custom-array-like-object.png" /></a></div>

<blockquote>
Note: If we take off the <code>.length</code> property or the <code>.splice()</code> method then the custom object will no longer appear as an array in the console. They are both necessary.</blockquote>

<h3>
Conclusion</h3>

So, inductive reasoning might be a good thing most of the time, but in this case the <a href="http://en.wikipedia.org/wiki/Duck_test">Duck Test</a> failed us. You can play around with the code snippets above by looking at the following <a href="http://jsfiddle.net/elijahmanor/BZSne/">JSFiddle</a>.