---
layout: post
title: 'Angry Birds of JavaScript- Mighty Eagle: Automation'
date: '2013-04-11 05:05:00'
---

<h2>
Introduction</h2>
<!-- Yellow Bird - RequireJS http://jsfiddle.net/4QG5Q/ http://plnkr.co/edit/syYXSOWx1UWUlbFAd0v9 -->
<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-N7kG4eOFXzA/UWED8Hv6eiI/AAAAAAAAZ2g/bzakzkoKQgc/s1600/Angry-Birds-for-iOS-Mighty-Eagle-screenshot.png" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" height="197" src="http://2.bp.blogspot.com/-N7kG4eOFXzA/UWED8Hv6eiI/AAAAAAAAZ2g/bzakzkoKQgc/s400/Angry-Birds-for-iOS-Mighty-Eagle-screenshot.png" width="400" /></a></div>
A diabolical herd of pigs stole all of the front-end architecture from an innocent flock of birds and now they want it back! 

A team of special agent hero birds will attack those despicable pigs until they recover what is rightfully theirs, front-end JavaScript architecture!

Will the birds be successful in the end? Will they defeat their bacon flavored foe? Let's find out together in another nail biting episode of Angry Birds of JavaScript!

<blockquote>
Check out the <strong><a href="http://www.elijahmanor.com/2013/03/angry-birds-of-javascript-series.html" target="_blank">series introduction post</a></strong> for a list of all the birds and their attack powers.</blockquote>

<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-9CHfr07ovWs/UWEETqEvgSI/AAAAAAAAZ2w/baqRjP09l1c/s1600/angrybirds-eagle.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="235" src="http://4.bp.blogspot.com/-9CHfr07ovWs/UWEETqEvgSI/AAAAAAAAZ2w/baqRjP09l1c/s320/angrybirds-eagle.png" width="320" /></a></div>
<h3>
Previous Attacks</h3>
<ul>
<li><a href="http://www.elijahmanor.com/2013/03/angry-birds-of-javascript-red-bird.html" target="_blank">Red Bird - IIFE</a></li>
<li><a href="http://www.elijahmanor.com/2013/03/angry-birds-of-javascript-blue-bird.html" target="_blank">Blue Bird - Events</a></li>
<li><a href="http://www.elijahmanor.com/2013/04/angry-birds-of-javascript-yellow-bird.html" target="_blank">Yellow Bird - RequireJS</a></li>
<li><a href="http://www.elijahmanor.com/2013/04/angry-birds-of-javascript-black-bird.html" target="_blank">Black Bird - Backbone</a></li>
<li><a href="http://www.elijahmanor.com/2013/04/angry-birds-of-javascript-white-bird.html" target="_blank">White Bird - Linting</a></li>
<li><a href="http://www.elijahmanor.com/2013/04/angry-birds-of-javascript-green-bird.html" target="_blank">Green Bird - Mocking</a></li>
<li><a href="http://www.elijahmanor.com/2013/04/angry-birds-of-javascript-orange-bird.html" target="_blank">Orange Bird - Templating</a></li>
<li><a href="http://www.elijahmanor.com/2013/04/angry-birds-of-javascript-big-brother.html" target="_blank">Big Brother Bird - Patterns</a></li>
</ul>

<h3>
Mighty Eagle Bird Attacks</h3>

In this post we will take a look at the Mightly Eagle who uses the most superior weapon of them all, a suite of tools that can organize and deploy all the other birds into battle against their soon to be vanquished foe. Slowly, one by one, the birds will take back what it theirs to keep!

<h2>
What Was Stolen by the Pigs?</h2>

Over time the birds picked up RequireJS (Yellow Bird), JSHint (White Bird), Plato, Mustache (Orange Bird), and a bunch of other great tools, but all of them required a command line task to complete. It was getting quite annoying having to remember what was required to run each of these tools. In addition, it was easy to forget to run the tools to update their web application when necessary. Thankfully one day the Mighty Eagle introduced some tools to make things a little bit easier. The Eagle brought Grunt and Bowser to automate common tasks and to help easily bring in commonly used libraries that were necessary to e their applications.  

