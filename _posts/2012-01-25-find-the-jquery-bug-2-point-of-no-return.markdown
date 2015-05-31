---
layout: post
title: 'Find the jQuery Bug #2: Point of No Return'
date: '2012-01-25 14:09:00'
---

<h3>
Introduction</h3>

In this open-ended series I'll be showcasing a snippet of buggy jQuery code that you might encounter, explain what the problem is, and then identify how you can easily resolve the issue.

<blockquote>
You can view my other post in this series...
<ul>
<li><a href="http://www.elijahmanor.com/2011/08/find-jquery-bug-1-chicken-or-egg.html">Find the jQuery Bug #1: Chicken or the Egg</a></li>
</li>
</ul>
</blockquote>

<h3>
The Desired Feature</h3>

We want to take the following HTML unordered list and build a JavaScript function that will determine if a specific value is present.

<script src="https://gist.github.com/1670182.js?file=_snippet.html"></script>
<h3>
The Buggy Code</h3>

The following code snippets is our first attempt at solving the problem, but there is a subtle error. Do you see it?

<script src="https://gist.github.com/1670182.js?file=fiddle.js"></script>
You can <a href="http://jsbin.com/gist/1670182#javascript,html,live">view, run, and edit</a> the above code sample from JSBin.

The results that we expected were <code>false, true, true, true, false</code>, but instead the output in the console is <code>false, false, false, false, false</code>. 

<h3>
The Underlying Problem</h3>

At the root of the problem is the special jQuery <code>.each()</code> method we are using. The <code>.each()</code> method is a very handy way to iterate over the jQuery collection, however there is a special meaning to <code>return false</code> within a <code>.each()</code> method.

<blockquote>
"We can stop the loop from within the callback function by returning false." --<a href="http://api.jquery.com/each" target="_blank">http://api.jquery.com/each</a></blockquote>

Upon further examination of the code it even makes further sense why it wouldn't work. Most of us are familiar that a <code>return</code> statement exists the current function, but in this case we aren't invoking the function... jQuery is! So, jQuery has control over what happens when you exit your function prematurely and it recognizes <code>return false</code> to mean something special.

<h3>
A Solution</h3>

The solution to fix this problem is really simple and straightforward. All you really need to do is to introduce another variable <code>hasNumber</code>. If the number was found, then set the <code>hasNumber</code> variable to <code>true</code> and then <code>return false;</code> to exit the <code>.each()</code> method.

<script src="https://gist.github.com/1169945.js?file=fiddle.js"></script>
You can <a href="http://jsbin.com/gist/1169945#javascript,html,live">view, run, and edit</a> the above code sample from JSBin.

If you test out the code again below you'll notice that now that we are getting the expected output of <code>false, true, true, true, false</code>.

<h3>
An Alternate Solution</h3>

An alternate way to solve this problem would be to use another technique completely. In the following example we will use the <code>jQuery.grep</code> method. The <code>jQuery.grep</code> method is defined as the following:

<blockquote>
"Finds the elements of an array which satisfy a filter function. The original array is not affected." --<a href="http://api.jquery.com/jquery.grep/">http://api.jquery.com/jquery.grep/</a></blockquote>

<script src="https://gist.github.com/1670312.js?file=fiddle.js"></script>
You can <a href="http://jsbin.com/urofar/edit#javascript,html,live">view, run, and edit</a> the above code sample from JSBin.

Although the code looks shorter, it is less performant than the previous solution. Can you tell why? The code is not exiting once the number has been found, but instead goes through each array item and executes the callback function. We get the correct answer, but for a price. 

<h3>
Conclusion</h3>

The key concept to remember here is to be aware of the special mean of <code>return false;</code> inside of a jQuery <code>.each()</code> method to exit the loop. Even if you have never made this mistake before, maybe it has opened up your eyes to the fact you can exit out of a <code>.each()</code> method!

Until next time...
