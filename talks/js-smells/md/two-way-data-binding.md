# Two-Way Data Binding Smell
<!-- .slide: data-state="statusLint statusLint--hard statusRule statusRule--fuzzy statusSkill statusSkill--mid" -->

------

## Smelly Code
<!-- .slide: data-title="Two Way Data Binding" data-state="title statusLint statusLint--hard statusRule statusRule--fuzzy statusSkill statusSkill--mid" data-background="#222" -->

> "...you can set the directionality of it to be 2-Way Data Binding. That actually seems to be a good idea until you have a large scale application and then it turns out you have no idea whats going on... and turns out to be an anti-pattern for large apps." --Misko Hevery https://www.youtube.com/watch?v=uD6Okha_Yj0#t=1785

------

# Why Does This Smell?
<!-- .slide: data-title="Two Way Data Binding" data-state="title statusLint statusLint--hard statusRule statusRule--fuzzy statusSkill statusSkill--mid" data-background="#222" -->

## Hard to Track Execution & Data Flow <!-- .element class="fragment" -->

------

## React Flux Architecture
<!-- .slide: data-title="Two Way Data Binding" data-state="title statusLint statusLint--hard statusRule statusRule--fuzzy statusSkill statusSkill--senior statusSkill--change" data-background="#222" -->

![](./img/flux-simple-f8-diagram-with-client-action-1300w.png)

------

## Resources
<!-- .slide: data-title="Two Way Data Binding" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--senior" data-background="#222" -->

* [React](http://facebook.github.io/react/)
* [React Flux](https://facebook.github.io/flux/)
* [An Angular2 Todo App: First look at App Development in Angular2](https://www.youtube.com/watch?v=uD6Okha_Yj0#t=1785)
