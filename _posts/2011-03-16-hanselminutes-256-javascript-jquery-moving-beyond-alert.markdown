---
layout: post
title: 'Hanselminutes #256: JavaScript&amp; jQuery: Moving beyond Alert&#40;&#41;'
date: '2011-03-16 05:48:00'
---

<img border="0" height="113" src="https://lh4.googleusercontent.com/-BxpMMCyoaMg/TYA3n60AZ7I/AAAAAAAAJbA/Y3TwCGMPF8M/s1600/shanselman.jpg" style="float: left; padding: 0 15px 15px 0;" width="85" />Dave Ward ( <a href="http://twitter.com/encosia" target="_blank">@encosia</a> ) and I were honored to be guests on <a href="http://www.hanselminutes.com/default.aspx?showID=275" target="_blank">Hanselminutes #256: JavaScript &amp; jQuery: Moving beyond Alert()</a> while we were at the MVP Summit in Redmond, WA.<img border="0" height="113" src="https://lh6.googleusercontent.com/-b_BKQDOaHp8/TYA2wtwvM7I/AAAAAAAAJa8/leSUOyxsAwA/s200/encosia.jpg" style="float: right; padding: 15px 0 15px 15px;" width="85" /> 

<a class="demoButton" href="http://www.hanselminutes.com/default.aspx?showID=275">Listen to Podcast</a>

Our conversations revolved around trying to encourage developers to take their JavaScript knowledge to the next level. 

Many developers view JavaScript as a necessary evil and possibly a toy language. Part of this tarnished view of JavaScript may have stemmed from the olden days when you had to manually navigate through the various DOM inconsistencies yourself. Thankfully today modern JavaScript libraries (such as jQuery, Dojo, MooTools, YUI, etc) have abstracted away many of those horrible cross-browser inconsistencies in the DOM.

Many developers don't take the necessary effort to learn JavaScript appropriately. What typically happens is that a developer will try to code JavaScript in the same way they would C#, Java, etc... In many cases, you can be successful with this approach, however, the more JavaScript you write you will inevitably find yourself uncovering strange bugs.

<b>Lint Tools</b>
These are some tools that can help you identify some common problems in your JavaScript
<ul>
<li><a href="http://jslint.com/">JSLint.com</a> by Douglas Crockford *Based on the concepts from the JavaScript: The Good Parts book</li>
<li><a href="http://jshint.com/">JSHint.com</a> by Anton Kovalyov ( <a href="http://draft.blogger.com/antonkovalyov" target="_blank">@antonkovalyov</a> ) *A JavaScript Community fork of JSLint</li>
</ul>

<b>Script Loaders</b>
A way to load your scripts asynchronously so that your pages can load faster
<ul>
<li><a href="http://labjs.com/">LAB.js</a> by Kyle Simpson ( <a href="http://twitter.com/getify">@getify</a> )</li>
<li><a href="http://requirejs.org/">RequireJS</a> by James Burke ( <a href="http://twitter.com/jrburke">@jrburke</a> )</li>
<li><a href="https://github.com/BorisMoore/DeferJS">DeferJS</a> by Boris Moore</li>
<li><a href="http://yepnopejs.com/">YepNope</a> by Alex Sexton ( <a href="http://twitter.com/slexaxton">@slexaxton</a> ) and Ralph Holzmann ( <a href="http://twitter.com/ralphholzmann">@ralphholzmann</a> )</li>
<li>etc... ( <a href="https://spreadsheets0.google.com/ccc?key=tDdcrv9wNQRCNCRCflWxhYQ#gid=0">spreadsheet comparing many script loaders</a> )</li>
</ul>

<b>HTML5 Libraries</b>
Detects features of your browser so that you can use it or pollyfill with JavaScript
<ul>
<li><a href="http://www.modernizr.com/">Modernizr</a> by Paul Irish ( <a href="http://twitter.com/paul_irish" target="_blank">@paul_irish</a> ), Faruk Ateş ( <a href="http://twitter.com/KuraFire">@KuraFire</a> ), and Alex Sexton ( <a href="http://twitter.com/slexaxton">@slexaxton</a> ) *Note: The YepNope script loader works really well with this library. Check out <a href="http://css-tricks.com/progressively-enhancing-html5-forms/">Progressively Enhancing HTML5 Forms</a> by Chris Coyier ( <a href="http://twitter.com/chriscoyier">@chriscoyier</a> ) </li>
<li><a href="https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills">List of HTML5 Cross Browser Pollyfills</a></li>
</ul>

<b>Books</b>
These are some good books to introduce you to JavaScript, show you what you what parts are good, and also good patterns that you should consider.
<ul>
<li><a href="http://eloquentjavascript.net/">Eloquent JavaScript: A Modern Introduction to Programming</a> by Marijn Haverbeke ( <a href="http://twitter.com/marijnjh">@marijnjh</a> ) *Free</li>
<li><a href="http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742">JavaScript: The Good Parts</a> by Douglas Crockford</li>
<li><a href="http://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752">JavaScript Patterns</a> by Stoyan Stefanov</li>
</ul>

<b>Articles</b>
These articles are targeted for C# developers that want to understand JavaScript better.d
<ul>
<li><a href="http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-1/">How Good C# Habits can Encourage Bad JavaScript Habits: Part 1 - Global Scope &amp; Declaring Arrays &amp; Objects</a></li>
<li><a href="http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-2/">How Good C# Habits can Encourage Bad JavaScript Habits: Part 2 – False-y, Testing and Default Values, Comparisons, and Looping</a></li>
<li><a href="http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-3/">How Good C# Habits can Encourage Bad JavaScript Habits: Part 3 – Function Scope, Hoisting, &amp; Closures</a></li>
<li><a href="http://blog.boyet.com/blog/javascriptlessons/">JavaScript for C# Programmers</a> by Julian Bucknall ( <a href="http://twitter.com/jmbucknall">@jmbucknall</a> )</li>
</ul>

<b>Videos</b>
These are some great videos that I have learned a lot from. If you have time I strongly encourage you sit back and enjoy.
<ul>
<li><a href="http://yuiblog.com/crockford/" style="color: #073763;">Crockford on JavaScript</a>&nbsp;video series on Yahoo!</li>
<li><a href="http://paulirish.com/2010/10-things-i-learned-from-the-jquery-source/">10 Things I Learned from the jQuery Source</a> by Paul Irish ( <a href="http://twitter.com/paul_irish" target="_blank">@paul_irish</a> )</li>
<li><a href="http://paulirish.com/2011/11-more-things-i-learned-from-the-jquery-source/">11 More Things I Learned from the jQuery Source</a> by Paul Irish ( <a href="http://twitter.com/paul_irish" target="_blank">@paul_irish</a> )</li>
</ul>
