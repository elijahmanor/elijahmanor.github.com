---
layout: post
title: Regular Expressions in CoffeeScript are Awesome
date: '2012-02-08 06:05:00'
---

Let's face it, <a href="https://developer.mozilla.org/en/JavaScript/Guide/Regular_Expressions">regular expressions</a> aren't for everyone. It takes a special breed of developer to actually enjoy writing regular expressions. Although I enjoy them, the developer that comes after me may find that they are cryptic and hard to read. And yes, sometimes it takes me a little bit to decipher through an old regular expression that I wrote a while ago.

Take for example, the following regular expression. Can you tell what it is doing? If so... then great, but what about the developers you work with?

<script src="https://gist.github.com/1765839.js?file=emailPattern.js"></script>
One of the very cool things I like about <a href="http://coffeescript.org/">CoffeeScript</a> is that you can <a href="http://coffeescript.org/#regexes">annotate your regular expressions</a>! The following snippet of CoffeeScript compiles down to the equivalent JavaScript as seen in the above code sample. Yay ;) 

<script src="https://gist.github.com/1765839.js?file=emailPattern.coffee"></script>
Which code sample would you rather maintain? And more importantly which one would your co-worker be more likely to understand? 

<blockquote>
NOTE: The above email regular expression is very naive in it's logic. I based the above snippet from a Nettuts+ post entitled, <a href="http://net.tutsplus.com/tutorials/other/8-regular-expressions-you-should-know/">8 Regular Expressions You Should Know</a>. There are much more comprehensive email regular expressions available on the internet, but I used the above one to show the value of annotation.</blockquote>

As a side note, some tools that I find helpful are Grant Skinner's <a href="http://gskinner.com/RegExr/">Online RegExr Tool</a> and I sometimes get inspiration for regular expressions at <a href="http://regexlib.com/DisplayPatterns.aspx">RegExLib.com</a>. What tools or resources do you use for regular expressions?