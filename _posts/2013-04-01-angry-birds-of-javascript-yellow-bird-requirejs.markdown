---
layout: post
title: 'Angry Birds of JavaScript- Yellow Bird: RequireJS'
date: '2013-04-01 05:05:00'
---

<h2>
Introduction</h2>
<!-- Yellow Bird - RequireJS http://jsfiddle.net/LrFVp/14/ http://jsfiddle.net/LrFVp/20/ -->
<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-6p5Xgjlsmhk/UVZlEo_QOKI/AAAAAAAAY9k/BBXhjrfp42U/s1600/Angry-Birds-Logo.png" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" height="212" src="http://4.bp.blogspot.com/-6p5Xgjlsmhk/UVZlEo_QOKI/AAAAAAAAY9k/BBXhjrfp42U/s320/Angry-Birds-Logo.png" width="320" /></a></div>
A diabolical herd of pigs stole all of the front-end architecture from an innocent flock of birds and now they want it back! 

A team of special agent hero birds will attack those despicable pigs until they recover what is rightfully theirs, front-end JavaScript architecture!

Will the birds be successful in the end? Will they defeat their bacon flavored foe? Let's find out together in another nail biting episode of Angry Birds of JavaScript!

<blockquote>
Check out the <strong><a href="http://www.elijahmanor.com/2013/03/angry-birds-of-javascript-series.html" target="_blank">series introduction post</a></strong> for a list of all the birds and their attack powers.</blockquote>

<h3>
Previous Attacks</h3>

<ul>
<li><a href="http://www.elijahmanor.com/2013/03/angry-birds-of-javascript-red-bird.html" target="_blank">Red Bird - IIFE</a></li>
<li><a href="http://www.elijahmanor.com/2013/03/angry-birds-of-javascript-blue-bird.html" target="_blank">Blue Bird - Events</a></li>
</ul>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-eBq1DHq7P64/UVZlP7q4zMI/AAAAAAAAY9s/g5Ii1ZrLIbs/s1600/yellow-bird.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" src="http://4.bp.blogspot.com/-eBq1DHq7P64/UVZlP7q4zMI/AAAAAAAAY9s/g5Ii1ZrLIbs/s1600/yellow-bird.png" /></a></div>
<h3>
Yellow Bird Attacks</h3>

In this post we will take a look at the Yellow Bird who comes with a <a href="http://requirejs.org/" target="_blank">RequireJS</a> speed booster and dynamically injects scripts against those pesky swine. Slowly, one by one, the birds will take back what it theirs to keep!

<h2>
What Was Stolen by the Pigs?</h2>

The birds used to manually add script tags to their HTML files. At first this wasn't an issue, but when their application started to grow larger and more complex it started to become difficult for them to organize their code, figure out dependencies, and determine a strategy for optimizing performance. Thankfully they were introduced to the <a href="http://requirejs.org/" target="_blank">RequireJS</a> library which provided them a way to manage their code into modules, load their scripts asynchronously, manage their dependencies, and provide an easy way to optimize. Unfortunately the pigs, during a recent invasion, stole the RequireJS library from the birds.

One of the yellow birds has been tasked to reclaim what has been stolen. He will use the optimization power of speed to help destroy the pigs in order to take back what is theirs.

<h2>
Broken Application</h2>

Let's first start with a simple little web page that contains just a few scripts. You'll notice that I'm loading 3 popular libraries (jQuery, Underscore, and Postal) and some custom code at the end.

<script src="https://gist.github.com/elijahmanor/5275285.js?file=broken-dependency.html"></script>
The above code looks pretty straightforward, but when I end up running the page I get the following error in the dev tool's console...

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-ry8ojeQF3OI/UVZosPNPtVI/AAAAAAAAY94/0Catr-PQzbo/s1600/3-29-2013+10-36-11+PM.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://1.bp.blogspot.com/-ry8ojeQF3OI/UVZosPNPtVI/AAAAAAAAY94/0Catr-PQzbo/s1600/3-29-2013+10-36-11+PM.png" /></a></div>

Fictitious Internal Dialog: "WHAT!?! I don't see any <code>each</code> method anywhere. What's up with that? Ohh man, it looks like the exception occurred in postal.min.js somewhere. FOUND A BUG... see if I use that library again. But, wait!?! Ohh, maybe something else is going on here."

So, the real issue isn't a bug in postal.js, the issue is in that postal.js has a dependency on underscore.js. The problem is that underscore should have been loaded before postal.js. Simply rearranging the script tags could easily solve this issue. In the above case the fix was trivial, but imagine how cumbersome this could be once the project starts to get large and requires lots of scripts.

<h2>
RequireJS Basics</h2>

Before we go and look at how we could fix the above situation using RequireJS, let's first take a high level overview of what the library is doing for us. RequireJS is an Asynchronous Module Loader and the API it provides allows us to define and require modules. Both functions are really easy to understand so let's take a look at them.

