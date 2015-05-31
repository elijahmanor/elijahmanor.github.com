# Anonymous Algorithm Smell
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" -->

------

## Smelly Code
<!-- .slide: data-title="Anonymous Algorithm" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

<pre class="language-javascript"><code>var search = document.querySelector('.Autocomplete');

search.addEventListener('input', _.debounce(function(e) {
  // Make Ajax call for autocomplete

  console.log(e.target.value);
}, 500));
</code></pre>

------

# Why Does This Smell?
<!-- .slide: data-title="Anonymous Algorithm" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

## Anonymous Functions <!-- .element class="fragment" -->

------

## Reasons to Name Functions
<!-- .slide: data-title="Anonymous Algorithm" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

1. <!-- .element class="fragment" --> Stack Trace
2. <!-- .element class="fragment" --> Dereferencing
3. <!-- .element class="fragment" --> Code Reuse

------

## 1. Stack Trace
<!-- .slide: data-title="Anonymous Algorithm" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

### Where is it?

<pre class="language-javascript clean"><code>var search = document.querySelector('.Autocomplete');

search.addEventListener('input', function(e) {
  console.log(e.target.value);
});
</code></pre>

![](./img/06-1-a.png)

------

## 1. Stack Trace
<!-- .slide: data-title="Anonymous Algorithm" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

### There it is!

<pre class="language-javascript clean"><code>var search = document.querySelector('.Autocomplete');

search.addEventListener('input', function(e) {
  console.log(e.target.value);
});
</code></pre>

![](./img/06-1-b.png)

------

## 1. Stack Trace
<!-- .slide: data-title="Anonymous Algorithm" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

### After

<pre class="language-javascript clean"><code>var search = document.querySelector('.Autocomplete');

search.addEventListener('input', function matches(e) {
  console.log(e.target.value);
});
</code></pre>

![](./img/06-1-c.png)

------

## 1. Stack Trace
<!-- .slide: data-title="Anonymous Algorithm" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

### `debounce`

<pre class="language-javascript clean"><code>var search = document.querySelector('.Autocomplete');

search.addEventListener('input', _.debounce(function matches(e) {
  console.log(e.target.value);
}, 500));
</code></pre>

![](./img/06-1-d.png)

------

## 1. Stack Trace
<!-- .slide: data-title="Anonymous Algorithm" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

### `debounce` (Heavy Bottom Up)

<pre class="language-javascript clean"><code>var search = document.querySelector('.Autocomplete');

search.addEventListener('input', _.debounce(function matches(e) {
  console.log(e.target.value);
}, 500));
</code></pre>

![](./img/06-1-e.png)

------

## 2. Dereferencing
<!-- .slide: data-title="Anonymous Algorithm" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

One-time Event Handler

<pre class="language-javascript"><code>document.querySelector('button')
  .addEventListener('click', function handler() {
  	alert('Ka-boom!');
    this.removeEventListener('click', handler);
  });
</code></pre>

<iframe height='168' scrolling='no' src='//codepen.io/elijahmanor/embed/PwxBxP/?height=168'
data-online="//codepen.io/elijahmanor/embed/PwxBxP/?height=168"
data-offline="./codepen/codepen_anonymous_algorithm/index.html?height=168"
frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/PwxBxP/'>PwxBxP</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

------

## 3. Code Reuse
<!-- .slide: data-title="Anonymous Algorithm" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

<pre class="language-javascript"><code>var kaboom = function() { alert('Ka-boom'); };

document.querySelector('button').addEventListener('click', kaboom);

document.querySelector('#egg').addEventListener('mouseenter', kaboom);
</code></pre>

------

## Resource
<!-- .slide: data-title="Anonymous Algorithm" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

* [Chrome DevTools](https://developer.chrome.com/devtools)
