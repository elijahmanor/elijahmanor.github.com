---
layout: post
title: 'Angry Birds of JavaScript- Green Bird: Mocking'
date: '2013-04-08 05:05:00'
---

<h2>
Introduction</h2>
<!-- Yellow Bird - RequireJS http://jsfiddle.net/4QG5Q/ http://plnkr.co/edit/syYXSOWx1UWUlbFAd0v9 -->
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-5PVLpWoGRVc/UV4ySyeL9vI/AAAAAAAAZxk/IlyY8pkqXF0/s1600/Angry_birds_wallpaper_3.png" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" height="161" src="http://4.bp.blogspot.com/-5PVLpWoGRVc/UV4ySyeL9vI/AAAAAAAAZxk/IlyY8pkqXF0/s400/Angry_birds_wallpaper_3.png" width="400" /></a></div>
A diabolical herd of pigs stole all of the front-end architecture from an innocent flock of birds and now they want it back! 

A team of special agent hero birds will attack those despicable pigs until they recover what is rightfully theirs, front-end JavaScript architecture!

Will the birds be successful in the end? Will they defeat their bacon flavored foe? Let's find out together in another nail biting episode of Angry Birds of JavaScript!

<blockquote>
Check out the <strong><a href="http://elijahmanor.com/angry-birds-of-javascript-series/" target="_blank">series introduction post</a></strong> for a list of all the birds and their attack powers.</blockquote>

<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-8IQeI6F5-d8/UV4ybFGUw7I/AAAAAAAAZxs/jnudV9GSHpM/s1600/green-bird.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" src="http://1.bp.blogspot.com/-8IQeI6F5-d8/UV4ybFGUw7I/AAAAAAAAZxs/jnudV9GSHpM/s1600/green-bird.png" /></a></div>
<h3>
Previous Attacks</h3>
<ul>
<li><a href="http://elijahmanor.com/angry-birds-of-javascript-red-bird-iife/" target="_blank">Red Bird - IIFE</a></li>
<li><a href="http://elijahmanor.com/angry-birds-of-javascript-blue-bird-events/" target="_blank">Blue Bird - Events</a></li>
<li><a href="http://elijahmanor.com/angry-birds-of-javascript-yellow-bird-requirejs/" target="_blank">Yellow Bird - RequireJS</a></li>
<li><a href="http://elijahmanor.com/angry-birds-of-javascript-black-bird-backbone/" target="_blank">Black Bird - Backbone</a></li>
<li><a href="http://elijahmanor.com/angry-birds-of-javascript-white-bird-linting/" target="_blank">White Bird - Linting</a></li>
</ul>

<h3>
Green Bird Attacks</h3>

In this post we will take a look at the Green Bird that can penetrate all of those hard to reach places and will mock and spy those stealing swine right where it hurts!. Slowly, one by one, the birds will take back what it theirs to keep!

<h2>
What Was Stolen by the Pigs?</h2>

For the most part the birds are all front-end web developers only and don't focus on the back-end much at all. As a result the birds have a symbiotic relationship with the Water Buffalo. The Buffalo write the back-end of the application and the birds develop the front-end. The problem with this arrangement is that while the back-end is being developed the birds are left twiddling their feathers until the Buffalo are finished. However, once the back-end is done the pressure is on the birds to deliver while the Buffalo sit idle by the watering hole in the shade. Thankfully, a while back, a Green Bird proposed the idea of mocking the back-end services so they could make progress on the front-end while they waited for the Buffalo to finish their work! The Green Bird introduced a couple of handy libraries to make mocking a much easier process. 

However, during a recent invasion the pigs stole the birds' mocking libraries! As a result, one of the Green Birds has been tasked to reclaim what has been stolen. He will use his overwhelming power of trickery to help destroy the pigs in order to take back what is theirs.

<h2>
The Twitter Application</h2>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-ZbrUacc6Jn8/UV8-TkAbAaI/AAAAAAAAZz4/HiqK67BDc14/s1600/373892_3410142_lz.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" height="171" src="http://1.bp.blogspot.com/-ZbrUacc6Jn8/UV8-TkAbAaI/AAAAAAAAZz4/HiqK67BDc14/s320/373892_3410142_lz.jpg" width="320" /></a></div>
We are going to take a look at a simple Twitter application that gets the tweets from a specific username. Why Twitter? Well, the Angry Birds have a special relationship with Twitter, especially the Blue Bird ;)

The following application grabs data from Twitter using JSONP. I thought about using Backbone.js to write the little application, but thought that might be overkill to introduce the mocking concept. You will also notice I am not using a templating engine and that is on purpose. Another Angry Bird will be introducing that concept ;)

<script src="https://gist.github.com/elijahmanor/5321634.js?file=twitter.js"></script>
The above code snippet is running in the below embedded jsFiddle. Feel free to run the code and launch the editor to play around with it.

