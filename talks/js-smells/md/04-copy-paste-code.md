# So, we wanted this...

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

# Then this...

![](./img/copy-paste-code-circle-crop.png) <!-- .element style="height: 550px;" -->

------

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


------

# Resources

* CodePen - http://codepen.io/elijahmanor/pen/myQebo
* `jsinspect` - https://github.com/danielstjules
* `jscpd` - https://github.com/kucherenko/jscpd
