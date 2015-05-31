---
layout: post
title: Does Browser Sniffing Still Have a Place?
date: '2013-01-09 06:06:00'
---

<h3>
Why and How Did We Use Browser Sniffing?</h3>

For a long time browser sniffing was the way developers tested for various browsers and as a result used a different API or feature set. You can always manually detect by using the <code>navigator.userAgent</code>, but making sense of it can be difficult considering the vast amount of <a href="http://www.useragentstring.com/pages/useragentstring.php">userAgent combinations</a>. Some libraries were developed to assit the developer in making sense of the userAgent. A detect library can be found from <a href="http://www.quirksmode.org/js/detect.html">QuirksMode</a> and <a href="http://api.jquery.com/jQuery.browser/">jQuery</a> also provides the <code>browser</code> object with some sniffing information.

<h3>
Problems with Browser Sniffing</h3>

As you are probably aware, browser sniffing can be problematic and is the reason that some websites don't work properly cross-browser or in new versions of browsers.

A simple example of where a browser sniff can break down is the following code snippet detecting for IE. The code should check if the browser is IE and if the version is 8 or greater.

<script src="https://gist.github.com/elijahmanor/4490679.js?file=browser-sniffing.js"></script>
The code snippet works just fine in versions of IE 1-9, but breaks for IE10 because the regular expression doesn't account for multiple digits.

You can review many of the bad reasons why you shouldn't browser sniff from the following resources

<ul>
<li><a href="http://www.sitepoint.com/why-browser-sniffing-stinks/">Why Browser Sniffing Stinks</a> by&nbsp;<a class="g-profile" href="http://plus.google.com/116685695906002348712" target="_blank">+Craig Buckler</a>&nbsp;</li>
<li><a href="http://css-tricks.com/browser-detection-is-bad/">Browser Detection is Bad</a> by&nbsp;<a class="g-profile" href="http://plus.google.com/101987072260327250694" target="_blank">+Chris Coyier</a>&nbsp;</li>
</ul>

<blockquote>
Note: I mentioned above that jQuery has a <code>browser</code> object, but that feature is deprecated and you shouldn't use it anymore. Also the detect script I mentioned above also has a blurb about using object detection instead of browser sniffing.</blockquote>

<h3>
Use Feature Detection Instead</h3>

Feature Detection is the&nbsp;preferred&nbsp;way to determine the functionality of a browser and to respond accordingly and we've seen that&nbsp;technique&nbsp;used in many libraries such as <a href="http://modernizr.com/">Modernizr</a> and more.

An example of feature detection could look something like the following.

<script src="https://gist.github.com/elijahmanor/4490679.js?file=feature-detection.js"></script>
You can find nice polyfills or shims for HTML5 features from the <a href="http://html5please.com/">HTML5 Please</a> website and the <a href="https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills">HTML5 Cross Browser Polyfills</a> wiki from the Modernizr repository.

If you are interested in finding out more about Modernizr or on how to make your own feature detections I'd encourage you to check out the following resources
<ul>
<li>Polyfilling the Gaps <a href="http://blip.tv/jsconfeu/lea-verou-polyfilling-the-gaps-5668145">video</a>&nbsp;&amp; <a href="http://lea.verou.me/polyfilling-the-gaps/">slides</a>&nbsp;by&nbsp;<a class="g-profile" href="http://plus.google.com/105591642938690900060" target="_blank">+Lea Verou</a>&nbsp;</li>
<li><a href="http://addyosmani.com/blog/polyfilling-the-html5-gaps/">PolyFilling the HTML5 Gaps with JavaScript</a> by&nbsp;<a class="g-profile" href="http://plus.google.com/115133653231679625609" target="_blank">+Addy Osmani</a>&nbsp;</li>
<li><a href="http://www.netmagazine.com/features/writing-your-own-cross-browser-polyfills">Writing Your Own Cross Browser Polyfills</a>&nbsp;by&nbsp;<a class="g-profile" href="http://plus.google.com/115133653231679625609" target="_blank">+Addy Osmani</a>&nbsp;</li>
</ul>

<h3>
Does Browser Sniffing Still Have a Place?</h3>

I recently became curious as to when browser sniffing might ever be acceptable. I mean, surely there must be a valid use case even if it isn't pretty. So, I went on a search on Twitter and I also polled some of my close developer friends on their thoughts. The following is a list of my findings.

<h3>
Valid Use Cases for Browser Sniffing</h3>

I've found the following use cases justifiable reasons to use browser sniffing. 

<ul>
<li>Target specific content to platform a such as Mac or Win download. An example may be a Download link for multi-platform systems.</li>
<li>Gather analytic information for marketing purposes. An example may be getting desktop, tablet, and mobile statistics from users.</li>
<li>Determining if a user is on a particular platform in order to pin their application to the user's home or start screen. An example may be an iOS and showing a tooltip to add the mobile app to the home screen.</li>
<li>In some cases Feature Detection isn't sufficient or there is no way to determine a certain state or behavior. In that case browser sniffing may need to be used. An example of this is in the <a href="https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js">history.js</a> detection in the Modernizr library.</li>
</ul>

Do you have any other use cases that you've seen or used that you feel are valid reasons to use browser sniffing? I'd be interested in hearing them.