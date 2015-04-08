# Switch Statement Smell

------

## Smelly Code

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

console.log(getArea('Triangle',  { width: 100, height: 100 }));
console.log(getArea('Square',    { width: 100 }));
console.log(getArea('Rectangle', { width: 100, height: 100 }));
console.log(getArea('Bogus'));
```

------

## Why Does This Smell?

## Violates the "Open/Closed Principle" <!-- .element class="fragment" -->

------

## Open/Closed Principle (OCP)

> "...software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification; that is, such an entity can allow its behaviour to be extended without modifying its source code."  --[wikipedia](http://en.wikipedia.org/wiki/Open/closed_principle)

<aside>One of [Uncle Bob's](http://en.wikipedia.org/wiki/Robert_Cecil_Martin) [SOLID Principles](http://en.wikipedia.org/wiki/SOLID_(object-oriented_design)</aside>

------

## Adding a New Shape

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
    case 'Circle':
      area = Math.PI * Math.pow(options.radius, 2);
      break;
    default:
      throw new Error('Invalid shape: ' + shape);
  }

  return area;
}
```

<!--
console.log(getArea('Triangle',  { width: 100, height: 100 }));
console.log(getArea('Square',    { width: 100 }));
console.log(getArea('Rectangle', { width: 100, height: 100 }));
console.log(getArea('Circle',    { radius: 100 }));
console.log(getArea('Bogus'));
-->

------

## So What!?!

## Strategy Design Pattern <!-- .element class="fragment" -->

------

## Strategy Design Pattern

```
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

console.log(getArea('Triangle',  { width: 100, height: 100 }));
console.log(getArea('Square',    { width: 100 }));
console.log(getArea('Rectangle', { width: 100, height: 100 }));
console.log(getArea('Bogus'));
```

<!--
```
console.log(getArea('Triangle',  { width: 100, height: 100 }));
console.log(getArea('Square',    { width: 100 }));
console.log(getArea('Rectangle', { width: 100, height: 100 }));
console.log(getArea('Circle',    { radius: 100 }));
console.log(getArea('Bogus'));
```
-->


------

## Adding a New Shape

```
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

<!--
(function(shapes) {
	var Square = shapes.Square = function(options) {
    this.width = options.width;
  };

	Square.prototype.getArea = function() {
  	return Math.pow(this.width, 2);
	};
}(window.shapes = window.shapes || {}));

(function(shapes) {
	var Rectangle = shapes.Rectangle = function(options) {
    this.width = options.width;
    this.height = options.height;
  };

	Rectangle.prototype.getArea = function() {
  	return this.width * this.height;
	};
}(window.shapes = window.shapes || {}));
-->

------

# Resource

* CodePen - http://codepen.io/elijahmanor/pen/OPazmm
* Addy Osmani's Learning JavaScript Design Patterns eBook - http://addyosmani.com/resources/essentialjsdesignpatterns/book/