However, during a recent invasion the pigs stole all the birds' automation tools! As a result, one of the Mighty Eagles has been tasked to reclaim what has been stolen. He will use the mighty power of the Eagle to bring together all of the helpful techniques we've seen in this series.

<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-CXGuzyWVyk8/UWELb7hUEQI/AAAAAAAAZ3g/joO4tCJ_eyc/s1600/toolset+(2).png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="200" src="http://3.bp.blogspot.com/-CXGuzyWVyk8/UWELb7hUEQI/AAAAAAAAZ3g/joO4tCJ_eyc/s200/toolset+(2).png" width="163" /></a></div>
<h2>
Grunt</h2>

Grunt is a task-based command line tool that is written in JavaScript and helps automate the build of your front-end application. The community has really grabbed on to this tool and as a result there are tons of plugins that you can choose from to automate things like CoffeeScript, handlebars precompilation, less support, JSHint checking, etc...

Several really large projects already use Grunt to assist their builds and other automation tasks such as Twitter, jQuery, Modernizr, Sauce Labs, and others.

<h3>
Getting Started</h3>

In order to get started you just need to install grunt from node with the following command...

<script src="https://gist.github.com/elijahmanor/5331806.js?file=grunt-install.sh"></script>
Once you've installed grunt you'll need 2 main things for each of your projects
<ol>
<li>Gruntfile.js</li>
<li>package.json</li>
</ol>

<h4>
Gruntfile.js</h4>

You can create your own <code>Gruntfile.js</code> from scratch, you can copy a starter Gruntfile.js from the documentation, or there is a use a <code>grunt-init gruntfile</code> project scaffold. To install the scaffold follow the instructions from Grunt's <a href="http://gruntjs.com/project-scaffolding" target="_blank">Project Scaffolding</a> page. The following Gruntfile.js is an example from Grunt's <a href="http://gruntjs.com/getting-started" target="_blank">Get Started</a> page...

<script src="https://gist.github.com/elijahmanor/5331806.js?file=Gruntfile.js"></script>
<h4>
package.json</h4>

The <code>package.json</code> describes your project's name, version, and any dependencies it might have such as grunt and any grunt plugins. You can copy an example package.json from the Grunt's <a href="http://gruntjs.com/getting-started" target="_blank">Get Started</a> page... (see below)

<script src="https://gist.github.com/elijahmanor/5331806.js?file=package.json"></script>
<h4>
Grunt Plugins</h4>

Now that hopefully everything is setup, you can start using a whole suite of plugins to automate tasks. Here are a few interesting ones that you might enjoy...

<ul>
<li>grunt-contrib-coffee - Compile CoffeeScript files into JavaScript</li>
<li>grunt-contrib-compass - Compile Compass into CSS</li>
<li>grunt-contrib-concat - Concatenates files</li>
<li>grunt-contrib-connect - Starts a connect web server</li>
<li>grunt-contrib-csslint - Lints your CSS files</li>
<li>grunt-contrib-handlebars - Precompiles your Handlebar tempaltes</li>
<li>grunt-contrib-htmlmin - Minify your HTML markup</li>
<li>grunt-contrib-imagemin - Minify PNG and JPEG images</li>
<li>grunt-contrib-jshint - Validate files with JSHint</li>
<li>grunt-contrib-less - Compile LESS to CSS</li>
<li>grunt-contrib-nodeunit - Run Nodeunit unit test</li>
<li>grunt-contrib-watch - Run predefined tasks when files change</li>
<li>grunt-contrib-requirejs - Optimize RequireJS projects using r.js</li>
<li>grunt-contrib-uglify - Minify files with UglifyJS</li>
<li>grunt-contrib-yuidoc - Compile YUIDocs Documentation</li>
<li>... more ...</li>
</ul>

<h4>
jQuery's Gruntfile</h4>

I pulled down jQuery from their GitHub repository to see how they use Grunt and the following is the output when get when executing the tool. 

<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-qdV01Mu1uO4/UWJLrncu2WI/AAAAAAAAZ4A/bges3xKOJ_o/s1600/grunt-jquery.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="554" src="http://2.bp.blogspot.com/-qdV01Mu1uO4/UWJLrncu2WI/AAAAAAAAZ4A/bges3xKOJ_o/s640/grunt-jquery.png" width="640" /></a></div>

