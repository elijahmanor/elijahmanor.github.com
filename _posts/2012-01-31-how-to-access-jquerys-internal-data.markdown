---
layout: post
title: How to Access jQuery's Internal Data
date: '2012-01-31 06:00:00'
---

As you may or may not be aware as of jQuery 1.7 the whole event system was rewritten from the ground up. The codebase is much faster and with the new <code>.on()</code> method there is a lot of uniformity to wiring up event handlers. 

One used to be able to access the internal <code>events</code> data and investiate what events are registered on any given element, but recently this internal information has been hidden based on the following ticket...

<blockquote>
"Ticket #8921: jQuery Private Data Should Stay Private

It seems that the "private" data is ALWAYS stored on the .data(jQuery.expando) - For "objects" where the deletion of the object should also delete its caches this makes some sense.

In the realm of nodes however, I think we should store these "private" members in a separate (private) cache so that they don't pollute the object returned by $.fn.data()" 

--<a href="http://bugs.jquery.com/ticket/8921">http://bugs.jquery.com/ticket/8921</a></blockquote>

Although I agree with the above change to hide the internal data, I have found having access to this information can be helpful for debugging and unit testing.

<blockquote class="twitter-tweet">
What was the new way of getting the internal jquery event object in jQuery 1.7? /cc @<a href="https://twitter.com/DamianEdwards">DamianEdwards</a> @<a href="https://twitter.com/elijahmanor">elijahmanor</a>
— Aaron Powell (@slace) <a data-datetime="2012-01-30T03:10:00+00:00" href="https://twitter.com/slace/status/163821232440090624">January 30, 2012</a></blockquote>
<script charset="utf-8" src="//platform.twitter.com/widgets.js">
</script>
Thankfully, if you still need access to the internal data it is still accessible, however, you need to use a method that isn't officially documented... which means that you should be cautious about using it. I would encourage you to not use the undocumented <code>._data()</code> method in production code.

<script src="https://gist.github.com/1709046.js?file=fiddle.js"></script>
You can <a href="http://jsbin.com/gist/1709046#javascript,html,live">view, run, and edit</a> the above code sample from JSBin.

On the plus side, if you access the old <code>.data()</code> method with <code>"events"</code> as a parameter that will retrieve the internal data containing events and event handlers. 

As a side note, if you are looking for events attached using the <code>.live()</code> or <code>.delegate()</code> methods then you will need to look at either the <code>document</code> element or whatever element you delegated against.

<i>Update: Rick Waldron informed me on <a href="https://twitter.com/rwaldron/status/164575242952515585">twitter</a> that the jQuery Core team plans on creating a supported plugin to access the internal data that jQuery maintains. This would be a much better solution than using the above undocumented <code>._data()</code> method because undocumented methods are also unsupported methods ;) I only use the <code>._data()</code> method for debugging or testing. You should try to avoid using it in any of your production code for this reason.</i>
