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

<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="2">Create the allTheThings jQuery Plugin</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="3">Iterate over all the matched elements and return for chaining</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="4">Set a transition for a nice animation</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="5-9">On mouseenter rotate the element and mouseleave revert rotation</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="13">Wait for the DOM to be ready</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="14">Prompt the user for a selector</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="15-17">Use the selector to jQuery allTheThings</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="19"><a href="javascript:(function()%7Bfunction%20callback()%7B(function(%24)%7Bvar%20jQuery%3D%24%3B(%20function(%20%24%20)%20%7B%24.fn.allTheThings%20%3D%20function()%20%7Breturn%20this.each(%20function()%20%7B%24(%20this%20).css(%20%22transition%22%2C%20%22all%201s%20ease-out%22%20).hover(%20function()%20%7B%24(%20this%20).css(%20%22transform%22%2C%20%22rotate(180deg)%22%20)%3B%7D%2C%20function()%20%7B%24(%20this%20).css(%20%22transform%22%2C%20%22%22%20)%3B%7D%20)%3B%7D%20)%3B%7D%3B%24(%20document%20).ready(%20function()%20%7Bvar%20selector%20%3D%20window.prompt(%20%22Selector%3F%22%2C%20%22img%22%20)%3Bif%20(%20selector%20)%20%7B%24(%20selector%20).allTheThings()%3B%7D%7D%20)%3B%7D(%20jQuery%20)%20)%7D)(jQuery.noConflict(true))%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.7.1%2Fjquery.min.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()">DO ALL THE THINGS!</a></span>

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

<!-- .slide: data-title="Trends" data-state="somestate extended" -->

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
