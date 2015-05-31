---
layout: post
title: 'Angry Birds of JavaScript- Orange Bird: Templating'
date: '2013-04-09 05:05:00'
---

<h2>
Introduction</h2>
<!-- Yellow Bird - RequireJS http://jsfiddle.net/4QG5Q/ http://plnkr.co/edit/syYXSOWx1UWUlbFAd0v9 https://github.com/gruntjs/grunt-contrib-handlebars -->
<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-EoYTO-3jfeY/UV-WOmhaF3I/AAAAAAAAZ0g/S1oYMzsOg2w/s1600/angrybirds_620_121112.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" height="160" src="http://1.bp.blogspot.com/-EoYTO-3jfeY/UV-WOmhaF3I/AAAAAAAAZ0g/S1oYMzsOg2w/s320/angrybirds_620_121112.jpg" width="320" /></a></div>
A diabolical herd of pigs stole all of the front-end architecture from an innocent flock of birds and now they want it back! 

A team of special agent hero birds will attack those despicable pigs until they recover what is rightfully theirs, front-end JavaScript architecture!

Will the birds be successful in the end? Will they defeat their bacon flavored foe? Let's find out together in another nail biting episode of Angry Birds of JavaScript!

<blockquote>
Check out the <strong><a href="http://www.elijahmanor.com/2013/03/angry-birds-of-javascript-series.html" target="_blank">series introduction post</a></strong> for a list of all the birds and their attack powers.</blockquote>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-MsnBfq6yXiQ/UV-aF4EH1EI/AAAAAAAAZ0o/bUCCPM5vfUQ/s1600/Orange_bird_space.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" src="http://4.bp.blogspot.com/-MsnBfq6yXiQ/UV-aF4EH1EI/AAAAAAAAZ0o/bUCCPM5vfUQ/s1600/Orange_bird_space.png" /></a></div>
<h3>
Previous Attacks</h3>
<ul>
<li><a href="http://www.elijahmanor.com/2013/03/angry-birds-of-javascript-red-bird.html" target="_blank">Red Bird - IIFE</a></li>
<li><a href="http://www.elijahmanor.com/2013/03/angry-birds-of-javascript-blue-bird.html" target="_blank">Blue Bird - Events</a></li>
<li><a href="http://www.elijahmanor.com/2013/04/angry-birds-of-javascript-yellow-bird.html" target="_blank">Yellow Bird - RequireJS</a></li>
<li><a href="http://www.elijahmanor.com/2013/04/angry-birds-of-javascript-black-bird.html" target="_blank">Black Bird - Backbone</a></li>
<li><a href="http://www.elijahmanor.com/2013/04/angry-birds-of-javascript-white-bird.html" target="_blank">White Bird - Linting</a></li>
<li><a href="http://www.elijahmanor.com/2013/04/angry-birds-of-javascript-green-bird.html" target="_blank">Green Bird - Mocking</a></li>
</ul>

<h3>
Orange Bird Attacks</h3>

In this post we will take a look at the Orange Bird. He first starts out small with a simple template, but then expands itself into a DOM blast that will surely send the message that the birds mean business. Slowly, one by one, the birds will take back what it theirs to keep!

<h2>
What Was Stolen by the Pigs?</h2>

For the last several years we have seen a trend that more and more work is being done on the front-end of web development. We communicate to the back-end via Ajax or Web Sockets and then display the data somehow in the UI. The birds found themselves mostly using string concatenation to build up the rich user interfaces, which resulted in a lot of code that was boring and also prone for errors. Thankfully an Orange Bird came along and said, "Hey, isn't there something better than this? Can't we separate our view from our data somehow?", and that is how templates became to be in the bird world. The Orange Bird borrowed templating libraries from the humans such as Underscore.js and <a href="http://handlebarsjs.com/" target="_blank">Handlebar.js</a> to help fit this need among the foul. 

However, during a recent invasion the pigs stole the birds' templating libraries! As a result, one of the Orange Birds has been tasked to reclaim what has been stolen. He will use his exploding power to help destroy the pigs in order to take back what is theirs.

<h2>
Why Use a Templating Engine?</h2>

Before we get into what templating engines I recommend let's first look into why we might need one in the first place. The more I develop I try to find ways to separate the various parts of my application. I start to feel dirty when too much stuff is going on in the same place. Take a look at the following piece of code and tell me how you feel...

