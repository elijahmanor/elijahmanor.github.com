# Copy Paste Code

------

## (a.k.a. OnceAndOnlyOnce, SwitchStatementsSmell)

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
