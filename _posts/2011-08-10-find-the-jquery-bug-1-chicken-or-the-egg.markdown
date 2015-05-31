---
layout: post
title: 'Find the jQuery Bug #1: Chicken or the Egg'
date: '2011-08-10 05:12:00'
---

<h3>
Introduction</h3>

In this open-ended series I'll be showcasing a snippet of buggy jQuery code that you might encounter, explain what the problem is, and then identify how you can easily resolve the issue.

<blockquote>
As this series progresses my example code may not use all the best practices that I would normally use in my everyday development. This is partly due to me wanting to show code you might encounter in the wild, but also because I want these code snippets to be easily understood so that the main concept can be revealed. In order to do that a healthy balance will need to be maintained, which is tricky ;)</blockquote>

<h3>
The Desired Feature</h3>

You have a list of individuals in a table. Each row has an alternating background color (zebra). You can delete them by clicking an icon to the right of each row.

When the trash icon is clicked, a request goes to the server to delete that individual by it's ID. If the action was successful then the row should fade out and then be removed from the DOM. After all is said and done, the rows should be zebra'ed again.

<blockquote>
The following code was inspired by an issue a friend of mine, <a href="http://twitter.com/caseypicker" target="_blank">Casey Picker</a> from <a href="http://lamplightmedia.net/" target="_blank">LamplightMedia.net</a>, had last week and I helped him isolate the problem. If you don't spot the error right away I have a simplified version of the same underlying issue at the end of the post.</blockquote>

<h3>
The Buggy Code</h3>

<script src="https://gist.github.com/1124506.js?file=fiddle.js">
</script>
<h3>
The Unexpected Result</h3>

<iframe src="http://jsfiddle.net/KyH2y/embedded/result,html,js" style="height: 300px; width: 100%;"></iframe>

When you execute the above code you'll notice that when you delete one of the rows the alternating background colors get all out of sync. 

<h3>
The Underlying Problem</h3>

Since the row that is being deleted is happening in the success callback function It seemed logical to put the zebraTable call in the complete callback function. That seems right, right? Based on the jQuery documentation the complete callback is only fired after the success function. But why am I having this problem?

Well, the problem is the classic case of treating asynchronous code as synchronous. You might think to yourself, "I know AJAX is asynchronous, but the problem is happening after we've received a response, right?" The answer to that is "Yes", but you the act of animating the fading of the row is also asynchronous.

Once the program starts the hide animation the control of execution moves on to trigger the complete callback function (where the zebraTable call is taking place). After 500 milliseconds, when the row has completed fading out, control is given back to the hide callback which finally removes the row. The bug is that the code is zebra-fying the table before the row is deleted, which isn't what you intended.

<h3>
The Solution</h3>

The solution to fix this problem is really simple and straightforward. All you really need to do is to move the zebraTable function call out of the complete callback and immediately after you remove the row from the hide callback. 

<script src="https://gist.github.com/1124539.js?file=gistfile1.js">
</script>
If you test out the code again below you'll notice that now we have the desired behavior that we were wanting all along. If you delete a row the rows will re-zebra-fy themselves as expected.

<iframe src="http://jsfiddle.net/7y69R/embedded/result,html,js" style="height: 300px; width: 100%;"></iframe>

<h3>
Simple Example of the Same Problem</h3>

The above example was slightly complex, but the underlying problem of treating asynchronous code as synchronous is common. Here is another example, but this time dramatically simplified. 

<script src="https://gist.github.com/1130095.js?file=fiddle.js">
</script>
The above code snippet ( <a href="http://jsfiddle.net/zhqry/" target="_blank">jsFiddle</a> ) declares a contact variable and then makes an AJAX call to retrieve contact information from the server. On the <b>next statement</b> the code is assuming that the contact is already available to display in the console. Unfortunately, since the AJAX is asynchronous the result will not be what you expected.

The most simple fix to the above code snippet is to move the console.log statement to after the AJAX call has successfully returned the server with your contact data as show in the below code snippet ( <a href="http://jsfiddle.net/vFjZJ/" target="_blank">jsFiddle</a> ).

<script src="https://gist.github.com/1130097.js?file=fiddle.js">
</script>
<blockquote>
Technically this fixes your error, but you might additionally refactor this code to make a callback, trigger an event, or publish a message that the data was retrieved. This would help separate the data access code from your user interface code.</blockquote>

<h3>
Conclusion</h3>

The key concept to remember here is to <strong>not treat asynchronous code as synchronous</strong>. Most of us are aware that AJAX calls are asynchronous, but we also need to remember that animations are asynchronous as well. In addition setTimeout and setInterval are also asynchronous.

Until next time...