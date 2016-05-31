---
layout: post
title: Unit Test like a Secret Agent with Sinon.js
date: '2013-06-04 14:42:00'
---

<em style="display: block; padding: 15px 10px 0px 50px;">The following content comes from the forth module of my Pluralsight course entitled: <a href="http://bit.ly/etm-ps-testing" target="_blank">Front-End First: Testing and Prototyping JavaScript Apps</a>. The rest of the course covers an introduction to Unit Testing, Examples of Hard to Test Code, <a href="http://visionmedia.github.io/mocha/" target="_blank">Mocha</a> (a JavaScript test runner), <a href="http://gruntjs.com/" target="_blank">Grunt</a> (a JavaScript task runner), <a href="https://github.com/appendto/jquery-mockjax" target="_blank">Mockjax</a> (a way to mock Ajax requests), <a href="http://experiments.mennovanslooten.nl/2010/mockjson/" target="_blank">mockJSON</a> (a way to generate semi-random complex objects for prototyping), and more.</em>
<h2>
Introduction</h2>

> “Standalone test spies, stubs and mocks for JavaScript. No dependencies, works with any unit testing framework.”

<a href="http://sinonjs.org/" target="_blank">Sinon.js</a> is a really helpful library when you want to unit test your code. It supports spies, stubs, and mocks. The library has cross browser support and also can run on the server using Node.js.

<h2>Spies<div class="separator" style="clear: both; text-align: center;"><a href="http://4.bp.blogspot.com/-pxBTNF_ArMs/Ua13WoDSCtI/AAAAAAAAdKg/J6rQ271fM4Y/s1600/spy-vs-spy-courtesy-of-Mad-Magazine.jpg" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="245" src="http://4.bp.blogspot.com/-pxBTNF_ArMs/Ua13WoDSCtI/AAAAAAAAdKg/J6rQ271fM4Y/s400/spy-vs-spy-courtesy-of-Mad-Magazine.jpg" width="400" /></a></div></h2>

<blockquote>
“A test spy is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls. A test spy can be an anonymous function or it can wrap an existing function.”</blockquote>

<h4>
Example</h4>

A test spy records how it is used. It will record how many times it was called, what parameters were used, when it was called, and a bunch of other things. Here you can see an example of creating a spy and I've listed out only a small subset of it’s features such as <code>called</code>, <code>callCount</code>, <code>calledWith</code>, <code>threw</code>, <code>returned</code>, and more.

<script src="https://gist.github.com/elijahmanor/5703645.js?file=spy-methods.js"></script>
In addition to just creating a new spy, you can also take an existing function and turn it into a spy. In this example we are taking jQuery and turning it’s <code>ajax</code> method into a spy. Once the spy has been used you can actually pull out one of those instances and verify how that particular call was used. And again, it is important to restore the function back to it’s original state much like we did when we manually stubbed our functions previously.

<script src="https://gist.github.com/elijahmanor/5703645.js?file=spy-ajax.js"></script>
<h4>
Mission Impossible: Spy</h4>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-uFVBU4kWWns/Ua18n6OTpAI/AAAAAAAAdLA/sVm7Vs2Sykg/s1600/e4m1_cruise_impossible.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" height="214" src="http://4.bp.blogspot.com/-uFVBU4kWWns/Ua18n6OTpAI/AAAAAAAAdLA/sVm7Vs2Sykg/s320/e4m1_cruise_impossible.jpg" width="320" /></a></div>
In the following simple code example we are creating a new <code>ethanHunt</code> spy and passing it to the <code>missionImpossible.start</code> method.

As you can see the <code>start</code> method takes the agent that was passed in and immediately invokes it.

The spy will record how it is used and then you can observe what happened.

<script src="https://gist.github.com/elijahmanor/5703645.js?file=spy-mission-impossible.js"></script>
At this point we can interrogate <code>ethanHunt</code> if he was called or not, how many times it was called, and a bunch of other questions.

<script src="https://gist.github.com/elijahmanor/5703645.js?file=spy-mission-impossible.sh"></script>
<h3>
Stubs<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-hHSd9oZ3mHk/Ua173s076CI/AAAAAAAAdK4/kk-GHBdN6Ls/s1600/Faker_by_Jackademus.jpg" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="266" src="http://2.bp.blogspot.com/-hHSd9oZ3mHk/Ua173s076CI/AAAAAAAAdK4/kk-GHBdN6Ls/s320/Faker_by_Jackademus.jpg" width="320" /></a></div>
</h3>

<blockquote>
“Test stubs are functions (spies) with pre-programmed behavior. They support the full test spy API in addition to methods which can be used to alter the stub's behavior.”</blockquote>

A stub in Sinon.js is also a spy as we've just seen, but it is also a function that has some predefined behavior. A stub is used when we want to fake some functionality so that our system thinks everything is performing normally.

<h4>
Example</h4>

You'll see here that after we have created a stub we can optionally respond to it based on the parameters that are passed to it.

