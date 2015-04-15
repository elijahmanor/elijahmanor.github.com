# Unconfirmed Code Smell
<!-- .slide: data-state="statusLint--hard statusRules--none" -->

------

## Smelly Code

```
$(document).ready(function() {
  // wire up event handlers

  // declare all the things

  // etc...
});
```

------

## Why Does This Smell?

## Makes it Hard to Unit Test <!-- .element class="fragment" -->

------

## Singleton Module

```
(function(myApp) {
  myApp.init = function() {
    // kick off your code
  };

  myApp.handleClick = function() {}; // etc...
}(window.myApp = window.myApp || {}));

// Only include at end of main application...
$(document).ready(function() {
  window.myApp.init();
});
```

------

## Constructor Function

```
var Application = (function() {
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
```
