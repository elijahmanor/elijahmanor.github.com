---
layout: post
title: Mocking jQuery AJAX with AmplifyJS Request
date: '2012-10-03 05:00:00'
---

<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-dPCj_0ym7_s/UGUaEZyCG4I/AAAAAAAATfo/ByL7XhUOLI0/s1600/Screen+Shot+2012-09-27+at+10.30.27+PM.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="96" src="http://4.bp.blogspot.com/-dPCj_0ym7_s/UGUaEZyCG4I/AAAAAAAATfo/ByL7XhUOLI0/s400/Screen+Shot+2012-09-27+at+10.30.27+PM.png" width="400" /></a></div>
In my opinion the most powerful part of the <a href="http://amplifyjs.com/" target="_blank">AmplifyJS</a> library is the <a href="http://amplifyjs.com/api/request/" target="_blank">request component</a>. The documentation is nice, but I wanted to highlight the mocking piece in particular because it is very powerful, but is easy to miss.

Being able to separate what a request looks like from the actual request itself proves to be a very effective way to develop. It protects yourself from future changes to the request/response handshake and also makes it really easy to mock responses for unit testing or for rapid prototypes. 

<h3>
Standard Request Define and Request Usage</h3>

The following snippet of code defines what a request should look like that communicates to twitter to get someone's recent tweets.

<script src="https://gist.github.com/3791644.js?file=request.define.js"></script>
When you want to use the definition above you just reference the resourceId that you provided ("getTweets"), you pass any data you want to pass along, and give a callback function that will be invoked when the response comes back.

<script src="https://gist.github.com/3791644.js?file=request.js"></script>
<h3>
Easily Mocking the Request</h3>

If for some reason you don't have internet access, the service you are using is unstable, or you just need to unit test some code then you can mock the response by redefining the resourceId and using a function as the 2nd parameter that will be used for the mock. 

<script src="https://gist.github.com/3791644.js?file=request.mock.js"></script>
<h3>
Using mockJSON to Generate Randomized Data</h3>

If you are anything like me, then you are awful at making sample data. I end up with something like "Test 1", "Test 2", etc... which is laborious, looks silly, and doesn't really exercise your UI at all. If you want to semi-randomize your data for prototyping then using the <a href="http://experiments.mennovanslooten.nl/2010/mockjson/">mockJSON</a> library can be helpful. The following code says to generate an array of 20 to 30 tweets that follow the format specified.

<blockquote>
The <a href="https://github.com/mennovanslooten/mockJSON" target="_blank">mockJSON library</a>, written by Menno van Slooten (<a href="https://twitter.com/mennovanslooten">@mennovanslooten</a>), I am using has been beneficial to me when building prototypes when the backend is either unstable or not developed yet.</blockquote>

<script src="https://gist.github.com/3791644.js?file=request.mockjson.js"></script>
The following screenshot is an example of what one of the above objects looks like after using mockJSON. As you can see, the object can almost pass as a legitimate tweet (minus the actual tweet.text). mockJSON allow you to create custom keywords to extend the native ones like <code>@MALE_FIRST_NAME</code>, so you could conceivably make a new keyword that can make a more believable tweet.text.

<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-2j9SZSQWwSg/UGuhUM5FzxI/AAAAAAAATn4/eroz6Y6oYjQ/s1600/console-650.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://3.bp.blogspot.com/-2j9SZSQWwSg/UGuhUM5FzxI/AAAAAAAATn4/eroz6Y6oYjQ/s1600/console-650.png" /></a></div>

If you defined the same resourceId multiple times, then the last one defined wins. So, the following output is from the mocked version using mockJSON to semi-randomize the twitter response. Note: If I wanted to switch to the real twitter, I would just need to comment out my mocked versions.

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="http://jsfiddle.net/Jf67W/embedded/result,js,resources/presentation" style="height: 400px; width: 100%;"></iframe>

I just scratched the surface of what you can do with AmplifyJS Request. It can support caching, decoders, dataMaps, custom request types, and more. Check out the <a href="http://amplifyjs.com/">documentation</a> for more details. 