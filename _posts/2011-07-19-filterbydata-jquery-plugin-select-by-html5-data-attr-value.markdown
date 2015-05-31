---
layout: post
title: 'filterByData jQuery Plugin: Select by HTML5 Data Attr Value'
date: '2011-07-19 05:05:00'
---

I've been using HTML5 data attributes more and more lately and have been finding it slightly awkward when I need to select element based on their data.

I find myself writing the following code snippet more than once and I just doesn't feel right to me.

<script src="https://gist.github.com/1091327.js?file=jquery.selectbydata.js">
</script>
I initially tweeting about my thoughts on this syntax and mentioned that I wished a better API existed. Instead of wishing, I figured the best route would be to figure something out on my own.

I ended up writing a jQuery plugin and then after talking with <a href="http://twitter.com/dougneiner">Doug Neiner</a> (a jQuery team member) it morphed into the following plugin...

<script src="https://gist.github.com/elijahmanor/1091333.js"></script>
I want to thank <a href="http://twitter.com/#!/aknosis" target="_blank">Paul Giberson</a> for recommending to use the ternary operator which has the same behavior, but minifies to a much smaller output.

I wrote some unit tests for the plugin and you can view them here...

<iframe src="http://jsfiddle.net/elijahmanor/fqJmu/embedded/result,js,html" style="height: 300px; width: 100%;"></iframe>

I also wanted to give a shout out to <a href="http://twitter.com/danheberden">Dan Heberden</a> (another jQuery team member) who saw my tweet and wrote a <a href="https://gist.github.com/1048942">similar plugin</a> to solve the same issue. Dan took a slightly different approach and performs a find and filter at the same time, where as my plugin only filters the initial selection.
