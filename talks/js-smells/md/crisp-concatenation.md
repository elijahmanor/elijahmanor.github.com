# Crisp Concatenation Smell
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" -->

------

## Smelly Code
<!-- .slide: data-title="Crisp Concat" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

<pre class="language-javascript"><code>var build = function(id, href, text) {
  return $( "&lt;div id='tab'&gt;&lt;a href='" + href + "' id='"+ id + "'&gt;" + text + "&lt;/a&gt;&lt;/div&gt;" );
}
</code></pre>

------

## Why Does This Smell?
<!-- .slide: data-title="Crisp Concat" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

------

# Because String
<!-- .slide: data-title="Crisp Concat" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="./img/con-cat.jpg" -->

# Con-Cat <!-- .element class="fragment highlight-red" -->

------

## Alternatives
<!-- .slide: data-title="Crisp Concat" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid statusSkill--change" data-background="#222" -->

1) [Tweet Sized JavaScript Templating Engine](http://mir.aculo.us/2011/03/09/little-helpers-a-tweet-sized-javascript-templating-engine/) by @thomasfuchs

<pre class="language-javascript"><code>function t(s, d) {
  for (var p in d)
    s = s.replace(new RegExp('{' + p + '}', 'g'), d[p]);
  return s;
}

var build = function(id, href, text) {
  var options = {
    id: id,
    href: href,
    text: text
  };

  return t('&lt;div id="tab"&gt;&lt;a href="{href}" id="{id}"&gt;{text}&lt;/&gt;&lt;/div&gt;', options);
}
</code></pre>

------

## Alternatives
<!-- .slide: data-title="Crisp Concat" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior statusSkill--change" data-background="#222" -->

2) ECMAScript 2015 (ES6) Template Strings

<pre class="language-javascript"><code>var build = (id, href, text) =>
  `&lt;div id="tab"&gt;&lt;a href="${href}" id="${id}"&gt;${text}&lt;/a&gt;&lt;/div&gt;`;
</code></pre>

------

## Alternatives
<!-- .slide: data-title="Crisp Concat" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

3) ECMAScript 2015 (ES6) Template Strings (Multiline)

<pre class="language-javascript"><code>var build = (id, href, text) => `&lt;div id="tab"&gt;
  &lt;a href="${href}" id="${id}"&gt;${text}&lt;/a&gt;
&lt;/div&gt;`;
</code></pre>

------

## Alternatives
<!-- .slide: data-title="Crisp Concat" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

4a) ECMAScript 2015 (ES6) Tagged Template Strings to Protect Against XSS (Cross Site Scripting)

<pre class="language-javascript"><code>
var build = (id, href, text) => SanitizeHTML`&lt;div id="tab"&gt;
  &lt;a href="${href}" id="${id}"&gt;${text}&lt;/a&gt;
&lt;/div&gt;`;
</code></pre>

------

## Alternatives
<!-- .slide: data-title="Crisp Concat" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

4b) ECMAScript 2015 (ES6) Tagged Template Strings

<pre class="language-javascript"><code>
function SanitizeHTML(literals, ...values) {
  let string = '';

  values.forEach((value, i) => {
    value = String(value);
    string += literals[i];
    string += value.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  });
  string += literals[literals.length - 1];

  return string;
}
</code></pre>

------

## Alternatives
<!-- .slide: data-title="Crisp Concat" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

4) Other micro-libraries or larger libraries/frameworks

* Lowdash or Underscore
* Angular
* React
* Ember
* etc...

------

# Tooling
<!-- .slide: data-title="Crisp Concat" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

------

## `eslint-plugin-smells`
<!-- .slide: data-title="Crisp Concat" data-state="title statusLint statusLint--easy statusRule statusRule--custom statusRule--change statusSkill statusSkill--senior" data-background="#222" -->

* <!-- .element: class="fragment" --> [`no-complex-string-concat`](http://bit.ly/eslint-plugin-smells)

------

## Resources
<!-- .slide: data-title="Crisp Concat" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

* [Tweet Sized JavaScript Templating Engine](http://mir.aculo.us/2011/03/09/little-helpers-a-tweet-sized-javascript-templating-engine/) by @thomasfuchs
* Learn ECMAScript 2015 (ES6) - http://babeljs.io/docs/learn-es6/
