# Unconfirmed Code Smell
<!-- .slide: data-state="statusLint statusLint--hard statusRule statusRule--fuzzy statusSkill statusSkill--junior" -->

------

## Smelly Code
<!-- .slide: data-title="Unconfirmed Code" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

<pre class="language-javascript"><code>$(document).ready(function() {
  // wire up event handlers

  // declare all the things

  // etc...
});
</code></pre>

------

# Why Does This Smell?
<!-- .slide: data-title="Unconfirmed Code" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

## Makes it Hard to Unit Test <!-- .element class="fragment" -->

------

## Singleton Module
<!-- .slide: data-title="Unconfirmed Code" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--mid statusSkill--change" data-background="#222" -->

<pre class="language-javascript"><code>(function(myApp) {
  myApp.init = function() {
    // kick off your code
  };

  myApp.handleClick = function() {}; // etc...
}(window.myApp = window.myApp || {}));

// Only include at end of main application...
$(document).ready(function() {
  window.myApp.init();
});
</code></pre>

------

## Constructor Function
<!-- .slide: data-title="Unconfirmed Code" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--mid" data-background="#222" -->

<pre class="language-javascript"><code>var Application = (function() {
  function Application() {
    // kick off your code
  }

  Application.prototype.handleClick = function() {};

  return Application;
}());

// Only include at end of main application...
$(document).ready(function() {
  new Application();
});
</code></pre>
