# Eliminate JavaScript Code Smells

## <!-- .element: style="text-transform: lowercase;" --> by [@elijahmanor](http://twitter.com/elijahmanor)

<h3 data-store="introduction-social" contenteditable></h3>

<div style="font-size: .4em; opacity: 0.5; font-style: italic;">Picture: [Stray Cat](https://flic.kr/p/dQZvyD) / [Jim Bauer](https://www.flickr.com/photos/lens-cap/) / Creative Commons</div>

------

## `me.json`

<div class="Split">
  <div class="Split-column">
    <pre><code class="json">{
  "name": "Elijah Manor",
  "priorities" : [
    "Christian", "Family", "Work"
  ],
  "work" : [
    "@DaveRamsey", "@PluralSight"
  ],
  "tech" : [
    "HTML", "CSS", "JavaScript",
    "React", "jQuery"
  ],
  "titles" : [
    "Microsoft MVP",
    "IE userAgent"
  ]
}</code></pre>
  </div>
  <div class="Split-column">
    <img src="/img/ramsey-solutions.svg" />
    <img src="/img/everydollar.svg" />
  </div>
</div>  

------

# Got Lint?
<!-- .slide: data-background="./img/Douglas_Crockford,_February_2013.jpg" -->

------

<!-- .slide: data-background="./img/Shakespeare.jpg" data-background-color="#222" data-background-size="1000px" data-background-repeat="none" -->

<blockquote class="blockquote--wide">
  <p>"To lint, or not to lint, that is the question--</p>
  <p>Whether 'tis Nobler in the mind to suffer</p>
  <p>The Slings and Arrows of outrageous bugs,</p>
  <p>Or to take Arms against JavaScript's bad parts,</p>
  <p>And by opposing, end them?"</p>
  <p>--William Shakespeare's play Hamlet</p>
</blockquote>

------

<!-- .slide: data-background="./img/descartes.jpg" data-background-color="#222" data-background-size="1000px" data-background-repeat="none" -->

> "I lint, therefore I am" --Descartes

------

## Agenda

* Easy to lint, Common rules <!-- .element class="fragment highlight-red" -->
* Easy to lint, Fresh rules <!-- .element class="fragment highlight-green" -->
* Easy to lint, No rules <!-- .element class="fragment highlight-green" -->
* Hard to lint, Subjective rules <!-- .element class="fragment highlight-green" -->

Notes:

# Eliminate JavaScript Code Smells

## Title

> Eliminate JavaScript Code Smells

## Description (unpublished notes)

> This talk is intended to go beyond basic linting (JSLint/ESLint/JSHint) techniques and dig further into JavaScript anti-pattern code smells. The gist of the session is to identify common code smells and to introduce patterns to assist when refactoring.

## Abstract

> Have you ever written JavaScript that reeked, but you couldn't quite figure out why? Or have you written code and immediately knew that it wasn't good, but didn't know a better way?

> Your JavaScript may pass JSHint, but that doesn't mean it's legit.

> "A code smell is a surface indication that usually corresponds to a deeper problem in the system" --Martin Fowler

> Most developers can smell brittle and fragile code a mile away, but it takes time and training to combat against these smells. Code smells scream to be refactored.

> In this session we will discuss various common smelly code snippets and discuss techniques on how we can eliminate and protect against their pungent odors creeping into your codebase.

## Bio

> Elijah Manor is a Christian and a family man. He works at The Lampo Group (Dave Ramsey) as a front-end web developer. He is a Microsoft Regional Director, Microsoft ASP.NET MVP, ASPInsider, IE userAgent, and a Pluralsight author. He enjoys blogging at http://elijahmanor.com and tweeting (@elijahmanor) about the things he learns.
