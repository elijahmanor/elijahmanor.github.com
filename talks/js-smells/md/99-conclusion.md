# Questions?

<pre style="font-size: 1.25em; box-shadow: none;">
<a href="http://elijahmanor.com]" class="fragment" style="margin-left: 2em;">http://elijahmanor.com</a>
<a href="http://twitter.com/elijahmanor" class="fragment" style="margin-left: 5.5em;">@elijahmanor</a>
<a href="mailto:elijahmanor@gmail.com" class="fragment" style="position: absolute; left: 6.1em;">elijahmanor@gmail.com</a>
</pre>

<pre style="font-size: 1.25em; box-shadow: none;">
<a href="http://bit.ly/js-smells" class="fragment" style="margin-left: 2em;">http://bit.ly/js-smells</a>
</pre>

### @nomadjs / #nomadjs

------

## Resources

* http://jsbin.com/vahegiqadi/1/edit?js,output
* http://jscomplexity.org/#results
* http://jshint.com/
* http://codepen.io/elijahmanor/pen/33c3b09ed780b463b5ede21c31afb8a7?editors=001

Notes:

More Resources
http://shichuan.github.io/javascript-patterns/
https://github.com/jshint/fixmyjs
http://jslinterrors.com/

Ideas

* Castaway Code (a.k.a UnusedCode, YouDontNeedItAnymore) - JSHint does this out of the box... however, it may not be default. Need to check
* Promise Proliferation - http://taoofcode.net/promise-anti-patterns/ &
https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns#the-deferred-anti-pattern
* Problem: $paghetti Code, Solution:
* Passing data all way down (), Solution:
* Problem: add/remove code

```
if (flag) {  
  node.addClass('someClass');
} else {
  node.removeClass('someClass');
}
```

```
node.toggleClass('someClass', flag);
```

```
test && doThis();
```

http://pouchdb.com/2015/03/05/taming-the-async-beast-with-es7.html

# Tips, Tricks, & Techniques

# ESLint Custom Rules

# SrcByLine

<pre><code data-trim data-lang="javascript" data-srcbyline="js/intro.js?1-4;10;19-20;31-33"></code></pre>

<pre><code data-trim contenteditable>console.log('code');</code></pre>
