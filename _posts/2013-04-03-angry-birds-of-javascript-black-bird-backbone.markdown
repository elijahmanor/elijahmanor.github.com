---
layout: post
title: 'Angry Birds of JavaScript- Black Bird: Backbone'
date: '2013-04-03 05:05:00'
---

<h2>
Introduction</h2>
<!-- Yellow Bird - RequireJS http://jsfiddle.net/4QG5Q/ http://plnkr.co/edit/syYXSOWx1UWUlbFAd0v9 -->
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-efyDWffod9w/UVpR-LEJYyI/AAAAAAAAZgE/w6UXvXY3u9w/s1600/000001611.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" height="200" src="http://2.bp.blogspot.com/-efyDWffod9w/UVpR-LEJYyI/AAAAAAAAZgE/w6UXvXY3u9w/s200/000001611.jpg" width="154" /></a></div>
A diabolical herd of pigs stole all of the front-end architecture from an innocent flock of birds and now they want it back! 

A team of special agent hero birds will attack those despicable pigs until they recover what is rightfully theirs, front-end JavaScript architecture!

Will the birds be successful in the end? Will they defeat their bacon flavored foe? Let's find out together in another nail biting episode of Angry Birds of JavaScript!

<blockquote>
Check out the <strong><a href="http://www.elijahmanor.com/2013/03/angry-birds-of-javascript-series.html" target="_blank">series introduction post</a></strong> for a list of all the birds and their attack powers.</blockquote>

<a href="http://4.bp.blogspot.com/-wjhQKJKNuks/UVdeWffTYoI/AAAAAAAAZNY/XpHY_8R3tQs/s1600/black-bird.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" src="http://4.bp.blogspot.com/-wjhQKJKNuks/UVdeWffTYoI/AAAAAAAAZNY/XpHY_8R3tQs/s1600/black-bird.png" /></a>
<h3>
Previous Attacks</h3>
<ul>
<li><a href="http://www.elijahmanor.com/2013/03/angry-birds-of-javascript-red-bird.html" target="_blank">Red Bird - IIFE</a></li>
<li><a href="http://www.elijahmanor.com/2013/03/angry-birds-of-javascript-blue-bird.html" target="_blank">Blue Bird - Events</a></li>
<li><a href="http://www.elijahmanor.com/2013/04/angry-birds-of-javascript-yellow-bird.html" target="_blank">Yellow Bird - RequireJS</a></li>
</ul>

<h3>
Black Bird Attacks</h3>

In this post we will take a look at the Black Bird who will use the organized approach of the <a href="http://draft.blogger.com/backbonejs.org" target="_blank">Backbone.js</a> bomb to fight these porkers. Slowly, one by one, the birds will take back what it theirs to keep!

<h2>
What Was Stolen by the Pigs?</h2>

The birds used to write their jQuery code like it was a tangled smorgasbord of worms. They would mix up their views, models, and presenter logic all together in a big interconnected pile of grubs. After a while one of their ancestors, a Black Bird, introduced the Backbone.js library and showed them a different way to think about developing front-end web applications. However, during a recent invasion the pigs stole Backbone.js from the birds and carried it back to their filthy sty.

One of the black birds has been tasked to reclaim what has been stolen. He will use his explosive power of organization to help destroy the pigs in order to take back what is theirs.

<h2>
Tangled Smorgasbord of Worms</h2>

Let's take a look again at the following application that the <a href="http://draft.blogger.com/blogger.g?blogID=30404818">Blue Bird</a> dealt with in a previous attack. Instead of adding messages to untangle the mess we are going to introduce how using Backbone.js can help us out. Here is the running application below...

<blockquote>
It appears <a href="http://plnkr.co/">Plunker</a> is not embedding correctly at the moment. The application is a simple Netflix search interface that will show the results from Netflix. If Plunker doesn't start working soon I will move the demo somewhere else. Sorry for the inconvenience.</blockquote>

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="http://embed.plnkr.co/td1ZTtptDT0RIxc7VIgM" style="height: 300px; width: 100%;"></iframe>

And to refresh your memory, here is the supporting code used for the above web application. You should notice that a lot of concerns are all being mixed together (DOM events, Modifying the View, AJAX Communication, etc...)

<script src="https://gist.github.com/elijahmanor/5283260.js?file=jquery-worms.js"></script>
Do you see the problem? It is so tempting to write code like the above, but I hope you see that it can be a bear to work with and maintain. Don't worry, we have all written code just like the above. The good news is that we don't have to continue to write it that way. Let's take a look at what Backbone.js is and how it can help us out in this situation. 

<blockquote>
There are many other MV* front-end frameworks (Knockout, or AngularJS, EmberJS, & others) that could also bring structure to the above code. I would encourage you to pick a tool that you can be productive with and get comfortable with it.</blockquote>

