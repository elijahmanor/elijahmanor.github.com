---
layout: post
title: 'Find the jQuery Bug #6: Traversing Trouble'
date: '2012-03-12 05:09:00'
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
</ul>
</blockquote>

<h3>
The Desired Feature</h3>

We want to take the following list of <a href="http://jquery.org/team">jQuery board and team members</a> and then hide only those that are team members, leaving only the board members showing.

<script src="https://gist.github.com/1945230.js?file=_snippet.html"></script>
<h3>
The Buggy Code</h3>

The following code snippet is our first attempt at solving the problem, but there is a subtle error. Do you see it?

<script src="https://gist.github.com/1945230.js?file=fiddle.js"></script>
You can <a href="http://jsfiddle.net/mtzT4/">view, run, and edit</a> the above code sample from jsFiddle.

The results that we expected was to only view a subset of the total list, but instead we ended up seeing all the items in the list!

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/mtzT4/embedded/result,js,html/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<h3>
The Underlying Problem</h3>

At the root of the problem is that the <code>.find()</code> method is used for finding elements that are descendants of the current jQuery collection.

<blockquote>
<code>.find( selector )</code> <div style="position: relative; text-align: right; top: -21px;">
<i>Returns: jQuery</i></div>
Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.

-- <a href="http://api.jquery.com/find/">http://api.jquery.com/find/</a></blockquote>

The above code snippet already starts with a jQuery collection of 22 items referenced by the <code>$items</code> variable. When calling the <code>$item.find( ".team" )</code> method jQuery looks for all elements containing the <code>team</code> class that are children of it's internal collection. In this case, the list items do not have any children, so the result is an empty jQuery collection.

It is important to note that jQuery allows you to call methods off of any jQuery collection even if it is empty. The thing is that it just doesn't do anything, it silently fails. What we really need to solve this problem is to have some way to narrow down the internal jQuery collection based on a specified criteria. Thankfully, there is an easy way to do this.

<h3>
A Solution</h3>

The solution to fix this problem is really simple and straightforward. The main problem is that we were using the wrong method.

We should have been using the <code>.filter()</code> method instead, which takes the current jQuery collection and filters them by matching against a provided selector. It doesn't traverse the children at all, but it's only purpose is to reduce the number of top level elements currently captured in the jQuery collection.

<blockquote>
<code>.filter( selector )</code> <div style="position: relative; text-align: right; top: -21px;">
<i>Returns: jQuery</i></div>
Reduce the set of matched elements to those that match the selector or pass the function's test.

-- <a href="http://api.jquery.com/filter/">http://api.jquery.com/filter/</a></blockquote>

All you really need to do is to use the <code>.filter()</code> method instead of the <code>.find()</code> as we used in the previous example.

<script src="https://gist.github.com/1952412.js?file=fiddle.js"></script>
You can <a href="http://jsfiddle.net/g7aqc/">view, run, and edit</a> the above code sample from JSBin.

If you test out the code again below you'll notice that the list items with class of <code>team</code> are targeted and hidden like we wanted!

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/g7aqc/embedded/result,js,html/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<h3>
Conclusion</h3>

The key concept to remember here is that the <code>.find()</code> method is for traversing into the DOM and locating descendants that match a criteria and the <code>.filter()</code> method is used to reduced the elements that are already selected that match a criteria.

<blockquote>
This may seem like a trivial concept to grasp by some, but I've seen this common confusion of the two methods numerous times. I find that many developers expect that the <code>.find()</code> method will perform both filter and find, but it doesn't.</blockquote>

Until next time...
