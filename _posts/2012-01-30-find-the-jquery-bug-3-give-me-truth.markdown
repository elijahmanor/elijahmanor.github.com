---
layout: post
title: 'Find the jQuery Bug #3: Give Me Truth'
date: '2012-01-30 06:14:00'
---

<h3>
Introduction</h3>

In this open-ended series I'll be showcasing a snippet of buggy jQuery code that you might encounter, explain what the problem is, and then identify how you can easily resolve the issue.

<blockquote>
You can view other posts in this series...
<ul>
<li><a href="http://elijahmanor.com/find-the-jquery-bug-1-chicken-or-the-egg/">Find the jQuery Bug #1: Chicken or the Egg</a></li>
<li><a href="http://elijahmanor.com/find-the-jquery-bug-2-point-of-no-return/">Find the jQuery Bug #2: Point of No Return</a></li>
</ul>
</blockquote>

<h3>
The Desired Feature</h3>

We want to take the following HTML <code>div</code> and build a simple <code>popover</code> module that uses the jQuery UI Dialog widget.

<script src="https://gist.github.com/1702566.js?file=_snippet.html"></script>
<h3>
The Buggy Code</h3>

The intent of the following code snippet is to verify that the <code>div</code> being used in the modal dialog exists in the DOM and that it has not been already initialized. We have an <code>init</code> method that should initialize the widget and then an <code>open</code> method that should launch the dialog. The code snippet has some problems. Do you see them?

<script src="https://gist.github.com/1702566.js?file=fiddle.js"></script>
You can <a href="http://jsbin.com/gist/1702566#javascript,html">view, run, and edit</a> the above code sample from JSBin.

When we run the code, things seem pretty much like what we expected. The widget seems to have been initialized and then opens as expected. We don't actually see the error visually, but there is a problem hidden in the <code>init()</code> code. If you debug through the code you'll notice something odd when calling <code>init()</code> again. We put in checks to verify for the existence of the DOM element and that it hasn't been initialized yet, right? Well, that is where the problem lies. Do you see the problem now?

<h3>
The Underlying Problem</h3>

At the root of the problem is how we are testing for truth! Both the ways we are checking for existence and initial state are flawed.

<blockquote>
"<code>jQuery( selector [, context] )</code> Returns: jQuery
Description: Accepts a string containing a CSS selector which is then used to match a set of elements." --<a href="http://api.jquery.com/jquery" target="_blank">http://api.jquery.com/jquery</a></blockquote>

The check for existence is incorrect, because just checking the result of <code>$( "dialog-modal" )</code> doesn't get you anywhere. Where does it get you? It always evaluates as <code>true</code> because a call to <code>$( selector )</code> returns the jQuery object and based on our <a href="http://james.padolsey.com/javascript/truthy-falsey/">truthy/falsey rules</a> an object is always <code>truthy</code>! What does this mean? Well, it means the code to initialize the DOM element would execute even if it didn't exist at all!

<blockquote>
"<code>.not( selector )</code> Returns: jQuery
Description: Remove elements from the set of matched elements." --<a href="http://api.jquery.com/not" target="_blank">http://api.jquery.com/not</a></blockquote>

In a similar fashion the check we were making for the initial state of the DOM element is incorrect. The intent was to check if the element did not have a particular class (<code>.ui-dialog-content</code>), which is added by jQuery UI when it initializes the dialog widget. If we take a look at the documentation for the <code>.not()</code> method we'll see that it too returns the jQuery object! The purpose of the method is to filter down the matches by removing elements that match the selector provided. So, we run into the same problem as above where we are always evaluating as <code>truthy</code>!

<h3>
A Solution</h3>

The solution to fix these problems are really simple and straightforward. All you really need to do is to check how many items where matched by a jQuery selection and to use the <code>.is()</code> method instead of the <code>.not()</code> method.

<script src="https://gist.github.com/1702743.js?file=fiddle.js"></script>
You can <a href="http://jsbin.com/gist/1702743#javascript,html,live">view, run, and edit</a> the above code sample from JSBin.

If you run the above code again you'll notice that the <code>console.log</code> message only shows up the first time the <code>.init()</code> method is called.

<h3>
Conclusion</h3>

The key concept to remember here is to realize that testing against the jQuery object will always evaluate as <code>true</code>. As shown above it is easy to adjust your code accordingly.

There are other more advanced techniques that can be used for initialization as well. I'd encourage you to look into Doug Neiner's (<a href="http://twitter.com/dougneiner">@dougneiner</a>) Contextual jQuery series (<a href="http://events.jquery.org/2010/boston/video/video.php?talk=doug-neiner">Part 1</a> and <a href="http://speakerdeck.com/u/dougneiner/p/contextual-jquery-in-practice">Part 2</a>) that he gave at the jQuery Boston 2010 and 2011 Conferences. In particular he gave some really interesting just-in-time initialization techniques in the 2nd talk. I highly encourage you viewing these if you haven't already.

Until next time...
