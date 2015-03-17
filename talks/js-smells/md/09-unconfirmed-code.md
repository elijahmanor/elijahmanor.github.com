# Unconfirmed Code Smell

------

## Smelly Code

```
$(document).ready(function() {
  // wire up event handlers
  // declare all functions/methods
  // etc...
});
```

------

## Why Does This Smell?

------

## Makes it Hard to Unit Test

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

Notes:

(automatically initializing code)

* Solution: Dependency Injection
