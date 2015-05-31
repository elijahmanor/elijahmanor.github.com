---
layout: post
title: Differences Between jQuery .bind() vs .live() vs .delegate() vs .on()
date: '2012-02-06 07:00:00'
---

<h3>Introduction</h3>

I've seen quite a bit of confusion from developers about what the real differences are between the jQuery <code>.bind()</code>, <code>.live()</code>, <code>.delegate()</code>, and <code>.on()</code> methods and when they should be used.

<blockquote>If you want, you can jump to the <a href="http://www.elijahmanor.com/#tldr">TL;DR</a> section and get a high-level overview what this article is about.</blockquote>

Before we dive into the ins and outs of these methods, let's start with some common HTML markup that we'll be using as we write sample jQuery code.

<script src="https://gist.github.com/elijahmanor/1749717.js?file=_snippet.html"></script>

<h3>Using the Bind Method</h3>

The <code>.bind()</code> method registers the type of event and an event handler directly to the DOM element in question. This method has been around the longest and in its day it was a nice abstraction around the various cross-browser issues that existed. This method is still very handy when wiring-up event handlers, but there are various performance concerns as are listed below.

<script src="https://gist.github.com/elijahmanor/1749717.js?file=bind.js"></script>

The <code>.bind()</code> method will attach the event handler to all of the anchors that are matched! That is not good. Not only is that expensive to implicitly iterate over all of those items to attach an event handler, but it is also wasteful since it is the same event handler over and over again.

<b>Pros</b>

<ul><li>This methods works across various browser implementations.</li><li>It is pretty easy and quick to wire-up event handlers.</li><li>The shorthand methods (<code>.click()</code>, <code>.hover()</code>, etc...) make it even easier to wire-up event handlers.</li><li>For a simple ID selector, using <code>.bind()</code> not only wires-up quickly, but also when the event fires the event handler is invoked almost immediately.</li></ul><br><b>Cons</b><br><ul><li>The method attaches the same event handler to every matched element in the selection.</li><li>It doesn't work for elements added dynamically that matches the same selector.</li><li>There are performance concerns when dealing with a large selection.</li><li>The attachment is done upfront which can have performance issues on page load.</li></ul>

<h3>Using the Live Method</h3>

The <code>.live()</code> method uses the concept of event delegation to perform its so called "magic". The way you call <code>.live()</code> looks just like how you might call <code>.bind()</code>, which is very convenient. However, under the covers this method works much different. The <code>.live</code> method attaches the event handler to the root level document along with the associated selector and event information. By registering this information on the document it allows one event handler to be used for all events that have bubbled (a.k.a. delegated, propagated) up to it. Once an event has bubbled up to the document jQuery looks at the selector/event metadata to determine which handler it should invoke, if any. This extra work has some impact on performance at the point of user interaction, but the initial register process is fairly speedy.

<script src="https://gist.github.com/elijahmanor/1749717.js?file=live.js"></script>

The good thing about this code as compared to the <code>.bind()</code> example above is that it is only attaching the event handler once to the document instead of multiple times. This not only is faster, but less wasteful, however, there are many problems with using this method and they are outlined below.<br><br><b>Pros</b><br><ul><li>There is only one event handler registered instead of the numerous event handlers that could have been registered with the <code>.bind()</code> method.</li><li>The upgrade path from <code>.bind()</code> to <code>.live()</code> is very small. All you have to do is replace "bind" to "live".</li><li>Elements dynamically added to the DOM that match the selector magically work because the real information was registered on the document.</li><li>You can wire-up event handlers before the document ready event helping you utilize possibly unused time.</li></ul>

<b>Cons</b><br><ul><li>This method is deprecated as of jQuery 1.7 and you should start phasing out its use in your code.</li><li>Chaining is not properly supported using this method.</li><li>The selection that is made is basically thrown away since it is only used to register the event handler on the document.</li><li>Using event.stopPropagation() is no longer helpful because the event has already delegated all the way up to the document.</li><li>Since all selector/event information is attached to the document once an event does occur jQuery has match through its large metadata store using the <code>matchesSelector</code> method to determine which event handler to invoke, if any.</li><li>Your events always delegate all the way up to the document. This can affect performance if your DOM is deep.</li></ul>

<h3>Using the Delegate Method</h3>

The <code>.delegate()</code> method behaves in a similar fashion to the <code>.live()</code> method, but instead of attaching the selector/event information to the document, you can choose where it is anchored. Just like the <code>.live()</code> method, this technique uses event delegation to work correctly.

