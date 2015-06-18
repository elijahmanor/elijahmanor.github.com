---
layout: post
title: 'Angry Birds of JavaScript- White Bird: Linting'
date: '2013-04-04 05:19:00'
---

<h2>
Introduction</h2>
<!-- Yellow Bird - RequireJS http://jsfiddle.net/4QG5Q/ http://plnkr.co/edit/syYXSOWx1UWUlbFAd0v9 -->
<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-hbs_feLNzNE/UVx7DKXG-cI/AAAAAAAAZug/vDk6cFJ7Jgk/s1600/angry_birds_wall_decal_by_graphicwolf-d4fwzrc.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" height="243" src="http://4.bp.blogspot.com/-hbs_feLNzNE/UVx7DKXG-cI/AAAAAAAAZug/vDk6cFJ7Jgk/s400/angry_birds_wall_decal_by_graphicwolf-d4fwzrc.jpg" width="400" /></a></div>
A diabolical herd of pigs stole all of the front-end architecture from an innocent flock of birds and now they want it back!

A team of special agent hero birds will attack those despicable pigs until they recover what is rightfully theirs, front-end JavaScript architecture!

Will the birds be successful in the end? Will they defeat their bacon flavored foe? Let's find out together in another nail biting episode of Angry Birds of JavaScript!

<blockquote>
Check out the <strong><a href="http://elijahmanor.com/angry-birds-of-javascript-series/" target="_blank">series introduction post</a></strong> for a list of all the birds and their attack powers.</blockquote>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-c3JawpCl3ys/UVx7L_dMWxI/AAAAAAAAZuo/YEClyACJaZg/s1600/white-bird.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" src="http://3.bp.blogspot.com/-c3JawpCl3ys/UVx7L_dMWxI/AAAAAAAAZuo/YEClyACJaZg/s1600/white-bird.png" /></a></div>
<h3>
Previous Attacks</h3>
<ul>
<li><a href="http://elijahmanor.com/angry-birds-of-javascript-red-bird-iife/" target="_blank">Red Bird - IIFE</a></li>
<li><a href="http://elijahmanor.com/angry-birds-of-javascript-blue-bird-events/" target="_blank">Blue Bird - Events</a></li>
<li><a href="http://elijahmanor.com/angry-birds-of-javascript-yellow-bird-requirejs/" target="_blank">Yellow Bird - RequireJS</a></li>
<li><a href="http://www.elijahmanor.com/angry-birds-of-javascript-black-bird-backbone/" target="_blank">Black Bird - Backbone</a></li>
</ul>

<h3>
White Bird Attacks</h3>

In this post we will take a look at the White Bird who appears to be seemingly harmless, but when it pulls out it's strict coding style and bursts of quality checks the hogs are sure to squeal. Slowly, one by one, the birds will take back what it theirs to keep!

<h2>
What Was Stolen by the Pigs?</h2>

The birds all learned how to program in a slightly different way. Some birds were self-taught and some birds went to college for computer science. Even among those groups there were a wide range of experiences and talent. When the birds got together to build their first large application it was a huge disaster. Each bird thought their coding standard was the "right way" and it started to become an issue. One day a wise White Bird came along and suggested that they come up with a common set of coding practices to follow. In addition, the White Bird introduced a few tools to help them conform to a standard and to help find issues and concerns early before they became a huge issue later.

However, during a recent invasion the pigs stole the birds' coding standards document and their code quality tools! As a result, one of the White Birds has been tasked to reclaim what has been stolen. He will use his overwhelming power of quality to help destroy the pigs in order to take back what is theirs.

<h2>
JavaScript Coding Standards</h2>

There are many coding standards out there to choose from. The most important thing is that you pick one and stick to it. If you are working with a team, they should also agree on some standard. If you can't find a standard you exactly agree on, then find one that is close and make some exceptions.

By doing so you'll find that...

<ul>
<li>A developer will be able to make sense of other code more quickly</li>
<li>Merges in your code repository won't be as awful</li>
<li>Having a standard will actually reduce defects</li>
<li>The codebase will feel more unified</li>
<li>Disagreements about who is "right" will lessen</li>
<li>... insert your benefit here ...</li>
</ul>

