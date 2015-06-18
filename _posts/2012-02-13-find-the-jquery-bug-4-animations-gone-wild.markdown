---
layout: post
title: 'Find the jQuery Bug #4: Animations Gone Wild'
date: '2012-02-13 06:01:00'
---

<h3>
Introduction</h3>

In this open-ended series I'll be showcasing a snippet of buggy jQuery code that you might encounter, explain what the problem is, and then identify how you can easily resolve the issue.

<blockquote>
You can view other posts in this series...
<ul>
<li><a href="http://elijahmanor.com/find-the-jquery-bug-1-chicken-or-the-egg/">Find the jQuery Bug #1: Chicken or the Egg</a></li>
<li><a href="http://elijahmanor.com/find-the-jquery-bug-2-point-of-no-return/">Find the jQuery Bug #2: Point of No Return</a></li>
<li><a href="http://elijahmanor.com/find-the-jquery-bug-3-give-me-truth/">Find the jQuery Bug #3: Give Me Truth</a></li>
</ul>
</blockquote>

<h3>
The Desired Feature</h3>

We want to take the following HTML and build a simple jQuery menu that will reveal sub-menus when you hover over each item.

<script src="https://gist.github.com/1777400.js?file=_snippet.html">
</script>
<h3>
The Buggy Code</h3>

The following code snippet is our first attempt at solving the problem, but there is a subtle error. Do you see it?

<script src="https://gist.github.com/1777400.js?file=fiddle.js">
</script>
If you start playing with the menu it appears that it works as intended, but as you continue to use the menu an annoying problem raises its ugly head. If you move your mouse really quick from right to left over the menu you'll see the problem :(

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="http://jsfiddle.net/R3q6c/embedded/result,js/presentation" style="height: 250px; width: 100%;"></iframe>

<h3>
The Underlying Problem</h3>

If you played with the example above you'll have noticed that if you interact with the menu really quickly side-to-side then the animations continue over and over and over again, even after you've moved off the menu completely!

At the root of the problem is an animation queue that has gotten out of hand. jQuery keeps an internal queue to help it know what animation to run next. When you take an element and call one of the animation methods ( <code>.animate()</code>, <code>.slideDown()</code>, <code>.slideUp()</code>, <code>.slideToggle()</code>, etc... ) what really happens is that effect gets added to the default <code>"fx"</code> animation queue that is attached to the element. As each effects completes jQuery will move on to the next effect in the queue until all animations are complete.

The magic that we need is to somehow interrupt the queue system. Thankfully, there is an API just for that and in the next section we will show how to use it.

<h3>
A Solution</h3>

<div style="float: right; margin-bottom: 15px; margin-left: 15px;">
<iframe allowfullscreen="" frameborder="0" height="233" src="http://www.youtube.com/embed/Ow0lr63y4Mw" width="300"></iframe></div>
The solution to fix this problem is really simple and straightforward. In the words of <a href="http://en.wikipedia.org/wiki/Bob_Newhart">Bob Newhart</a>, we need the animation to <strong>STOP IT!</strong>

Of course, we can tell our program to <i>STOP IT!</i>, but they are usually to stubborn to heed to our warnings. Thankfully there is a method we can utilize in jQuery coincidentally called <code>.stop()</code> which we can use to solve our animation problem!

The following is the documentation from jQuery's website about the <code>.stop()</code> method that we will use.

<blockquote>
<code><strong>.stop( [clearQueue] [, jumpToEnd] )</strong></code>
<div style="position: relative; text-align: right; top: -21px;">
<i>version added: 1.2</i></div>
<code>clearQueue</code> - A Boolean indicating whether to remove queued animation as well. Defaults to false.
<code>jumpToEnd</code> - A Boolean indicating whether to complete the current animation immediately. Defaults to false.

<code><strong>.stop( [queue] [, clearQueue] [, jumpToEnd] )</strong></code>
<div style="position: relative; text-align: right; top: -21px;">
<i>version added: 1.7</i></div>
<code>queue</code> - The name of the queue in which to stop animations.
<code>clear</code> - QueueA Boolean indicating whether to remove queued animation as well. Defaults to false.
<code>jumpToEnd</code> - A Boolean indicating whether to complete the current animation immediately. Defaults to false.

--<a href="http://api.jquery.com/stop/">http://api.jquery.com/stop/</a></blockquote>
<div style="clear: both;">
</div>

As you see above there are 2 "overloaded" methods both with optional parameters. The important parameters that we will use to fix our code snippet are the <code>clearQueue</code> and <code>jumpToEnd</code> booleans. In order to get rid of the huge queue of animations on an element and complete whatever animation that was started all we need to do is pass <code>true</code> as both parameters... <code>$element.stop( true, true )</code>!

<script src="https://gist.github.com/1777752.js?file=fiddle1.js">
</script>
If you test out the code again below you'll notice that it works just as before, but this time the bug we found when moving our mouse quickly back and forth across the menu is now gone!

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="http://jsfiddle.net/F4FRk/embedded/result,js/presentation" style="height: 250px; width: 100%;"></iframe>

<h3>
A Fancy Solution</h3>

If we wanted to get fancy, we could choose to update the animation easing algorithm. An easing algorithm is a mathematical equation that defines the animation path of an effect. Wow, that was a mouth full. Let's try that again, but this time with something visual. The following demo, from jQuery UI, is a great visualization of the various easing algorithms. Click the image to launch the <a href="http://jqueryui.com/demos/effect/easing.html">jQuery UI Easing Demo</a> and then click on each square to view the easing in action. I think my favorite is "easeOutBounce" ;)

