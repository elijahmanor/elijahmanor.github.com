---
layout: post
title: 'Angry Birds of JavaScript- Blue Bird: Events'
date: '2013-03-28 05:07:00'
---

<h2>
Introduction</h2>
<!-- Blue Bird - Events & Messaging http://jsfiddle.net/LrFVp/14/ http://jsfiddle.net/LrFVp/20/ -->
<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-6ILPSz-pyp0/UVEnzs_iVfI/AAAAAAAAYVE/yXkm3RWutRs/s1600/angry-birds-game-for-windows-1.png" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" height="256" src="http://2.bp.blogspot.com/-6ILPSz-pyp0/UVEnzs_iVfI/AAAAAAAAYVE/yXkm3RWutRs/s320/angry-birds-game-for-windows-1.png" width="320" /></a></div>
A diabolical herd of pigs stole all of the front-end architecture from an innocent flock of birds and now they want it back! 

A team of special agent hero birds will attack those despicable pigs until they recover what is rightfully theirs, front-end JavaScript architecture!

Will the birds be successful in the end? Will they defeat their bacon flavored foe? Let's find out together in another nail biting episode of Angry Birds of JavaScript!

<blockquote>
Check out the <a href="http://www.elijahmanor.com/2013/03/angry-birds-of-javascript-series.html" target="_blank">series introduction post</a> for a list of all the birds and their attack powers.</blockquote>

<h3>
Previous Attacks</h3>

<ul>
<li><a href="http://www.elijahmanor.com/2013/03/angry-birds-of-javascript-red-bird.html" target="_blank">Red Bird - IIFE</a></li>
</ul>

<h3>
Blue Bird Attack</h3>
<a href="http://3.bp.blogspot.com/-sJcdgjfGHVc/UU_R2M3GqgI/AAAAAAAAYSU/eb2T2_qHjxY/s1600/blue-bird.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="200" src="http://3.bp.blogspot.com/-sJcdgjfGHVc/UU_R2M3GqgI/AAAAAAAAYSU/eb2T2_qHjxY/s200/blue-bird.png" width="107" /></a>
In this post we will take a look at the Blue Bird who triggers events and messages that scatter to infiltrate the pig's castle. Slowly, one by one, the birds will take back what it theirs to keep!

<h2>
What Was Stolen by the Pigs?</h2>
The birds used to build their web applications with components having hard dependencies on each-other. They eventually started to learn to reduce tight coupling by introducing events and messages. Unfortunately the pigs, during their invasion, stole the birds' observer secrets.

One of the blue birds has been tasked with taking back what has been stolen and restore loose coupling components.

<h2>
Sample Application</h2>

In order to unpack the need for messages we will look at the following web application to search for movies from Netflix. We will uncover how this application was originally coded and then refactor along the way.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="350" src="http://jsfiddle.net/LrFVp/14/embedded/result" width="100%"></iframe>

<h2>
Tightly Coupled Code</h2>

The first version of the above application was coded using the following JavaScript code. Take a look at the code and let it start to sink in for a little bit. It may be painful, but please bar with me for a moment ;)

<script src="https://gist.github.com/elijahmanor/5235011.js?file=tightly-coupled.js"></script>
The above code sample is a typical jQuery example that you can find across the internet. The snippet works, but there is a lot of different things happening all in the same place. You can find event handling, data retrieval, and data manipulation all mixed together. You can imagine that over time this code might continue to grow and grow and become more and more prone for errors.

Before we get too far, let's take a side trip and look at what messages are and what types exist.

<h2>
Types of Messages</h2>

<h3>
Observer Events</h3>

An observer event is probably one that you are most used to if you are familiar with front-end web development. In relation to the DOM you can think of this as adding event handlers to an element. The element has a direct reference to the callbacks that will be invoked when the event type occurs. 

<h4>
Example</h4>

<script src="https://gist.github.com/elijahmanor/5235011.js?file=observer-events.js"></script>
<h3>
Mediated Events</h3>

A mediated event or message has become more common the last several years in front-end web development. The main idea here is that there is another entity that keeps track of publishing and subscribing of messages. The main difference between this and Observer events is that Mediated events aren't tied directly to the subject that invoked it.

<h4>
Example</h4>

<script src="https://gist.github.com/elijahmanor/5235011.js?file=mediated-events.js"></script>
<h4>
Implementations</h4>

There are several libraries out there that facilitate mediated events. The following is a list of various libraries that you may want to choose from. My recommendation is that you look at Jim's <a href="https://github.com/postaljs/postal.js">postal.js</a> library.

<ul>
<li>Ben Alman's (<a href="http://twitter.com/cowboy" target="_blank">@cowboy</a>) <a href="https://github.com/cowboy/jquery-tiny-pubsub">Tiny jQuery Pub/Sub</a> library</li>
<li>Peter Higgin's (<a href="http://twitter.com/phiggins" target="_blank">@phiggins</a>) <a href="https://github.com/phiggins42/bloody-jquery-plugins/blob/master/pubsub.js">pubsub.js</a> library</li>
<li><strong>Jim Cowart's (<a href="http://twitter.com/ifandelse" target="_blank">@ifandelse</a>) <a href="https://github.com/postaljs/postal.js">postal.js</a> library ← Recommended</strong> </li>
<li>Dustin Diaz's (<a href="http://twitter.com/ded" target="_blank">@ded</a>) <a href="https://github.com/ded/reqwest">reqwest</a> library</li>
<li>appendTo's (<a href="http://twitter.com/appendTo" target="_blank">@appendTo</a>) <a href="http://amplify.js/">AmplifyJS Pub/Sub</a> component</li>
</ul>

