# How to Pick Good JavaScript Libraries
### by [@elijahmanor](http://twitter.com/elijahmanor)

Notes: The ideas covered address either a specific focused library (micro-library) or a large framework with lots of bells and whistles. My intent isn't to say "You should use XYZ library", however, it is to describe the things I look for when picking a library (whether large or small) for a project.

Once a library is integrated into your project you create a dependency on it and if it doesn't meet many of the above criteria, then it could end up being a painful relationship in the future. I find myself regularly using a set of rules to "assess" a project before using it.

I also want to discuss the risks if a library doesn't meet one or more of these criteria. For example, if the project hasn't been maintained for a while or if there is only one main contributor, then you as a consumer may need to accept the risk of taking over the project or fixing bugs as they arise in your application. I've seen too many projects where the creator changes passions or gets to busy with other projects. 

![](./img/clap.gif) <!-- .element: class="gif" -->
![](./img/dancing-pirate.gif) <!-- .element: class="gif" -->
![](./img/gun.gif) <!-- .element: class="gif" -->
![](./img/fail.gif) <!-- .element: class="gif" -->
![](./img/power-ranger.gif) <!-- .element: class="gif" -->
![](./img/dancing-shuffle.gif) <!-- .element: class="gif" -->
![](./img/sumo.gif) <!-- .element: class="gif fragment" -->

---

## `me.json`

```
{
  "priorities" : [ "Christian", "Family", "Work" ],
  "work"       : [ "@DaveRamsey", "@PluralSight" ],
  "tech"       : [ "HTML", "CSS", "JavaScript" ],
  "titles"     : [ "MS RD", "MS MVP", "IE userAgent" ]
}
```

------

## It's A Green Mario!
### A.K.A. Luigi

![](./img/luigi.jpg) <!-- .element: style="height: 12em;" -->

---

# Mr. JavaScript

> "Hello, my name is Mr. JavaScript..."

![](./img/startrek-hi.gif) <!-- .element: class="gif" -->

---

# History
### How Did We Get To Where We Are?

------

## Solved Minor Front-End Concerns

![](./img/clap-slow.gif) <!-- .element: class="gif" -->

------

## Unexpected Rise in Popularity

![](./img/dancing-slide-in.gif) <!-- .element: class="gif" -->

------

## In the Spotlight

![](./img/dancing-spotlight.gif) <!-- .element: class="gif" -->

------

## JavaScript Everywhere!

![](./img/love.gif) <!-- .element: class="gif" -->

---

# Emotions 
### The Process We Go Through As Developers

------

## How You See Yourself Using a Library

![](./img/guitar-flames.gif) <!-- .element: class="gif" -->

------

## What You Look Like As You Learn

![](./img/guitar-air.gif) <!-- .element: class="gif" -->

------

## What Often Happens

![](./img/guitar-slam.gif) <!-- .element: class="gif" -->

------

## Put Up Your Defences

![](./img/light-saber.gif) <!-- .element: class="gif" -->

---

# JavaScript Overload

------

## Too Many Choices!

![](./img/overload.gif) <!-- .element: class="gif" -->

------

## Googolplex + 1

```
$ bower search 'angular' | grep -c 'angular'
2652
```

```
$ npm search 'angular' | grep -c 'angular'
1212
```

---

# JavaScript Assessment Criteria (JAC)

------

## JavaScript Assessment Criteria (JAC)

1. Active
2. Documentation <!-- .element: class="fragment" -->
3. Community <!-- .element: class="fragment" -->
4. Credible <!-- .element: class="fragment" -->
5. Extensible <!-- .element: class="fragment" -->
6. Integration <!-- .element: class="fragment" -->
7. Modular  <!-- .element: class="fragment" -->
8. Quality <!-- .element: class="fragment" -->
9. Tests <!-- .element: class="fragment" -->

------

## The 9 Lives of JavaScript
### JavaScript Assessment Criteria

Active, Documentation, Community, Credible, Extensible, Integration, Modular, Quality, Tests

![](./img/9-lives.gif) <!-- .element: class="gif" -->

---

# Active

------

## When was it last updated?

* This week <!-- .element: class="fragment" data-fragment-index="1" -->
* This month <!-- .element: class="fragment" data-fragment-index="2" -->
* This quarter <!-- .element: class="fragment" data-fragment-index="3" -->
* This year!?! <!-- .element: class="fragment" data-fragment-index="4" -->

