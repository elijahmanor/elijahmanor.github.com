# Copy Paste Code Smell
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

------

## So, we had this...
<!-- .slide: data-title="Copy Paste Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

![](./img/copy-paste-code-box-crop.png) <!-- .element style="height: 550px;" -->

------

## So, we had this...
<!-- .slide: data-title="Copy Paste Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

### `Box.js`
<!-- .slide: data-title="Copy Paste Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

<pre class="language-javascript"><code data-trim>
// ... more code ...

var boxes = document.querySelectorAll('.Box');

[].forEach.call(boxes, function(element, index) {
  element.innerText = "Box: " + index;
  element.style.backgroundColor =
    '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
});

// ... more code ...
</code></pre>

------

## and we wanted this
<!-- .slide: data-title="Copy Paste Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

![](./img/copy-paste-code-circle-crop.png) <!-- .element style="height: 550px;" -->

------

## So, this happened...
<!-- .slide: data-title="Copy Paste Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

### `Circle.js`

<pre class="language-javascript"><code data-trim>
// ... more code ...

var circles = document.querySelectorAll(".Circle");

[].forEach.call(circles, function(element, index) {
  element.innerText = "Circle: " + index;
  element.style.color =
    '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
});

// ... more code ...
</code></pre>

------

# Why Does This Smell?
<!-- .slide: data-title="Copy Paste Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

## Because We Copied And Pasted! <!-- .element class="fragment" -->

------

# Tooling
<!-- .slide: data-title="Copy Paste Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

------

# [`jsinspect`](https://github.com/danielstjules/jsinspect)
<!-- .slide: data-title="Copy Paste Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

Detect copy-pasted and structurally similar code

<pre class="language-bash"><code data-trim>jsinspect</code></pre>

![](./img/jsinspect.png)

------

# [`jscpd`](https://github.com/kucherenko/jscpd)
<!-- .slide: data-title="Copy Paste Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

Copy/paste detector for programming source code (JavaScript, TypeScript, C#, Ruby, CSS, SCSS, HTML, etc...)

<pre class="language-bash"><code data-trim>jscpd -f **/*.js -l 1 -t 30 --languages javascript
</code></pre>

![](./img/jscpd.png) <!-- .element style="height: 350px;" -->

------

# So What!?!
<!-- .slide: data-title="Copy Paste Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

## Refactor <!-- .element class="fragment" -->

------

# Refactor
<!-- .slide: data-title="Copy Paste Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--mid statusSkill--change" -->

Let's pull out the random color portion...

<pre class="language-javascript highlight" data-line="1,6,12"><code data-trim>
let randomColor = () => `#${(Math.random() * 0xFFFFFF << 0).toString(16)};

let boxes = document.querySelectorAll(".Box");
[].forEach.call(boxes, (element, index) => {
  element.innerText = "Box: " + index;
  element.style.backgroundColor = randomColor();
});

let circles = document.querySelectorAll(".Circle");
[].forEach.call(circles, (element, index) => {
  element.innerText = "Circle: " + index;
  element.style.color = randomColor();
});
</code></pre>

------

# Refactor More
<!-- .slide: data-title="Copy Paste Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--mid" -->

Let's pull out the weird `[].forEach.call` portion...

<pre class="language-javascript highlight" data-line="3,5,10"><code data-trim>
let randomColor = () => `#${(Math.random() * 0xFFFFFF << 0).toString(16)};

let $$ = selector => [].slice.call(document.querySelectorAll(selector || '*'));

$$('.Box').forEach((element, index) => {
  element.innerText = "Box: " + index;
  element.style.backgroundColor = randomColor();
});

$$(".Circle").forEach((element, index) => {
  element.innerText = "Circle: " + index;
  element.style.color = randomColor();
});
</code></pre>

------

# Refactor More?
<!-- .slide: data-title="Copy Paste Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--mid" -->

Let's try to go further...

<pre class="language-javascript highlight" data-line="5-10,12,14"><code data-trim>
let randomColor = () => `#${(Math.random() * 0xFFFFFF << 0).toString(16)};

let $$ = selector => [].slice.call(document.querySelectorAll(selector || '*'));

let updateElement = (selector, textPrefix, styleProperty) => {
  $$(selector).forEach((element, index) => {
    element.innerText = textPrefix + ': ' + index;
    element.style[styleProperty] = randomColor();
  });
}

updateElement('.Box', 'Box', 'backgroundColor');

updateElement('.Circle', 'Circle', 'color');
</code></pre>

------

# Resources
<!-- .slide: data-title="Copy Paste Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--mid" -->

* [`jsinspect`](https://github.com/danielstjules)
* [`jscpd`](https://github.com/kucherenko/jscpd)
* [CodePen](http://codepen.io/elijahmanor/pen/myQebo)
