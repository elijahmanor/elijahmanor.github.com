---
layout: post
title: Building a Custom Version of jQuery
date: '2013-02-11 13:43:00'
---

# Introduction

jQuery does a lot for you by providing an abstract, consistency, and terse API to access the DOM, animations, and Ajax... but do you really need all of that? jQuery comes in at 239k for its raw source, 82k minified, and 71k gzipped. If that is too rich for your blood, then let's take a look how you can make a custom version that suites your needs.

> Before we jump in, it's important that you consider if you are currently minifying/combining your other scripts, compressing your images, and possibly using a CDN. I would recommend considering implementing these first before getting too involved in reducing the size of jQuery. 

## Custom Build of jQuery

Custom Build of jQuery
Building jQuery Master From Source
As of jQuery 1.8 You Can Create Custom Builds

> git clone git://github.com/jquery/jquery.git

> npm install -g grunt-cli bower

> grunt -version && bowser -version

> cd jquery && npm install

> grunt

Custom Build of jQuery
jQuery Modules
ajax (xhr/script/jsonp)
css
deprecated
dimensions
effects
event (alias)
offset
wrap
core/ready
deferred
exports (global/amd)
sizzle
Uses querySelectorAll instead

Custom Build of jQuery
Remove Modules
Master

> grunt custom:-ajax,-css,-deprecated,-dimensions,-effects,-event/alias,-offset,-wrap

Version 2.0.3

> git checkout tags/2.0.3
> npm install
> grunt
> grunt custom:-ajax,-css,-deprecated,-dimensions,-effects,-event-alias,-offset,-wrap,-sizzle

http://projects.jga.me/jquery-builder/

https://github.com/jgallen23/jquery-builder
npm install jquery-builder
jQuery Builder 0.2.0
Usage: node ./bin/builder.js

Options:
  -e, --exclude   Modules to exclude [module,module]  [string]
  -m, --minify    Minify output                       [boolean]
  -l, --ls        List available modules              [boolean]
  -v, --version   Version of jQuery                   [string]  [default: "1.9.1"]
  -s, --versions  List available versions
Example

jquery-builder --exclude ajax,css -m > jquery.min.js

# Conclusion