<h2>
Backbone.js Basics</h2>

Backbone.js has several pieces that can all work together to make a web application. You don't have to use all of these components, but they are available if you choose to use them.

<ul>
<li>Model - Represents data and logic surrounding it</li>
<li>Collection - Ordered sets of Models</li>
<li>View - A module backed by a Model with a render method</li>
<li>Router - Mechanism to provide linkable, sharable URLs</li>
<li>Event - Observer Eventing module</li>
<li>History - Provides the ability to maintain history (back button support)</li>
<li>Sync - Extendable component providing RESTful communication to the server</li>
</ul>

<h2>
Refactoring the Tightly Coupled Code</h2>

Let's take a stab at refactoring the above jQuery mess and use Backbone.js to split out some of the various concerns. 

I'm not going to dive into all of the above pieces in this post, but will focus on 3 of the main pieces (Models, Collections, and Views). I'll touch on some of the Sync concerns, but as part of the other topics. I'll have resources listed at the end if you want to dig deeper into any of these topics.

<h3>
RequireJS</h3>

Before we get into the Models, Collections, and Views I want to show you how we took out all the scripts from the index.html page and used RequireJS to help us out.

<blockquote>
If you've never seen RequireJS before then you might want to check out the previous <strong><a href="http://www.elijahmanor.com/2013/04/angry-birds-of-javascript-yellow-bird.html" target="_blank">Yellow Angry Bird Post</a></strong> about RequireJS.</blockquote>

<h4>
main.js</h4>
<script src="https://gist.github.com/elijahmanor/5283260.js?file=main.js"></script>
The above code is defining the paths for jQuery, Underscore, Backbone, Postal, and Bootstrap. We needed to shim Underscore, Backbone, and Bootstrap since they are not defined as AMD modules. 

Then the <code>require</code> function is called to request a set of dependencies before the callback is invoked. At that point, jQuery and all the other views and models will be ready for usage!

<h3>
Models</h3>

We are going to make 2 models (Search and Movie) to represent the above application. 

The following Search Model is really simple and its main job is to respond when the <code>term</code> property has changed. We are using Backbone's events (Observer Events) to listen to changes on the model and then propagating the message to Postal.js (Mediated Events). For more information about those terms and how they are different you can reference the <a href="http://www.elijahmanor.com/2013/03/angry-birds-of-javascript-blue-bird.html" target="_blank">Blue Angry Bird Post</a> about events.  

<h4>
search.js</h4>
<script src="https://gist.github.com/elijahmanor/5283260.js?file=search.js"></script>
The following Movie Model doesn't have a lot going on as well. It's main purpose is to parse the data returned from the server and map the results to something a little more manageable. In this case we are only concerned with the <code>releaseYear</code>, <code>rating</code>, and <code>name</code> properties.

<h4>
movie.js</h4>
<script src="https://gist.github.com/elijahmanor/5283260.js?file=movie.js"></script>
<h3>
Collections</h3>

As we described above, collections are just a set of models. The following code is just a set of Movie models. The collection is where you define where to get the list of models from the server. The back-end for this application is Netflix and their endpoint is a little complex so we are using a function to dynamically build that URL. We also defined a <code>parse</code> method to get directly to the array of contents that will be mapped to <code>Movie</code> models. Since this AJAX call will be using JSONP we also needed to override the <code>sync</code> method and provide some additional options.

<h4>
movies.js</h4>
<script src="https://gist.github.com/elijahmanor/5283260.js?file=movies.js"></script>
<h3>
Views</h3>

I see the View as more of a Presenter than the typical MVC View you might normally think of. Anyway, We have 2 views in this application that we will briefly look at.

The following <code>SearchView</code> handles the interactions with the DOM and the Model. The <code>events</code> property primarily is used to listen to DOM events and in this case is watching for clicks on the button or previous search links. Changes to these elements will be stored in the model as <code>term</code>. The <code>initialize</code> method sets up some events listening for changes in the <code>term</code> property. If <code>term</code> changes, then portions of the UI will change accordingly.

<h4>
search-view.js</h4>
<script src="https://gist.github.com/elijahmanor/5283260.js?file=search-view.js"></script>
The <code>MovieView</code> below is a little different than the above view. The first thing to point out is the weird <code>text!movie-template.html</code>. I am using the <code>text.js</code> plugin for RequireJS that let's us pull text resources as part of the dependency chain. This is really helpful for markup files used when using a templating engine or possibly a CSS file that is associated with a particular widget. Inside of the <code>initialize</code> method we are subscribing to a change in the term and then asking the collection to <code>fetch</code> the information from the server. The <code>render</code> method gets called after the data is retrieved from the server and we use Underscore to template the results to the DOM.