<div class="separator" style="clear: both; text-align: center;">
<a href="http://jqueryui.com/demos/effect/easing.html" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://3.bp.blogspot.com/-Odnpy97PAW4/TzS8BybJaOI/AAAAAAAAMV4/Szo0srpb5dk/s1600/Screen+Shot+2012-02-10+at+12.37.59+AM.png" /></a></div>

With these easing options in mind, let's update our example above and use "easeOutBounce" instead of the default "swing" option that is default in jQuery.

<blockquote>
<strong>NOTE</strong>: "The only easing implementations in the jQuery library are the default, called swing, and one that progresses at a constant pace, called linear."

-- <a href="http://api.jquery.com/slideDown">http://api.jquery.com/slideDown</a></blockquote>

<script src="https://gist.github.com/1777752.js?file=fiddle2.js">
</script>
You might notice that I also added some other parameters to the <code>.slideDown()</code> and <code>.slideUp()</code> methods. All of the parameters are optional, but if we want we can provide our own values such as a <code>duration</code>, <code>easing</code> algorithm, and a <code>callback</code> to invoke when the animation is complete. In the code above, I trigger a custom event depending if the sub-menu was <code>opened</code> or <code>closed</code> and then I delegate to those events using the <code>.on()</code> method on line 19.

<blockquote>
<code><strong>.slideDown( [duration] [, easing] [, callback] )</strong></code> <div style="position: relative; text-align: right; top: -21px;">
<i>version added: 1.4.3</i></div>
<code><strong>.slideUp( [duration] [, easing] [, callback] )</strong></code> <div style="position: relative; text-align: right; top: -21px;">
<i>version added: 1.4.3</i></div>
<code>duration</code> - A string or number determining how long the animation will run.
<code>easing</code> - A string indicating which easing function to use for the transition.
<code>callback</code> - A function to call once the animation is complete.

-- <a href="http://api.jquery.com/slideDown/">http://api.jquery.com/slideDown/</a> & <a href="http://api.jquery.com/slideUp/">http://api.jquery.com/slideUp/</a>
</blockquote>

Now you can test the changes we made. The effect may be too adventurous for most production business web applications, but the one I chose is just one of the many easing algorithms provided by jQuery UI that you can pick from. Also, if you are a math wizard you can come up with your algorithm!

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="http://jsfiddle.net/xtD7j/embedded/result,js/presentation" style="height: 250px; width: 100%;"></iframe>

<h3>
Refactoring the Code</h3>

If you are anything like me you probably noticed a <a href="http://www.codinghorror.com/blog/2006/05/code-smells.html">code smell</a>. Much of the code from the previous examples looks very redundant. Let's take a stab at refactoring the code somewhat to reduce the "duplicated code" smell and made the code <a href="http://www.artima.com/intv/dry.html">DRY (don't repeat yourself)</a>.

<blockquote>
If you look through your vast code base, And notice code repeated here and there.
You might consider refactoring soon, Or you'll experience maintenance despair!</blockquote>

Previously we were passing two functions to the <code>.hover()</code> method. The 1st function parameter was to handle <code>mouseover</code> events and the other was to handle <code>mouseout</code> events. Thankfully, there is another "overloaded" version of <code>.hover()</code> that takes just 1 function parameter. This 1 function will be invoked on both <code>mouseover</code> events and <code>mouseout</code> events!

<script src="https://gist.github.com/1777752.js?file=fiddle3.js"></script>
You may also notice that we are using a different method to actually perform the sub-menu animation. jQuery includes a <code>.slideToggle()</code> method that will either <code>.slideDown()</code> or <code>.slideUp()</code> depending on the state of the element.

The last thing to take into consideration is how to know which custom event to trigger. Previously I knew which event to trigger because <code>opened</code> was associated with <code>.slideDown()</code> and <code>closed</code> was associated with <code>.slideUp()</code>, but what about now? Thankfully that is easily solved by looking at the <code>event</code> object passed to the <code>hover</code> event handler. The <code>event</code> object has a <code>type</code> property which tells what type of event was originally fired. So, I can do something like this... <code>e.type === "mouseover" ? "opened" : "closed"</code> -- <a href="http://jsfiddle.net/ujsfH/">http://jsfiddle.net/ujsfH/</a>

<h3>
Conclusion</h3>

The key concept to remember here is that jQuery has an internal animation queue that you should be aware of. If you need to clear out that queue you can use the <code>.stop()</code> method. Also, you can modify the duration of animation, change the animation easing algorithm, and also respond to an event when the animation is complete.

Things we didn't cover in this post are how to create your own queue, how to create your own easing algorithm, how to modify the default animation duration, and several other concerns.

Until next time...

<blockquote>
NOTE: The CSS I used as the base for the example menu above is a modified version from a <a href="http://www.kriesi.at/archives/create-a-multilevel-dropdown-menu-with-css-and-improve-it-via-jquery">blog post</a> on <a href="http://twitter.com/Kriesi">@Kriesi's</a> website. I removed the hover styles and replaced his jQuery code with mine for this <a href="http://www.elijahmanor.com/search/label/Find%20the%20jQuery%20Bug">Find the jQuery Bug</a> post.</blockquote>
