# The This Abyss Smell
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" -->

------

## Smelly Code
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

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

# Why Does This Smell?
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

## <!-- .element class="fragment" --> `that` or `self` or `selfie`

------

## Alternatives
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid statusSkill--change" data-background="#222" -->

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
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid" data-background="#222" -->

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
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior statusSkill--change" data-background="#222" -->

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
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

```
Person.prototype.brush = function() {
  this.teeth.forEach(this.clean);

  console.log('brushed');
};
```

------

# Tooling
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

------

## ESLint
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--custom statusRule--change statusSkill statusSkill--senior" data-background="#222" -->

* http://eslint.org/docs/rules/consistent-this
* `eslint-plugin-smells` - `no-this-assign`

------

## Resources
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--custom statusSkill statusSkill--senior" data-background="#222" -->

* CodePen - http://codepen.io/elijahmanor/pen/raQpKg?editors=001
