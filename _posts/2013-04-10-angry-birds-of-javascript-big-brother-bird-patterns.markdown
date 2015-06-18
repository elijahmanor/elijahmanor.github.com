---
layout: post
title: 'Angry Birds of JavaScript- Big Brother Bird: Patterns'
date: '2013-04-10 05:05:00'
---

<h2>
Introduction</h2>
<!-- Yellow Bird - RequireJS http://jsfiddle.net/4QG5Q/ http://plnkr.co/edit/syYXSOWx1UWUlbFAd0v9 -->
<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-mwxJ0DGmvGI/UWCKOt-Lx6I/AAAAAAAAZ14/od_wDw_B5mk/s1600/angry-birds-big-red-bird.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" height="180" src="http://3.bp.blogspot.com/-mwxJ0DGmvGI/UWCKOt-Lx6I/AAAAAAAAZ14/od_wDw_B5mk/s320/angry-birds-big-red-bird.jpg" width="320" /></a></div>
A diabolical herd of pigs stole all of the front-end architecture from an innocent flock of birds and now they want it back! 

A team of special agent hero birds will attack those despicable pigs until they recover what is rightfully theirs, front-end JavaScript architecture!

Will the birds be successful in the end? Will they defeat their bacon flavored foe? Let's find out together in another nail biting episode of Angry Birds of JavaScript!

<blockquote>
Check out the <strong><a href="http://elijahmanor.com/angry-birds-of-javascript-series/" target="_blank">series introduction post</a></strong> for a list of all the birds and their attack powers.</blockquote>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-wqME_pIXlMg/UWCKU5PVcVI/AAAAAAAAZ2A/yoODl8TYwKU/s1600/big-brother-bird.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" src="http://4.bp.blogspot.com/-wqME_pIXlMg/UWCKU5PVcVI/AAAAAAAAZ2A/yoODl8TYwKU/s1600/big-brother-bird.png" /></a></div>
<h3>
Previous Attacks</h3>
<ul>
<li><a href="http://elijahmanor.com/angry-birds-of-javascript-red-bird-iife/" target="_blank">Red Bird - IIFE</a></li>
<li><a href="http://elijahmanor.com/angry-birds-of-javascript-blue-bird-events/" target="_blank">Blue Bird - Events</a></li>
<li><a href="http://elijahmanor.com/angry-birds-of-javascript-yellow-bird-requirejs/" target="_blank">Yellow Bird - RequireJS</a></li>
<li><a href="http://elijahmanor.com/angry-birds-of-javascript-black-bird-backbone/" target="_blank">Black Bird - Backbone</a></li>
<li><a href="http://elijahmanor.com/angry-birds-of-javascript-white-bird-linting/" target="_blank">White Bird - Linting</a></li>
<li><a href="http://elijahmanor.com/angry-birds-of-javascript-green-bird-mocking/" target="_blank">Green Bird - Mocking</a></li>
<li><a href="http://elijahmanor.com/angry-birds-of-javascript-orange-bird-templating/" target="_blank">Orange Bird - Templating</a></li>
</ul>

<h3>
Big Brother Bird Attacks</h3>

In this post we will take a look at the Big Brother Bird who pulls out the big guns with his finite state machine and other proven design patterns of destruction. Slowly, one by one, the birds will take back what it theirs to keep!

<h2>
What Was Stolen by the Pigs?</h2>

The birds knew how to program for the most part, but they never had a common terminology that they all understood to represent common scenarios they kept encountering. Then one day a Big Brother Bird came along and documented a set of common Design Patterns and them names and descriptions so they could all be on the same page when talking about architecture. Big Brother Bird ended up writing these patterns in a popular piece that became known as the <strong>Gang of Foul</strong> book.

However, during a recent invasion the pigs stole the birds' Gang of Fowl book! As a result, one of the Big Brother Birds has been tasked to reclaim what has been stolen. He will use his overwhelming power of trickery to help destroy the pigs in order to take back what is theirs.

<h2>
Gang of Fowl Patterns</h2>

