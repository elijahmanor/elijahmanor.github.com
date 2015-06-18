---
layout: post
title: 'Find the jQuery Bug #7: Using a Method as an Event Handler'
date: '2012-03-14 05:01:00'
---

<h3>
Introduction</h3>

In this open-ended series I'll be showcasing a snippet of buggy jQuery code that you might encounter, explain what the problem is, and then identify how you can easily resolve the issue.

<blockquote>
You can view other posts in this series...
<ul>
<li><a href="http://elijahmanor.com/find-the-jquery-bug-1-chicken-or-the-egg/">Find the jQuery Bug #1: Chicken or the Egg</a></li>
<li><a href="http://elijahmanor.com/find-the-jquery-bug-2-point-of-no-return/">Find the jQuery Bug #2: Point of No Return</a></li>
<li><a href="http://elijahmanor.com/find-the-jquery-bug-3-give-me-truth/">Find the jQuery Bug #3: Give Me Truth</a></li>
<li><a href="http://elijahmanor.com/find-the-jquery-bug-4-animations-gone-wild/">Find the jQuery Bug #4: Animations Gone Wild</a></li>
<li><a href="http://elijahmanor.com/find-the-jquery-bug-5-defective-data/">Find the jQuery Bug #5: Defective Data</a></li>
<li><a href="http://elijahmanor.com/find-the-jquery-bug-6-traversing-trouble/">Find the jQuery Bug #6: Traversing Trouble</a></li>
</ul>
</blockquote>

<h3>
The Desired Feature</h3>

We want to use an existing object's method to be invoked when the user clicks on a button.

<script src="https://gist.github.com/1954271.js?file=_snippet.html"></script>
<h3>
The Buggy Code</h3>

The following code snippets is our first attempt at solving the problem, but there is a subtle error. Do you see it?

<script src="https://gist.github.com/1954271.js?file=fiddle.js"></script>
You can view, run, and edit the above code sample from the following embedded jsFiddle.

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="http://jsfiddle.net/EhrLE/embedded/result,js,html/presentation/" style="height: 100px; width: 100%;"></iframe>

The result that we expected was to see was an alert box showing up when the user clicks the Register button, but instead the following error shows up in the console.

<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-cWMj2J6pun0/T1ARLRmOirI/AAAAAAAAMoM/xcjIixckHmc/s1600/JavaScript+Error+Proxy.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://3.bp.blogspot.com/-cWMj2J6pun0/T1ARLRmOirI/AAAAAAAAMoM/xcjIixckHmc/s1600/JavaScript+Error+Proxy.png" /></a></div>

<h3>
The Underlying Problem</h3>

At the root of the problem is that once the event handler is invoked jQuery makes sure the <code>this</code> pseudo parameter is set to the DOM element that caused the event.

<script src="https://gist.github.com/1954271.js?file=_snippet.js"></script>
Inside of the <code>conference.register</code> method listed above, the <code>this</code> parameter refers to the register button DOM element. Since <code>this</code> is a DOM element that is why we are getting the "Cannot call method 'push' of undefined" error.

What we need to resolve this issue is a way to control the value of the <code>this</code> parameter when the <code>conference.register</code> method is invoked. Thankfully, there is a way in jQuery to do this.

<h3>
A Solution</h3>

The solution to fix this problem is really simple and straightforward. As of version 1.4, jQuery added the <code>$.proxy()</code> method to help solve the bug found in the previous example.

<blockquote>
<code>jQuery.proxy( function, context )</code>
<div style="position: relative; text-align: right; top: -21px;">
<i>Returns: Function</i></div>
Takes a function and returns a new one that will always have a particular context.

-- <a href="http://api.jquery.com/jQuery.proxy/">http://api.jquery.com/jQuery.proxy/</a></blockquote>

In order to fix our example we just need to wrap the <code>conference.register</code> method with the <code>$.proxy()</code> method and provide the context that we want the pseudo <code>this</code> parameter to represent.

<script src="https://gist.github.com/1954558.js?file=fiddle.js"></script>
You can <a href="http://jsfiddle.net/http://jsfiddle.net/R9hRP/">view, run, and edit</a> the above code sample from JSBin.

If you test out the code again below you'll notice that once you've filled in the textbox and click enter then the behavior will continue as we expected.

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="http://jsfiddle.net/FkSbN/embedded/result,js,html/presentation/" style="height: 100px; width: 100%;"></iframe>

<h3>
Alternate Solutions</h3>

The above solution shows how you can use the <code>$.proxy()</code> method to solve the problem, but technically you could have used a plain JavaScript technique instead. By using the <code><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/call">.call()</a></code> or <code><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/apply">.apply()</a></code> methods in JavaScript you can control what the value of the <code>this</code> parameter will be just like we did with the <code>$.proxy()</code> method.

The following code snippet shows how you can use the <code>.call()</code> method to control the <code>this</code> parameter.

<script src="https://gist.github.com/1954558.js?file=call.js"></script>
In a very similar way the next snippet of code shows how you can use the <code>.apply()</code> method as an alternate solution.

<blockquote>
NOTE: While the syntax of this function is almost identical to that of call(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments. -- <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/apply">https://developer.mozilla.org/...</a></blockquote>

<script src="https://gist.github.com/1954558.js?file=apply.js"></script>
You can <a href="http://jsfiddle.net/UtCfP/">view, run, and edit</a> the above code sample from jsFiddle.

<h3>
Conclusion</h3>

The key concept to remember here is that if you ever need to control the value of the pseudo <code>this</code> paramater inside an event handlers, then you can use the <code>$.proxy()</code> method in jQuery. In addition, you could just use the <code>.call()</code> or <code>.apply()</code> methods in JavaScript if you would rather not use the <code>$.proxy()</code> method.

Until next time...
