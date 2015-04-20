# Inappropriate Intimacy Smell
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" -->

------

## Smelly Code
<!-- .slide: data-title="Inappropriate Intimacy" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

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

# Why Does This Smell?
<!-- .slide: data-title="Inappropriate Intimacy" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

## Tightly Coupled Dependencies <!-- .element class="fragment" -->

------

## So What!?!
<!-- .slide: data-title="Inappropriate Intimacy" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

1. Dependency Injection <!-- .element class="fragment" -->
2. Message Broker <!-- .element class="fragment" -->

------

## 1. Dependency Injection
<!-- .slide: data-title="Inappropriate Intimacy" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

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
<!-- .slide: data-title="Inappropriate Intimacy" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

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

# Tooling
<!-- .slide: data-title="jQuery Inquiry" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--senior" data-background="#222" -->

## Fuzzy <div class="small">(Subjective)</div>

------

## Resources
<!-- .slide: data-title="Inappropriate Intimacy" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

* [`postal`](https://github.com/postaljs/postal.js) by [@ifandelse](http://twitter.com/ifandelse)
