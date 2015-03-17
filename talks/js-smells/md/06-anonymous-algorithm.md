# Anonymous Algorithm Smell

------

## Smelly Code

```
var search = document.querySelector('.Autocomplete');

search.addEventListener('input', _.debounce(function(e) {
  // Make Ajax call for autocomplete

  console.log(e.target.value);
}, 500));
```

------

## Why Does This Smell?

------

## Reasons to Name Your Functions

1. Stack Trace
2. Dereferencing
3. Code Reuse

------

## 1. Stack Trace

### Where is it?

```
var search = document.querySelector('.Autocomplete');

search.addEventListener('input', function(e) {
  console.log(e.target.value);
});
```

![](./img/06-1-a.png)

------

## 1. Stack Trace

### There it is!

```
var search = document.querySelector('.Autocomplete');

search.addEventListener('input', function(e) {
  console.log(e.target.value);
});
```

![](./img/06-1-b.png)

------

## 1. Stack Trace

### After

```
var search = document.querySelector('.Autocomplete');

search.addEventListener('input', function matches(e) {
  console.log(e.target.value);
});
```

![](./img/06-1-c.png)

------

## 1. Stack Trace

### `debounce`

```
var search = document.querySelector('.Autocomplete');

search.addEventListener('input', _.debounce(function matches(e) {
  console.log(e.target.value);
}, 500));
```

![](./img/06-1-d.png)

------

## 1. Stack Trace

### `debounce` (Heavy Bottom Up)

```
var search = document.querySelector('.Autocomplete');

search.addEventListener('input', _.debounce(function matches(e) {
  console.log(e.target.value);
}, 500));
```

![](./img/06-1-e.png)
