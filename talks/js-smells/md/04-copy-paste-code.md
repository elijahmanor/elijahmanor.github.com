# So, we had this...

![](./img/copy-paste-code-box-crop.png) <!-- .element style="height: 550px;" -->

------

## `Box.js`

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

# and we wanted this

![](./img/copy-paste-code-circle-crop.png) <!-- .element style="height: 550px;" -->

------

# So, this happened...

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

# Smelly Code

# Copy Pasted Code!

------

# Tooling

------

# [`jsinspect`](https://github.com/danielstjules/jsinspect)

Detect copy-pasted and structurally similar code

<pre><code data-trim data-lang="shell">
jsinspect
</code></pre>

![](./img/jsinspect.png)

------

# [`jscpd`](https://github.com/kucherenko/jscpd)

Copy/paste detector for programming source code (JavaScript, TypeScript, C#, Ruby, CSS, SCSS, HTML, etc...)

<pre><code data-trim data-lang="shell">
jscpd -f **/*.js -l 1 -t 30 --languages javascript
</code></pre>

![](./img/jscpd.png) <!-- .element style="height: 350px;" -->

------

# So What!?!

## Refactor <!-- .element class="fragment" -->

------

# Refactor

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

* CodePen - http://codepen.io/elijahmanor/pen/myQebo
* `jsinspect` - https://github.com/danielstjules
* `jscpd` - https://github.com/kucherenko/jscpd