<h4>
movie-view.js</h4>
<script src="https://gist.github.com/elijahmanor/5283260.js?file=movie-view.js"></script>
The following is the template file in case you were wondering. I'm using Underscore's templating engine which is similar to John Resig's micro-templating implementation that he wrote years ago. There are other templating libraries available, but I used this one because it comes with Underscore which is a prerequisite for Backbone. If I needed something more featured I would have used Handlebars instead, but that is a story for another Angry Bird ;)

<h4>
movie-template.html</h4>
<script src="https://gist.github.com/elijahmanor/5283260.js?file=movie-template.html"></script>
<h2>
Additional Resources</h2>

I only scratched the surface on all the things you can do with Backbone.js. If you are interesting in learning more about these concepts you may want to look at some of the following resources. 

<blockquote>
The following resources were taken from the <strong><a href="http://www.elijahmanor.com/2013/01/beginner-html5-javascript-jquery.html" target="_blank">Beginner HTML5, JavaScript, jQuery, Backbone, and CSS3 Resources</a></strong> blog post.</blockquote>

<ul>
<li><a href="http://backbonejs.org/">Backbone.js API</a></li>
<li><a href="http://backbonejs.org/docs/backbone.html">Annotated Backbone.js Code</a></li>
<li><a href="https://github.com/documentcloud/backbone/wiki/Extensions,-Plugins,-Resources">Backbone Extensions, Plugins, &amp; Resources</a></li>
<li><a href="https://github.com/tbranyen/backbone-boilerplate">Backbone Boilerplate</a></li>
<li><a href="https://github.com/addyosmani/backbone-fundamentals">Backbone Fundamentals eBook</a> by Addy Osmani (<a href="http://twitter.com/addyosmani">@addyosmani</a>)</li>
<li><a href="https://peepcode.com/products/backbone-js">Peep Code: Backbone.js Video Series</a> by Geoffery Grosenbach (<a href="http://twitter.com/topfunky">@topfunky</a>) and David Goodlad (<a href="http://twitter.com/dgoodlad">@dgoodlad</a>)</li>
<li><a href="http://pragprog.com/screencasts/v-dback/hands-on-backbone-js">The Pragmatic Bookshelf: Hands-on Backbone.js</a> by Derick Bailey (<a href="http://twitter.com/derickbailey">@derickbailey</a>)</li>
<li><a href="http://backbonescreencasts.com/">Backbone.js Screencasts</a> by Joey Beninghove</li>
<li><a href="http://www.pluralsight.com/training/Courses/TableOfContents/backbone-fundamentals">Pluralsight: Backbone.js Fundamentals</a> by Liam McLennan (<a href="http://twitter.com/liammclennan">@liammclennan</a>)</li>
<li><a href="http://codular.com/starting-with-backbone">The Skinny on BackboneJS</a> by Ben Howdle (<a href="http://twitter.com/benhowdle">@benhowdle</a>)</li>
<li><a href="http://backbonetutorials.com/">Backbone Tutorials</a></li>
<li><a href="http://net.tutsplus.com/tag/backbone/">Backbone.js Tutorials</a> via Nettuts</li>
<li><a href="http://javascriptplayground.com/blog/category/backbonejs">Exploring Backbone.js Series</a> by Jack Franklin (<a href="http://twitter.com/jack_franklin">@jack_franklin</a>)</li>
</ul>

<h2>
Attack!</h2>

The following is a simple Angry Birds clone using <a href="http://incompl.github.com/boxbox/">boxbox</a>, a framework for the <a href="https://code.google.com/p/box2dweb/">box2dweb</a> JavaScript physics library, written by <a href="http://bocoup.com/">Bocoup</a>'s <a href="http://twitter.com/_gsmith">Greg Smith</a>.

<blockquote>
Press the <code>space bar</code> to launch the Black Bird and you can also use the arrow keys.</blockquote>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-QBX6E-gJmzE/UVuGtHDEmMI/AAAAAAAAZuM/xXbC6KMc3OU/s1600/black-brid-game.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://4.bp.blogspot.com/-QBX6E-gJmzE/UVuGtHDEmMI/AAAAAAAAZuM/xXbC6KMc3OU/s1600/black-brid-game.png" /></a></div>

<h3>
Conclusion</h3>

Front-end web applications can get complicated quickly. Before you know it you have a pile of interconnected mess if you are not careful. Thankfully Backbone.js provides components to help you split out your application into consumable pieces that each have their own purpose. Thank you Black Bird for returning Backbone back to the birds. They will be able to rest easier knowing things are organized and in their proper place.

There are many other front-end architecture techniques that have been stolen by the pigs. Tune in next time as the next Angry Bird takes its revenge! Dun, dun, daaaaaaa!