Here are some of the coding standards that I am aware of...

<ul>
<li>Douglas Crockford's <a href="http://javascript.crockford.com/code.html" target="_blank">Code Conventions for the JavaScript Programming Language</a></li>
<li><strong>Rich Waldron's (<a href="http://twitter.com/rwaldron" target="_blank">@rwaldron</a>) <a href="https://github.com/rwldrn/idiomatic.js" target="_blank">Idiomatic.js - Principles of Writing Consistent, Idiomatic JavaScript</a> ← Recommended</strong></li>
<li><strong>jQuery's <a href="http://contribute.jquery.org/style-guide/js/?rdfrom=http%3A%2F%2Fdocs.jquery.com%2Fmw%2Findex.php%3Ftitle%3DJQuery_Core_Style_Guidelines%26redirect%3Dno" target="_blank">JavaScript Style Guide </a> ← Recommended</strong></li>
<li>Google's <a href="http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml" target="_blank">JavaScript Style Guide</a></li>
</ul>

Addy Osmani (<a href="http://twitter.com/addyosmani" target="_blank">@addyosmani</a>) has a nice post entitled <a href="http://addyosmani.com/blog/javascript-style-guides-and-beautifiers/" target="_blank">JavaScript Style Guides And Beautifiers</a> that covers some of these styles in depth with examples showing how to abide by the standards recommended.

<h2>
JavaScript Linting</h2>

A linter is a tool that helps find errors and possible issues with your code. In many cases it can help enforce whatever coding standard you chose from the above list.

There are actually several JavaScript linters out there, but the one I like the best is <a href="http://jshint.com/" target="_blank">JSHint</a> created by Anton Kovalyov (<a href="http://twitter.com/valueof">@valueof</a>). It grew out of a community effort to fork the popular JSLint library written by Douglas Crockford. I've enjoyed watching the project grow and see bugs and new features being added. JSHint has a lot of options that you can choose to opt-in or opt-out of which enables a team to figure out what works best for them.

Some of the standard checks that JSHint can verify include...

<ul>
<li>The use of <code>===</code> instead of <code>==</code></li>
<li>Using variables that aren't defined</li>
<li>Declaring variables that are never used</li>
<li>Declaring functions inside of loops</li>
<li>And lots more...</li>
</ul>

For a full list of options see the <a href="http://jshint.com/docs/" target="_blank">JSHint Docs</a>.

Some of the more recent additions that I've really enjoyed include:

<ul>
<li><code>maxcomplexity</code> - Maximum cyclomatic complexity (see following Wikipedia quote)</li>
<li><code>maxstatements</code> - Maximum number of statements allowed in a function</li>
<li><code>maxparams</code> - Maximum number of parameter allowed in a function</li>
<li><code>maxdepth</code> - Maximum depth allowed in a function</li>
<li><code>maxlen</code> - Maximum length of line in code</li>
</ul>

<blockquote>
"The cyclomatic complexity of a section of source code is the count of the number of linearly independent paths through the source code." --<a href="http://en.wikipedia.org/wiki/Cyclomatic_complexity">http://en.wikipedia.org/wiki/Cyclomatic_complexity</a></blockquote>

<script src="https://gist.github.com/elijahmanor/5307478.js?file=jshint.js"></script>
The following errors are generated by JSHint after running it against the above code snippet.

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-Jj5KYftluoQ/UVz04mayIXI/AAAAAAAAZvQ/P9diYW0g8UE/s1600/4-3-2013+10-33-12+PM.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="352" src="http://1.bp.blogspot.com/-Jj5KYftluoQ/UVz04mayIXI/AAAAAAAAZvQ/P9diYW0g8UE/s640/4-3-2013+10-33-12+PM.png" width="640" /></a></div>

Thankfully you don't have to run JSHint from the website every time to check your code. There are several ways to integrate it into your code editor of choice:

