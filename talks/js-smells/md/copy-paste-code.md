# Copy Paste Code Smell
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

------

# So, we had this...
<!-- .slide: data-title="Copy Paste Code" -->

![](./img/copy-paste-code-box-crop.png) <!-- .element style="height: 550px;" -->

------

## `Box.js`
<!-- .slide: data-title="Copy Paste Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

```
// ... more code ...

var boxes = document.querySelectorAll('.Box');

[].forEach.call(boxes, function(element, index) {
  element.innerText = "Box: " + index;
  element.style.backgroundColor =
    '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
});

// ... more code ...
```

------
<!-- .slide: data-title="Copy Paste Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

# and we wanted this

![](./img/copy-paste-code-circle-crop.png) <!-- .element style="height: 550px;" -->

------

# So, this happened...
<!-- .slide: data-title="Copy Paste Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

## `Circle.js`

```
// ... more code ...

var circles = document.querySelectorAll(".Circle");

[].forEach.call(circles, function(element, index) {
  element.innerText = "Circle: " + index;
  element.style.color =
    '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
});

// ... more code ...
```

------

# Why Does This Smell?
<!-- .slide: data-title="Copy Paste Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

------

# Tooling
<!-- .slide: data-title="Copy Paste Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

------

# [`jsinspect`](https://github.com/danielstjules/jsinspect)
<!-- .slide: data-title="Copy Paste Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

Detect copy-pasted and structurally similar code

<pre><code data-trim data-lang="shell">
jsinspect
</code></pre>

![](./img/jsinspect.png)

------

# [`jscpd`](https://github.com/kucherenko/jscpd)
<!-- .slide: data-title="Copy Paste Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

Copy/paste detector for programming source code (JavaScript, TypeScript, C#, Ruby, CSS, SCSS, HTML, etc...)

<pre><code data-trim data-lang="shell">
jscpd -f **/*.js -l 1 -t 30 --languages javascript
</code></pre>

![](./img/jscpd.png) <!-- .element style="height: 350px;" -->

------

# So What!?!
<!-- .slide: data-title="Copy Paste Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

## Refactor <!-- .element class="fragment" -->

------

# Refactor
<!-- .slide: data-title="Copy Paste Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

Let's pull out the random color portion...

```
function randomColor() {
  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

var boxes = document.querySelectorAll(".Box");

[].forEach.call(boxes, function(element, index) {
  element.innerText = "Box: " + index;
  element.style.backgroundColor = randomColor();
});

var circles = document.querySelectorAll(".Circle");

[].forEach.call(circles, function(element, index) {
  element.innerText = "Circle: " + index;
  element.style.color = randomColor();
});
```

------

# Refactor More
<!-- .slide: data-title="Copy Paste Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

Let's pull out the weird `[].forEach.call` portion...

```
function $$(selector) {
  return [].slice.call(document.querySelectorAll(selector || '*'));
}

function randomColor() {
  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

$$('.Box').forEach(function(element, index) {
  element.innerText = "Box: " + index;
  element.style.backgroundColor = randomColor();
});

$$(".Circle").forEach(function(element, index) {
  element.innerText = "Circle: " + index;
  element.style.color = randomColor();
});
```

------

# Refactor More?
<!-- .slide: data-title="Copy Paste Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

Let's try to go further...

```
function $$(selector) {
  return [].slice.call(document.querySelectorAll(selector || '*'));
}

function randomColor() {
  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

function updateElement(selector, textPrefix, styleProperty) {
  $$(selector).forEach(function(element, index) {
    element.innerText = textPrefix + ': ' + index;
    element.style[styleProperty] = randomColor();
  });
}

updateElement('.Box', 'Box', 'backgroundColor');

updateElement('.Circle', 'Circle', 'color');
```

------

# Resources
<!-- .slide: data-title="Copy Paste Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

* CodePen - http://codepen.io/elijahmanor/pen/myQebo
* `jsinspect` - https://github.com/danielstjules
* `jscpd` - https://github.com/kucherenko/jscpd
