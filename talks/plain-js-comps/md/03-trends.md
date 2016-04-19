# Trends

------

## Flash Back to the jQuery Days

<!-- .slide: data-title="Trends" data-state="somestate" -->

![](./img/happy-jquery-days.gif)
<!-- .element: style="height: 500px;" -->

------

## jQuery, jQuery, jQuery

<!-- .slide: data-title="Trends" data-state="somestate" -->

* jQuery Cookie<!-- .element: class="fragment" -->
* jQuery localStorage<!-- .element: class="fragment" -->
* jQuery Notifications<!-- .element: class="fragment" -->
* jQuery Lightbox<!-- .element: class="fragment" -->
* jQuery this, that, and the other<!-- .element: class="fragment" -->

------

<!-- .slide: data-title="Trends" data-state="somestate" data-menu-title="jQuery All The Things" -->

![](./img/jquery-all-the-things.gif)
<!-- .element: style="height: 500px;" -->

------

## Literally All The Things

<!-- .slide: data-title="Trends" data-state="somestate" -->

```js
( function( $ ) {
	$.fn.allTheThings = function() {
		return this.each( function() {
			$( this ).css( "transition", "all 1s ease-out" )
				.hover( function() {
					$( this ).css( "transform", "rotate(180deg)" );
				}, function() {
					$( this ).css( "transform", "" );
				} );
		} );
	};

	$( document ).ready( function() {
		var selector = window.prompt( "Selector?", "img" );
		if ( selector ) {
			$( selector ).allTheThings();
		}
	} );
}( jQuery ) );
```
<!-- .element: class="stretch" -->

<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="2">Create the allTheThings jQuery Plugin</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="3">Iterate over all the matched elements and return for chaining</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="4">Set a transition for a nice animation</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="5-9">On mouseenter rotate the element and mouseleave revert rotation</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="13">Wait for the DOM to be ready</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="14">Prompt the user for a selector</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="15-17">Use the selector to jQuery allTheThings</span>

------


## Have Things Changed Today!?!

<!-- .slide: data-title="Trends" data-state="somestate" -->

### NOPE
<!-- .element: class="fragment" -->

------

## Current Landscape

<!-- .slide: data-title="Trends" data-state="somestate" -->

<!-- TODO: Landscape picture? -->

<ul style="display: flex; list-style: none; justify-content: space-around;">
	<li class="fragment highlight-current-blazing">Angular This</li>
	<li class="fragment highlight-current-blazing">Ember That</li>
	<li class="fragment highlight-current-blazing">React The Other</li>
</ul>

![](./img/angular-ember-react.jpg)

------

## New Libraries and Frameworks

<!-- .slide: data-title="Trends" data-state="somestate" -->

![](./img/days-since-last-framework.jpg)
<!-- .element: style="height: 450px;" -->

------

### Abandoned Frameworks and Libraries

<!-- .slide: data-title="Trends" data-state="somestate" -->

![](./img/javascript-train-schedule.png)
<!-- .element: style="height: 450px;" -->

<small>Source: [Commit Strip](http://www.commitstrip.com/en/2015/09/16/how-to-choose-the-right-javascript-framework/)</small>

------

## It's a Hard Decision

<!-- .slide: data-title="Trends" data-state="somestate" -->

![](./img/iamdeveloper-javascript-milk.png)
<!-- .element: style="height: 450px;" -->

<small>Source: [Twitter](https://twitter.com/iamdevloper/status/540481335362875392?lang=en)</small>

------

## So What's the Alternative?

<!-- .slide: data-title="Trends" data-state="somestate" -->

> "It all comes down to composability and portability." --[Why I Write Plain JavaScript Modules](https://ponyfoo.com/articles/why-i-write-plain-javascript-modules) by Nicolás Bevacqua ([@nzgb](http://twitter.com/nzgb))

## Framework Independent JavaScript Components
<!-- .element: class="fragment fade-in" style="background: white; border: 1px solid black; color: black; border-radius: 1rem; padding: 1rem 0;" -->