<script src="https://gist.github.com/elijahmanor/5324961.js?file=before.js"></script>
Yeah, I don't like all of the string concatenation either. I prefer not to have a bunch of presentation inside of my code if I can help it. On the plus side, it does work. You can see the output of the code in the following embedded jsFiddle.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="200" src="http://jsfiddle.net/B4fJB/embedded/result,js,html" width="100%"></iframe>

So, what can we do instead? This is where some type of templating engine can help us simplify our code and separate our markup from our code.

<h2>
Underscore.js</h2>

<a href="http://1.bp.blogspot.com/-t24RSU2yVNo/UWBpxcuBmUI/AAAAAAAAZ1I/1GQ-k_JuODA/s1600/underscore.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="55" src="http://1.bp.blogspot.com/-t24RSU2yVNo/UWBpxcuBmUI/AAAAAAAAZ1I/1GQ-k_JuODA/s320/underscore.png" width="320" /></a>We will first look at the template method in the Underscore.js library. I tend to use Underscore in all of my projects these days so I already have the power of its templating engine loaded. If what I am doing is pretty simple, then I mostly default to use Underscore for templating. However, as you'll see there are some limitations which make the next library we will look at much more appealing.

<h3>
Take 1</h3>

The following is the above code rewritten using Underscore's template. You'll notice that the code piece has been greatly simplified! Whoo hooo! 

<script src="https://gist.github.com/elijahmanor/5324961.js?file=underscore-before.js"></script>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-3Kf0njai3FE/UWQqiAbjkII/AAAAAAAAZ5I/uqisM5XsOCQ/s1600/Inflated_orange_bird_sprite.png" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" height="178" src="http://3.bp.blogspot.com/-3Kf0njai3FE/UWQqiAbjkII/AAAAAAAAZ5I/uqisM5XsOCQ/s200/Inflated_orange_bird_sprite.png" width="200" /></a></div>
The bulk of the work is being done by the template to explode it into a bunch of markup! As you can see to the left our orange bird looks quite different now lolz ;)

We moved the layout into a <code>script</code> tag in our markup and gave it an identifier. The template has special markers <code>&lt;%= expression %&gt;</code> to denote where it should evaluate data passed to it. You can also use the <code>&lt;% statements %&gt;</code> symbols to put whatever JavaScript you want in there (think loops, branching, etc...)!  

<script src="https://gist.github.com/elijahmanor/5324961.js?file=underscore-before.html"></script>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-g0AGryuJAFE/UWB-rxhthnI/AAAAAAAAZ1g/o57Bn_sUSx8/s1600/with_great_power_comes_great_responsibility_by_itomibhaa-d4lajvl.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="320" src="http://3.bp.blogspot.com/-g0AGryuJAFE/UWB-rxhthnI/AAAAAAAAZ1g/o57Bn_sUSx8/s320/with_great_power_comes_great_responsibility_by_itomibhaa-d4lajvl.png" width="225" /></a></div>
You can play around with the above code snippets in <a _blank="" href="http://jsfiddle.net/wkH3k/" target="">jsFiddle</a>.

As Uncle Ben said, "With great power, comes great responsibility."

Being able to put whatever code you want in your template isn't the best idea in the world. By putting the date manipulation logic in the template it makes it really tough to Unit Test that piece of code. Just imagine if we started cluttering our template with more and more code blocks that like. If you go this route, then you aren't really solving the original problem at hand which was combining presentation and logic. 

<h3>
Take 2</h3>

The following is another take at using Underscore, but this time doing the data manipulation before. The downside is that I'm using the <code>_.map()</code> method and converting each date property to the relative version. There is some overhead in me having to loop over the data before handing it off to the templating engine. 

<script src="https://gist.github.com/elijahmanor/5324961.js?file=underscore-after.js"></script>
We were able to remove the date logic in the following template since we did that work above in the JavaScript before calling the template to do its work. The result is better than what we started with, but it could be better. 

<script src="https://gist.github.com/elijahmanor/5324961.js?file=underscore-after.html"></script>
You can play around with the above code snippets in <a _blank="" href="http://jsfiddle.net/auBUX/" target="">jsFiddle</a>.

<h3>
Why use Underscore.js?</h3>

