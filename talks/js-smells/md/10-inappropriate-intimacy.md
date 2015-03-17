# Inappropriate Intimacy Smell

------

## Smelly Code

```
var ShoppingCart = (function() {
  function ShoppingCart() {
    this.items = [];
  }
  ShoppingCart.prototype.addItem = function(item) {
    this.items.push(item);
  };
  return ShoppingCart;
}());

var Product = (function() {
  function Product(name) {
    this.name = name;
  }
  Product.prototype.addToCart = function() {
    shoppingCart.addItem(this);
  };
  return Product;
}());

var shoppingCart = new ShoppingCart();
var product = new Product('Socks');
product.addToCart();
console.log(shoppingCart.items)
```

------

## Why Does This Smell?

------

Notes:

## (a class that has dependencies on implementation details of another class)
