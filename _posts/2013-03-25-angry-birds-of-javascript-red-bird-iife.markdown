---
layout: post
title: 'Angry Birds of JavaScript- Red Bird: IIFE'
date: '2013-03-25 05:01:00'
---

<h2>
Introduction</h2>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-gdPxI78dJRM/UUPoi2KHFkI/AAAAAAAAX94/M6gVKm4DN64/s1600/Loading_screen.png" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" height="179" src="http://3.bp.blogspot.com/-gdPxI78dJRM/UUPoi2KHFkI/AAAAAAAAX94/M6gVKm4DN64/s320/Loading_screen.png" width="320" /></a></div>
A diabolical herd of pigs stole all of the front-end architecture from an innocent flock of birds and now they want it back! A team of special agent hero birds will attack those despicable pigs until they recover what is rightfully theirs, front-end JavaScript architecture!

In this post we will take a look at the Red Bird who attacks with the force of their trusty IIFE, the basic block of all privacy.

<h2>
What Was Stolen by the Pigs?</h2>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-JMM-_2Tl7Es/UUOFH81EAUI/AAAAAAAAX8k/GxsgENgc4kY/s1600/red-bird.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="200" src="http://4.bp.blogspot.com/-JMM-_2Tl7Es/UUOFH81EAUI/AAAAAAAAX8k/GxsgENgc4kY/s200/red-bird.png" width="182" /></a></div>
For ages the birds used to litter the global namespace (the window object) with their custom objects and functions. Over time the birds slowly learned techniques to protect their objects from the global namespace, however, since the recent pig invasion all of their anti-global secrets have been stolen! Thankfully the birds are fortunate that a one foul exists with the knowledge of this secret and plans to attack the pigs to unleash what is rightfully theirs.

<h2>
How Objects Become Global?</h2>

There are several ways that an object can become global. Part of the battle is just knowing the various ways.

1. <strong>Declaring an Object in the Window Scope</strong> <!-- TODO: Is this called the Window Scope? Top Level Scope? -->

In the following example there two variables declared, <code>type</code> and <code>attack</code>. These variables were declared in the top level scope and therefore are accessible off of the <code>window</code> object. 

<script src="https://gist.github.com/elijahmanor/4991287.js?file=global-variables.js"></script>
2. <strong>Not Declaring an Object in Any Scope</strong>

One of the most dangerous and easiest things to do in JavaScript is to accidentally declare a global variable when you didn't mean to. If you forget to declare a variable then JavaScript declares it for you as a global! This is usually not what you meant to do and could expose parts of your application that you didn't intend.

<script src="https://gist.github.com/elijahmanor/4991287.js?file=not-declaring-variable.js"></script>
3. <strong>Specifically Adding an Object to the Window</strong>

You also have the opportunity to expose variables to the global namespace intentionally. You can easily do this by accessing the <code>window</code> object and adding a property or method manually. It isn't a good idea to use this technique deep inside your code, but it is worth nothing that you can.

<script src="https://gist.github.com/elijahmanor/4991287.js?file=explicit-global.js"></script>
<h2>
Why Are Global Objects a Problem?</h2>

<ul>
<li><strong>Conflicts within Your Code</strong>

There is a risk that developers within your own company may define the same function, method, or property that already exists in your application. If you have no mechanism to reduce the number of items in the global namespace your risk of accidentally reassigning a variable grows as your application gets larger and more complex.

You may dismiss this reason because you have rigid code reviews and all your developers know your codebase inside out. If that describes you, then check out the next reason ;)

</li>
<li><strong>Conflicts with Your Code and Third-Party Libraries</strong>

Another danger of having multiple global objects is that your code could conflict with third-party libraries that you are using. There are a lot of libraries, plugins, and frameworks out there and not all of them are as aware and conscious about keeping their global variables to a minimum. Your code and the libraries you include could clash and override each-other's behavior which can cause unexpected results.

You may dismiss this reason because you deeply scrutinize all third-party libraries that your team uses and are fully aware of what global variables are exposed by these libraries. If that describes you, then check out the next reason :)

</li>
<li><strong>Conflicts with Your Code and Browser Add-ons/Extensions/Plugins</strong>

The final danger of having multiple global objects is that your code could conflict with the browser itself. What!?! Lets take Google Chrome for an example. Chrome's add-ons are JavaScript based and all of your installed add-ons run on your web page when it is loaded. You never know what add-ons your users have installed and as a result there is a risk that those add-ons will expose global variables that conflict with your code-base.