If you look closely you'll notice they update their git submodules, build a version of jQuery from it's modules, run JSHint against the built jquery.js and tests files, creates sourcemaps, and runs a special compare file size task. If you dig deep into their Gruntfile you'll find they've also setup a custom way to run their unit tests against Browserstack, which is pretty cool if you ask me ;)

<h4>
Modernizr's Gruntfile</h4>

In the same way I pulled down the Modernizr repository and typed <code>grunt qunit</code> to watch their 746 unit tests execute and pass in 369ms using the PhantomJS headless browser! 

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-XvfSNrxCTMQ/UWJLxIfNMPI/AAAAAAAAZ4M/AXAjvelHjZQ/s1600/grunt-modernizr.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="168" src="http://1.bp.blogspot.com/-XvfSNrxCTMQ/UWJLxIfNMPI/AAAAAAAAZ4M/AXAjvelHjZQ/s640/grunt-modernizr.png" width="640" /></a></div>

<h3>
Grunt Resources</h3>

The intent of this post wasn't to teach you all there is to know about Grunt, but to make you aware of it if you didn't know already. It is a very nice tool to help you automatic ALL THE front-end THINGS. Check out the following resources to help you unpack how to get started...

<ul>
<li><a href="http://www.youtube.com/watch?v=q3Sqljpr-Vc">The Grunt Basics</a> by Cary Landholt (<a href="http://twitter.com/carylandholt" target="_blank">@carylandholt</a>)</li>
<li><a href="http://merrickchristensen.com/articles/gruntjs-workflow.html" target="_blank">Grunt.js Workflow</a> by Merrick Christensen (<a href="http://twitter.com/iammerrick" target="_blank">@iammerrick</a>)</li>
<li><a href="http://net.tutsplus.com/tutorials/javascript-ajax/meeting-grunt-the-build-tool-for-javascript/" target="_blank">Meet Grunt: The Build Tool for JavavScript</a> by Andrew Burgess (<a href="http://twitter.com/andrew8088" target="">@andrew8088</a>)</li>
</ul>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-L7pXsxuBnVA/UWELyS9lG0I/AAAAAAAAZ3w/ptGkkE9j1ms/s1600/toolset+(3).png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="200" src="http://1.bp.blogspot.com/-L7pXsxuBnVA/UWELyS9lG0I/AAAAAAAAZ3w/ptGkkE9j1ms/s200/toolset+(3).png" width="161" /></a></div>
<h2>
Twitter Bower</h2>

For those of you that have used Node or Ruby you'll be familiar with npm or gems, however, there hasn't been anything like that for front-end browser scripts and styles... at least until now! 

The Twitter Bower project seeks to solve that problem by providing a package manager for the web (HTML, CSS, and JavaScript). 

<script src="https://gist.github.com/elijahmanor/5331806.js?file=bower-install.sh"></script>
Once you've installed bowser, then you can start downloading libraries! For example, if we wanted to pull down the latest version of jQuery we could just <code>bower install jquery</code> and you'll see the following...

<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-s8ERF-X_x70/UWLBuSeWcpI/AAAAAAAAZ4Y/uWUIb5eWuLg/s1600/bower-install-jquery.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="436" src="http://3.bp.blogspot.com/-s8ERF-X_x70/UWLBuSeWcpI/AAAAAAAAZ4Y/uWUIb5eWuLg/s640/bower-install-jquery.png" width="640" /></a></div>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-Rp0_He-oQgI/UWELh24_5kI/AAAAAAAAZ3o/J8F2Jj_LV4w/s1600/toolset+(1).png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="200" src="http://3.bp.blogspot.com/-Rp0_He-oQgI/UWELh24_5kI/AAAAAAAAZ3o/J8F2Jj_LV4w/s200/toolset+(1).png" width="150" /></a></div>

<h3>
Bower Resources</h3>

