# The This Abyss Smell

------

## Smelly Code

```
function Person() {
  this.teeth = [{ clean: false }, { clean: false }, { clean: false }];
};

Person.prototype.brush = function() {
  var that = this;

  this.teeth.forEach(function(tooth) {
    that.clean(tooth);
  });

  console.log('brushed');
};

Person.prototype.clean = function(tooth) {
  tooth.clean = true;
}

var person = new Person();
person.brush();
console.log(person.teeth);
```

------

## Why Does This Smell?

## `that` or `self` or `selfie` <!-- .element class="fragment" -->

------

## Alternatives

1) `bind`

```
Person.prototype.brush = function() {
  this.teeth.forEach(function(tooth) {
    this.clean(tooth);
  }.bind(this));

  console.log('brushed');
};
```

------

## Alternatives

2) 2nd parameter of `forEach`

```
arr.forEach(callback[, thisArg])
```

```
Person.prototype.brush = function() {
  this.teeth.forEach(function(tooth) {
    this.clean(tooth);
  }, this);

  console.log('brushed');
};
```

------

## Alternatives

3) ECMAScript 2015 (ES6)

```
Person.prototype.brush = function() {
  this.teeth.forEach(tooth => {
    this.clean(tooth);
    // other stuff here...
  });

  console.log('brushed');
};
```

------

4) Functional Programming

```
Person.prototype.brush = function() {
  this.teeth.forEach(this.clean);

  console.log('brushed');
};
```

------

## Resources

* CodePen - http://codepen.io/elijahmanor/pen/raQpKg?editors=001
