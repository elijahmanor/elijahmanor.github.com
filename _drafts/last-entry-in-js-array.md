---
layout: post
title: Getting the Last Entry in a JavaScript Array
date: '2015-06-05 02:29:11'
published: true
---
Grabbing the last entry in a JavaScript array is a common task that most developers find themselves needing to perform. The basic solution would be to access the index of the array's lenght minus 1...

```
var myArray = [ "a", "b", "c", "d", "e", "f" ];

// Grab the last index of the array (Quick and Repetitive)
var lastItem = myArray[ myArray.length - 1 ];

console.log( lastItem ); // "f"
```

Another method you might have seen to attain the same answer is to create a clone of the array with `slice` and then `pop` off the last item. The reason you'd want to clone the array is because the `pop` method is destructive, meaning that it removes the item from the origional source array.

```
var myArray = [ "a", "b", "c", "d", "e", "f" ];

// Clone array and pop off last item (Slow and Complicated)
var lastItem = myArray.slice( 0 ).pop();

console.log( lastItem ); // "f"
```

However, with all the new JavaScript features that are available to use in ES6+ (ECMAScript 2015 and beyond) one might wonder if there is a new best practice for this seemingly menial task.

> FYI, the idea of this post came from a tweet from Remy Sharp wanting a better way to grad the last index of an array...

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Sometimes, in JS, I just want to do a[-1] for last. Not a.slice(-1).pop() or a[a.length -1].</p>&mdash; rem (@rem) <a href="https://twitter.com/rem/status/735388914056302592">May 25, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>



http://jsbin.com/norevokibi/edit?js,console,output

var a = [ "a", "b", "c", "d", "e", "f" ];

console.clear();

console.log( "before", a );

console.log( a.slice( 0 ).pop() );

console.log( a[ a.length - 1 ] );

console.log( [ ...a ].pop() );

console.log( [ ...rest, last ] = a );

console.log( "after", a );

https://twitter.com/rem/status/735388914056302592

https://twitter.com/WebReflection/status/735401553742450688

https://github.com/WebReflection/length-1/blob/master/length-1.js

https://davidwalsh.name/javascript-clone-array

https://twitter.com/xeenon/status/735857636432699392

http://codepen.io/elijahmanor/pen/MeWgRz?editors=0011

https://www.sitepoint.com/measuring-javascript-functions-performance/