<div style="width: 100%;">
<div style="float: left; width: 50%;">
<h4>
Pros</h4>

<ul>
<li>You can stick arbitrary JavaScript in the template</li>
<li>It is very small</li>
<li>If you are already using Backbone.js then you have it</li>
<li>If you are already using Underscore.js then you have it</li>
<li>You can Compile the Templates</li>
<li>Can Run on the Client and the Server</li>
<li>Can you think of others?</li>
</ul>
</div>
<div style="float: right; width: 50%;">
<h4>
Cons</h4>

<ul>
<li>You can stick arbitrary JavaScript in the template</li>
<li>Doesn't have the concept of <code>this</code> in templates</li>
<li>Can you think of others?</li>
</ul>
</div>
</div>
<div style="clear: both;">
</div>

<h2>
Handlebars.js</h2>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-ads8NbsvuFk/UWBqEezk1kI/AAAAAAAAZ1Q/N-LZmHnRDzM/s1600/handlebars_logo.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="195" src="http://1.bp.blogspot.com/-ads8NbsvuFk/UWBqEezk1kI/AAAAAAAAZ1Q/N-LZmHnRDzM/s320/handlebars_logo.png" width="320" /></a></div>
Overall I tend to prefer the Handlebar.js over Underscore's template engine. Handlebars encourages you to separate your presenting from your logic, it is faster, and it provides a mechanism to precompile your templates that we will look at here in a bit.

First let's take another look at the problem we have been addressing throughout this post. The following code uses Handlebars to template the solution. The code is still pretty clean as was the previous version. You'll notice that I am defining a custom helper called <code>fromNow</code> that can be used in the template.

<script src="https://gist.github.com/elijahmanor/5324961.js?file=handlebars.js"></script>
And now for the templating syntax below. The syntax feels much more terse to me compared to Underscore, which I like. Inside the template we are using the <code>fromNow</code> template helper to convert the time. This is nice so we don't have to map over our array beforehand like we did with Underscore or put the logic in the template itself.

<script src="https://gist.github.com/elijahmanor/5324961.js?file=handlebars.html"></script>
You can play around with the above code snippets in <a _blank="" href="http://jsfiddle.net/UeWHb/" target="">jsFiddle</a>.

<h3>
Precompiling Your Templates</h3>

<a href="http://2.bp.blogspot.com/-0c96euSzkrg/UWB2qOZsEHI/AAAAAAAAZ1Y/__iqDNw7IwE/s1600/batman-unicorn-dolphins.jpg" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="320" src="http://2.bp.blogspot.com/-0c96euSzkrg/UWB2qOZsEHI/AAAAAAAAZ1Y/__iqDNw7IwE/s320/batman-unicorn-dolphins.jpg" width="249" /></a>I briefly mentioned above that one of the things I liked was that you can precompile your templates. What does that even mean!?! Well, with both Underscore and Handlebars you need to compile your template before you use it (technically you can do it in one step with Underscore, but it still has to be done under the covers). Compiling a template is good to do if you plan on using it more than once or if you just want it done before you need it. 

However, with Handlebars you can go one step further and compile the template on the server and include that on the front-end. This means that you can reduce that amount of work needed on the front-end AND there is a trimmed down version of the handlebars runtime that you can use that has only the parts necessary needed to execute a template (not compile it)!

How cool is that? If your answer was "It's just about as cool as Batman riding on a Rainbow Unicorn alongside dolphins!", then you were right! Congratulations ;)

So how does that work exactly? Well, first you install Handlebars on your server using Node...

<script src="https://gist.github.com/elijahmanor/5324961.js?file=install-handlebars.sh"></script>
Then you take your template contents (what is between the <code>script</code> tags) and save it to a file. In our case let's save it as <code>tweets.tmpl</code>. How run the <code>handlebars</code> precompiler against your template file.

<script src="https://gist.github.com/elijahmanor/5324961.js?file=precompile-handlebars.sh"></script>
Once all of that is done you have a precompiled version of your template that you can now include on your front-end application like the following...

<script src="https://gist.github.com/elijahmanor/5324961.js?file=handlebars-precompile-include.html"></script>
Now that your template is available on the page you can access it by asking <code>Handlebars</code> for the precompiled version and you are all set to start using it!

