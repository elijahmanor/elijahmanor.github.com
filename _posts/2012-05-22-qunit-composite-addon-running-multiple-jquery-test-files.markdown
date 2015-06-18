---
layout: post
title: 'QUnit Composite Addon: Running Multiple jQuery Test Files'
date: '2012-05-22 12:44:00'
---

<h3>
 Introduction</h3>

<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-f5ev9AjbDLc/T7uK0MBLKbI/AAAAAAAAQVk/xju-gnr6mfI/s1600/qunit.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="200" src="http://4.bp.blogspot.com/-f5ev9AjbDLc/T7uK0MBLKbI/AAAAAAAAQVk/xju-gnr6mfI/s200/qunit.png" width="198" /></a></div>
When you start Unit Testing your application with QUnit you'll notice that you'll have lots of different QUnit files that thoroughly test one feature or component of your system.

Instead of opening each one of those test files and running them separately, wouldn't it be nice if you could launch one file that would run all the tests?

Thankfully, there is a addon for that and it's called the Composite addon!

<blockquote>
Composite is a QUnit addon that, when handed an array of files, will open each of those files inside of an iframe, run the tests and display the results as a single suite of QUnit tests. -- <a href="https://github.com/jquery/qunit-composite">https://github.com/jquery/qunit-composite</a></blockquote>

<h3>
 Setup</h3>

Setting up the Composite addon is pretty easy. All you really need to do is to get the <code>qunit-composite.js</code> and <code>qunit-composite.css</code> files from the <a href="https://github.com/jquery/qunit-composite">Composite Addon Repository</a> in GitHub and then tell QUnit what test files are a part of your Test Suite! See the following for an example setup.

<script src="https://gist.github.com/2642015.js?file=fiddle.html">
</script>
<h3>
 Running Example</h3>

I've taken the Unit Tests from a couple of blog posts I've done recently (<a href="http://elijahmanor.com/filterbydata-jquery-plugin-select-by-html5-data-attr-value/">filterByData jQuery Plugin: Select by HTML5 Data Attr Value</a> &amp; <a href="http://elijahmanor.com/jquery-html5-dataattr-pseudo-selector/">jQuery :dataAttr Pseudo Selector</a>) and have decided to bundle them together using the QUnit Composite Addon.

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="http://jsfiddle.net/bCgV6/9/embedded/result,js,html,css,resources/presentation" style="height: 300px; width: 100%;"></iframe>

<blockquote>
<i>NOTE: Normally your URLs will look much cleaner than these in this example. Since I'm running these tests in jsFiddle the resources are pointed to their jsFiddle hash appended with <code>/show</code> so that they will render only the result.</i></blockquote>

<h3>
 Running from the file:// Protocol</h3>

In order for this to work you must host your files in a web server because the Composite addon relies on making AJAX calls to pull in the other QUnit files. If you are trying to run the test from the <code>file://</code> protocol then you will get an error and the tests will not run. If you want to run the tests from Google Chrome you can enable the <code>allow-file-access-from-files</code> command line parameters.

<ul>
<li>Mac: <code>open /Applications/Google\ Chrome.app --args --allow-file-access-from-files</code></li>
<li>Windows: <code>C:\path\to\chrome.exe --allow-file-access-from-files</code></li>
<li>Linux: <code>/usr/bin/google-chrome --allow-file-access-from-files</code></li>
</ul>

<h3>
 Conclusion</h3>

Using the QUnit Composite addon is very handy to get a quick high level view of the health of your web application. There is some overhead when running all of the tests at one time, but by making it easier to run all of your tests makes the likelihood of you running them much higher than otherwise.