<div style="width: 100%;">
<div style="float: left; width: 33%;">
<h3>
Creational Patterns</h3>
<ul>
<li>Abstract Factory</li>
<li>Builder</li>
<li>Factory Method</li>
<li>Prototype</li>
<li>Singleton</li>
</ul>
</div>
<div style="float: right; width: 33%;">
<h3>
Structural Patterns</h3>
<ul>
<li>Adapter</li>
<li>Bridge</li>
<li>Composite</li>
<li>Decorator</li>
<li>Facade</li>
<li>Flyweight</li>
<li>Proxy</li>
</ul>
</div>
<div style="float: right; width: 33%;">
<h3>
Behavioral Patterns</h3>
<ul>
<li>Chain of Resp.</li>
<li>Command</li>
<li>Interpreter</li>
<li>Iterator</li>
<li>Mediator</li>
<li>Memento</li>
<li>Observer</li>
<li>State</li>
<li>Strategy</li>
<li>Template Method</li>
<li>Visitor</li>
</ul>
</div>
</div>
<div style="clear: both;">
</div>

<h2>
Some These Patterns in JavaScript</h2>

<h3>
Singleton</h3>

The most basic form of singleton is the object literal as shown below. We are basically just creating an object and there is one of them. Technically someone could <code>Object.create</code> on us, but for the most part this fulfills the singleton definition. You can find a more robust solution in one of the resources recommended near the end of this post.

<script src="https://gist.github.com/elijahmanor/5328936.js?file=singleton.js"></script>
<h3>
Factory</h3>

A factory is a way to create new objects without actually using the <code>new</code> keyword. The idea is that there is something abstracted away from you in the factory method. In the following example we are aren't necessarily doing anything fancy, but you could imagine that we could add some custom code down the road and the external API wouldn't change, which is the point of this pattern.

<script src="https://gist.github.com/elijahmanor/5328936.js?file=factory.js"></script>
<h3>
Bridge</h3>

In the following snippet of code we are creating a small bridge between an event handler and the code that will be executed. By creating a little bridge it will enabled the executed code to be tested easier since it won't have a dependency on the element context that was passed by jQuery.

<script src="https://gist.github.com/elijahmanor/5328936.js?file=bridge.js"></script>
<h3>
Facade</h3>

A facade is common place in front-end web development since there is so much cross-browser inconsistencies. A facade brings a common API to something that could vary under the covers. In the following snippet we abstract the addEventListener logic for various browser implementations.

<script src="https://gist.github.com/elijahmanor/5328936.js?file=facade.js"></script>
<h3>
Adapter</h3>

An adapter is a nice way to massage one piece of code to work with another piece of code. This can be useful when you need to switch to another library, but can't afford to rewrite much of your code. In the following example we are modifying jQuery's <code>$.when</code> method to work with the <code>WinJS.Promise</code>. This is some code I wrote back when I worked for appendTo when we were making jQuery working with Windows 8 apps. You can find this repository at <a href="https://github.com/appendto/jquery-win8" target="_blank">jquery-win8</a>.

<blockquote>
Much of the jquery-win8 repository is not needed anymore since Jonathan Sampson has worked with the jQuery team to make sure the changes he made to the shim was added to the 2.0 version of jQuery as noted in the <a href="http://appendto.com/blog/2013/03/windows-store-applications-with-jquery-2-0/" target="_blank">following blog post</a></blockquote>

<script src="https://gist.github.com/elijahmanor/5328936.js?file=adapter.js"></script>
<h3>
Observer</h3>

We've covered the Observer pattern already in the <a href="http://elijahmanor.com/angry-birds-of-javascript-blue-bird-events/" target="_blank">Blue Bird</a> past a while back in this series, but it is a powerful pattern that can help decouple various components. My recommendation is to use the <a href="https://github.com/postaljs/postal.js" target="_blank">postal.js library</a>.

<script src="https://gist.github.com/elijahmanor/5328936.js?file=observer.js"></script>
<h2>
Many More Patterns</h2>

<h3>
Inheritance</h3>

There are several ways to implement inheritance in JavaScript. It is good to know some of these patterns as you create new objects in your application.

<strong>Prototypal Inheritance</strong>

<script src="https://gist.github.com/elijahmanor/5328936.js?file=prototypal-inheritance.js"></script>
<strong>Pseudoclassical Ineritance</strong>

<script src="https://gist.github.com/elijahmanor/5328936.js?file=pseudoclassical-inheritance.js"></script>
<h3>
Chaining</h3>

In the front-end world chaining became popular by the jQuery library. It is actually a really easy pattern to implement. You essentially just have to return <code>this</code> from every function so that other functions can be immediately called. See the following for an example.

<script src="https://gist.github.com/elijahmanor/5328936.js?file=chaining.js"></script>
<h3>
Encapsulating</h3>

We've already covered encapsulating in the <a href="http://elijahmanor.com/angry-birds-of-javascript-red-bird-iife/" target="_blank">Red Bird</a> past where we talked about the IIFE pattern. This allows you to have public and private properties and methods to help encapsulate your code. The follow is a very brief example of that. Check out the <a href="http://elijahmanor.com/angry-birds-of-javascript-red-bird-iife/" target="_blank">Red Bird</a> post for more details.

