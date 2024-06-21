---
layout: post
title: Reducing Filter and Map Down to Reduce
date: '2013-08-14 05:30:00'
---

<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-kxP3SWMsTnk/UgovdkZM3BI/AAAAAAAAeuM/ZGOvhD8DbYU/s1600/8-12-2013+9-58-22+PM.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" src="http://2.bp.blogspot.com/-kxP3SWMsTnk/UgovdkZM3BI/AAAAAAAAeuM/ZGOvhD8DbYU/s1600/8-12-2013+9-58-22+PM.png" /></a></div>
You've probably seen some of the new array methods in ECMAScript 5 (ES5) and you may have even used some of them before, but have you used the <code>.reduce()</code> method?

<h4>
Not So Common Use Case</h4>

If you were anything like me, I first went and looked for some examples of how to use the <code>.reduce()</code> method. Most of the examples that I ran across all looked the same and didn't really seem very convincing to me. Most of the examples I found were adding up numbers across various objects. Here is the type of code that I saw...

<script src="https://gist.github.com/elijahmanor/6222466.js?file=standard-reduce.js"></script>
Adding up values across a collection does seem like it could be helpful on occasion, but it didn't seem like it would be a very common use case in my day-to-day development. Deep down somewhere in my inner-algorithm I felt like there must be a better use case for this lowly <code>.reduce()</code> method. I wanted so much more for it. 

<strong>SPOILERS:</strong> There is a better use case ;)

<h4>
Data to Manipulate</h4>
<div class="separator" style="clear: both; text-align: center; margin-top: 25px;">
<img border="0" height="200" src="http://3.bp.blogspot.com/-yBPIx_WbkSs/UgpbGFr2KSI/AAAAAAAAeuc/fEjodR2irtk/s640/8-13-2013+11-12-03+AM.png" width="640" /></div>

So, before we proceed let's take a step back before revisiting the <code>.reduce()</code> method again. Partly to celebrate the announcement of the 12th Doctor and to make things a little more interesting we are going to use data about the 12 Doctors as we unpack <code>.filter()</code>, <code>.map()</code>, and <code>.reduce()</code>. Here is the data we will be using throughout the rest of this blog post.

<script src="https://gist.github.com/elijahmanor/6222466.js?file=doctors.js"></script>
<h4>
Problem to Solve</h4>

What we want to do is to take all the Doctors from year 2001 until today and change their data up just a little bit. We want to massage the data a little bit and have keys of <code>doctorNumber</code>, <code>playedBy</code>, and <code>yearsPlayed</code>. We don't want to just directly map one field to another, but for <code>doctorNumber</code> we want to prepend a <code>"#"</code> and for the <code>yearsPlayed</code> we want to want how many years the doctor played and not a range.

<h4>
Desired Output</h4>

Based on the above problem that we want to solve, the end result of our data manipulation should produce the following results.

<script src="https://gist.github.com/elijahmanor/6222466.js?file=output.js"></script>
So, let's first use the <code>.filter()</code> and <code>.map()</code> methods to solve this, and then we will redirect to solve the same problem using the reduce method.

<h3>
Filter and Map</h3>


<h4>
ECMAScript 5 Array Filter and Map</h4>

IE9+ and other modern browsers implement ECMAScript 5 and with that comes a lot of nice features in JavaScript. Some of these nice features are additional array methods. Two of these handy methods are <code>.filter()</code> and <code>.map()</code>. 

Here we use the <code>.filter()</code> method to narrow down the array items to only those that include Doctors that only began past the year 2000. The method will iterate over your array of items and invoke the function you provided passing it as an argument. If you return a truthy value from the function then that means you want to keep the item in the resultant array otherwise the item will not be included in the result. 

The result of the <code>.filter()</code> method is an array so we then immediately call the <code>.map()</code> method off of that array. This method also iterates over the array, much like the <code>.filter()</code> method did, but the return inside of the function argument for <code>.map()</code> defines what that object will look like in the new array. In this case we are changing up our object to use new keys and to change up the values slightly. 

<script src="https://gist.github.com/elijahmanor/6222466.js?file=filter-map.js"></script>
<h4>
ECMAScript 5 Polyfill</h4>