<h3>
Hybrid Events</h3>

There is another type of event that is sort of a hybrid between observer and mediated. This type looks like a mediated event, but if you look hard enough there you could actually trace the origin of the event back to the original subject. A good example of this is jQuery's delegated event model. Delegated events are great, but it is based on the concept of events bubbling up the DOM and therefore we can trace where it came from. 

<h4>
Example</h4>

<script src="https://gist.github.com/elijahmanor/5235011.js?file=hybrid-events.js"></script>
By the way, I don't recommend using the <code>$._data()</code> method as it is undocumented and therefore not guaranteed that it will be available in future versions of jQuery. It is an internal helper method that jQuery currently uses under the covers. However, I did want to show you that there is a way to poke around and get at information that the subscriber shouldn't have in a real "mediated event", which is why I'm calling it a hybrid event. Don't get me wrong, I love jQuery's delegated events. I just wanted to show how it is a hybrid of the two above concepts.

<h3>
Which One Should Be Used?</h3>

That information is all fine and good, but what type of event/message should you be using and when? That is a great question and one that my friend Jim addressed in a recent post that he wrote. The following is a quote from his article...

<blockquote>
"...use observer 'locally', inside a component, mediator 'remotely' between components. No matter what, be ready to use both in tandem.' --<a href="http://freshbrewedcode.com/jimcowart/2013/02/07/client-side-messaging-essentials/" target="_blank">Jim Cowart</a></blockquote>

Jim recommends using observer events (jQuery's <code>.on()</code> method) when communicating within a module and to use mediated events (postal.js) when communicating between modules.

Another technique that Jim brings up in his article is to promote observer events into mediated events, which gives you the both of both worlds. He has some nice examples showing how that could look. I encourage you to take a look at his article referenced below in bold.

<h2>
Additional Resources</h2>

If you are interesting in more information about the above concepts you may consider looking through some of the following resources about events and messaging. 

<ul>
<li><strong>Jim Cowart's (<a href="http://twitter.com/ifandelse" target="_blank">@ifandelse</a>) <a href="http://freshbrewedcode.com/jimcowart/2013/02/07/client-side-messaging-essentials/" target="_blank">Client-side Messaging Essentials</a> article</strong></li>
<li>Addy Osmani's (<a href="http://twitter.com/addyosmani" target="_blank">@addyosmani</a>) <a href="http://msdn.microsoft.com/en-us/magazine/hh201955.aspx">Understanding the Publish/Subscribe Pattern for Greater JavaScript Scalability</a> article</li>
<li>Rebecca Murphey's (<a href="http://twitter.com/rmurphey" target="_blank">@rmurphey</a>) <a href="http://net.tutsplus.com/tutorials/javascript-ajax/loose-coupling-with-the-pubsub-plugin/">Loose Coupling with the pubsub Plugin</a> screencast</li>
</ul>

<h2>
Loosely Coupled Code</h2>

I was tempted to write the following code using Backbone.js or create constructor functions, but in order to keep it simple and convey the idea of messaging I tried to remove all of that. So, this probably isn't what you'd have in your code-base, but hopefully it gets the point across. 

<script src="https://gist.github.com/elijahmanor/5235011.js?file=loosely-coupled.js"></script>
<h2>
Attack!</h2>

The following is a simple Angry Birds clone using <a href="http://incompl.github.com/boxbox/">boxbox</a>, a framework for the <a href="https://code.google.com/p/box2dweb/">box2dweb</a> JavaScript physics library, written by <a href="http://bocoup.com/">Bocoup</a>'s <a href="http://twitter.com/_gsmith">Greg Smith</a>.

<blockquote>
Press the <code>space bar</code> to launch the Red Bird and you can also use the arrow keys. If it takes you too long to destroy the pigs you might want to consider pressing the <code>space bar</code> several times ;)</blockquote>

<a href="http://jsfiddle.net/Gue8x/show" imageanchor="1" style="margin-left: 1em; margin-right: 1em;" target="_blank"><img border="0" src="http://4.bp.blogspot.com/-PRXEAO-ZYuM/UVPOS_7QrnI/AAAAAAAAYoQ/VntWqZzDWeI/s1600/Screenshot+on+3.27.2013+at+11.56.39+PM.png" /></a>

<h3>
Conclusion</h3>

Using events and messages across your web application can help with communication. Events allow a component to communicate with itself and messages can enable other components to listen in without having a hard dependency.

There are many other front-end architecture techniques that have been stolen by the pigs. Tune in next time as the next Angry Bird takes its revenge! Dun, dun, daaaaaaa!