<script src="https://gist.github.com/elijahmanor/5324961.js?file=handlebars-precompile-include.js"></script>
<h3>
Why use Handlebars.js?</h3>

<div style="width: 100%;">
<div style="float: left; width: 50%;">
<h4>
Pros</h4>

<ul>
<li>Its a Logic-less Template Engine</li>
<li>You can Precompile Templates on the Server</li>
<li>Supports Helper methods</li>
<li>Can Run on the Client and the Server</li>
<li>Supports the concept of <code>this</code> in templates</li>
<li>It iss a superset of Mustache.js</li>
<li>Can you think of others?</li>
</ul>
</div>
<div style="float: right; width: 50%;">
<h4>
Cons</h4>

<ul>
<li>Can you think of any?</li>
</ul>
</div>
</div>
<div style="clear: both;">
</div>

<h2>
What About Other Templating Engines?</h2>

That is a great question. Maybe your needs are different than mine or maybe you just don't like one of the engines that I've mentioned. If that is the case then you should check out a great tool created by Garann Means (<a href="http://twitter.com/garannm" target="_blank">@garannm</a>) called the <a href="http://garann.github.io/template-chooser/" target="_blank">Template Chooser</a>. The chooser will ask you a set of questions that will help determine which templating engine is right for your needs. The following is an example of what the chooser looks like...

<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-n_FEUjxHn_s/UWBZDHPelKI/AAAAAAAAZ04/67e-eXyZ3K4/s1600/template-chooser.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="408" src="http://2.bp.blogspot.com/-n_FEUjxHn_s/UWBZDHPelKI/AAAAAAAAZ04/67e-eXyZ3K4/s640/template-chooser.png" width="640" /></a></div>

<h2>
Additional Resources</h2>

<ul>
<li><a href="http://net.tutsplus.com/tutorials/javascript-ajax/introduction-to-handlebars/" target="_blank">An Introduction to Handlebars</a> by Gabriel Manricks (<a href="http://twitter.com/GabrielManricks" target="_blank">@GabrielManricks</a>)</li>
<li><a href="http://net.tutsplus.com/tutorials/javascript-ajax/best-practices-when-working-with-javascript-templates/" target="_blank">Best Practices When Working With JavaScript Templates</a> by Andrew Burgess (<a href="http://twitter.com/andrew8088" target="_blank">@andrew8088</a>)</li>
<li><a href="http://css.dzone.com/articles/demo-handlebars-and-why-you" target="_blank">Demo of Handlebars, and Why You Should Consider a Templating Engine</a> Raymond Camden (<a href="http://twitter.com/cfjedimaster" target="_blank">@cfjedimaster</a>)</li>
<li><a href="http://www.html5rocks.com/en/tutorials/webcomponents/template/" target="_blank">HTML's New Template Tag: Standardizing Client-Side Templating </a> by Eric Bidelman (<a href="http://twitter.com/ebidel" target="_blank">@ebidel</a>)</li>
</ul>

<h2>
Attack!</h2>

The following is a simple Angry Birds clone using <a href="http://incompl.github.com/boxbox/">boxbox</a>, a framework for the <a href="https://code.google.com/p/box2dweb/">box2dweb</a> JavaScript physics library, written by <a href="http://bocoup.com/">Bocoup</a>'s <a href="http://twitter.com/_gsmith">Greg Smith</a>.

<blockquote>
Press the <code>space bar</code> to launch the Orange Bird and you can also use the arrow keys.</blockquote>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://jsfiddle.net/U3qVB/show" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://1.bp.blogspot.com/-PMJoeP3U0iU/UWCIzvwEXlI/AAAAAAAAZ1w/kJjp8Fd0ouQ/s1600/4-6-2013+3-41-27+PM.png" /></a></div>

<h3>
Conclusion</h3>

Mixing markup in code can lead to some nasty looking code that is cumbersome, monotonous, and difficult to maintain. Being able to split these apart is a great benefit for developers to simplify their code and help keep each concern in its place. Thankfully libraries like Underscore and Handlebars help us out by providing a clean way to describe presentation apart from logic. THere is a lot of freedom depending on what library you use, but I'd encourage you to look around and find one that works for you. The answer to that may be not to use one and that is fine. 

There are many other front-end architecture techniques that have been stolen by the pigs. Tune in next time as the next Angry Bird takes its revenge! Dun, dun, daaaaaaa!