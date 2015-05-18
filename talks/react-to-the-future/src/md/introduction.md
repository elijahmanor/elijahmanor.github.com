<!--
{
  "id": "Introduction"
}
-->

<div class="container">
  <div class="bttf">
    <div class="under">
      <span id="topline1">REACT&lt;</span><br>
      <span id="bottomline1">&amp;future </span>
    </div>
    <div class="over">
      <span id="topline2">REACT&lt;</span><br>
      <span id="bottomline2">&amp;future </span>
    </div>
  </div>
</div>

<div id="Introduction-twitter">by <a href="http://twitter.com/elijahmanor">@elijahmanor</a></div>

---

<!--
{
  "className": "Slide--title"
}
-->

# What is React?

---

# What is React?

1. Who Build It?
2. Who Uses It?
3. What Is It?

---

# Is React a Template Library?

heard it said… “React is the V in MVC”
Pete Hunt says, “No”… Quora answer http://www.quora.com/Pete-Hunt/Posts/Facebooks-React-vs-AngularJS-A-Closer-Look

---

# Imperative versus Declarative

---

## Imperative Code

```
$('nav').addClass('').on('mouseenter', function() {})
```

---

## Declarative Code

<pre><code class="language-jsx">
var React = require('react');
</code></pre>

---

# Virtual DOM  & Shadow DOM

* More than Just Performance
* About Abstraction & Simplicity of Mental Model

---

# Large Scale Applications?

React scales better with complexity
Good news is... the main SPA frameworks are influencing each other
Angular 2x & Ember 2x are moving away from 2-way data binding

---

# Is React Similar to Web Components?

No. React is abstracted away from the browser, while Web Components will be a native browser feature
“We’re not going to build React on it because there’s a strong model difference -- imperative in Web Components to declarative in React.  Web Components doesn’t have an idiomatic way to define things like where events go.  —Sebastian * https://docs.google.com/document/d/1QZxArgMwidgCrAbuSikcB2iBxkffH6w0YB0C1qCsuH0/edit

---

# Can React be used with other JavaScript MVC Frameworks? Yes

* http://mono.software/posts/Improving-AngularJS-long-list-rendering-performance-using-ReactJS/
* http://www.williambrownstreet.net/blog/2014/04/faster-angularjs-rendering-angularjs-and-reactjs/
* http://www.thomasboyt.com/2013/12/17/using-reactjs-as-a-backbone-view.html

---

# So, Let's Unpack Some React

---

# JSX

reduce context switch (templates)
designers dont' have issues

---

# React Component

## Angular Directive
Isolate Scoped, Element Restricted, Transcluded Directive
(research this for myself & adjust order as needed)
NOTES FROM RYAN
* yeild a template inside of it (can have children)
* its scope is isolated (doesn't inherit from parents scope). data pass in is only data it knows about
* restricted (its an element, not an attribute)....

---

## It's Just JavaScript

code yourself out of problems
it's just functions... javascript. more convenient
learn once... code anywhere (React Native)

---

# Flux


NOTES:

* https://github.com/voronianski/flux-comparison
* https://github.com/spoike/refluxjs

---

# What about SEO?

---

## Isomorphic React

don't break the web (isometric)

NOTES:

* http://www.smashingmagazine.com/2015/04/21/react-to-the-future-with-isomorphic-apps/

---

# Boilerplates

NOTES:

* https://github.com/iam4x/isomorphic-flux-boilerplate
* https://github.com/newtriks/generator-react-webpack
* https://github.com/randylien/generator-react-gulp-browserify
* https://github.com/newtriks/generator-react-webpack

---

# Resources

* https://github.com/enaqx/awesome-react
* https://www.codementor.io/reactjs/tutorial/react-vs-angularjs
* http://www.funnyant.com/reactjs-what-is-it/
* https://medium.com/@lsqio/switching-from-angular-to-react-js-4716f7c764a4
* https://gist.github.com/makmanalp/9b7f50aa16d21c2f9d37
* https://www.airpair.com/angularjs/posts/angular-vs-react-the-tie-breaker
* http://www.williambrownstreet.net/blog/2014/04/faster-angularjs-rendering-angularjs-and-reactjs/
* http://blog.risingstack.com/from-angularjs-to-react-the-isomorphic-way/
* http://blog.celerity.com/react/flux-from-an-angularjs-perspective
* http://sixrevisions.com/javascript/why-i-ditched-angular-for-react/
* http://ricostacruz.com/cheatsheets/react.html

---

# Presentations

* http://banderson.github.io/reactive-component-ui-presentation/#/12

---

# Primer

* https://github.com/mikechau/react-primer-draft
* http://www.funnyant.com/reactjs-what-is-it/

---

# Slide Decks

* http://eventifier.com/event/rctjs/slides
* https://speakerdeck.com/vjeux/oscon-react-architecture
* http://brianium.github.io/grdevday-react-slides/#/12
* https://github.com/af/react-talk/blob/master/slides.html
* https://www.youtube.com/watch?v=HOpyRiXB5WQ
* http://slidedeck.io/brianium/grdevday-react-slides
* https://github.com/kirjs/react-presentation

---

# React News

* https://github.com/echenley/react-news

---

# Cheat Sheet

* http://ricostacruz.com/cheatsheets/react.html
