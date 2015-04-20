# Repeat Reassign Smell
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" -->

------

## Smelly Code
<!-- .slide: data-title="Repeat Reassign" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

```
data = this.appendExactTargetData(data);
data = this.appendSubmissionDataOption(data);
data = this.appendNonLeadServiceInputs(data);
data = this.pruneObject(data);
```
<!-- .element class="fragment fragment--code" -->

------

# Why Does This Smell?
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--junior" data-background="#222" -->

## <!-- .element class="fragment" --> A Bit Repetitive

------

## Alternatives
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid statusSkill--change" data-background="#222" -->

1) `nested function calls`

```
data = this.pruneObject(this.appendAdditionalInputs(this.appendSubmissionDataOption(this.appendExactTargetData(data))));
```

------

## Alternatives
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid statusSkill--change" data-background="#222" -->

1) `forEach`

```
var funcs = [this.appendExactTargetData, this.appendSubmissionDataOption, this.appendAdditionalInputs, this.pruneObject];
funcs.forEach(function(func) {
  data = func(data);
});
```

------

## Alternatives
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid statusSkill--change" data-background="#222" -->

1) `reduce`

```
var funcs = [this.appendExactTargetData, this.appendSubmissionDataOption, this.appendAdditionalInputs, this.pruneObject];
data = funcs.reduce(function(memo, func) {
  return func(memo);
}, data);
```

------

## Alternatives
<!-- .slide: data-title="The This Abyss" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--mid statusSkill--change" data-background="#222" -->

1) (`flow`)[https://lodash.com/docs#flow]

```
data = _.flow(
  this.appendExactTargetData,
  this.appendSubmissionDataOption,
  this.appendAdditionalInputs,
  this.pruneObject
)(data);
```

------

# Tooling
<!-- .slide: data-title="Crisp Concatenation" data-state="title statusLint statusLint--easy statusRule statusRule--none statusSkill statusSkill--senior" data-background="#222" -->

------

## `eslint-plugin-smells`
<!-- .slide: data-title="Crisp Concatenation" data-state="title statusLint statusLint--easy statusRule statusRule--custom statusRule--change statusSkill statusSkill--senior" data-background="#222" -->

* <!-- .element: class="fragment" --> `no-reassign`

------

## Resources
<!-- .slide: data-title="Switch Statement" data-state="title statusLint statusLint--easy statusRule statusRule--custom statusSkill statusSkill--senior" data-background="#222" -->
