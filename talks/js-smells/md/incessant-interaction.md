# Incessant Interaction Smell
<!-- .slide: data-state="statusLint statusLint--hard statusRule statusRule--fuzzy statusSkill statusSkill--junior" -->

------

## Smelly Code
<!-- .slide: data-title="Incessant Interaction" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

<pre class="language-javascript"><code>var search = document.querySelector('.Autocomplete');

search.addEventListener('input', function(e) {
  // Make Ajax call for autocomplete

  console.log(e.target.value);
});
</code></pre>

------

# Why Does This Smell?
<!-- .slide: data-title="Incessant Interaction" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

------

## Way Too Chatty
<!-- .slide: data-title="Incessant Interaction" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

<!-- <iframe height='286' scrolling='no' src='//codepen.io/elijahmanor/embed/LEXBdX/?height=286' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/LEXBdX/'>LEXBdX</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe> -->
<iframe height='286' scrolling='no' src='./codepen/codepen_incessant_interaction_input/index.html?height=286' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/LEXBdX/'>LEXBdX</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

# So What!?!
<!-- .slide: data-title="Incessant Interaction" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

## Throttle <!-- .element class="fragment" -->

------

## Throttle
<!-- .slide: data-title="Incessant Interaction" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--mid" statusSkill--change data-background="#222" -->

<pre class="language-javascript"><code>var search = document.querySelector('.Autocomplete');

search.addEventListener('input', _.throttle(function(e) {
  // Make Ajax call for autocomplete

  console.log(e.target.value);
}, 500));
</code></pre>

<!-- <iframe height='285' scrolling='no' src='//codepen.io/elijahmanor/embed/azQjGj/?height=285' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/azQjGj/'>azQjGj</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe> -->
<iframe height='285' scrolling='no' src='./codepen/codepen_incessant_interaction_throttle/index.html?height=285' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/azQjGj/'>azQjGj</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

# So What!?!
<!-- .slide: data-title="Incessant Interaction" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--mid" data-background="#222" -->

## Debounce <!-- .element class="fragment" -->

------

## Debounce
<!-- .slide: data-title="Incessant Interaction" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--mid" data-background="#222" -->

<pre class="language-javascript"><code>var search = document.querySelector('.Autocomplete');

search.addEventListener('input', _.debounce(function(e) {
  // Make Ajax call for autocomplete

  console.log(e.target.value);
}, 500));
</code></pre>

<!-- <iframe height='284' scrolling='no' src='//codepen.io/elijahmanor/embed/bNQjje/?height=284' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/bNQjje/'>bNQjje</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe> -->
<iframe height='284' scrolling='no' src='./codepen/codepen_incessant_interaction_debounce/index.html?height=284' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/bNQjje/'>bNQjje</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

## Resources
<!-- .slide: data-title="Incessant Interaction" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--mid" data-background="#222" -->

* [`lodash`](https://lodash.com/)
* [`throttle`](https://lodash.com/docs#throttle)
* [`debounce`](https://lodash.com/docs#debounce)
* [CodePen](http://codepen.io/elijahmanor/pen/ByGmaX)