If you are using an older browser (IE8 or less) then you won't have the ES5 methods available to you. However, you can still use the above code if you provide a ES5 polyfill to fill in the functionality gap. A polyfill is a library that will mimic a native browser's API if it isn't available. <a href="http://html5please.com/" target="_blank">HTML5Please</a> recommends either using <a target="_blank" href="https://github.com/kriskowal/es5-shim/">es5-shim</a> or <a target="_blank" href="http://augmentjs.com/">augment.js</a> if you want to support ES5 methods.

The nice thing about a polyfill is that if the native feature does exist, then it will be used. The polyfill should only kick in if the browser does not provide the functionality you are expecting. The idea is that your code can be written in such a way that it follows the official browser API and hopefully one day you won't need the polyfill anymore or at least not many people will need it.

<h4>
Underscore Filter and Map</h4>

Instead of using the native ES5 array methods or using a polyfill, you could instead decide to use a library such as <a href="http://underscorejs.org/" target="_blank">Underscore</a> or <a href="http://lodash.com/" target="_blank">Lo-Dash</a>. These libraries contain many helper utilities methods that I find helpful in most every web application I write. Two of many methods provided are <code>.filter()</code> and <code>.map()</code>.

<script src="https://gist.github.com/elijahmanor/6222466.js?file=underscore-filter-map.js"></script>
The code is very similar to what we had before. The main difference is that we need to split out our two method calls. This is a little cumbersome, but it makes sense because the methods return an array and we can't chain them together and continue to call Underscore methods. 

<h4>
Underscore Chaining</h4>

Thankfully, there is a way in Underscore that we can chain these together if we want to. There is some extra syntax sugar that we need to sprinkle, but it isn't too much.

The main thing you have to do is the call the <code>.chain()</code> method and pass in the array that you want to use while you chain Underscore methods. From then on you just keep calling Underscore methods as you like and it will share the array among the various methods. At the point you are ready to get the result of your manipulations you can call the <code>.value()</code> method to get the value.

<script src="https://gist.github.com/elijahmanor/6222466.js?file=underscore-filter-map-chain.js"></script>
I personally don't use Underscore's chaining mechanism, but it is nice to know that it does support that feature.

<h3>
Reducing Filter and Map with Reduce</h3>

So, back to the main topic of this blog post. After finding the same use case over and over again on the internet (summing up a property over a collection) I then approached some friends of mine to see if they knew of another use case for the <code>.reduce()</code> method. The infamous <a href="http://twitter.com/ifandelse">Jim Cowart</a> came to the rescue! He actually had written a blog post about this very topic called <a href="http://freshbrewedcode.com/jimcowart/2012/03/23/underscore-_-reduce/">Underscore – _.reduce()</a>. 

<h4>
ECMAScript 5 Reduce</h4>

So, let's convert the above <code>.filter()</code> and <code>.map()</code> code above and convert it to use the <code>.reduce()</code> method instead. As the first argument you provide the <code>.reduce()</code> method a function that will be invoked for each item in he array. In addition this method also takes a second <code>memo</code> argument that will be passed from one iteration to the next. Instead of passing a number, like we did at the beginning of this post, we are going to pass an empty array. Then inside our function argument we will have an <code>if</code> statement, which will serve as our "filter", and if our criteria is matched we will push a new value to our <code>memo</code> array. The "map" happens as we push a custom object onto our array. Before we finish our function we need to return the memo array. Once the statement has completed then a new array will be returned that will be the filtered and mapped version that you wanted.

<strong>NOTE</strong>: The above polyfills listed also include the <code>.reduce()</code> method.

<script src="https://gist.github.com/elijahmanor/6222466.js?file=reduce.js"></script>
<h4>
Underscore Reduce</h4>

Much like our previous examples, you can also use the <code>.reduce()</code> method from Underscore or Lo-Dash instead of the native or polyfilled version.

<script src="https://gist.github.com/elijahmanor/6222466.js?file=underscore-reduce.js"></script>
<h3>
Other Methods</h3>

If you like what you see with <code>.filter()</code>, <code>.map()</code>, and <code>.reduce()</code> then you are in luck because there are many more methods that you can use that are available both in ES5 and also in Underscore or Lo-Dash. Knowing what is available is half the battle ;)