<script src="https://gist.github.com/elijahmanor/5703645.js?file=stub-methods.js"></script>
Here we are telling our stub that if <code>"Hello"</code> is passed to it that it should return the string <code>"World"</code> and if we pass <code>"Wuz"</code> to the stub that <code>"Zup?"</code> should be returned.

We can do other things like if <code>"Kapow"</code> is passed to our stub then an exception will be thrown and we can get even more sophisticated and say if an object is passed to the stub it should <code>yieldTo</code> (or invoke) the <code>call</code> function that was passing using the <code>"Howdy"</code> argument. This is some pretty serious and awesome functionality built into these stubs!

<h4>
Mission Impossible: Stub</h4>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-28CwTjLsyZw/Ua14ph6u-II/AAAAAAAAdKs/2zbYJUkLBHg/s1600/mission_impossible_sml.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" height="147" src="http://1.bp.blogspot.com/-28CwTjLsyZw/Ua14ph6u-II/AAAAAAAAdKs/2zbYJUkLBHg/s320/mission_impossible_sml.jpg" width="320" /></a></div>
In this next mission, if you choose to accept it... we are stubbing out a <code>tape</code> function that will be passed into an assignment method.

The tape will either be passed the string <code>"accept"</code> or <code>"reject"</code> and depending on the answer we want a different result.

With a sinon stub, that is no problem. We can just say <code>tape.withArgs("accept"). returns(new Mission())</code> and if we wanted to throw a <code>Disintegrate</code> exception if the tape was rejected then we just follow the same pattern... <code>tape.withArgs("reject"). throws("Disintegrate")</code>.

If you can't tell already these stubs are really powerful and a great addition to your testing toolkit.

<script src="https://gist.github.com/elijahmanor/5703645.js?file=stub-mission-impossible.js"></script>
Once we've set up our stub, we can exercise our code as we would normally and the stub will respond with whatever behavior we predefined. Below you'll see that once we pass <code>"accept"</code> that we are getting a <code>Mission</code> object back and if we <code>"reject"</code> the assignment that a <code>Disintegrate</code> exception is thrown.

<script src="https://gist.github.com/elijahmanor/5703645.js?file=stub-mission-impossible.sh"></script>
<h4>
Stubbed Unit Test</h4>

Let’s take an example Twitter unit test and show how we can use a stub to simulate a response from jQuery’s <code>ajax</code> method.

<script src="https://gist.github.com/elijahmanor/5703645.js?file=stub-unit-test.js"></script>
In the before hook we will ask Sinon.js to create us a new stub based off of jQuery’s <code>ajax</code> method and we want to <code>yieldTo</code> (or invoke) the success function from the object that is passed to it. And while we are at it we want to pass our fake twitter data along with the <code>success</code> function.

With that one line of code we have stubbed out the jQuery <code>ajax</code> method and provide fake test data that we can use in our unit test.

Again, it is important to clean up after ourselves so in the after hook at the bottom here we are taking the <code>jQuery.ajax</code> method and calling restore which removes all of the stub behavior from the function,

<h3>
Mocks<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/--2X6ifXwlB4/Ua1_aE6czkI/AAAAAAAAdLQ/0Zn8HR_F5eo/s1600/4190127-833481-verified-rubber-stamp.jpg" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="148" src="http://1.bp.blogspot.com/--2X6ifXwlB4/Ua1_aE6czkI/AAAAAAAAdLQ/0Zn8HR_F5eo/s320/4190127-833481-verified-rubber-stamp.jpg" width="320" /></a></div>
</h3>

<blockquote>
“Mocks (and mock expectations) are fake methods (like spies) with pre-programmed behavior (like stubs) as well as pre-programmed expectations. A mock will fail your test if it is not used as expected.”</blockquote>

Now we finally get to mocks. Mocks are a lot like a stub and a spy, but with a slight twist. With a mock you define up front all of the things you want to expect ( or happen ) then when you are all done with your tests you assert that all those things happened as planned. So, it’s a slightly different way to think than if using a spy or stub by themselves.

<h4>
Example</h4>

In the following code we are defining a mock based off our opts object and we are saying that we expect the call method should only be called once and when it is called that it should have the <code>"Hello World"</code> string argument passed to it.

<script src="https://gist.github.com/elijahmanor/5703645.js?file=mock-methods.js"></script>
Then we proceed to run our code that we want tested. You'll see here I’m calling the call method passing the <code>"Hello World"</code> string.

And then at the end you tell the mock object to <code>mock.verify()</code> that all of the expectations you've made previously are valid. If for some reason an expectation was not met, then an exception will occur. And then just like in most of the other examples, we need to clean up after ourselves and call the restore method off of what was mocked.

<h4>
Mocked Unit Test</h4>

Let’s take another look at the Twitter <code>getTweets</code> unit tests again, but this time use a mock instead of a stub.

<script src="https://gist.github.com/elijahmanor/5703645.js?file=mock-unit-test.js"></script>
In the before hook I’m creating a mock of the jQuery object and I’m expecting that the ajax method will only be called once and that it should invoke the <code>success</code> method of the object I pass in with some <code>fakeData</code> I've provided.

