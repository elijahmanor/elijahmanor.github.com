---
layout: post
title: 'Find the jQuery Bug #5: Defective Data'
date: '2012-03-06 13:43:00'
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
</ul>
</blockquote>

<h3>
The Desired Feature</h3>

We want to build a simple jQuery Plugin that will add a confirm message to a simple button or anchor.

<script src="https://gist.github.com/1886465.js?file=fiddle.html"></script>
<h3>
The Buggy Code</h3>

The following code snippet is our first attempt at building the plugin, but there is a subtle error. Do you see it?

<script src="https://gist.github.com/1886465.js?file=_snippet.js"></script>
You can <a href="http://jsfiddle.net/bDgc3/">view, run, and edit</a> the above code sample from jsFiddle.

The developer initialized the buttons on the page and then wanted to update the prompt for the first button. He removed all the event handlers added by the plugin, updated the attribute, and then re-initialized the button with the plugin. Unfortunately, this technique didn't work as intended.

<h3>
The Underlying Problem</h3>

At the root of the problem is an issue when trying to use the <code>.attr()</code> method after already using the <code>.data()</code> method.

<blockquote>
"Only the .data() API reads HTML5 data-* attributes, and it does so once." -- <a href="https://twitter.com/#!/davemethvin">Dave Methvin</a> <a href="http://www.learningjquery.com/2011/09/using-jquerys-data-apis">http://www.learningjquery.com/...</a></blockquote>

The jQuery plugin reads the HTML5 <code>data-*</code> attribute first, and the developer tried to update the <code>data-*</code> attribute later with the <code>.attr()</code> method. Once the jQuery plugin is re-initialized on the DOM element it will not read the <code>data-*</code> attribute again, but instead use the data it retrieved the first time.

<h3>
A Solution</h3>

The solution to fix this problem is really simple and straightforward. All you really need to do is to change the code where the <code>data-*</code> attribute was updated to use the <code>.data()</code> method instead of the <code>.attr()</code> method.

<script src="https://gist.github.com/1906622.js?file=_snippet.js"></script>
You can <a href="http://jsfiddle.net/qEH94/">view, run, and edit</a> the above code sample from jsFiddle.

If you test out the code again below you'll notice that it behaves as expected. When you click on the button it will use the updated text that was provided before the plugin was re-initialized.

You may notice that I also changed the key parameter to the <code>.data()</code> method to camelCase instead of the dashed version I had previously. As of jQuery 1.6 the library has changed direction in how they deal with HTML5 <code>data-*</code> attributes.

<blockquote>
"The treatment of attributes with embedded dashes was changed in jQuery 1.6 to conform to the W3C HTML5 specification." -- <a href="http://api.jquery.com/data/#data-html5">http://api.jquery.com/data...</a></blockquote>

Now, you can still reference that HTML5 <code>data-*</code> attributes using their dashed keys, but jQuery will first attempt to use the key "as is" and only attempt to convert that to a camelCased version if it failed. See the following comment from the Dave's article I referenced above.

<blockquote>
"Because many people will use .data( "camel-case" ) instead, we convert that to camelCase as well, but only if no data item named camel-case is found so it's faster to use the first form." -- <a href="https://twitter.com/#!/davemethvin">Dave Methvin</a> <a href="http://www.learningjquery.com/2011/09/using-jquerys-data-apis">http://www.learningjquery.com/...</a></blockquote>

<h3>
Other Things You Might Want to Know</h3>

Something that you also may not know about the <code>$.data()</code> method is that it will attempt to convert the contents of a HTML5 <code>data-*</code> attributes into the appropriate type.

<blockquote>
"Every attempt is made to convert the string to a JavaScript value (this includes booleans, numbers, objects, arrays, and null) otherwise it is left as a string. To retrieve the value's attribute as a string without any attempt to convert it, use the .attr() method." -- <a href="http://api.jquery.com/data/#data-html5">http://api.jquery.com/data...</a></blockquote>

The following example shows a DOM element using various types of HTML5 <code>data-*</code> attributes, and then shows that when you call the <code>.data()</code> method to retrieve a value it will parse and convert it into a boolean, number, object, array, or null.

<script src="https://gist.github.com/1906622.js?file=convert.html"></script>
<script src="https://gist.github.com/1906622.js?file=convert.js"></script>
You can <a href="http://jsfiddle.net/b7Dkm/">view, run, and edit</a> the above code sample from jsFiddle.

If for some reason you didn't want jQuery to convert the HTML <code>data-*</code> attributes when using the <code>.data()</code> method, you could use the <code>.attr()</code> method instead. The <code>.attr()</code> method will always return the string version of the attribute.

<h3>
Conclusion</h3>

The key concept to remember here is that once you call the <code>.data()</code> getter method on a element then it will read the HTML5 <code>data-*</code> atributes only once. If you want to update the data from there on, then you'll need to use the <code>.data()</code> setter method. Also, it is important to know that when you read these HTML5 <code>data-*</code> attributes jQuery will convert those values into it's appropriate type.

I hope you found this helpful. I recommend you reading <a href="https://twitter.com/#!/davemethvin">Dave Methvin</a>'s article entitled <a href="http://www.learningjquery.com/2011/09/using-jquerys-data-apis">Using jQuery’s Data APIs</a>.

Please provide any feedback in the comments below. Until next time...
