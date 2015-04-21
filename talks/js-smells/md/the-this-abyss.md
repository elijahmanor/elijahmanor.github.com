# The This Abyss Smell
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" -->

------

## Smelly Code
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

<pre class="language-javascript fragment fragment--code"><code data-trim>function Person() {
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
</code></pre>

------

# Why Does This Smell?
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

## <!-- .element class="fragment" --> `that` or `self` or `selfie`

------

## Smelly Code
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

<pre class="language-javascript fragment--code fragment visible current-fragment highlight" data-line="6,9"><code data-trim>function Person() {
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
</code></pre>

------

## Alternatives
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid statusSkill--change" data-background="#222" -->

1) `bind`

<pre class="language-javascript highlight" data-line="4"><code>Person.prototype.brush = function() {
  this.teeth.forEach(function(tooth) {
    this.clean(tooth);
  }.bind(this));

  console.log('brushed');
};
</code></pre>

------

## Alternatives
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid" data-background="#222" -->

2) 2nd parameter of `forEach`

<pre class="language-javascript highlight" data-line="4"><code>Person.prototype.brush = function() {
  this.teeth.forEach(function(tooth) {
    this.clean(tooth);
  }, this);

  console.log('brushed');
};
</code></pre>

------

## Alternatives
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior statusSkill--change" data-background="#222" -->

3) ECMAScript 2015 (ES6)

<pre class="language-javascript highlight" data-line="2-4"><code>Person.prototype.brush = function() {
  this.teeth.forEach(tooth => {
    this.clean(tooth);
  });

  console.log('brushed');
};
</code></pre>

------

4a) Functional Programming
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

<pre class="language-javascript highlight" data-line="2"><code>Person.prototype.brush = function() {
  this.teeth.forEach(this.clean);

  console.log('brushed');
};
</code></pre>

------

4b) Functional Programming
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

<pre class="language-javascript highlight" data-line="2"><code>Person.prototype.brush = function() {
  this.teeth.forEach(this.clean.bind(this));

  console.log('brushed');
};
</code></pre>

------

# Tooling
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

------

## ESLint
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--custom statusRule--change statusSkill statusSkill--senior" data-background="#222" -->

* [`no-this-assign`](https://github.com/elijahmanor/eslint-plugin-smells) <div class="small">(eslint-plugin-smells)</div>
* [`consistent-this`](http://eslint.org/docs/rules/consistent-this)
* [`no-extra-bind`](http://eslint.org/docs/rules/no-extra-bind)

------

## Resources
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--custom statusSkill statusSkill--senior" data-background="#222" -->

* [CodePen](http://codepen.io/elijahmanor/pen/raQpKg?editors=001)
