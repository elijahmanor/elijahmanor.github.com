# Conclusion

------

## Is This Technique Always the Right Answer?

<!-- .slide: data-title="Conclusion" data-state="somestate" -->

### NOPE <!-- .element: class="fragment blazing" -->

* You don't want to Premature Redesign<!-- .element: class="fragment" -->
* Depending on experience the effort could be larger framework specific<!-- .element: class="fragment" -->
* Balance Minimum Viable Product (MVP) vs Tech Debt<!-- .element: class="fragment" -->

------

## Then When Is It Appropriate?

<!-- .slide: data-title="Conclusion" data-state="somestate" -->

* If you foresee yourself needing a framework agnostic component<!-- .element: class="fragment" -->
* If you find yourself needing the same component at least 3 times<!-- .element: class="fragment" -->
* If you have various teams that want to share components across frameworks<!-- .element: class="fragment" -->

------

## Benefits of Framework-Independent JavaScript Components

<!-- .slide: data-title="Conclusion" data-state="somestate" -->

* Encourages Modularity and Loose Coupling of components<!-- .element: class="fragment" -->
* Shields the component from getting stale when a library for framework is abandoned<!-- .element: class="fragment" -->
* Enables the ability to write an adapter when a new library or framework comes around<!-- .element: class="fragment" -->

------

## Downsides of Framework-Independent JavaScript Components

* May be hard to know how to abstract your component. Future needs are not known.
* You could loose some of the benefits of writing it based on a framework (performance, etc)