<blockquote>If you skipped over the explanation of the <code>.live()</code> method you might want to go back up and read it as I described some of the internal logic that happen.</blockquote>

<script src="https://gist.github.com/elijahmanor/1749717.js?file=delegate.js"></script>

The <code>.delegate()</code> method is very powerful. The above code will attach the event handler to the unordered list ("#members") along with the selector/event information. This is much more efficient than the <code>.live()</code> method that always attaches the information to the document. In addition a lot of other problematic issues were resolved by introducing the <code>.delegate()</code> method. See the following outline for a detailed list.

<b>Pros</b>

<ul><li>You have the option of choosing where to attach the selector/event information.</li><li>The selection isn't actually performed up front, but is only used to register onto the root element.</li><li>Chaining is supported correctly.</li><li>jQuery still needs to iterate over the selector/event data to determine a match, but since you can choose where the root is the amount of data to sort through can be much smaller.</li><li>Since this technique uses event delegation, it can work with dynamically added elements to the DOM where the selectors match.</li><li>As long as you delegate against the document you can also wire-up event handlers before the document ready event.</li></ul>

<b>Cons</b>

<ul><li>Changing from a <code>.bind()</code> to a <code>.delegate()</code> method isn't as straight forward.</li><li>There is still the concern of jQuery having to figure out, using the <code>matchesSelector</code> method, which event handler to invoke based on the selector/event information stored at the root element. However, the metadata stored at the root element should be considerably smaller compared to using the <code>.live()</code> method.</li></ul>

<h3>Using the On Method</h3>

Did you know that the jQuery <code>.bind()</code>, <code>.live()</code>, and <code>.delegate()</code> methods are just one line pass throughs to the new jQuery 1.7 <code>.on()</code> method? The same is true of the <code>.unbind()</code>, <code>.die()</code>, and <code>.undelegate()</code> methods. The following code snippet is taken from the <a href="https://github.com/jquery/jquery/blob/633ca9c1610c49dbb780e565f4f1202e1fe20fae/src/event.js#L956">jQuery 1.7.1 codebase in GitHub</a>...<br/>

<script src="https://gist.github.com/elijahmanor/1749717.js?file=jquery-1.7.1.js"></script>

With that in mind, the usage of the new <code>.on()</code> method looks something like the following...

<script src="https://gist.github.com/elijahmanor/1749717.js?file=on.js"></script>

You'll notice that depending how I call the <code>.on()</code> method changes how it performs. You can consider the <code>.on()</code> method as being "overloaded" with different signatures, which in turn changes how the event binding is wired-up. The <code>.on</code> method bring a lot of consistency to the API and hopefully makes things slightly less confusing.<br><br><b>Pros</b><br><ul><li>Brings uniformity to the various event binding methods.</li><li>Simplifies the jQuery code base and removes one level of redirection since the <code>.bind()</code>, <code>.live()</code>, and <code>.delegate()</code> call this method under the covers.</li><li>Still provides all the goodness of the <code>.delegate()</code> method, while still providing support for the <code>.bind()</code> method if you need it.</li></ul><b>Cons</b><br><ul><li>Brings confusion because the behavior changes based on how you call the method.</li></ul>

<h3>Conclusion (tl;dr)</h3>

If you have been confused about the various different types of event binding methods then don't worry, there has been a lot of history and evolvement in the API over time. There are many people that view these methods as magic, but once you uncover some of how they work it will help you understand how to better ode inside of your projects. <br><br>The biggest take aways from this article are that...<br><ul><li>Using the <code>.bind()</code> method is very costly as it attaches the same event handler to every item matched in your selector.</li><li>You should stop using the <code>.live()</code> method as it is deprecated and has a lot of problems with it.</li><li>The <code>.delegate()</code> method gives a lot of "bang for your buck" when dealing with performance and reacting to dynamically added elements.</li><li>That the new <code>.on()</code> method is mostly syntax sugar that can mimic <code>.bind()</code>, <code>.live()</code>, or <code>.delegate()</code> depending on how you call it.</li><li>The new direction is to use the new <code>.on</code> method. Get familiar with the syntax and start using it on all your jQuery 1.7+ projects.</li></ul>

Were there any pros or cons that you would have added to the above lists? Have you found yourself using the <code>.delegate</code> method more recently? What are you thoughts on the new <code>.on</code> method? Leave your thoughts in the comments. Thanks!