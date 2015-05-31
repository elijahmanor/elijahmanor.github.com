---
layout: post
title: 'jQCon: Front-end Prototyping &amp; Unit Testing with Mocking'
date: '2011-04-21 06:20:00'
---

<a href="http://bit.ly/prototyping-and-unit-testing" imageanchor="1"><img border="0" src="http://3.bp.blogspot.com/-_a9KSyK8YSc/Ta8D_lcbKGI/AAAAAAAAJcY/Q_iYIZl9_qs/s400/Prototyping+and+Unit+Testing.png" width="600" /></a>

Right after speaking at the Mix11 conference in Las Vegas, Nevada I flew to the jQuery Conference in San Francisco, California to present my next talk. 

<div style="float: right; padding-left: 15px;">
<script id="speakerrate-widget-7220" src="http://speakerrate.com/talks/7220/widget.js"></script></div>
If you were able to attend my talk in person I would appreciate if you could give me some feedback on <a href="http://speakerrate.com/talks/7220-prototyping-and-unit-testing-with-mockjax-mockjson" target="_blank">SpeakerRate</a>. Thanks in advance! Unfortunately, the session was not recorded at the conference, but I plan to record the material soon and make the session available for to you to watch.<div style="clear: both;">
</div>

For this talk I focused on some prototyping and unit testing tools to help web developers quickly build their front-end while not depending on the back-end. Here is the abstract for the session:

<b>Prototyping and Unit Testing with <a href="http://bit.ly/mockjax" target="_blank">Mockjax</a>, <a href="http://bit.ly/mockjson" target="_blank">mockJSON</a>, and <a href="http://bit.ly/amplifyjs" target="_blank">Amplify</a></b>
<blockquote>
The front-end and back-end of your application inevitably progress at different speeds. In order for each layer to develop independently it is optimal if the front-end piece can work regardless of the back-end, which is where the Mockjax plugin or the Amplify Request component comes in. These tools can intercept and simulate ajax requests made with jQuery with minimal effort and impact to your code. Another tool that works well with these tools is mockJSON which provides a random data templating feature. This can be very handy when you want to mock a JSON response from a AJAX call, but instead of manually building the response you can build a template to do it for you.

As you are developing, Mockjax or Amplify Request can also be used to help Unit Test your front-end code. You can setup a static mock responses to your requests and then Unit Test your Ajax success and fail event handlers.</blockquote>

At the end of the presentation I went through a demo showing the various types of prototype and unit testing techniques you can utilize using Mockjax, mockJSON, and Amplify. The source code for all of the examples I presented can be found on <a href="https://github.com/elijahmanor/mockjax-mockjson-prototype-testing" target="_blank">my GitHub account</a>. 

The demonstration code goes through the following steps (they are outlined in the index.html comments):
<ol>
<li>Use a local JSON file with contacts and have $.getJSON refer to that endpoint</li>
<li>Update URL to use the real endpoint and use Mockjax to intercept and return the contacts</li>
<li>Use mockJSON and Mockjax to return a random set of contacts based on a template</li>
<li>Use Amplify Request and return an array of mock contacts (this part was mentioned, but not demonstrated)</li>
<li>Uses Amplify Request and mockJSON to return an random array of contacts<strong>*</strong></li>
<li>Updates Amplify Request Definition to pull contacts from Whitepages instead<strong>*</strong></li>
<li>Pulls out Amplify Request decoder and type to allow reuse for later requests<strong>*</strong></li>
</ol>
<i><span><strong>*</strong> No code changes were made to the main application. The only changes made were to the amplify.request.define statement.</span></i>

<a class="demoButton" href="http://bit.ly/prototyping-and-unit-testing">View Slides</a> <a class="demoButton" href="https://github.com/elijahmanor/mockjax-mockjson-prototype-testing">Download Code</a>