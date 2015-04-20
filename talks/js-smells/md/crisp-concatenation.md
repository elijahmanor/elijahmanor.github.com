# Crisp Concatenation Smell
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" -->

------

## Smelly Code
<!-- .slide: data-title="Crisp Concatenation" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

```
var build = function(id, href) {
  return $( "<div id='tab'><a href='" + href + "' id='"+ id + "'></div>" );
}
```

------

## Why Does This Smell?
<!-- .slide: data-title="Crisp Concatenation" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

------

# Because String
<!-- .slide: data-title="Crisp Concatenation" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="./img/con-cat.jpg" -->

# Con-Cat <!-- .element class="fragment highlight-red" -->

------

## Alternatives
<!-- .slide: data-title="Crisp Concatenation" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid statusSkill--change" data-background="#222" -->

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
<!-- .slide: data-title="Crisp Concatenation" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior statusSkill--change" data-background="#222" -->

2) ECMAScript 2015 (ES6) Template Strings

```
var build = (id, href) =>
  `<div id="tab"><a href="${href}" id="${id}"></div>`;
```

------

## Alternatives
<!-- .slide: data-title="Crisp Concatenation" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

3) ECMAScript 2015 (ES6) Template Strings (Multiline)

```
var build = (id, href) => `<div id="tab">
  <a href="${href}" id="${id}">
</div>`;
```

------

## Alternatives
<!-- .slide: data-title="Crisp Concatenation" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

4) Other micro-libraries or larger libraries/frameworks

* Lowdash or Underscore
* Angular
* React
* Ember
* etc...

------

# Tooling
<!-- .slide: data-title="Crisp Concatenation" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

------

## `eslint-plugin-smells`
<!-- .slide: data-title="Crisp Concatenation" data-state="title statusLint statusLint--easy statusRule statusRule--custom statusRule--change statusSkill statusSkill--senior" data-background="#222" -->

* <!-- .element: class="fragment" --> [`no-complex-string-concat`](http://bit.ly/eslint-plugin-smells)

------

## Resources
<!-- .slide: data-title="Crisp Concatenation" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

* [Tweet Sized JavaScript Templating Engine](http://mir.aculo.us/2011/03/09/little-helpers-a-tweet-sized-javascript-templating-engine/) by @thomasfuchs
* Learn ECMAScript 2015 (ES6) - http://babeljs.io/docs/learn-es6/
