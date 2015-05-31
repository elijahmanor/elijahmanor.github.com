---
layout: post
title: Getting Started with the AmplifyJS NuGet Package in Visual Studio
date: '2011-07-25 13:04:00'
---

<div class="separator" style="clear: both; text-align: left;">
<a href="http://amplifyjs.com/"><img border="0" height="72" src="http://1.bp.blogspot.com/-3o-RDSkTcqw/Tizmmsrug9I/AAAAAAAAJ40/gX5f9i8plYY/s320/Screen+Shot+2011-07-24+at+10.43.55+PM.png" style="float: left; padding-bottom: 15px; padding-right: 15px;" width="320" /></a>Last week I packaged <a href="http://appendto.com/" target="_blank">appendTo's</a> <a href="http://amplifyjs.com/">AmplifyJS Library</a> and published it to the central NuGet server for use in your Visual Studio projects. </div>

The package contains... 
<ul>
<li>An unminifed version of AmplifyJS for development use</li>
<li>A minified version of AmplifyJS for production use</li>
<li>A VSDOC version of AmplifyJS that enables intellisense support within Visual Studio</li>
</ul>

<h3>
What is AmplifyJS?</h3>

<div class="separator" style="clear: both; text-align: left;">
In case you aren't familiar with what AmplifyJS is, here is an&nbsp;excerpt&nbsp;from the website...</div>
<div class="separator" style="clear: both; text-align: left;">
</div>
<blockquote style="background-color: #cccccc; padding: 5px;">
AmplifyJS is a set of components designed to solve common web application problems with a simplistic API. AmplifyJS solves the following problems:

<ul>
<li><a href="http://amplifyjs.com/api/request/">Ajax Request Management</a>
<ul style="list-style-type: square;">
<li>amplify.request provides a clean and elegant request abstraction for all types of data, even allowing for transformation prior to consumption.</li>
</ul>
</li>
</ul>

<ul>
<li><a href="http://amplifyjs.com/api/pubsub/">Client Side Component Communication</a>
<ul style="list-style-type: square;">
<li>amplify.publish/subscribe provides a clean, performant API for component to component communication.</li>
</ul>
</li>
</ul>

<ul>
<li><a href="http://amplifyjs.com/api/store/">Client Side Browser &amp; Mobile Device Storage</a>
<ul style="list-style-type: square;">
<li>amplify.store takes the confusion out of HTML5 localStorage. It doesn't get simpler than using amplify.store(key, data)! It even works flawlessly on mobile devices.</li>
</ul>
</li>
</ul>
</blockquote>

<h3>
Installation</h3>

In order to install the NuGet package in your Visual Studio project all you need to do is type the following command into the "Package Manager Console"

<div class="separator" style="clear: both; text-align: center;">
<a href="http://nuget.org/List/Packages/AmplifyJS" imageanchor="1"><img border="0" src="http://2.bp.blogspot.com/-9APgSEZ3m-o/Tizlo2thHLI/AAAAAAAAJ4w/SISP77310Tg/s640/Screen+Shot+2011-07-24+at+10.39.47+PM.png" width="600" /></a></div>

Once you type the above command into the "Package Manager Console" then all of the appropriate files will be downloaded to your project to support AmplifyJS. 

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-6NDMOEob6_k/Ti0A5UnwPFI/AAAAAAAAJ5I/woq8Ncc-KuM/s1600/AmplifyJSCommandLineNuGet.PNG" imageanchor="1"><img border="0" id=":current_picnik_image" src="http://4.bp.blogspot.com/-XxUFrjF_q1E/Ti0Ec_d550I/AAAAAAAAJ6E/eaCVaZRvLBo/s1600/15449696588_GmRWc.jpg" /></a></div>

If the command line isn't your thing and you prefer a Graphical User Interface, then you can install AmplifyJS as well by searching for "AmplifyJS" in the "Add Library Package Reference" dialog.  

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-6NDMOEob6_k/Ti0A5UnwPFI/AAAAAAAAJ5I/woq8Ncc-KuM/s1600/AmplifyJSCommandLineNuGet.PNG" imageanchor="1"><img border="0" id=":current_picnik_image" src="http://3.bp.blogspot.com/-35AB4XiCRYI/Ti0DnXyyHyI/AAAAAAAAJ50/uR6fVwSU9MY/s1600/15449669924_q2gWs.jpg" /></a></div>

<h3>
Referencing and Using AmplifyJS</h3>

Now that you've installed AmplifyJS all that is left is to reference the script file that was added to your Scripts folder and start using it. It is considered best practice to add your scripts to the bottom of your webpage for best overall performance. Once you do this you can start using the library right away as shown in the following code snippet.

<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-ui9DjTSl1Zk/Ti0BDU3JsmI/AAAAAAAAJ5Q/xkAzctdahN4/s1600/AmplifyJSUsingInVisualStudio.PNG" imageanchor="1"><img border="0" id=":current_picnik_image" src="http://1.bp.blogspot.com/-aPFbJ2IkcY0/Ti0EG6Wy7BI/AAAAAAAAJ58/vR3p4VLZ8uw/s1600/15449690725_7Qj2x.jpg" /></a></div>

The code that I am showing the above screenshot is a very simple example of what can be accomplished with AmplifyJS. Look at the following code and see how the 3 components work together (Publish/Subscript, Request, and Store).

<script src="https://gist.github.com/1103608.js?file=amplifyjs-simple-twitter.js"></script>
You can play around with the above code inside the following jsFiddle. Click the "+" sign to launch a full editor so you can tweak with the code yourself. Try commenting out the 2nd definition of the mocked "getTweets" request. You should see real data from Twitter being returned instead of mock data. 

<iframe src="http://jsfiddle.net/elijahmanor/mTCzd/embedded/js,result" style="height: 300px; width: 100%;"></iframe>

<div class="separator" style="clear: both; text-align: left;">
<a href="http://msdn.microsoft.com/en-us/scriptjunkie/hh147623"><img border="0" src="http://1.bp.blogspot.com/-oRie__hCNxw/TizqicLwT6I/AAAAAAAAJ5E/wjLfXYX6Xwg/s1600/Screen+Shot+2011-07-24+at+11.00.48+PM.png" style="float: right; padding-bottom: 15px; padding-left: 15px;" /></a>If are interested to see how AmplifyJS might help your application then you might check out an article entitled <a href="http://msdn.microsoft.com/en-us/scriptjunkie/hh147623">Extending Your jQuery Application with AmpilfyJS</a> that is hosted on&nbsp;Microsof't's Script Junkie website.</div>

There is so much more you can do with the AmplifyJS library. Feel free to check out the official <a href="http://amplifyjs.com/api/request/" target="_blank">AmplifyJS Documentation</a> and if you need support or more information check out the <a href="http://amplifyjs.com/community/" target="_blank">AmplifyJS Community</a> page.
