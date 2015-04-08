# Crisp Concatenation Smell

------

## Smelly Code

```
var build = function(id, href) {
  return $( "<div id='tab'><a href='" + href + "' id='"+ id + "'></div>" );
}
```

------

## Why Does This Smell?

------

<!-- .slide: data-background="./img/con-cat.jpg" -->

# Because String

# Con-Cat <!-- .element class="fragment highlight-red" -->

------

## Alternatives

1) [Tweet Sized JavaScript Templating Engine](http://mir.aculo.us/2011/03/09/little-helpers-a-tweet-sized-javascript-templating-engine/) by @thomasfuchs

```
function t(s,d) {
  for (var p in d)
    s = s.replace(new RegExp('{'+p+'}','g'), d[p]);
  return s;
}

var build = function(id, href) {
  var options = {
    id: id
    href: href
  };

  return t('<div id="tab"><a href="{href}" id="{id}"></div>', options);
}
```

------

## Alternatives

2) ECMAScript 2015 (ES6) Template Strings

```
var build = (id, href) =>
  `<div id="tab"><a href="${href}" id="${id}"></div>`;
```

------

## Alternatives

3) ECMAScript 2015 (ES6) Template Strings (Multiline)

```
var build = (id, href) => `<div id="tab">
  <a href="${href}" id="${id}">
</div>`;
```

------

## Alternatives

4) Other micro-libraries or larger libraries/frameworks

* Lowdash or Underscore
* Angular
* React
* Ember
* etc...

------

## Resources

* [Tweet Sized JavaScript Templating Engine](http://mir.aculo.us/2011/03/09/little-helpers-a-tweet-sized-javascript-templating-engine/) by @thomasfuchs
* Learn ECMAScript 2015 (ES6) - http://babeljs.io/docs/learn-es6/
