---
layout: post
title: JSConsole Remote Debugging and JSBin Live Preview
date: '2011-03-22 05:29:00'
---

<iframe frameborder="0" height="365" src="http://www.screenr.com/embed/zIQ" width="600"></iframe>

Remy Sharp ( <a href="http://twitter.com/rem" target="_blank">@rem</a> ) recently implemented some really awesome new features to <a href="http://jsconsole.com/" target="_blank">jsconsole.com</a> and <a href="http://jsbin.com/" target="_blank">jsbin.com</a> that I wanted to share with you.

<h3>
JSConsole: Remote Debugging</h3>

<a href="https://lh5.googleusercontent.com/-zuzwy4dS-t0/TYgyZWtvBJI/AAAAAAAAJbQ/alP5ZpSHNwM/s1600/JavaScript+console+-+for+debugging+JavaScript+and+remote+debugging+mobile+web+apps.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="405" src="https://lh5.googleusercontent.com/-zuzwy4dS-t0/TYgyZWtvBJI/AAAAAAAAJbQ/alP5ZpSHNwM/s640/JavaScript+console+-+for+debugging+JavaScript+and+remote+debugging+mobile+web+apps.png" width="600" /></a>

JSConsole.com is a useful tool if you want to play around with JavaScript. You can load another webpage into jsconsole, load external scripts, and then start playing around with them. 

However, a really compelling feature that he has added recently is the ability to remotely debug against another browser. Think of the potential of this. You can use jsconsole and remote debug against a jQuery Mobile application or any other website on any other device for that matter!

The process is really straightforward. All you do is type <code>:listen</code> at the jsconsole command line and it will output a unique identifier for you to use in your web application. It even spits out the whole script tag so you can copy/paste it into the web app that you want to remote debug.

<pre class="brush: html;">/* Example script tag outputted by the JSConsole 
   :listen command that you need to insert into 
   your web application */
&lt;script src="http://jsconsole.com/remote.js?5BDE9731-8EBD-42A8-8D72-CB24878F09A6"&gt;&lt;/script&gt;
</pre>

Once you've pasted the script into your web app, then you'll see that a connection has been made in the jsconsole window. It will show the useragent of the browser you've just connected to.

When you are connected then you can either enter commands into the jsconsole command line to execute on the remote browser. In addition any console.logs that are invoked on the remote browser will show up in your jsconsole window!

If for some reason you'd rather not use the GUID that JSConsole generates, you can just as easily provide your own "unique identifier" such as <code>myApplication</code>, but you do run the risk that this might conflict with someone else's "unique identifier".

<blockquote>
NOTE: This debugging tool is intended for debug only and not for production code.</blockquote>

<h3>
JSBin: Live Preview Pane</h3>

<a href="https://lh5.googleusercontent.com/-jlsss_ZyiUQ/TYgyf8qBr5I/AAAAAAAAJbU/ltA4umHrpv8/s1600/JS+Bin+-+%255Bunsaved%255D.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="390" src="https://lh5.googleusercontent.com/-jlsss_ZyiUQ/TYgyf8qBr5I/AAAAAAAAJbU/ltA4umHrpv8/s640/JS+Bin+-+%255Bunsaved%255D.png" width="600" /></a>

Another cool new feature is the "Live Preview" pane in JSBin. Previously, you had to manually click the "Preview" button to preview the result of our JSBin, but now you can see live updates in this new pane.

All you need to do is type the following statement in your browser's console. After you've executed the statement, then JSBin will remember this option by default when you create a new JSBin. 

<pre class="brush: javascript;">jsbin.livePreview();</pre>