<ul>
<li>VIM Plugin (<a href="https://github.com/walm/jshint.vim" target="_blank">jshint.vim</a>)</li>
<li>Sublime Text 2 Extension (<a href="https://github.com/Kronuz/SublimeLinter" target="_blank">Sublime Linter</a>)</li>
<li>TextMate Bundle (<a href="http://fgnass.posterous.com/jslint-in-textmate" target="_blank">JSHint TextMate Bundle</a>)</li>
<li>Visual Studio <a href="http://vswebessentials.com/" target="_blank">Web Essentials</a></li>
<li>Eclipse IDE (<a href="http://github.eclipsesource.com/jshint-eclipse/" target="_blank">JSHint Integration</a>)</li>
</ul>

<blockquote>
In the Mighty Eagle post we'll talk about another way to use the JSHint from the command line and automatically.</blockquote>

<h2>
JavaScript Analysis</h2>

Code linting is great, but sometimes it is nice to get a high level overview of your codebase and then be able to drill down and analyze small portions of your application.

Thankfully there is a tool called <a href="https://github.com/jsoverson/plato" target="_blank">Plato</a> that will analyse your code and provide a visual report where you can view the complexity of your application. The tool runs in Node and you can install it using <code>npm install plato -g</code>.

Once installed you can run the tool on the command line by <code>plato -r -d report myDirectory</code>, which will recursively analyse the code in the <code>myDirectory</code> folder and export the results to the <code>report</code> folder.

If you were to run the report on the jQuery source code it would look much like the following report. As you can see, the average number of lines is decreasing over time, which is good. The maintainability is decent and then a breakdown of the maintainability of each JavaScript file is listed in a bar chart. Further down in the report there are a bar charts for Lines of code broken per file, Estimated errors per file, and also JSLint errors per file.

<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-WfsE5xqGhjc/UV0Fi3Kd9vI/AAAAAAAAZvg/IWnkno7LaK8/s1600/jquery-top-level.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="548" src="http://2.bp.blogspot.com/-WfsE5xqGhjc/UV0Fi3Kd9vI/AAAAAAAAZvg/IWnkno7LaK8/s640/jquery-top-level.png" width="640" /></a></div>

If you drill into one of the particular files from above you'll see a view that looks like the following. The nice part about this report is that it breaks down each function into complexity and lines of code in a way that is easy to grasp. You can quickly jump to various parts of the file to review the concerns the tool is identifying.

<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-GHHmjChHTdo/UV0Fn9yzTwI/AAAAAAAAZvo/qMwHcRxb3p8/s1600/jquery-drill-complexity.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="324" src="http://2.bp.blogspot.com/-GHHmjChHTdo/UV0Fn9yzTwI/AAAAAAAAZvo/qMwHcRxb3p8/s640/jquery-drill-complexity.png" width="640" /></a></div>

You can view the above <a href="http://jsoverson.github.com/plato/examples/jquery/" target="_blank">jQuery Report</a> from Plato's GitHub repository.

<h2>
Attack!</h2>

The following is a simple Angry Birds clone using <a href="http://incompl.github.com/boxbox/">boxbox</a>, a framework for the <a href="https://code.google.com/p/box2dweb/">box2dweb</a> JavaScript physics library, written by <a href="http://bocoup.com/">Bocoup</a>'s <a href="http://twitter.com/_gsmith">Greg Smith</a>.

<blockquote>
Press the <code>space bar</code> to launch the White Bird and you can also use the arrow keys.</blockquote>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://jsfiddle.net/4QG5Q/1/show" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="396" src="http://3.bp.blogspot.com/-eLUAASpDUy0/UV0NIExF6RI/AAAAAAAAZwA/uCKAm54p5W4/s640/Screenshot+on+4.4.2013+at+12.14.59+AM.png" width="640" /></a></div>

<h3>
Conclusion</h3>

Front-end web applications can get complicated quickly. If your developers aren't all on the same page then things can fall apart in a heartbeat, especially on a large project. Having a unified coding standard and implementing some tools to help find issues before they become a problem can really help to make your project a success.

There are many other front-end architecture techniques that have been stolen by the pigs. Tune in next time as the next Angry Bird takes its revenge! Dun, dun, daaaaaaa!
