# Switch Statement Smell
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" -->

------

## Smelly Code
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

```
function getArea(shape, options) {
  var area = 0;

  switch (shape) {
    case 'Triangle':
      area = .5 * options.width * options.height;
      break;

    case 'Square':
      area = Math.pow(options.width, 2);
      break;

    case 'Rectangle':
      area = options.width * options.height;
      break;

    default:
      throw new Error('Invalid shape: ' + shape);
  }

  return area;
}

getArea('Triangle',  { width: 100, height: 100 });
getArea('Square',    { width: 100 });
getArea('Rectangle', { width: 100, height: 100 });
getArea('Bogus');
```
<!-- .element class="fragment fragment--code" -->

------

# Why Does This Smell?
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

## Violates the "Open/Closed Principle" <!-- .element class="fragment" -->

------

## Open/Closed Principle (OCP)
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

> "...software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification; that is, such an entity can allow its behaviour to be extended without modifying its source code."  --[wikipedia](http://en.wikipedia.org/wiki/Open/closed_principle)

<aside>One of [Uncle Bob's](http://en.wikipedia.org/wiki/Robert_Cecil_Martin) [SOLID Principles](http://en.wikipedia.org/wiki/SOLID_(object-oriented_design)</aside>

------

## Adding a New Shape
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

```
function getArea(shape, options) {
  var area = 0;

  switch (shape) {
    case 'Triangle':
      area = .5 * options.width * options.height;
      break;

    case 'Square':
      area = Math.pow(options.width, 2);
      break;

    case 'Rectangle':
      area = options.width * options.height;
      break;

    // BEGIN: New Shape
    case 'Circle':
      area = Math.PI * Math.pow(options.radius, 2);
      break;
    // END: New Shape

    default:
      throw new Error('Invalid shape: ' + shape);
  }

  return area;
}
```
<!-- .element class="fragment fragment--code" -->

------

# So What!?!
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

## Strategy Design Pattern <!-- .element class="fragment" -->

------

## Strategy Design Pattern
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid statusSkill--change" data-background="#222" -->

```
// triangle.js
(function(shapes) {
  var Triangle = shapes.Triangle = function(options) {
    this.width = options.width;
    this.height = options.height;
  };
  Triangle.prototype.getArea = function() {
    return 0.5 * this.width * this.height;
  };  
}(window.shapes = window.shapes || {}));

/* ... more code ... */

function getArea(shape, options) {
  var Shape = window.shapes[shape], area = 0;

  if (Shape && typeof Shape === 'function') {
    area = new Shape(options).getArea();
  } else {
    throw new Error('Invalid shape: ' + shape);
  }

  return area;
}

getArea('Triangle',  { width: 100, height: 100 });
getArea('Square',    { width: 100 });
getArea('Rectangle', { width: 100, height: 100 });
getArea('Bogus');
```
<!-- .element class="fragment fragment--code" -->

------

## Adding a New Shape
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid" data-background="#222" -->

```
// circle.js
(function(shapes) {
  var Circle = shapes.Circle = function(options) {
    this.radius = options.radius;
  };

  Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
  };

  Circle.prototype.getCircumference = function() {
    return 2 * Math.PI * this.radius;
  };
}(window.shapes = window.shapes || {}));
```

------

# Any Other Smells?
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid" data-background="#222" -->


## Magic Strings <!-- .element class="fragment" -->

------

## Magic Strings
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid" data-background="#222" -->

```
function getArea(shape, options) {
  var area = 0;

  switch (shape) {
    case 'Triangle': // YUCK
      area = .5 * options.width * options.height;
      break;
    // ... more code ...
  }

  return area;
}

        /* YUCK */
getArea('Triangle', { width: 100, height: 100 });
```

------

## Magic Strings Refactor
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid" data-background="#222" -->

### Object Types

```
var shapeType = {
  triangle: 'Triangle',
  // ... more code ...
};

function getArea(shape, options) {
  var area = 0;

  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
    // ... more code ...
  }

  return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });
```

------

## Magic Strings Refactor
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior statusSkill--change" data-background="#222" -->

### `const` & `symbols`

```
const shapeType = {
  triangle: new Symbol(),
  // ... more code ...
};

function getArea(shape, options) {
  var area = 0;

  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
    // ... more code ...
  }

  return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });
```

------

## Magic Strings Refactor
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

### Applied to Strategy Pattern

```
function getArea(shape, options) {
  var Shape = window.shapes[shape], area = 0;

  if (Shape && typeof Shape === 'function') {
    area = new Shape(options).getArea();
  } else {
    throw new Error('Invalid shape: ' + shape);
  }

  return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });
```

Notes:

TODO: Facebook Flow or TypeScript

------

# Tooling!?!
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

## Nope :( <!-- .element class="fragment" -->

------

## `eslint-plugin-smells`
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--custom statusRule--change statusSkill statusSkill--senior" data-background="#222" -->

> ESLint rules for JavaScript Smells http://bit.ly/eslint-plugin-smells

------

## Rules
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--custom statusSkill statusSkill--senior" data-background="#222" -->

* <!-- .element class="fragment" --> `no-switch` - disallow the use of the `switch` statement
* <!-- .element class="fragment" --> `no-complex-switch-case` - disallow use of complex `switch` statements

------

## What about edge cases?
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--custom statusSkill statusSkill--senior" data-background="#222" -->

```
/*eslint no-switch:[0] */

switch (test) { case 'value': break; }
```
<!-- .element class="fragment" -->

```
/*eslint-disable */
switch (test) { case 'value': break; }
/*eslint-enable */
```
<!-- .element class="fragment" -->

```
/*eslint-disable no-switch */
switch (test) { case 'value': break; }
/*eslint-enable no-switch */
```
<!-- .element class="fragment" -->

<pre><code class="javascript" data-trim>
switch (test) { case 'value': break; } // eslint-disable-line
</code></pre><!-- .element class="fragment" -->

<pre><code class="javascript" data-trim>
switch (test) { case 'value': break; } // eslint-disable-line no-switch
</code></pre><!-- .element class="fragment" -->

------

## Resources
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--custom statusSkill statusSkill--senior" data-background="#222" -->

* CodePen - http://codepen.io/elijahmanor/pen/OPazmm
* Addy Osmani's Learning JavaScript Design Patterns eBook - http://addyosmani.com/resources/essentialjsdesignpatterns/book/
* [ESLint](http://eslint.org/)
* [`eslint-plugin-smells`](https://github.com/elijahmanor/eslint-plugin-smells)
* http://www.2ality.com/2015/02/es6-scoping.html
* http://www.2ality.com/2014/12/es6-symbols.html
* http://babeljs.io/docs/learn-es6
