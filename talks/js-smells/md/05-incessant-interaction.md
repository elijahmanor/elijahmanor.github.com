# Incessant Interaction Smell

------

## Smelly Code

```
var search = document.querySelector('.Autocomplete');

search.addEventListener('input', function(e) {
  // Make Ajax call for autocomplete

  console.log(e.target.value);
});

```

------

## Why Does This Smell?

------

# TODO: Show why it's bad here...


------

# TODO: So, what to do?

------

## Throttle

```
var search = document.querySelector('.Autocomplete');

search.addEventListener('input', _.throttle(function(e) {
  // Make Ajax call for autocomplete

  console.log(e.target.value);
}, 500));
```

------

## Not Optimal

### What else?

------

## Debounce

```
var search = document.querySelector('.Autocomplete');

search.addEventListener('input', _.debounce(function(e) {
  // Make Ajax call for autocomplete

  console.log(e.target.value);
}, 500));
```

------

## Resources

* CodePen - http://codepen.io/elijahmanor/pen/ByGmaX?editors=101