Does this seem far-fetched? Well, it can at first, but I've actually seen a high profile website (not going to mention which one) run into this very problem. I was trying to use the website and it was broken. I knew the developer so I reached out to him. After some back and forth it turned out I had an add-on installed that broke the website. I contacted the add-on author and they updated their code and now all is fine.

</li>
</ul>
<h2>
Various Ways to Protect Yourself</h2>

Although the above code snippets were very small and simple, they all exposed way too many variables to the global namespace. So, how do we protect ourselves?

<ul>
<li><strong>Object Literal</strong>

The easiest way to help prevent global variable proliferation is to protect yourself with an object literal that limits gathers all objects that would have been global and attaches them to once central object.

<script src="https://gist.github.com/elijahmanor/4991287.js?file=object-literal.js"></script>
</li>
<li><strong>Immediately Invoked Function Expression</strong>

The Immediately Invoked Function Expression (IIFE) is another technique to get around the global issue. This technique is more complicated than the Object Literal, but provides much more power as well. This technique allows the developer to expose public and private properties and methods to the consumer.

Before we get into what this looks like, lets work through some of their weird syntax that we are about to see. The scoping of variables in JavaScript is determined via the function scope and not block scope. So, if you have a variable declared inside an <code>if</code> statement for example it would be available everywhere inside its containing function. This might seem a little jarring to some developers that are used to C, C++, C#, Java, or similar languages. 

So, we are going to use this functional scope idea to create an anonymous function (function with no name) and immediately invoke it.

<script src="https://gist.github.com/elijahmanor/4991287.js?file=unwrapped-iife.js"></script>
Unfortunately, the above snippet doesn't work in JavaScript because it can't parse it correctly. The idea is solid, but the implementation is off just a little bit. Thankfully, there is an easy way to let JavaScript know that we know what we are doing and that is to surround the expression with an extra set of parenthesis.

<script src="https://gist.github.com/elijahmanor/4991287.js?file=empty-iife.js"></script>
The following pattern is known as the Revealing Module Pattern. You should notice the use of the IIFE to create the special functional scope and the note-worthy part is the end where you <code>return</code> the parts of the scope that you want to be public to object and anything not returned will be private.

<script src="https://gist.github.com/elijahmanor/4991287.js?file=revealing-module.js"></script>
You may also run across this alternate syntax that is popular in many libraries and frameworks. The pattern uses the IIFE, but this one passes in the global variable to use as a namespace. The <code>window.bird = window.bird || {}</code> code snippet is a fancy way to check if the <code>bird</code> object already exists and if it doesn't then to create a new one. Whatever gets added to the object from within the IIFE becomes public and whatever memory isn't attached to the object stays private. The nice thing about this pattern is that it can be repeated and build up a library with various components.

<script src="https://gist.github.com/elijahmanor/4991287.js?file=parameter-iife.js"></script></li>
</ul>

<h2>
Attack!</h2>

The following is a simple Angry Birds clone using <a href="http://incompl.github.com/boxbox/">boxbox</a>, a framework for the <a href="https://code.google.com/p/box2dweb/">box2dweb</a> JavaScript physics library, written by <a href="http://bocoup.com">Bocoup</a>'s <a href="http://twitter.com/_gsmith">Greg Smith</a>.

<blockquote>
Press the <code>space bar</code> to launch the Red Bird and you can also use the arrow keys.</blockquote>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://jsfiddle.net/hzz3U/1/show" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="392" src="http://1.bp.blogspot.com/-uVcHLO0YlUo/UUPqxGUmyrI/AAAAAAAAX-I/Xjqh5Qn_rEw/s640/angry-birds-jsfiddle-shadow.png" width="640" /></a></div>
<!--<iframe allowfullscreen="allowfullscreen" frameborder="0" src="http://jsfiddle.net/hzz3U/embedded/result,js,resources,html" style="height: 425px; width: 100%;"></iframe>-->
<h3>
Conclusion</h3>

These techniques are vital for a front-end application so that it can protect itself from other code and it also gives the opportunity to structure your code in a way that is encapsulated from its surroundings. 

There are many other frotn-end architecture techniques that have been stolen by the pigs. Tune in next time as the next Angry Bird takes its revenge! Dun, dun, daaaaaaa!