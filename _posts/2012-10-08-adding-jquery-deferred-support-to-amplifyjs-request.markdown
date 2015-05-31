---
layout: post
title: Adding jQuery Deferred Support to AmplifyJS Request
date: '2012-10-08 05:00:00'
---

A common feature request in the <a href="http://groups.google.com/group/amplifyjs" target="_blank">AmplifyJS Google Group</a> is for the <a href="http://amplifyjs.com/api/request/" target="_blank">request</a> component to support <a href="http://api.jquery.com/category/deferred-object/" target="_blank">jQuery Deferreds</a>. 

<blockquote>
For a brief overview of the <code>request</code> component you can check out a post I recently titled <a href="http://www.elijahmanor.com/2012/10/mocking-jquery-ajax-with-amplifyjs.html" target="_blank">Mocking jQuery AJAX with AmplifyJS Request</a>. In addition there are many more features listed in the <a href="http://amplifyjs.com/api/request/" target="_blank">official documentation</a>.</blockquote>

<h3>
A Little History of the Library</h3>

Before I address that request, let me go into a little history about the <a href="http://amplifyjs.com" target="_blank">AmplifyJS</a> library. When AmplifyJS was announced there was a conscious decision to not have a hard dependency on <a href="http://jquery.com" target="_blank">jQuery</a> and to make it library agnostic so that you could use <a href="http://dojotoolkit.org/" target="_blank">Dojo</a>, <a href="http://mootools.net/" target="_blank">MooTools</a>, <a href="http://yuilibrary.com/" target="_blank">YUI</a>, or something else. So, the publish/subscribe and store components do not use jQuery at all. The default request type shipped with AmplifyJS does utilize jQuery AJAX, but you can just as easily create a new request type that uses Dojo, MooTools, etc. 

<h3>
3 Ways to Provide jQuery Deferred Support</h3>

Now that we have some of the history out of the way, let's get back to the feature request. Adding a tight dependency to <a href="http://api.jquery.com/category/deferred-object/" target="_blank">jQuery's Deferreds</a> implementation isn't in the AmplifyJS roadmap since it was written to be library agnostic. You can however, write your code such that the request component plays well with jQuery Deferreds if you so choose. 

<h4>
1. Manually Wiring Up Deferreds</h4>

Back in October 2011 <a href="http://www.vawks.com/" target="_blank">Eric Strathmeyer</a> (<a href="http://twitter.com/strathmeyer">@strathmeyer</a>) answered a <a href="https://groups.google.com/forum/#!topic/amplifyjs/S-EU6vr5Eqw">Google Group post</a> regarding adding jQuery Deferreds support to amplify.requst. On of his suggestions was to manually wire up the <code>amplify.request</code> with jQuery Deferreds for both the success and error callbacks as shown below.

<script src="https://gist.github.com/3753729.js?file=manual.js"></script>
<h4>
2. Using a Helper Function</h4>

If you find yourself wanting to use jQuery Deferres often with amplify.request then you can use the following helper method that both Eric and <a href="http://scottgonzalez.com/" target="_blank">Scott González</a> (<a href="http://twitter.com/scott_gonzalez" target="_blank">@scott_gonzalez</a>) have recommended.

<script src="https://gist.github.com/3753729.js?file=helper.js"></script>
<h4>
3. Using the amplify-request-deferred Plugin</h4>

I thought some developers might want a syntax that looked more native when using jQuery Deferreds with amplify.request, so I went ahead and made the <a href="https://github.com/elijahmanor/amplify-request-deferred" target="_blank">amplify-request-deferred</a> plugin, base on the above work by Eric and Scott. To get started all you have to do is to include the plugin immediately after <code>amplify.request</code>. 

<script src="https://gist.github.com/3753729.js?file=plugin.html"></script>
Once you have the plugin included on your page, then you can use the plugin with syntax like the following...

<script src="https://gist.github.com/3753729.js?file=plugin.js"></script>
<h3>
Conclusion</h3>

Hopefully one of these solutions is sufficient for your needs. This is a very common request, but as I mentioned in the history section above the <a href="http://amplifyjs.com" target="_blank">AmplifyJS</a> library would rather be agnostic and not depend on any one library. I hope this is helpful to you. Thanks.
