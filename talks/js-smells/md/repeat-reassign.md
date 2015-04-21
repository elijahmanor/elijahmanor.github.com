# Repeat Reassign Smell
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" -->

------

## Smelly Code
<!-- .slide: data-title="Repeat Reassign" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

<pre class="language-javascript"><code>data = this.appendExactTargetData(data);
data = this.appendSubmissionData(data);
data = this.appendNonLeadServiceInputs(data);
data = this.pruneObject(data);
</code></pre>

------

# Why Does This Smell?
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

## <!-- .element class="fragment" --> A Bit Repetitive

------

## Alternatives
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid statusSkill--change" data-background="#222" -->

1) Nested Function Calls

<pre class="language-javascript"><code>data = this.pruneObject(
  this.appendAdditionalInputs(
    this.appendSubmissionData(
      this.appendAnalyticsData(data)
    )
  )
);
</code></pre>

------

## Alternatives
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid statusSkill--change" data-background="#222" -->

2) `forEach`

<pre class="language-javascript"><code>var funcs = [
  this.appendAnalyticsData,
  this.appendSubmissionData,
  this.appendAdditionalInputs,
  this.pruneObject
];

funcs.forEach(function(func) {
  data = func(data);
});
</code></pre>

------

## Alternatives
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid statusSkill--change" data-background="#222" -->

3) `reduce`

<pre class="language-javascript"><code>var funcs = [
  this.appendAnalyticsData,
  this.appendSubmissionData,
  this.appendAdditionalInputs,
  this.pruneObject
];

data = funcs.reduce(function(memo, func) {
  return func(memo);
}, data);
</code></pre>

------

## Alternatives
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid statusSkill--change" data-background="#222" -->

4) [`flow`](https://lodash.com/docs#flow)

<pre class="language-javascript"><code>data = _.flow(
  this.appendAnalyticsData,
  this.appendSubmissionData,
  this.appendAdditionalInputs,
  this.pruneObject
)(data);
</code></pre>

------

# Tooling
<!-- .slide: data-title="Crisp Concatenation" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

------

## `eslint-plugin-smells`
<!-- .slide: data-title="Crisp Concatenation" data-state="title statusLint statusLint--easy statusRule statusRule--custom statusRule--change statusSkill statusSkill--senior" data-background="#222" -->

* <!-- .element: class="fragment" --> [`no-reassign`](http://bit.ly/eslint-plugin-smells)

------

## Resources
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--custom statusSkill statusSkill--senior" data-background="#222" -->

* [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
* [_.flow](https://lodash.com/docs#flow)
