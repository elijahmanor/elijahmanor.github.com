# Switch Statement Smell

------

## Smelly Code

```
function getArea1(shape, options) {
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
  }

  return area;
}

console.log('getArea1(Triangle): ' + getArea1('Triangle', { width: 100, height: 100 }));
console.log('getArea1(Square): ' +   getArea1('Square', { width: 100 }));
console.log('getArea1(Rectange): ' + getArea1('Rectangle', { width: 100, height: 100 }));

function getArea2(shape, options) {
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
  }

  return area;
}

console.log('getArea2(Triangle): ' + getArea2('Triangle', { width: 100, height: 100 }));
console.log('getArea2(Square): ' +   getArea2('Square', { width: 100 }));
console.log('getArea2(Rectange): ' + getArea2('Rectangle', { width: 100, height: 100 }));
console.log('getArea2(Circle): ' +   getArea2('Circle', { radius: 100 }));

(function(shapes) {
  var Triangle = shapes.Triangle = function(options) {
    this.width = options.width;
    this.height = options.height;
  };

  Triangle.prototype.getArea = function() {
    return 0.5 * this.width * this.height;
  };  
}(window.shapes = window.shapes || {}));

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

function getArea3(shape, options) {
  var area = 0;
  var Shape = window.shapes[shape];

  if (Shape && typeof Shape === 'function') {
    area = new Shape(options).getArea();
	} else {
  	throw new Error('Invalid shape: ' + shape);
  }

	return area;
}

console.log('getArea3(Triangle): ' + getArea3('Triangle', { width: 100, height: 100 }));
console.log('getArea3(Square): ' +   getArea3('Square', { width: 100 }));
console.log('getArea3(Rectange): ' + getArea3('Rectangle', { width: 100, height: 100 }));
console.log('getArea3(Circle): ' +   getArea3('Circle', { radius: 100 }));
console.log('getArea3(Bogus): ' +   getArea3('Bogus'));


```

------

## Why Does This Smell?

------

# Resource

* CodePen - http://codepen.io/elijahmanor/pen/OPazmm?editors=001