If you want to find out more about bower then I encourage you to check out some of the nice resources below.
<ul>
<li><a href="http://net.tutsplus.com/tutorials/tools-and-tips/meet-bower-a-package-manager-for-the-web/">Meet Bower: A Package Manager For The Web</a> by Andrew Burgess (<a href="http://twitter.com/andrew8088" target="_blank">@andrew8088</a>)</li>
<li><a href="http://net.tutsplus.com/tutorials/javascript-ajax/a-requirejs-backbone-and-bower-starter-template/">A RequireJS, Backbone, and Bower Starter Template</a> by Jeffrey Way (<a href="http://twitter.com/jeffrey_way" target="_blank">@jeffrey_way</a>)</li>
</ul>

<h2>
Yeoman</h2>

The yeoman project is a scaffolding engine that works along with Grunt and Bower. You can think of yeoman as the scaffolding piece that can get your applications going quickly. In order to get started you need to install yeoman by using the following syntax...

<script src="https://gist.github.com/elijahmanor/5331806.js?file=yo-install.sh"></script>
Once yeoman is installed then you can generate a variety of different types of projects. In the following screenshot I asked yeoman to create a new webapp. It will ask me several questions along the way to tailor the application to my needs.

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-hgpccVDN7Gg/UWLB_oM2gWI/AAAAAAAAZ4g/_XFTx_MJsTw/s1600/yo-webapp.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="640" src="http://1.bp.blogspot.com/-hgpccVDN7Gg/UWLB_oM2gWI/AAAAAAAAZ4g/_XFTx_MJsTw/s640/yo-webapp.png" width="592" /></a></div>

There are other scaffolds such as <a href="https://github.com/yeoman/generator-backbone" target="_blank">Backbone</a>, <a href="https://github.com/yeoman/generator-angular" target="_blank">AngularJS</a>, etc... that you can install and get your project underway. You can view a list of <a href="https://github.com/yeoman" target="_blank">more generators</a> from the Yeoman GitHub page.

For example in the following screenshots I first create a new Backbone app and then immediately create a new <code>bird</code> model.

<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-WADbKLpIFUA/UWLSpw7ya6I/AAAAAAAAZ4w/QrqLbXZ8AD8/s1600/yo-backbone-app.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="640" src="http://2.bp.blogspot.com/-WADbKLpIFUA/UWLSpw7ya6I/AAAAAAAAZ4w/QrqLbXZ8AD8/s640/yo-backbone-app.png" width="606" /></a></div>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-RO_QnEkhVnw/UWLS_Y-HNBI/AAAAAAAAZ44/I7jZC_SJGZA/s1600/yo-backbone-model.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="80" src="http://1.bp.blogspot.com/-RO_QnEkhVnw/UWLS_Y-HNBI/AAAAAAAAZ44/I7jZC_SJGZA/s640/yo-backbone-model.png" width="640" /></a></div>


<blockquote>
Yeoman is currently 1.0 beta and the website says there are some issues with Windows. I've been able to use it to some extend, but I'm sure there are some features that aren't yet supported, but the plan is to have it fully supported.</blockquote>

<h2>
Attack!</h2>

The following is a simple Angry Birds clone using <a href="http://incompl.github.com/boxbox/">boxbox</a>, a framework for the <a href="https://code.google.com/p/box2dweb/">box2dweb</a> JavaScript physics library, written by <a href="http://bocoup.com/">Bocoup</a>'s <a href="http://twitter.com/_gsmith">Greg Smith</a>.

<blockquote>
Press the <code>space bar</code> to launch the Mighty Eagle Bird and you can also use the arrow keys.</blockquote>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://jsfiddle.net/GWDDv/show" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://3.bp.blogspot.com/-KQKPPj6GV_I/UWEKCNFskjI/AAAAAAAAZ3A/eufuyrkvR2I/s1600/eagle-game.png" /></a></div>

<h3>
Conclusion</h3>

Embracing Grunt, Bower, and Yeoman can help automate various parts of your development, testing, and deployment process. The community for these tools are very active and you can find plugins to help cater these to your application's needs. 

There is one more front-end architecture technique that has been stolen by the pigs. Tune in next time as the next Angry Bird takes its revenge! Dun, dun, daaaaaaa!