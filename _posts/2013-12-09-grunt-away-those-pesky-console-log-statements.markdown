---
layout: post
title: Ways to Remove Those Pesky console.log Statements
date: '2013-12-09 18:00:00'
---

## The Problem

Have you ever published your code only to find pesky `console.log` statements littering your web application? These can be problematic for several reasons...

* It is embarassing to have logs in the console
* It can slow down the page's performance
* It causes bugs in IE8/9 when the devtools are not open

So then, what are some ways you can protect yourself from all those logs?

###1: Manual Removal

The lowest tech solution is to go through your code-base and manually remove all instances of `console` statements. This includes variations such as `console.log`, `console.dir`, `console.group`, etc... 

####Pros

* The `console` statements are completely removed from the code base and are not slowing down the system or increasing code size.

####Cons

* Manually removing these statements can be laborious and annoying
* You may want to leave some `console` statements to help track down issues during development

###2: JSLint/JSHint/ESLint

This doesn't really remove `console` statements from your code, but by using a linting tool it can help you identify where they are and possibly stop your build process.

[JSLint](http://jslint.com)/[JSHint](http://jshint.com) have a `devel` option that you can turn on and off. The intent of `devel` is to define globals (`alert`, `console`, etc) and allow you to use those during development. The idea is to turn off this setting when building to production to pinpoint areas of concern.

If you use [ESLint](https://github.com/nzakas/eslint), the `no-console` has the same effect. It will disallow the use of `console`.

####Pros

* It will enable you to isolate where your `console` statements are in your codebase
* You can change this JSLint/JSHint/ESLint option between your development and production build process

####Cons

* There is still a manual process of removing the `console` statements

###3: Monkey Patching `console`

The following code snippet is a console monkey patch from the [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/master/js/plugins.js).

This code overrides the native `console` object with `noop` methods (functions that don't do anything). If `console` doesn't exist then a mock version is created.  

<script src="https://gist.github.com/elijahmanor/7884984.js?file=console-monkey-patch.js"></script>

####Pros

* Monkey Patching is very easy to implement and takes minimal time to implement

####Cons

* The `console` statements are still present in the code causing slower processing and increasing overall file-size

###4: Using a Library 

Accidentally leaving extra `console` statements isn't a new problem. It's been an front-end issue for quite some time. Because of this, there have been sever JavaScript libraries to help assist with the issue.

Ben Alman ([@cowboy](http://twitter.com/cowboy)) developed the [JavaScript Debug](http://benalman.com/projects/javascript-debug-console-log/) library in order to build a wrapper around the `console` object. His library provides a cross-browser way to provide logging. It passes through natively supported functions and also falls-back accordingly. 

<script src="https://gist.github.com/elijahmanor/7884984.js?file=javascript-debug.js"></script>

In addition, each method has an associated debug level associated with it. The nice thing about this is that you can control how much or little you want to see in your console. For example, if you don't want to see any logging then you can specify a debug level of zero... `debug.setLevel( 0 );`

####Pros

* Provides a nice abstration layer around the `console`, which isn't supported in all browsers
* Enables different levels of debug messages
* Will collect logging results (even if `debug.setLevel( 0 )`), allowing you to open the console and "replay" previous log statements
* You can redirect where the logs are displayed (Firebug Lite, inline logging, etc...) by using `debug.setCallback`

####Cons

* Even if you set debug level zero, the statements still remain in the source code and can clutter and impede performance

###5: Using UglifyJS

You can also remove `console.log` statements by using the [Uglify2](https://github.com/mishoo/UglifyJS2) minifier! I ran across an interesting blog post by John Dewar ([@jstarrdewar](http://twitter.com/jstarrdewar)) entitled [Use UglifyJS To Automatically Strip console.log() From Your Production JavaScript](http://jstarrdewar.com/blog/2013/02/28/use-uglify-to-automatically-strip-debug-messages-from-your-javascript).

The Gist of the technique is that you'd include the statement `if (typeof DEBUG === 'undefined') DEBUG = true;` in your application somewhere and then prepend `DEBUG` to your `console` statements, e.g. `DEBUG && console.log("test");`

When you are in the development `DEBUG` won't be defined and so `DEBUG` will be defined to `true`, therefore, the `console` statements will execute.

<script src="https://gist.github.com/elijahmanor/7884984.js?file=uglify-source-code.js"></script>

However, if you tell Uglify2 to compress and define `DEBUG` to `false` then the minifer will clean up and remove the statements that can not execute.

<script src="https://gist.github.com/elijahmanor/7884984.js?file=uglify-command-line.sh"></script>

####Pros

* You can integrate this as part of your build process
* You can choose to keep some of the console statements by not prepending `DEBUG &&`
* You are only chaning the build output
* The console statements will be completely removed

####Cons

* This technique may not work with all minification tools
* It is a little cumbersome to add the addition `DEBUG &&` check

> NOTE: Since writting this blog post, Mihai Bazon ([@mcbazon](http://twitter.com/mcbazon)) has added a [new option](https://github.com/mishoo/UglifyJS2/commit/dc5f70eab5cf89f1046482e97267030b3bbf2b66) to the Uglify2 minifer (`drop_console`) that will discard calls to `console.*` functions! Thanks Mihai ;)

###6: Using Grunt

If you use Grunt as your JavaScript automation tool, then you are in luck... there is a grunt task to help you manage `console` statements.

Eric Hynds ([@erichynds](http://twitter.com/erichynds])) has created the [grunt-remove-logging](https://github.com/ehynds/grunt-remove-logging) task to remove unwanted `console` statements.

There are several options you can provide the task, such as:

* `replaceWith` - Value to replace logging statement
* `namespace` - Object logging methods are attached to
* `methods` - Array of method names to remove

There are some times when you actually might want some log statements to keep around. In that case you can append your code with `/*RemoveLogging:skip*/` to let `grunt-remove-logging` know that you want to skip (not delete) that log statement.

Here is an example JavaScript snippets with some `console.log` statements littered throughout.

<script src="https://gist.github.com/elijahmanor/7884984.js?file=grunt-console-before.js"></script>

In order to use the `grunt-remove-task`, you'd install it (`npm install grunt-remove-logging --save-dev`) and then include it in your `Gruntfile.js` like the following...

<script src="https://gist.github.com/elijahmanor/7884984.js?file=grunt-remove-logging.js"></script>

And then once you run grunt from the command-line you'll get console-free output like the following...

<script src="https://gist.github.com/elijahmanor/7884984.js?file=grunt-console-after.js"></script>

> Note: If this task doesn't quite fit your needs, there is another Grunt task called [grunt-strip](https://github.com/jsoverson/grunt-strip) written by Jarrod Overson ([@jsoverson](http://twitter.comjsoverson)) that you might find interesting.

####Pros

* You can integrate this as part of your build process
* You can choose to keep some of the console statements if you have a need
* You aren't overriding existing code, but modifying the origional source code, but only the built version
* The empty removed statements will get cleaned up by the minification process (Uglify2, etc)

####Cons

* This relies on using Grunt as your automation tool

## The Solution

If you are anything like me, you've accidentally left a `console.log` statement in your production code. By using one of the above techiques hopefully you can reduce keep this from happening again.

If you know of any other techniques, please feel free to add a comment and share. Thanks!