<h3>
define method</h3>

In order to create a module you need a name, a list of dependencies, and a callback function.

<script src="https://gist.github.com/elijahmanor/5275285.js?file=define.js"></script>
<h3>
require method</h3>

At some point in your application you will need to use the <code>require</code> function to kick things off.

<script src="https://gist.github.com/elijahmanor/5275285.js?file=require.js"></script>
<h2>
Fixed Application</h2>

Using RequireJS I took the above little application and rearranged some things. You should notice that the following markup removes all the script tags except one, which points to the require.js library. RequireJS knows where to start because we add an HTML5 data-main attribute describing where the main script is located.

<script src="https://gist.github.com/elijahmanor/5275285.js?file=requirejs.html"></script>
The main script has a configuration section inside of it where you can assign aliases to existing AMD modules and also shim libraries that were not previously defined. Although jQuery and Postal define themselves as AMD modules we included them in our configuration because they are not located alongside <code>main.js</code>.

You don't have to include in your config any custom modules you define in your application. You can refer to those by their file path and name.

<script src="https://gist.github.com/elijahmanor/5275285.js?file=main.js"></script>
<h2>
Optimize</h2>

Our application only has 5 script files in it, but as you know our app will only continue to add additional scripts. So, it would be nice if there was an easy way to combine and minify our scripts for better production performance. The nice thing is that by using RequireJS we have already defined the dependencies of our application.

Thankfully there is a tool called <code><a href="http://requirejs.org/docs/1.0/docs/optimization.html" target="_blank">r.js</a></code> that takes this dependency information and uses it to generate a combined and minified script. You can install the tool with the Node Package Manager <code>npm install requirejs</code>

You could provide all the command line argument to the tool in the console, but I prefer making a build config file like the following to define all of its settings before I run it. You can find a <a href="https://github.com/jrburke/r.js/blob/master/build/example.build.js">comprehensive list of settings</a> from the official GitHub repository.

<script src="https://gist.github.com/elijahmanor/5275285.js?file=build.js"></script>
Once you've defined your <code>build.js</code> file then you let <code>r.js</code> know you want to use it. The following command will get you going... <code>r.js -o build.js</code>. You can see the output of the tool in the output below.

<script src="https://gist.github.com/elijahmanor/5275285.js?file=optimize.sh"></script>
<h2>
Additional Resources</h2>

I only scratched the surface on all the things you can do with RequireJS and the r.js optimization tool. If you are interesting in learning more about these concepts you may want to look at some of the following resources. 

<ul>
<li>Jack Franklin's (<a href="http://twitter.com/jack_franklin" target="_blank">@jack_franklin</a>) <a href="http://javascriptplayground.com/blog/2012/07/requirejs-amd-tutorial-introduction">Introduction to RequireJS</a> article</li>
<li>Jeffrey Way's (<a href="http://twitter.com/jeffrey_way" target="_blank">@jeffrey_way</a>) <a href="http://net.tutsplus.com/tutorials/javascript-ajax/a-requirejs-backbone-and-bower-starter-template/" target="_blank">A RequireJS, Backbone, and Bower Starter Template</a> screencast</li>
<li>Cary Landholt's (<a href="http://twitter.com/carylandholt" target="_blank">@carylandholt</a>) <a href="http://www.youtube.com/watch?v=VGlDR1QiV3A">RequireJS Basics</a> video</li>
<li>Jonathan Creamer's (<a href="http://twitter.com/jcreamer898" target="_blank">@jcreamer898</a>) <a href="http://tech.pro/tutorial/1156/using-requirejs-in-an-aspnet-mvc-application" target="_blank">Using Require.js in an ASP.NET MVC application</a> article</li>
</ul>

<h2>
Attack!</h2>

The following is a simple Angry Birds clone using <a href="http://incompl.github.com/boxbox/">boxbox</a>, a framework for the <a href="https://code.google.com/p/box2dweb/">box2dweb</a> JavaScript physics library, written by <a href="http://bocoup.com/">Bocoup</a>'s <a href="http://twitter.com/_gsmith">Greg Smith</a>.

<blockquote>
Press the <code>space bar</code> to launch the Yellow Bird and you can also use the arrow keys.</blockquote>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://jsfiddle.net/Gue8x/show" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://1.bp.blogspot.com/-BvvbLg5ACrI/UVZoyYxCmSI/AAAAAAAAY-E/G7I6uezUKV0/s1600/3-29-2013+11-19-41+PM.png" /></a></div>

<h3>
Conclusion</h3>

Front-end web applications can get complicated quickly. It is nice to have a way to provide some structure, dependency management, and an easy way to optimize the final result. Thanks to the power of Yellow the birds have regained their trusty RequireJS tool for use in their next application.

There are many other front-end architecture techniques that have been stolen by the pigs. Tune in next time as the next Angry Bird takes its revenge! Dun, dun, daaaaaaa!