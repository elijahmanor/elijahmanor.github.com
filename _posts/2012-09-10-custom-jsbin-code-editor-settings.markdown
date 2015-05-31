---
layout: post
title: Custom JSBin Code Editor Settings
date: '2012-09-10 05:20:00'
---

You may already know about the <a href="http://jsbin.com/">JSBin</a> tool created by <a href="http://remysharp.com/">Remy Sharp</a> (<a href="http://twitter.com/rem">@rem</a>). It was the first website of it's kind that I'm aware of that lets you quickly prototype and play around with web concepts in a way that is social and fun. Although it has been around for a while Remy has been adding more and more features to it recently. 

One of the ones that I want to point out is the ability to modify the settings of it's internal code editor in order to look and behave something like the following screenshot...

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-Vw1PSa-WZRg/UE12IXgtpnI/AAAAAAAAS94/Z9q_9Oa9c4c/s1600/Screen+Shot+2012-09-09+at+11.59.26+PMx625.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://1.bp.blogspot.com/-Vw1PSa-WZRg/UE12IXgtpnI/AAAAAAAAS94/Z9q_9Oa9c4c/s1600/Screen+Shot+2012-09-09+at+11.59.26+PMx625.png" /></a></div>

<h3>
CodeKit Configuration Settings</h3>

JSBin internally uses the <a href="http://codemirror.net/">CodeMirror</a> library for it's HTML, JavaScript, and CSS code editors. JSBin exposes the <a href="http://codemirror.net/doc/manual.html#config">Configuration Settings of CodeMirror</a> and allows you to set them yourself. The settings are stored in localStorage so they are available the next time you use JSBin. CodeMirror supports a whole suite of settings, but the following are the ones that I am most interested in:

<ul>
<li><code>theme</code> - Color scheme that will be used for the editor.
<i>Currently the following themes exist: solarized-light, solarized-dark, monokai, vibrant-ink, cobalt, blackboard, ambiance, &amp; jsbin (default)</i></li>
<li><code>indentUnit</code> - The number of spaces inside a block of code</li>
<li><code>smartIndent</code> - Automatically indent based on the context of what you are doing</li>
<li><code>tabSize</code> - This defines the width of the tab character</li>
<li><code>indentWithTabs</code> - Determines to use tabs instead of spaces when you intent</li>
<li><code>autoClearEmptyLines</code> - Clears whitespace only lines when the cursor exits the line</li>
<li><code>lineWrapping</code> - Wrap the contents of the line if it extends outside of the viewable area</li>
<li><code>lineNumbers</code> - This will show lines numbers in the left gutter</li>
<li><code>matchBrackets</code> - Matches associated bracket when your cursor is on a bracket</li>
</ul>

<h3>
Making Changes to Your Editor Settings</h3>

You can set the above options manually in your browser's console like the following snippet of code...

<script src="https://gist.github.com/3445135.js?file=console.js"></script>
<h3>
Sharing Your Editor Settings With Others</h3>

If you want to share with others your settings for a specific JSBin you can add an <code>api</code> URL parameter pointing to a configuration file.

The following URL will load JSBin with a custom set of code editor options.

<a href="http://jsbin.com/?api=http://j.mp/jsbin-settings">http://jsbin.com?api=http://j.mp/jsbin-settings</a>

The <code>http://j.mp/jsbin-settings</code> file I am using looks like the following...

<script src="https://gist.github.com/3445135.js?file=settings.js"></script>
Remy has been making videos about various features of JSBin on his <a href="http://jsbin.tumblr.com/">Tips and Bits</a> blog. You can view the video about the above feature here...

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="360" src="http://www.youtube.com/embed/pzFqaRJwNQ8" width="640"></iframe>
