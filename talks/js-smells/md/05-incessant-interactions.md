# Smelly Code

```
var search = document.querySelector('.Autocomplete');

search.addEventListener('input', function(e) {
  // Make Ajax call for autocomplete

  console.log(e.target.value);
});

```

------

# JavaScript Smell

## Incessant Interactions

------

# TODO: Show why it's bad here...


------

# TODO: So, what to do?

------

# Throttle

```
var search = document.querySelector('.Autocomplete');

search.addEventListener('input', _.throttle(function(e) {
  // Make Ajax call for autocomplete

  console.log(e.target.value);
}, 500));
```

------

# Not Optimal

## What else?

------

# Debounce

```
var search = document.querySelector('.Autocomplete');

search.addEventListener('input', _.debounce(function(e) {
  // Make Ajax call for autocomplete

  console.log(e.target.value);
}, 500));
```

------

# Resources

* JSBin - http://jsbin.com/cocowodito/1/edit?html,js,console,output