Inside my unit test I run the code I want to tests, which is the <code>getTweets</code> method, and then on the callback I call the <code>verify</code> method off of the mock to make sure my expectations have been met.

And as before I restore the object in the after hook.

<h3>
Fake Timers<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-B0A8bWz6lhM/Ua2AHTowpnI/AAAAAAAAdLY/Xe3UsW59AGA/s1600/SpyNet_Multi-Media_Video_Watch.jpg" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" src="http://1.bp.blogspot.com/-B0A8bWz6lhM/Ua2AHTowpnI/AAAAAAAAdLY/Xe3UsW59AGA/s1600/SpyNet_Multi-Media_Video_Watch.jpg" /></a></div>
</h3>

<blockquote>
“Fake timers is a synchronous implementation of setTimeout and friends that Sinon.JS can overwrite the global functions with to allow you to more easily test code using them.“</blockquote>

Another handy feature of Sinon.s is that you can fake timers! At first this might seem strange, but it turns out it is really powerful and clever.

<h4>
Example</h4>

We first start by asking Sinon.js to <code>useFakeTimers()</code> and save off the clock it gives us. Now let’s take some jQuery animation code that will <code>fadeIn</code> an element slowly onto the screen.

<script src="https://gist.github.com/elijahmanor/5703645.js?file=fake-timer.js"></script>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-5sKF-uFzCEU/Ua3u1s0errI/AAAAAAAAdMA/x0L7gu9zg-k/s1600/881-the-tardis_2239_detail.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" height="200" src="http://1.bp.blogspot.com/-5sKF-uFzCEU/Ua3u1s0errI/AAAAAAAAdMA/x0L7gu9zg-k/s200/881-the-tardis_2239_detail.jpg" width="200" /></a></div>
Normally if we wanted to test if this element showed up on the screen we'd either need to provide a callback when the animation is finished or tap into the promise created from the deferred and wait for that to resolve.

However, much like a time lord we can take sinon’s TARDIS, errr... I mean fake timer and tell the clock that we are now 650 milliseconds in the future! And then we can immediately assert that the element is visible without waiting. And of course we will need to restore the clock back to normal when we are done.

<h3>
Fake Server</h3>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-EBT-yADE9wQ/Ua2Be0r0sXI/AAAAAAAAdLw/JmAS9qQHiac/s1600/google-server-room5.jpg" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="213" src="http://4.bp.blogspot.com/-EBT-yADE9wQ/Ua2Be0r0sXI/AAAAAAAAdLw/JmAS9qQHiac/s320/google-server-room5.jpg" width="320" /></a></div>

<blockquote>
“High-level API to manipulate FakeXMLHttpRequest instances.”</blockquote>

Another neat feature that Sinon.js has is a fake server. This is a high level abstraction over the <code>FakeXMLHttpRequest</code> that Sinon.js also provides if you need more granular support.

<h4>
Example</h4>

We can create a fake server from Sinon.js, and we can define that for a GET to the /twitter/api/user.json resource we want to respond with a status code of 200 and the following JSON data.

<script src="https://gist.github.com/elijahmanor/5703645.js?file=fake-server.js"></script>
Then if we called jQuery’s <code>get</code> method with the same URL then we'd get back the data we stubbed out. A key to remember is that you do need to tell the server to respond as we did immediately after we called the get method. And finally we need to restore the server when we are done.

<h4>
Fake Server Unit Test</h4>

Let’s take this technique and add it to our twitter unit test.

<script src="https://gist.github.com/elijahmanor/5703645.js?file=fake-server-unit-test.js"></script>
In our <code>before</code> hook we create the server and match the resource that our twitter app will be calling and pass back the data we want to stub out. Then we unit test out the <code>getTweets</code> method as we did before, but things don't work out as we expect! Why is that? Well, it is because we are using JSONP as our jQuery ajax datatype. The way JSONP works is that it isn't actually using <code>XMLHttpRequest</code> as a typical Ajax call does. Instead JSONP uses some trickery of injecting a dynamic script tag on your page and a bunch of other things that jQuery tries to hide from you for simplicities sake.

So, in this case using the fake server won't help us. It would be better if we used a stub like we did in the last example.

<h3>
Conclusion</h3>

Hopefully you can see that <a href="http://sinonjs.org/" target="_blank">Sinon.js</a> is a great utility library to help make unit testing a much more effective and terse experience. You'll probably more often than not find yourself making spies and stubs much more often than mocks, but that is really up to how you approach unit testing.

If you enjoyed this content you can get more from my recent Pluralsight course entitled: <a href="http://bit.ly/etm-ps-testing" target="_blank">Front-End First: Testing and Prototyping JavaScript Apps</a> where I cover an introduction to Unit Testing, look at various examples of hard to test code and introduce the following libraries and tools... Mocha, Grunt, Mockjax, amplify.request, mockJSON, etc...