![](./img/raining.gif) <!-- .element: class="gif fragment" data-fragment-index="4" -->

------

## Are Issues Being Addressed?

------

## Are Pull Requests being Considered?

---

# Documentation
<!-- .slide: data-background="" -->

------

## Initial Impresion 
### Do You Know What It Does?

![](./img/clint.gif) <!-- .element: class="gif fragment" -->

------

## Different Learning Styles

* High Level Abstract <!-- .element: class="fragment" -->
* Code Splunk <!-- .element: class="fragment" -->
* API Dive <!-- .element: class="fragment" -->
* Code Exmpales <!-- .element: class="fragment" -->
* Demo Apps <!-- .element: class="fragment" -->
* Unit Tests <!-- .element: class="fragment" -->
* Videos <!-- .element: class="fragment" -->

------

## Combat Stale Docs
### Autogenerate

*  <!-- .element: class="fragment" --> [JSDoc](http://usejsdoc.org/)
*  <!-- .element: class="fragment" --> [SassDoc](http://sassdoc.com/)

---

# Community

------

## Are Developers Excited!?!

![](./img/excited.gif) <!-- .element: class="gif fragment" -->

------

## GitHub

<span>Contributors</span> <!-- .element: class="fragment" -->
<span>, Commits</span> <!-- .element: class="fragment" -->
<span>, Favorites</span> <!-- .element: class="fragment" -->
<span>, Forks</span> <!-- .element: class="fragment" -->
<span>, Pull Requests (Open & Closed)</span> <!-- .element: class="fragment" -->

![](./img/mind-blown.gif) <!-- .element: class="gif fragment" -->

------

## Stack Overflow
### In the trenches

* Are Quesitons Being Asked? <!-- .element: class="fragment" -->
* Are the Questions Being Answered? <!-- .element: class="fragment" -->
* Are the Questions/Answers Being Voted Up? <!-- .element: class="fragment" -->

------

## Social Media
### Signs of Health

* Is there an Active Buzz on Twitter, Google Plus, etc...? <!-- .element: class="fragment" -->
* Are Developers Blogging about the Library? <!-- .element: class="fragment" -->

---

# Credible

------

## Trusted Author(s)

* Who authored the library? <!-- .element: class="fragment" -->
* What else have they created? <!-- .element: class="fragment" -->

------

## There Should Not Be Only One

![](./img/macbook-surfing.gif) <!-- .element: class="gif" -->

------

## The Stop Sign Principle 

> What happens when the original author is out of the picture?

![](./img/weather-stop-sign.gif) <!-- .element: class="gif fragment" -->

------

## Good Examples

* <!-- .element: class="fragment" --> jQuery: A Team of Passionate JavaScript Developers (example: from John Resig to Dave Methvin)
* <!-- .element: class="fragment" --> Angular: A Team of Developers Backed by Google
* <!-- .element: class="fragment" --> React: A Team of Developers Backed by Facebook/Instagram

---

# Extensible

------

## Everything is Fine...
## Until I need to do `XYZ`

![](./img/fish-in-face.gif) <!-- .element: class="gif fragment" -->

------

## Let Me Try This Hack, or This One, or...

![](./img/soccar.gif) <!-- .element: class="gif fragment" -->

---

# Integration

------

## I'll Just Integrate this JavaScript
## into my Application

![](./img/spit.gif) <!-- .element: class="gif fragment" -->

------

## Punched in the Face by Incompatibility

![](./img/punch-in-face.gif) <!-- .element: class="gif fragment" -->

---

# Modular

------

## All Or Nothing

![](./img/table-flip.gif) <!-- .element: class="gif fragment" -->

------

## Examples of Modularity

* <!-- .element: class="fragment" --> [Angular](https://angularjs.org/)
* <!-- .element: class="fragment" --> [jQuery](http://jquery.com) v1.8+
* <!-- .element: class="fragment" --> [jQuery UI](http://jqueryui.com)
* <!-- .element: class="fragment" --> [Modernizr](http://modernizr.com/)
* <!-- .element: class="fragment" --> [Lo-Dash](https://lodash.com/)

---

# Quality

------

## You Open the Source Code

![](./img/macbook-shut.gif) <!-- .element: class="gif fragment" -->

------

## Shed a Single JavaScript Tear

![](./img/tear-drop.gif) <!-- .element: class="gif fragment" -->

------

## There Has to Be a Better Way
### Static Analysis Tools

------

## JavaScript

* <!-- .element: class="fragment" --> [JSLint/JSHint/ESLint](http://jshint.com)
* <!-- .element: class="fragment" --> [FixMyJS](https://github.com/jshint/fixmyjs) - Automatically fix silly lint errors (example: [http://fixmyjs.com](http://fixmyjs.com)) by [@ goatslacker](http://twitter.com/goatslacker) 
* <!-- .element: class="fragment" --> [Plato](https://github.com/es-analysis/plato) - Visualize JavaScript Complexity by [@jsoverson](http://twitter.com/jsoverson) (example: [jQuery](http://jsoverson.github.io/plato/examples/jquery/))
(jscc) by [@tbusser](http://twitter.com/tbusser)
* <!-- .element: class="fragment" --> [JSCritic](http://jscritic.com/) by [@kangax](http://twitter.com/kangax)
* <!-- .element: class="fragment" --> [JavaScript Code Style Checker](https://github.com/jscs-dev/node-jscs) (jscs) by [@jscs_dev](http://twitter.com/jscs_dev)
* <!-- .element: class="fragment" --> [JS Inspect](https://github.com/danielstjules/jsinspect) - Detect copy-pasted and structurally similar code by [@danielstjules](http://twitter.com/danielstjules)

Notes: [JavaScript Compatibility Checker](http://jscc.info/) 

------

## CSS

* <!-- .element: class="fragment" --> [CSSLint](http://csslint.net/) by [@slicknet](http://twitter.com/slicknet) & [@stubbornella](http://twitter.com/stubbornella)
* <!-- .element: class="fragment" --> [SCSS-Lint](https://github.com/causes/scss-lint)
* <!-- .element: class="fragment" --> [CSS Colorguard](https://github.com/SlexAxton/css-colorguard) - Keep a watchful eye on your css colors by [@SlexAxton](http://twitter.com/SlexAxton)

------

## HTML

* <!-- .element: class="fragment" --> [HTMLHint](http://htmlhint.com/)
* <!-- .element: class="fragment" --> [w3cjs](https://github.com/thomasdavis/w3cjs)

---

# Tests

------

## Looks Like It'll Work, but Nope

![](./img/wheel-barrow.gif) <!-- .element: class="gif" --> 

------

## The Library Is Barely Stable

![](./img/dancing-about-to-fall.gif) <!-- .element: class="gif" --> 

------

## In the End

![](./img/finger-down.gif) <!-- .element: class="gif" --> 

------

## There Has to Be a Better Way
### Testing Tools

------

## Testing Tools

* <!-- .element: class="fragment" --> [QUnit](http://qunitjs.com/)
* <!-- .element: class="fragment" --> [Jasmine](http://jasmine.github.io/2.0/introduction.html)
* <!-- .element: class="fragment" --> [Mocha](http://mochajs.org/)
* <!-- .element: class="fragment" --> [Karma](https://github.com/karma-runner/karma)
* <!-- .element: class="fragment" --> [Jest](http://facebook.github.io/jest/)
* <!-- .element: class="fragment" --> [PhantomJS](http://phantomjs.org/)
* <!-- .element: class="fragment" --> [Sinon](http://sinonjs.org/)
* <!-- .element: class="fragment" --> [Blanket.js](http://blanketjs.org/)
* <!-- .element: class="fragment" --> [Istanbul](http://gotwarlost.github.io/istanbul/)

---

# Questions?

<pre style="font-size: 1.25em; box-shadow: none;">
<a href="http://elijahmanor.com]" class="" style="margin-left: 3em;">http://elijahmanor.com</a>
<a href="http://twitter.com/elijahmanor" class="" style="margin-left: 6.5em;">@elijahmanor</a>
<a href="http://bit.ly/good-js-libs" class="" style="position: absolute; left: 3em;">http://bit.ly/good-js-libs</a>
</pre>

![](./img/trance.gif) <!-- .element: class="gif" -->

Notes: 

* http://www.johnpapa.net/javascript-soup/
* http://www.sencha.com/blog/4-questions-to-ask-before-choosing-a-javascript-framework/#date:14:56