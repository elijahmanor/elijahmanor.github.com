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

## Way Too Chatty

<iframe height='286' scrolling='no' src='//codepen.io/elijahmanor/embed/LEXBdX/?height=286' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/LEXBdX/'>LEXBdX</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

## So What!?!

## Throttle <!-- .element class="fragment" -->

------

## Throttle

```
var search = document.querySelector('.Autocomplete');

search.addEventListener('input', _.throttle(function(e) {
  // Make Ajax call for autocomplete

  console.log(e.target.value);
}, 500));
```

<iframe height='285' scrolling='no' src='//codepen.io/elijahmanor/embed/azQjGj/?height=285' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/azQjGj/'>azQjGj</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

## So What!?!

## Debounce <!-- .element class="fragment" -->

------

## Debounce

```
var search = document.querySelector('.Autocomplete');

search.addEventListener('input', _.debounce(function(e) {
  // Make Ajax call for autocomplete

  console.log(e.target.value);
}, 500));
```

<iframe height='284' scrolling='no' src='//codepen.io/elijahmanor/embed/bNQjje/?height=284' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/bNQjje/'>bNQjje</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

## Resources

* CodePen - http://codepen.io/elijahmanor/pen/ByGmaX
