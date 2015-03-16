# The This Abyss

Notes:

items.forEach(function(item) {
  doSomething(item);
});

items.forEach(doSomething);  

var _this = this;  
items.forEach(function(item) {  
    _this.doSomething(item);
});

items.forEach(function(item) {  
    this.doSomething(item);
}, this);

items.forEach(this.doSomething, this);
