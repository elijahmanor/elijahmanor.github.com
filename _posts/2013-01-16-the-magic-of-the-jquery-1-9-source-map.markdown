---
layout: post
title: The Magic of the jQuery 1.9 Source Map
date: '2013-01-16 06:22:00'
---

<h3>
jQuery 1.9 Supports Source Maps</h3>

You may have noticed that the <a href="http://blog.jquery.com/2013/01/15/jquery-1-9-final-jquery-2-0-beta-migrate-final-released/">1.9 version of jQuery</a> was released yesterday. One of the most excited pieces of the version is support for Source Maps! 

<h3>
<a href="http://3.bp.blogspot.com/-_PymUzdleeI/UPY4RqKN4rI/AAAAAAAAWbA/T_-uLvZrQN8/s1600/dev-tools-enable-source-maps-cropped.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="400" src="http://3.bp.blogspot.com/-_PymUzdleeI/UPY4RqKN4rI/AAAAAAAAWbA/T_-uLvZrQN8/s400/dev-tools-enable-source-maps-cropped.png" width="306" /></a>What are Source Maps?</h3>

What is a Source Map? Well, it is a generic way to translate one script format into another. In jQuery's case, it is mapping the minified version of jQuery against the un-minified version. Why would you want to do this? The value is that when you encounter a bug in your production code you can debug against code that doesn't look like a mangled mess! 

You can find out much more about Source Maps from <a href="http://twitter.comryanseddon">Ryan Seddon</a>'s HTML Rocks Tutorial titled <a href="http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">Introduction to JavaScript Source Maps</a>.

Another slightly different example of for Source Maps is for CoffeeScript. The official CoffeeScript language doesn't support Source Maps as of yet, but there is a rewrite of the project called <a href="https://github.com/michaelficarra/CoffeeScriptRedux/">CoffeeScript Redux</a> that does support them. That means you can debug through CoffeeScript code in your dev tools and it will map to the underlying JavaScript code. For more information about this check out Ryan Florence's article titled <a href="http://ryanflorence.com/2012/coffeescript-source-maps/">CoffeeScript Source Maps</a>.

<h3>
Enabling Source Maps in Chrome</h3>

In stable release of Google Chrome there is a setting in its dev tools to "Enable source maps". You will need to check this option in order to use this feature.

Mozilla Firefox is working on providing Source Map support, but as of yet Google Chrome is the browser to use for this feature.

<h3>
Add the Minified jQuery 1.9 to Your Project</h3>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/--hlNMOkOpHY/UPY_mM3dQrI/AAAAAAAAWbs/gvpF-Lmn-Ls/s1600/dev-tools-jsfiddle-cropped-600-arrow.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://3.bp.blogspot.com/--hlNMOkOpHY/UPY_mM3dQrI/AAAAAAAAWbs/gvpF-Lmn-Ls/s1600/dev-tools-jsfiddle-cropped-600-arrow.png" /></a></div>

The minified version of jQuery 1.9 has a special directive at the bottom that tells Google Chrome what Source Map to use when debugging. The end of the minified file looks like the following...

<script src="https://gist.github.com/4544982.js"></script>
In order to get the Source Map to work you need to make sure the value of <code>sourceMappingURL</code> exists on your server or locally. If you are using the jQuery CDN then this is already setup for you. 

The Google CDN is now hosting jQuery 1.9 and its map file as well. It isn't listed on their <a href="https://developers.google.com/speed/libraries/devguide#jquery">main CDN page</a>, but you can access it directly <a href="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js">http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js</a>.

<h3>
Debugging Your Project</h3>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-tT_3EOR6aSE/UPZCKeiCo6I/AAAAAAAAWcA/AGFe_Bql-DM/s1600/dev-tools-break-point-cropped.png" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" src="http://3.bp.blogspot.com/-tT_3EOR6aSE/UPZCKeiCo6I/AAAAAAAAWcA/AGFe_Bql-DM/s1600/dev-tools-break-point-cropped.png" /></a></div>
Once you've completed the above steps then using Source Maps is simple. All you have to do is set a break point, like you would normally, and then debug into it.

For example, on the left I set a breakpoint on the <code>addClass</code> statement. Once I debug into that statement I get dropped into the unminfied version of jQuery NOT the minified version that I included! 

Browsers have had a "Pretty print" feature for a while which has formatted minifed script files, but Source Maps brings that to a whole new level!

<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-AGbOU8L6ga8/UPZC61g3YzI/AAAAAAAAWcI/6j0sGucWhZE/s1600/dev-tools-into-mapped-jquery-cropped.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://2.bp.blogspot.com/-AGbOU8L6ga8/UPZC61g3YzI/AAAAAAAAWcI/6j0sGucWhZE/s1600/dev-tools-into-mapped-jquery-cropped.png" /></a></div>

<h3>
Conclusion</h3>

Source Maps are a powerful new feature of Google Chrome and I look forward to it coming to other browsers in the near future. Being able to debug through minified code could make tracking down production bugs a much easier process.
