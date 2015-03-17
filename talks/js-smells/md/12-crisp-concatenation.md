# Crisp Concatenation Smell

------

## Smelly Code

```
var build = function(id, href) {
  return $( "<div id='tab'><a href='" + href + "' id='"+ id + "'></div>" );
}
```

```
@thomasfuchs
// http://mir.aculo.us/2011/03/09/little-helpers-a-tweet-sized-javascript-templating-engine/
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

```
var build = (id, href) => `<div id="tab"><a href="${href}" id="${id}"></div>`;
```


------

## Why Does This Smell?

------

Notes:

## Think of a better name...