<h3>
Twitter Application using api.twitter.com</h3>

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="300" src="http://jsfiddle.net/KXr8U/1/embedded/result,html" width="100%"></iframe>

The data that comes back from Twitter looks something like the following screenshot...

<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-7pLXYbHr5Lc/UV9FEJXJVPI/AAAAAAAAZ0A/81W9-kKIt94/s1600/twitter-raw.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="458" src="http://2.bp.blogspot.com/-7pLXYbHr5Lc/UV9FEJXJVPI/AAAAAAAAZ0A/81W9-kKIt94/s640/twitter-raw.png" width="640" /></a></div>

<h2>
Mocking Static Data</h2>

What if Twitter goes down, is unstable, or you just want to test your application without having internet access? This is where being able to mock the back-end service can be really helpful. Thankfully we can use a jQuery library called Mockjax. All you need to do is call <code>$.mockjax</code> and provide a URL that you want to listen for and a response that you want to be returned. The following is an example of mocking the call to api.twitter.com and passing back some static data.

<script src="https://gist.github.com/elijahmanor/5321634.js?file=requests-mocked-static.js"></script>
Not only is this pretty cool and can be helpful for developing the front-end independent from the back-end, but it also very handy when writing Unit Tests that use Ajax.

The above code snippet is running in the below embedded jsFiddle. Feel free to run the code and launch the editor to play around with it.

<h3>
Twitter Application using Mockjax</h3>

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="300" src="http://jsfiddle.net/ufqPC/1/embedded/result,html" width="100%"></iframe>

The data that comes back from Mockjax looks something like the following screenshot...

<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-rgQyF9j9VbA/UV9FPdMawYI/AAAAAAAAZ0I/-ESPFAkZwoY/s1600/twitter-mock-static.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="264" src="http://4.bp.blogspot.com/-rgQyF9j9VbA/UV9FPdMawYI/AAAAAAAAZ0I/-ESPFAkZwoY/s640/twitter-mock-static.png" width="640" /></a></div>

<h2>
Mocking Dynamic Semi-Random Data</h2>

One of the downsides of this technique is that generally I am pretty unimaginative and lazy when making static data examples. I typically end up have the same object and just increment some of the values by 1 or something. That is fine and all, but it is a nuisance, it takes time, and it doesn't really give you an idea of what the UI could look like. Thankfully there is another nice library for that called mockJSON. You provide a template of what you want your data to look like and then you give it some metadata about what types of fields you want, how many, etc... The following is how I rewrote the previous example, but will randomly generate anywhere from 5 to 10 twitter objects to be displayed.

<script src="https://gist.github.com/elijahmanor/5321634.js?file=requests-mocked-dynamic.js"></script>

The above code snippet is running in the below embedded jsFiddle. Feel free to run the code and launch the editor to play around with it.

<h3>
Twitter Application using Mockjax &amp; mockJSON</h3>

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="300" src="http://jsfiddle.net/cHS9q/1/embedded/result,html" width="100%"></iframe>

The data that comes back from Mockjax with mockJSON looks something like the following screenshot...

<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-mvenxQzawwU/UV9FW2MqpUI/AAAAAAAAZ0Q/6TA0UmXP-9w/s1600/twitter-mock-dynamic.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="264" src="http://4.bp.blogspot.com/-mvenxQzawwU/UV9FW2MqpUI/AAAAAAAAZ0Q/6TA0UmXP-9w/s640/twitter-mock-dynamic.png" width="640" /></a></div>

<h2>
Attack!</h2>

The following is a simple Angry Birds clone using <a href="http://incompl.github.com/boxbox/">boxbox</a>, a framework for the <a href="https://code.google.com/p/box2dweb/">box2dweb</a> JavaScript physics library, written by <a href="http://bocoup.com/">Bocoup</a>'s <a href="http://twitter.com/_gsmith">Greg Smith</a>.

<blockquote>
Press the <code>space bar</code> to launch the Green Bird and you can also use the arrow keys.</blockquote>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://jsfiddle.net/4QG5Q/27/show" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="396" src="http://3.bp.blogspot.com/-eLUAASpDUy0/UV0NIExF6RI/AAAAAAAAZwA/uCKAm54p5W4/s640/Screenshot+on+4.4.2013+at+12.14.59+AM.png" width="640" /></a></div>

<h3>
Conclusion</h3>

It can be difficult to develop both the front-end and back-end independently. Thankfully there are some techniques and libraries today that can enable the front-end to develop and prototype separate from the back-end progress. The mocking techniqiue with static data can also be helpful when Unit Testing your code as well.

There are many other front-end architecture techniques that have been stolen by the pigs. Tune in next time as the next Angry Bird takes its revenge! Dun, dun, daaaaaaa!