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

------

```
Person.prototype.brush = function() {
  this.teeth.forEach(function(tooth) {
    this.clean(tooth);
  }, this);
  console.log('brushed');
};
```

```
Person.prototype.brush = function() {
  this.teeth.forEach(this.clean);
  console.log('brushed');
};
```

------

## Resources

* CodePen - http://codepen.io/elijahmanor/pen/raQpKg?editors=001
