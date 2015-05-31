---
layout: post
title: Don't Initialize All the Things in jQuery.ready()
date: '2012-10-01 05:00:00'
---

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-WuIeMd_kLnY/UDUTvYKu59I/AAAAAAAASis/MHmWvT4iEFM/s1600/dont-initialize-all-the-things.jpeg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" src="http://1.bp.blogspot.com/-WuIeMd_kLnY/UDUTvYKu59I/AAAAAAAASis/MHmWvT4iEFM/s1600/dont-initialize-all-the-things.jpeg" /></a></div>
One of the first impressions a user gets is loading your web application for the first time. Users don't have a high tolerance when it comes to page speed. They want to see something almost immediately and then be able to start interacting with your web site shortly after.

If your website utilizes JavaScript and jQuery, which many web sites do, it is very tempting to pre-initialize all of your logic (plugins, widgets, modules, event handlers, etc) in order for them to respond as fast as possible. Unfortunately, initializing <b>ALL THE THINGS</b> during page load works against the user's goal of loading quickly. Instead of initializing everything when the page is ready you can instead wait to initialize portions of your application until they are needed.

The following examples will show two ways of initializing a date picker. The first way will "Initialize All the Things" and the other example will use the "Just-In-Time Initialize" principle.

<h3>
Example Markup</h3>

In order to convey the idea I'm trying to explain it is probably easiest to show a code sample and then talk about what is happening. We will be using the following HTML for the markup that our code examples will be using.

<script src="https://gist.github.com/3174513.js?file=fiddle.html">
</script>
<blockquote>
I am using <a href="http://twitter.github.com/bootstrap/">Twitter Bootstrap</a> to made the UI look more presentable and that is why you are seeing some extra classes attached to the above markup.</blockquote>

The markup shows a simple form with various input elements. In the form we will have multiple date fields that we will want to initialize using the jQuery UI <code>datepicker</code> widget.

<h3>
Initialize All the Things</h3>

The following <code>jQuery</code> code looks familiar to many snippets that you'll might find across the internet, in tutorials, and possibly in your web applications. 

<script src="https://gist.github.com/3174513.js?file=fiddle-slow.js"></script>
<blockquote>
I am using the small <a href="http://momentjs.com/">moment.js</a> library to help with data manipulation. It is a handy date library that I think you'll find very compelling and rich with features.</blockquote>

Let's unravel what the code is doing...

<ol>
<li>We wait until the document is ready before running the rest of our code.</li>
<li>Once the DOM is ready, then select all the <code>input</code> elements on the page with the <code>date</code> class.</li>
<li>jQuery will implicitly iterate over it's internal collection of elements and initialize each one with the <code>datapicker</code> jQuery UI widget.</li>
</ol>

<h4>
Pros of this Technique</h4>

<ul>
<li>When the user interacts with any of the <code>input.date</code> elements they will already be setup and therefore will respond extremely quick.</li>
</ul>

<h4>
Cons of this Technique</h4>

<ul>
<li>Your code has to wait until the DOM is ready before it can select the elements. It would be nice if you could utilize the time between when jQuery is executed and when the DOM is ready.</li>
<li>The selector doesn't have any context so it is looking throughout the whole DOM looking for <code>input</code> elements with the <code>date</code> class. This would be considered a sub-optimal selector since there is no limit to the scope or context of what is being searched.</li>
<li>The code is initializing all the elements (implicit loop) whether you need them or not. Sure, the widgets are ready when you need them, but is all that up front code necessary?</li>
<li>There is quite a bit of extra code running that isn't necessary yet before the page has even fully loaded. The affects the overall User Experience of page load, which is very key concern to users.</li>
</ul>

<h3>
Just-In-Time Initialize</h3>

The following code snippet looks considerably different from the previous example, but the end result is the same and the Pros and Cons are quite different. See if you can spot out the differences.

<script src="https://gist.github.com/3174513.js?file=fiddle.js">
</script>You can <a href="http://jsfiddle.net/XcBGb/">view, run, and edit</a> the above code sample from JsFiddle or you can interact with the embedded version below.

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="http://jsfiddle.net/XcBGb/embedded/result,js,html/presentation/" style="height: 350px; width: 100%;"></iframe>

<blockquote>
I am using the <a href="https://github.com/CodeSeven/toastr">toastr</a> library to show messages indicating when the elements were initialized. This library was created by <a href="http://twitter.com/hfjallemark">Hans Fjällemark</a> and <a href="http://twitter.com/John_Papa">John Papa</a>.</blockquote>

As we did in the previous example let's outline what is happening in the code and then we will examine the Pros and Cons of this technique.

<ol>
<li>We immediately set up an event handler to wait for User Input before initializing the <code>datepicker</code>. This allows the code to run immediately after <code>jQuery</code> has been executed on the page before the DOM is even ready. We don't need the DOM to be ready because we are delegating our event to the <code>document</code> context.</li>
<li>We aren't initializing all the <code>input.date</code> element, but are only listening to the <code>focus</code> event. This event will propagate (a.k.a. bubble) up the DOM tree until it gets to the <code>document</code> at which point jQuery will determine if the item focused on matches any of the metadata it has stored. This metadata match is surprisingly fast because it is only matching this "crazy" selector against the one DOM element that was focused on and not the whole DOM tree.</li>
<li>Our advanced selector is looking for <code>input.date</code> element that doesn't have the <code>hasDatepicker</code> class. If this is a match then that one DOM element will be initialized. After that point, if the element is focused on later the selector will no longer be a match because jQuery added the <code>hasDatepicker</code> class during the it's widget creation.</li>
</ol>

<h4>
Pros of this Technique</h4>

<ul>
<li>Very fast page load speed because you are only adding an event handler to the <code>document</code> with some metadata that will be used later</li>
<li>There is no jQuery selection being made on DOM ready</li>
<li>There is no implicit looping going on to initialize the elements</li>
<li>Only the elements that are about to be used are initialized so there is no wasteful code being executed</li>
<li>The focused elements are only initialized once</li>
<li>This technique will also work for dynamically added date pickers added to the DOM</li>
</ul>

<h4>
Cons of this Technique</h4>

<ul>
<li>There is some overhead of the focus event having to propagate up to the <code>document</code> and having <code>jQuery</code> check the metadata to see if there are any matching selectors for the element in question, but this is mostly a wash since it is only testing one element.</li>
</ul>

<h3>
Conclusion</h3>

You want to limit initializing all the things all the time. It can be helpful if you start to think about delaying initialization until the point when you need it or possibly right before. By doing so you can utilize the time right after jQuery is executed and not wait for DOM ready then you are able to use that precious time during page load. In addition you can have a crazy weird jQuery selector that still is fast. In our last code example above had a complicated selector, but it was very fast because it is only being tested against the one element that was focused on and not the whole DOM tree. 

<blockquote>
Much of this material was gleaned from an awesome series <a href="http://twitter.com/dougneiner">Doug Neiner</a> has given at the past several jQuery Conferences entitled "Contextual jQuery" (<a href="http://vimeo.com/40873228">video</a> &amp; <a href="http://code.dougneiner.com/speaking/#slides">slides</a>). If you haven't already seen his talks or slides I highly encourage you to go through them.</blockquote>
