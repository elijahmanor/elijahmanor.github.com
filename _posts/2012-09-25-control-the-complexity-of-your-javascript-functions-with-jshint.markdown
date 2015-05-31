---
layout: post
title: Control the Complexity of Your JavaScript Functions with JSHint
date: '2012-09-25 05:00:00'
---

<h3>
New JSHint Features</h3>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-cigdGWbzMzA/UFy3-3Y1P8I/AAAAAAAATQ0/hQRl9_6SN9g/s1600/jshint.png" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" height="200" src="http://3.bp.blogspot.com/-cigdGWbzMzA/UFy3-3Y1P8I/AAAAAAAATQ0/hQRl9_6SN9g/s200/jshint.png" width="200" /></a></div>

Many of you are aware of the JSHint code quality tool that has been around for the past couple of years. As of recently, the following new options that have been added regarding the complexity of a function.

<ul>
<li><code>maxparams</code></li>
<li><code>maxdepth</code></li>
<li><code>maxstatements</code></li>
<li><code>maxcomplexity</code></li>
</ul>

<h3>
Parameters, Depth, and Statements</h3>

By reducing the number of parameters, the number of nesting, and the number of statements in your function you can dramatically increate the readability and modularity of your code.

The following piece of code shows using the <code>maxparams</code>, <code>maxdepth</code>, and <code>maxstatements</code> to warn us of possible issue with our functions.

<script src="https://gist.github.com/3763134.js?file=param-depth-statements.js"></script>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-W1GqYZH3BR8/UFy6CiUNhPI/AAAAAAAATQ8/PsszKHc3zfI/s1600/params-depth-statements.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://2.bp.blogspot.com/-W1GqYZH3BR8/UFy6CiUNhPI/AAAAAAAATQ8/PsszKHc3zfI/s1600/params-depth-statements.png" /></a></div>

JSHint gives an error that too many parameters were used because we limited <code>maxparams</code> to 3 and the code accepted 4 parameters. An error occurred because the depth of logic is too deep because we limited it to a <code>maxdepth</code> of 2. We will also get an error about the number of lines in our function because we limited <code>maxstatements</code> to 5 and we have many more than that.

<h3>
Cyclomatic Complexity</h3>

A less commonly known software metric used to evaluate functions is Cyclomatic Complexity. Like it sounds, it's purpose is to calculate the overall intricacy of a function and to give a score that reflects it's complexity.

<blockquote>
"The cyclomatic complexity of a section of source code is the count of the number of linearly independent paths through the source code." --http://en.wikipedia.org/wiki/Cyclomatic_complexity</blockquote>

In addition to the above parameters, depth, and statement metrics you can now track the overall complexity using the <code>maxcomplexity</code> option.

<script src="https://gist.github.com/3763134.js?file=maxcomplexity.js"></script>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-W1wHs8NlNP0/UFzLKWgfZcI/AAAAAAAATRY/FLL29z0XE7A/s1600/cyclomatic-complexity.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://3.bp.blogspot.com/-W1wHs8NlNP0/UFzLKWgfZcI/AAAAAAAATRY/FLL29z0XE7A/s1600/cyclomatic-complexity.png" /></a></div>

As you see above, the above function has more complexity that what we set in <code>maxcomplexity</code>. 

You might be wondering what a reasonable <code>maxcomplexity</code> value is for your project. In the 2nd edition of Steve McConnell's Code Complete he recommends that a cyclomatic complexity from 0 to 5 is typically fine, but you should be aware if the complexity starts to get in the 6 to 10 range. He further explains that anything over a complexity of 10 you should strongly consider refactoring your code.

<h3>
Global Options</h3>

Instead of adding these options to the top of each and every JavaScript file you an instead use a <code>.jshintrc</code> file in your project and JSHint should pick up those settings. This is handy if your project is large and you want some consistent settings across the board.

<script src="https://gist.github.com/3763134.js?file=gistfile1.json"></script>
