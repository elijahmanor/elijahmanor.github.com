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

## Anonymous Functions <!-- .element class="fragment" -->

------

## Reasons to Name Functions

1. <!-- .element class="fragment" --> Stack Trace
2. <!-- .element class="fragment" --> Dereferencing
3. <!-- .element class="fragment" --> Code Reuse

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

------

## 2. Dereferencing

```
// One-time Event Handler
document.querySelector('button')
  .addEventListener('click', function handler() {
  	alert('Ka-boom!');
    this.removeEventListener('click', handler);
  });
```

<iframe height='168' scrolling='no' src='//codepen.io/elijahmanor/embed/PwxBxP/?height=168' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/PwxBxP/'>PwxBxP</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

## 3. Code Reuse

```
var kaboom = function() { alert('Ka-boom'); };

document.querySelector('button').addEventListener('click', kaboom);

document.querySelector('#egg').addEventListener('mouseenter', kaboom);
```

------

## Resource

* `lodash` - https://lodash.com/
* `throttle` - https://lodash.com/docs#throttle
* `debounce` - https://lodash.com/docs#debounce
