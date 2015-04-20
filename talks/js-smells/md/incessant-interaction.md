# Incessant Interaction Smell
<!-- .slide: data-state="statusLint statusLint--hard statusRule statusRule--fuzzy statusSkill statusSkill--junior" -->

------

## Smelly Code
<!-- .slide: data-title="Incessant Interaction" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

```
var search = document.querySelector('.Autocomplete');

search.addEventListener('input', function(e) {
  // Make Ajax call for autocomplete

  console.log(e.target.value);
});

```

------

# Why Does This Smell?
<!-- .slide: data-title="Incessant Interaction" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

------

## Way Too Chatty
<!-- .slide: data-title="Incessant Interaction" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

<iframe height='286' scrolling='no' src='//codepen.io/elijahmanor/embed/LEXBdX/?height=286' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/LEXBdX/'>LEXBdX</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

# So What!?!
<!-- .slide: data-title="Incessant Interaction" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

## Throttle <!-- .element class="fragment" -->

------

## Throttle
<!-- .slide: data-title="Incessant Interaction" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid" statusSkill--change data-background="#222" -->

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

# So What!?!
<!-- .slide: data-title="Incessant Interaction" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid" data-background="#222" -->

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
<!-- .slide: data-title="Incessant Interaction" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid" data-background="#222" -->

* CodePen - http://codepen.io/elijahmanor/pen/ByGmaX
* `lodash` - https://lodash.com/
* `throttle` - https://lodash.com/docs#throttle
* `debounce` - https://lodash.com/docs#debounce