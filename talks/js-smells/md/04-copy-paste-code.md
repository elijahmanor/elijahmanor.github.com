# Smelly Code

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

# Copy Pasted Code!



------


------

* Solution: Copy/paste detector for programming source code.
https://github.com/kucherenko/jscpd (JavaScript Java CoffeeScript	C++ PHP	C# * Go	Python Ruby	C Less	CSS SCSS	Mixed HTML TypeScript)
* Solution: Detect copy-pasted and structurally similar code https://github.com/danielstjules/jsinspect

------

```js
jscpd --path src/ --files **/*.js --exclude models/**/*.js --languages javascript
```

```javascript
jsinspect -t 30 -i src/ --ignore "src/models/transforms/.*js"
```
