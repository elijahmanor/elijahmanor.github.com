---
layout: post
title: JavaScript Code Smells
date: '2015-06-02 05:30:00'
---

<img src="/assets/images/2015/Jun/js-code-smells-cover.png" style="float: left; width: 300px; margin: 0 1em 1em 0; padding: 0;" /> In the past I've given presentations, recorded videos, and written blog posts about fixing common JavaScript and jQuery bugs. This is a good skill to have, but what about working code? Fixing broken code is important, but have you ever gotten into the situation where your code works, but it doesn't feel quite right... maybe even smells?

> "A code smell is a surface indication that usually corresponds to a deeper problem in the system" --[CodeSmell](http://martinfowler.com/bliki/CodeSmell.html) by [Martin Fowler](http://twitter.com/martinfowler)

As we grow as developers we strive to write more maintainable code, but on our journey we often times don't know what that looks like yet.

> Your JavaScript may pass stardard JSHint rules, but that doesn't mean it's legit.

Most developers can smell brittle and fragile code a mile away, but it takes time and training to combat against these smells. Code smells scream to be refactored.

So, I've come up with a new presentation called [JavaScript Code Smells](http://elijahmanor.com/talks/js-smells) to review various common smelly snippets of code and discuss techniques on how we can eliminate and protect against their pungent odors. The points introduced aren't necessarily specific to JavaScript, but are cross-cutting concepts that can apply to other languages as well.

## Video

The following video was recorded this year at [FluentConf](http://fluentconf.com/javascript-html-2015). This is the 30 minute version of the talk. The full talk is 60 minutes, but I don't have a recording of that yet. All the content for the 60 minute version is contained in my [slides](http://elijahmanor.com/talks/js-smells) if you are interested.

<div class="videoWrapper"><iframe width="420" height="315" src="https://www.youtube.com/embed/JVlfj7mQZPo?rel=0" frameborder="0" allowfullscreen></iframe></div>

## Types of Smells

The following are the types of smells that I cover throughout the presentation. The names are a bit odd, but I have a weird compulsion to alliterate at times :)

<div class="flex-container">
  <ul class="flex-item">
    <li>Convoluted Code Smell</li>
    <li>Copy Paste Code Smell</li>
    <li>Switch Statement Smell</li>
    <li>The This Abyss Smell</li>
    <li>Crisp Concatenation Smell</li>
    <li>jQuery Inquiry</li>
  </ul>
  <ul class="flex-item">
    <li>Temperamental Timer Smell</li>
    <li>Repeat Reassign Smell</li>
    <li>Inappropriate Intimacy Smell</li>
    <li>Incessant Interaction Smell</li>
    <li>Anonymous Algorithm Smell</li>
    <li>Unconfirmed Code Smell</li>
    <li>Two-Way Data Binding Smell</li>
  </ul>
</div>

## Slides

You can find the slides from the presentation online at [elijahmanor.com/talks/js-smells](http://elijahmanor.com/talks/js-smells)
