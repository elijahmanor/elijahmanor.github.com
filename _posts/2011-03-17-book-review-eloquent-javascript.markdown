---
layout: post
title: 'Book Review: Eloquent JavaScript'
date: '2011-03-17 05:26:00'
---

<a href="ttp://www.amazon.com/Eloquent-JavaScript-Marijn-Haverbeke/dp/1593272820" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="200" src="https://lh3.googleusercontent.com/-q4xFNpoOwL4/TYGRZrx3n5I/AAAAAAAAJbE/QFCMWpTZuSc/s200/ejs.png" style="float: left; padding: 0 15px 15px 0;" width="151" /></a><h3>
Eloquent JavaScript: A Modern Introduction to Programming</h3>

During my flight to and from Seattle, WA from the MVP Summit I was able to read <a href="http://www.amazon.com/Eloquent-JavaScript-Marijn-Haverbeke/dp/1593272820" target="_blank">Eloquent JavaScript: A Modern Introduction to Programming</a> by <a href="http://marijnhaverbeke.nl/" target="_blank">Marijn Haverbeke</a> (<a href="http://twitter.com/marijnjh" target="_blank">@marijnjh</a>). It is kind of funny to say, but for some parts of the book it almost read like a novel. Read on for more details ;)

<h3>
Table of Contents</h3>
<ol>
<li>Introduction</li>
<li>Basic JavaScript: Values, Variables, and Control Flow</li>
<li>Functions</li>
<li>Data Structures: Objects and Arrays</li>
<li>Error Handling</li>
<li>Functional Programming</li>
<li>Object-Oriented Programming</li>
<li>Modualarity</li>
<li>Regular Expressions</li>
<li>Web Programming: A Crash Course</li>
<li>The Document Object Model</li>
<li>Browser Events</li>
<li>HTTP Request</li>
</ol>

<h3>
An Enjoyable Read</h3>

I enjoy technical books anyway, but this one was quite unique. Not only did it get into the nitty gritty of JavaScript, techniques, and patterns, but it also did it in a light hearted and often times hilarious way. For example, there were two stories described in the book "Aunt Emily's Cats" and "The Sad Story of the Recluse" that really stood out to me. I don't know the last time I've read a technical book and the stories have made such an impression.

<b>Aunt Emily's Cats</b>

Story: A story of a guy whose crazy Aunt has over 50 cats living with her and she regularly emails you to keep you up-to-date. At the end of each email she appends what cats have been born and which cats have died. You want to humor your Aunt by keeping track of the genealogy of her cats so that you can ask about her cats, their birthdays, etc…

Solution: Write an algorithm to parse all the emails the Aunt sent and build up a genealogy using JavaScript and techniques that are taught along the way.

<b>The Sad Story of the Recluse</b>

Story: There was a recluse living in the mountains. He didn't do much, but one day he wanted to write something, so he decided to write a technical book. Instead of writing his book in HTML he decided to make up his own Markdown-ish language that he would later convert into HTML. Unfortunately, the recluse was struck by lightening and died. 

Solution: In his honor, the book guides you on how to write the program that the recluse only had dreamed.

<h3>
Funny Code Examples</h3>

Don't worry, there is no lack of code in this book. In fact some of the code is downright hilarious!

In his explanation of the stack in JavaScript he shows asking the computer a really hard question that causes it to run out of space or "blow the stack"!

<pre class="brush: javascript;">function chicken() {
   return egg();
}

function egg() {
   return chicken();
}

print( chicken() + " came first." );
</pre>

I wish I would have thought of that. A good example and funny! LOL

<h3>
Memorable Quotes</h3>

As I wrote in my margins the following quotations from his book stood out to me, so I thought I would share them with you.

<blockquote>
"The art of programming is the skill of controlling complexity" --Page 3</blockquote>

<blockquote>
"Pure functions are the things that mathematicians mean when they say "function." They always return the same value when given the same argument and do not have side effects...Generally, when something can naturally be expressed as a pure function, write it that way. You'll thank  yourself later. If not, don't feel dirty for writing nonpure functions." --Page 37</blockquote>

<blockquote>
"...[don't] worry about efficiency until your program is provably too slow. When it is, find out which parts are taking up the most time, and start exchanging elegance for efficiency in those parts." --Page 38</blockquote>

<blockquote>
"If we build up a big string by concatenating lots of little string, new strings have to be created at every step, only to be thrown away when the next piece is concatenated to them. If, on the other hand, we store all the little strings in an array and then join them, only one big string has to be created." --Page 88</blockquote>

<h3>
Summary</h3>

I would target this book for both a beginner and intermediate developer. As I've mentioned before, the book was pretty easy to read and in some parts quite amusing ;)

Even thought you might be tempted to skip a chapter here and there because you think you know something, I would encourage you to read it from start to end. You never what what small nuances you've been missing all these years about JavaScript.

An older version of the material can be found free <a href="http://eloquentjavascript.net/" target="_blank">online</a> ( HTML/PDF ) and also a revised and updated version is available from <a href="http://www.amazon.com/Eloquent-JavaScript-Marijn-Haverbeke/dp/1593272820" target="_blank">Amazon</a> ( Paperback/Kindle ). 

Thanks Marijn Haverbeke for an informative and enjoyable book!