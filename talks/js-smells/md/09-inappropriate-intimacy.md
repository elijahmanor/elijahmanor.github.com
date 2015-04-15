# Inappropriate Intimacy Smell
<!-- .slide: data-state="statusLint--hard statusRules--fuzzy" -->

------

## Smelly Code

```
var ShoppingCart = (function() {
  function ShoppingCart() { this.items = []; }
  ShoppingCart.prototype.addItem = function(item) {
    this.items.push(item);
  };
  return ShoppingCart;
}());

var Product = (function() {
  function Product(name) { this.name = name; }
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

## Tightly Coupled Dependencies <!-- .element class="fragment" -->

------

## So What!?!

1. Dependency Injection <!-- .element class="fragment" -->
2. Message Broker <!-- .element class="fragment" -->

------

## 1. Dependency Injection

```
var ShoppingCart = (function() {
  function ShoppingCart() { this.items = []; }
  ShoppingCart.prototype.addItem = function(item) {
    this.items.push(item);
  };
  return ShoppingCart;
}());

var Product = (function() {
  function Product(name, shoppingCart) {
    this.name = name;
    this.shoppingCart = shoppingCart;
  }
  Product.prototype.addToCart = function() {
    this.shoppingCart.addItem(this);
  };
  return Product;
}());

var shoppingCart = new ShoppingCart();
var product = new Product('Socks', shoppingCart);
product.addToCart();
console.log(shoppingCart.items);
```

------

## 2. Message Broker

```
var channel = postal.channel();

var ShoppingCart = (function(channel) {
  function ShoppingCart() {
    this.items = [];
    channel.subscribe('shoppingcart.add', this.addItem);
  }
  ShoppingCart.prototype.addItem = function(item) {
    this.items.push(item);
  };
  return ShoppingCart;
}(channel));

var Product = (function(channel) {
  function Product(name) { this.name = name; }
  Product.prototype.addToCart = function() {
    channel.publish('shoppingcart.add', this);
  };
  return Product;
}(channel));

var shoppingCart = new ShoppingCart();
var product = new Product('Socks');
product.addToCart();
console.log(shoppingCart.items);
```

------

## Resources

* `postal` - https://github.com/postaljs/postal.js by @ifandelse