<script src="https://gist.github.com/elijahmanor/5328936.js?file=encapsulating.js"></script>
<h3>
Finite State Machine</h3>

One of my favorite pattern is the Finite State Machine. My friend Jim Cowart (<a href="http://twitter.com/ifandelse" target="_blank">@ifandelse</a>) created the <a href="https://github.com/ifandelse/machina.js" target="_blank">Machina.js Library</a> to implement this pattern in JavaScript. The following is an example of using states to describe the game of Angry Birds. For more information check out his <a href="http://freshbrewedcode.com/jimcowart/2012/03/12/machina-js-finite-state-machines-in-javascript/" target="_blank">blog post</a> and <a href="https://github.com/ifandelse/machina.js" target="_blank">GitHub repository</a>.

<script src="https://gist.github.com/elijahmanor/5328936.js?file=finite-state-machine.js"></script>
<h2>
Recommendations</h2>

In addition to learning these patterns I would recommend that you pick one of your favorite libraries and start to source dive into their repository. There is a wealth of information you can learn there. At first it could be semi-overwhelming, but over time you can glean a lot from developers who really know some of these patterns. You might try just looking at one particular method and start picking it apart. If you aren't sure exactly where to look for a particular method why don't you pick jQuery and use James Padolsey's (<a href="http://twitter.com/padosley" target="_blank">@padosley</a>) <a href="http://james.padolsey.com/jquery/" target="_blank">jQuery Source Viewer</a> to help find it for you?

<h2>
Additional Resources</h2>

There are far too many patterns for me to list here. Many have blogged about these before me and will continue to. If I have missed any good ones please let me know.

<ul>
<li><a href="http://www.joezimjs.com/javascript/javascript-design-patterns-singleton/" target="_blank">JavaScript Design Patterns</a> by Joe Zim (<a href="http://twitter.com/JoeZimJS" target="_blank">@JoeZimJS</a>)</li>
<li><a href="http://net.tutsplus.com/tutorials/javascript-ajax/digging-into-design-patterns-in-javascript/" target="_blank">Understanding Design Patterns in JavaScript</a> by Tilo Mitra (<a href="http://twitter.com/tilomitra" target="_blank">@tilomitra</a>)</li>
<li><a href="http://addyosmani.com/resources/essentialjsdesignpatterns/book/" target="_blank">Learning JavaScript Design Patterns</a> by Addy Osmani (<a href="http://twitter.com/addyosmani" target="_blank">@addyosmani</a>)</li>
<li><a href="http://shichuan.github.io/javascript-patterns/" target="_blank">JS Patterns</a> by Shi Chuan (<a href="http://twitter.com/shichuan" target="_blank">@shichuan</a>)</li>
<li><a href="http://shop.oreilly.com/product/9780596806767.do" target="_blank">JavaScript Patterns</a> by Stoyan Stefanov (<a href="http://twitter.com/xyz" target="_blank">@xyz</a>)</li>
<li><a href="http://shop.oreilly.com/product/9780596517748.do" target="_blank">JavaScript: The Good Parts</a> by Douglas Crockford</li>
</ul>

<h2>
Attack!</h2>

The following is a simple Angry Birds clone using <a href="http://incompl.github.com/boxbox/">boxbox</a>, a framework for the <a href="https://code.google.com/p/box2dweb/">box2dweb</a> JavaScript physics library, written by <a href="http://bocoup.com/">Bocoup</a>'s <a href="http://twitter.com/_gsmith">Greg Smith</a>.

<blockquote>
Press the <code>space bar</code> to launch the Big Brother Bird and you can also use the arrow keys.</blockquote>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://jsfiddle.net/k6VCt/show" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://1.bp.blogspot.com/-HjiGrN3B7jg/UWDO-fHTJgI/AAAAAAAAZ2Q/-sshCm882k4/s1600/big-brother-bird-game.png" /></a></div>

<h3>
Conclusion</h3>

The good news is you don't have to know all the answers to be successful in front-end web development, but what does help is knowing some of the common patterns that come up again and again during development. Once you get accustomed to these patterns it will become easier talking about these architectural solutions and figure out solutions should come quicker. Take some time and look through the recommended resources above and start mulling over some of them for yourself.  

There is one more front-end architecture technique that has been stolen by the pigs. Tune in next time as the next Angry Bird takes its revenge! Dun, dun, daaaaaaa!