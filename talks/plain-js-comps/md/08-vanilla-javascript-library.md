# Vanilla JavaScript Library

Notes:

Introduce patterns (default options, overrides, adapter for Ajax, etc)
Note: Look up GoF design patterns

Patterns

* adapter
* Extensible
* Inject Ajax
* Templated
* Modules

------

## Let's Do Another Redesign

<!-- .slide: data-title="Vanilla JavaScript Library" data-state="somestate" -->

<ul>
	<li class="fragment">Remove the dependency on the [jQuery](http://jquery.com) library</li>
	<li class="fragment">Leverage native [DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) APIs</li>
	<li class="fragment">Provide a Bridge for AJAX data retrieval</li>
</ul>

------

<!-- .slide: data-title="Vanilla JavaScript Library" data-state="somestate" data-menu-title="Usage" -->

```html
<!DOCTYPE html>
<html>
<head>
  <title>Giphy</title>
  <link href="./Giphy.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <h1>Giphy jQuery Plugin</h1>

  <input type="search" />

  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.9.0/lodash.min.js"></script>
  <script src="./Giphy.js"></script>
  <script>
  ( function() {
    var search = document.querySelector( "input" );
    var giphy = new Giphy( search, { ajax: { rating: "pg" } } );
  }() );
  </script>
</body>
</html>
```
<!-- .element: class="stretch" -->

<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="5">Link in the CSS for the Giphy library</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="12">Include the low-level supporting lodash library</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="13">Include the Giphy library</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="16">Get the input DOM element</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="17">Create a new instance of the Giphy object passing in element and supporting options</span>

------

## You Might Not Need jQuery

<!-- .slide: data-title="Vanilla JavaScript Library" data-state="resources" -->

<iframe data-src="http://youmightnotneedjquery.com/" class="stretch" />

------

## Vanilla JavaScript Library

<!-- .slide: data-title="Vanilla JavaScript Library" data-state="resources" -->

```js
(function ( _, window, document, undefined ) {
	function Giphy( element, options ) {
		this.element = element;
		this.options = _.merge( {}, Giphy.defaults, options );
		this.init();
	}

	Giphy.prototype.init = function() {
		this.giphy = this.createElementFromString( this.options.templates.wrapper );
		this.element.parentNode.replaceChild( this.giphy, this.element );
		this.giphy.appendChild( this.element );

		this.search = this.createElementFromString( this.options.templates.search );
		this.giphy.appendChild( this.search );

		this.controls = this.createElementFromString( this.options.templates.controls );
		this.controls.setAttribute( "hidden", "hidden" );
		this.giphy.appendChild( this.controls );

		this.prev = this.controls.querySelector( ".Giphy-prev" );
		this.next = this.controls.querySelector( ".Giphy-next" );

		this.wireEventHandlers();
	};

	Giphy.prototype.createElementFromString = function( markup ) {
		var wrapper = document.createElement( "div" );
		wrapper.innerHTML = markup;
		return wrapper.firstChild;
	};

	Giphy.prototype.wireEventHandlers = function() {
		this.controls.addEventListener( "keydown", this.handleControlKey.bind( this ) );
		this.prev.addEventListener( "click", this.navigate.bind( this, -1 ) );
		this.next.addEventListener( "click", this.navigate.bind( this, +1 ) );
		this.search.addEventListener( "click", this.handleSearchClick.bind( this ) );
		this.element.addEventListener( "keypress", this.handleEnter.bind( this ) );
		this.element.addEventListener( "giphy-list-updated", this.handleListUpdated.bind( this ) );
		this.element.addEventListener( "giphy-item-updated", this.handleItemUpdated.bind( this ) );
	};

	Giphy.prototype.handleControlKey = function( e ) {
		switch ( e.which ) {
			case 37 : this.navigate( -1 ); break;
			case 39 : this.navigate( +1 ); break;
		}
	};

	Giphy.prototype.handleSearchClick = function( e ) {
		if ( !this.giphy.classList.contains( "Giphy--search" ) ) {
			this.request( this.element.value ).then( this.handleResponse.bind( this ) );
		} else {
			this.reset();
		}
	};

	Giphy.prototype.handleEnter = function( e ) {
		if ( e.which === 13 ) {
			this.request( this.element.value )
			 .then( this.handleResponse.bind( this ) );
		}
	};

	Giphy.prototype.handleListUpdated = function( e ) {
		var list = e.detail;
		this.items = list;
		this.itemIndex = 0;
		this.preload( list );
		this.giphy.classList.add( "Giphy--search" );
		this.gif = document.createElement( "img" );
		this.giphy.appendChild( this.gif );
		this.controls.removeAttribute( "hidden" );
	};

	Giphy.prototype.handleItemUpdated = function( e ) {
		var item = e.detail;
		this.gif.setAttribute( "src", item.url );
		this.controls.setAttribute( "data-count", ( this.itemIndex + 1 ) + " of " + this.items.length );
		this.gif.blur();
	};

	Giphy.prototype.reset = function() {
		this.controls.setAttribute( "hidden", "hidden" );
		this.gif.parentNode.removeChild( this.gif );
		this.giphy.classList.remove( "Giphy--search" );
	};

	Giphy.prototype.preload = function( gifs ) {
		var preloaded = [];
		gifs.forEach( function( gif, index ) {
			preloaded[ index ] = new Image();
			preloaded[ index ].src = gif.url;
		} );
		return preloaded;
	};

	Giphy.prototype.navigate = function( difference ) {
		if ( difference < 0 ) {
			if ( this.itemIndex >= 1 ) { this.itemIndex--; }
		} else if ( difference > 0 ) {
			if ( this.itemIndex < this.items.length - 1 ) { this.itemIndex++; }
		} else {
			return;
		}

		var itemUpdatedEvent = new CustomEvent( "giphy-item-updated", {
			"detail": this.items[ this.itemIndex ]
		} );
		this.element.dispatchEvent( itemUpdatedEvent );
	};

	Giphy.prototype.request = function( value ) {
		return this.options.fetch(
			this.options.ajax.url,
			this.options.encoder( {
				searchTerm: value,
				apiKey: this.options.ajax.apiKey,
				rating: this.options.ajax.rating
			} )
		);
	};

	Giphy.prototype.handleResponse = function( response ) {
		var list = this.options.decoder( response );
		var item = list && list.length ? list[ 0 ] : {};
		var listUpdatedEvent = new CustomEvent( "giphy-list-updated", {
			"detail": list
		} );
		var itemUpdatedEvent = new CustomEvent( "giphy-item-updated", {
			"detail": item
		} );
		this.element.dispatchEvent( listUpdatedEvent );
		this.element.dispatchEvent( itemUpdatedEvent );
	};

	Giphy.defaults = {
		templates: {
			wrapper: "<div class='Giphy'></div>",
			search: "<div class='Giphy-toggle'></div>",
			controls: "<div class='Giphy-controls' tabindex='0'><span class='Giphy-prev'></span><span class='Giphy-next'></span></div>"
		},
		ajax: {
			url: "http://api.giphy.com/v1/gifs/search",
			apiKey: "dc6zaTOxFJmzC",
			rating: "g"
		},
		encoder: function( data ) {
			return {
				q: data.searchTerm,
				api_key: data.apiKey, // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
				rating: data.rating
			};
		},
		decoder: function( response ) {
			var list = ( response && response.data ) || [];
			return list.map( function( item ) {
				return {
					url: item.images.downsized.url
				};
			} );
		},
		params: function( data ) {
			if ( data ) {
				return "?" + Object.keys( data ).map( function( key ) {
					return key + "=" + encodeURIComponent( data[ key ] );
				} ).join( "&" );
			}
			return "";
		},
		fetch: function( url, data ) {
			return new Promise( function( resolve, reject ) {
				url += this.params( data );
				window.fetch( url ).then( function( response ) {
					response.json().then( function( json ) {
						resolve( json );
					} );
				} ).catch( function( exception ) {
					reject( exception );
				} );
			}.bind( this ) );
		}
	};

	window.Giphy = Giphy;
})( _, window, document );
```
<!-- .element: class="stretch" -->

<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="2-6">Library Constructor Function</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="4">ES5 doesn't have an `_.extend` method like jQuery's, so pulling in lodash</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="10">`replaceChild` is used instead of jQuery's `wrap` method</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="14">`appendChild` is used instead of jQuery's `append` method</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="17">`setAttribute` is used instead of jQuery's `attr` method</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="20">`querySelector` is used instead of the `$jQuery()` function</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="16,26-30">`createElementFromString` method for creating elements from a template</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="33">`addEventListener` is used instead of jQuery's `on` method</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="38-39">Native DOM supports custom events as well</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="50">`classList.contains` is used instead of jQuery's `hasClass` method</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="69">`classList.add` is used instead of jQuery's `addClass` method</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="84">`removeChild` is used instead of jQuery's `remove` method</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="106-109">`CustomEvent` and `dispatchEvent` are used instead of jQuery's `trigger` with a custom type</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="113-120">`this.options.fetch` is bridged to decouple the abstraction from the implementation</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="136-182">Continue to provide a default set of options</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="162-169">Provide a `params` implementation similar to [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="170-181">Create a `fetch` bridge which wraps the native `window.fetch` in a custom Promise</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="170-181">`window.fetch` and ES6 `Promise` are not in all browsers, so you may need to use polyfills or option overrides.</span>

------

## Why a Fetch Bridge?

<!-- .slide: data-title="Vanilla JavaScript Library" data-state="somestate" -->

Depending on your browser support or JavaScript library choices you may need to adjust your data retrieval mechanism

------

## XMLHttpRequest Fetch Bridge

<!-- .slide: data-title="Vanilla JavaScript Library" data-state="somestate" -->

```js
var search = document.querySelector( "input" );
var giphy = new Giphy( search, {
	fetch: function( url, data ) {
		return new Promise( function( resolve, reject ) {
			var request = new XMLHttpRequest();
			url += this.params( data );
			request.open( "GET", url );
			request.onload = function() {
				if ( request.status === 200 ) {
					resolve( JSON.parse( request.response ) );
				} else {
					reject( new Error( request.statusText ) );
				}
			};
			request.onerror = function() {
				reject( new Error( "Network Error" ) );
			};
			request.send();
		}.bind( this ) );
	}
} );
```
<!-- .element: class="stretch" -->

<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="3-20">Override the `fetch` method</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="4">Return a new `Promise`</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="5">Create a `XMLHttpRequest`</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="8-14">If status 200 then resolve the parsed JSON else reject the promise</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="15-17">Reject promise if `onerror` was triggered</span>

------

## [Reqwest](https://github.com/ded/reqwest) Fetch Bridge

<!-- .slide: data-title="Vanilla JavaScript Library" data-state="somestate" -->

```js
var search = document.querySelector( "input" );
var giphy = new Giphy( search, {
	fetch: function( url, data ) {
		return reqwest( {
			url: url,
			method: 'get',
			data: data
		} );
	}
} );
```

<span class="fragment current-only focus-text" data-code-focus="3-9">Override the `fetch` method</span>
<span class="fragment current-only focus-text" data-code-focus="4-8">Return `reqwest`, which is `Promise`</span>
<span class="fragment current-only focus-text" data-code-focus="7">`reqwest` parameterizes the data</span>

------

## jQuery Fetch Bridge

<!-- .slide: data-title="Vanilla JavaScript Library" data-state="somestate" -->

```js
var search = document.querySelector( "input" );
var giphy = new Giphy( search, {
	fetch: jQuery.get
} );
```

<span class="fragment current-only focus-text" data-code-focus="3">Override the `fetch` method</span>
<span class="fragment current-only focus-text" data-code-focus="3">`jQuery.get` returns a `Promise` interface</span>
<span class="fragment current-only focus-text" data-code-focus="3">`jQuery` parameterizes the data</span>

------

## Let's Update Our Unit Tests

<!-- .slide: data-title="Vanilla JavaScript Library" data-state="somestate" -->

```js
describe( "Vanilla JavaScript Library", function() {
	var fixture, giphy, element;
	var listOfGifs = [ { url: "1" }, { url: "2" }, { url: "3" } ];
	var gif = { url: "1" };

	beforeEach( function() {
		fixture = setFixtures( "<input id='giphy'></ul>" );
		element = document.querySelector( "input" );
		giphy = new Giphy( element );
	} );

	describe( "options", function() {
		it( "should have default options", function() {
			var defaults = Giphy.defaults;
			expect( defaults.templates ).toEqual( {
				wrapper: "<div class='Giphy'></div>",
				search: "<div class='Giphy-toggle'></div>",
				controls: "<div class='Giphy-controls' tabindex='0'><span class='Giphy-prev'></span><span class='Giphy-next'></span></div>"
			} );
			expect( defaults.ajax ).toEqual( {
				url: "http://api.giphy.com/v1/gifs/search",
				apiKey: "dc6zaTOxFJmzC",
				rating: "g"
			} );
			expect( defaults.encoder ).toBeTruthy();
			expect( defaults.decoder ).toBeTruthy();
			expect( defaults.params ).toBeTruthy();
			expect( defaults.fetch ).toBeTruthy();
		} );

		describe( "encoder", function() {
			it( "should return giphy api format", function() {
				var encoded = giphy.options.encoder( {
					searchTerm: "cats",
					apiKey: "abc123",
					rating: "g"
				} );
				expect( encoded ).toEqual( {
					q: "cats",
					api_key: "abc123",
					rating: "g"
				} );
			} );
		} );

		describe( "decoder", function() {
			it( "should default to an empty array if response or response.data is falsey", function() {
				var decoded = giphy.options.decoder();
				expect( decoded ).toEqual( [] );
			} );

			it( "should convert data array to objects with a url property", function() {
				var decoded = giphy.options.decoder( {
					data: [
						{ images: { downsized: { url: "1" } } },
						{ images: { downsized: { url: "2" } } },
						{ images: { downsized: { url: "3" } } }
					]
				} );
				expect( decoded ).toEqual( listOfGifs );
			} );
		} );

		describe( "params", function() {
			it( "should return empty string if no data", function() {
				var params = giphy.options.params();
				expect( params ).toBe( "" );
			} );

			it( "should return one param pair if passed one key/value", function() {
				var params = giphy.options.params( { cat: "fluffy" } );
				expect( params ).toBe( "?cat=fluffy" );
			} );

			it( "should encode a pair's value", function() {
				var params = giphy.options.params( { cat: "white fluffy" } );
				expect( params ).toBe( "?cat=white%20fluffy" );
			} );

			it( "should return two param pairs if passed two key/values", function() {
				var params = giphy.options.params( { cat: "fluffy", age: 4 } );
				expect( params ).toBe( "?cat=fluffy&age=4" );
			} );
		} );

		describe( "fetch", function() {
			beforeEach( function() {
				window.fetch = window.fetch || {};
				spyOn( giphy.options, "params" ).and.returnValue( "?test=1234" );
			} );

			afterEach( function() {
				delete window.fetch;
			} );

			describe( "resovle", function() {
				beforeEach( function() {
					spyOn( window, "fetch" ).and.callFake( function() {
						return new Promise( function( resolve, reject ) {
							debugger;
							resolve( {
								json: jasmine.createSpy().and.callFake( function() {
									return new Promise( function( solve, ject ) {
										solve( { test: 1234 } );
									} );
								} )
							} );
						} );
					} );
				} );

				it( "should return a promise", function() {
					function isPromise( promise ) {
						return _.isObject( promise ) &&
							promise.then instanceof Function &&
							promise.catch instanceof Function;
					}
					var promise = giphy.options.fetch( "http://request.com", { request: "abcd" } );
					var success = isPromise( promise );
					expect( isPromise( promise ) ).toBe( true );
				} );

				it( "should call window.fetch", function() {
					giphy.options.fetch( "http://request.com", { test: "1234" } );
 					expect( window.fetch ).toHaveBeenCalled();
				} );

				it( "should append params to the url", function() {
					giphy.options.fetch( "http://request.com", { test: "1234" } );
 					expect( window.fetch ).toHaveBeenCalledWith( "http://request.com?test=1234" );
				} );

				it( "should grab json and resolve on fetch success", function( done ) {
					giphy.options.fetch( "http://request.com", { test: "1234" } ).then( function( data ) {
						expect( data ).toEqual( { test: 1234 } );
						done();
					} );
 				} );
			} );

			describe( "reject", function() {
				beforeEach( function() {
					spyOn( window, "fetch" ).and.callFake( function() {
						return new Promise( function( resolve, reject ) {
							reject( "exception" );
						} );
					} );
				} );

				it( "should reject promise on fetch failure", function() {
					giphy.options.fetch( "http://request.com", { test: "1234" } ).catch( function( exception ) {
						expect( exception ).toEqual( "exception" );
						done();
					} );
				} );
			} );
		} );
	} );

	describe( "instance", function() {
		describe( "constructor", function() {
			it( "should save element as property", function() {
				expect( giphy.element ).toBe( element );
			} );

			it( "should save the merged options of defaults and passed in options", function() {
				expect( _.isPlainObject( giphy.options ) ).toBeTruthy();
			} );
		} );

		describe( "methods", function() {
			describe( "init", function() {
				it( "surrounds the element with a wrapper", function() {
					expect( giphy.element.parentNode.classList.contains( "Giphy") ).toBe( true );
				} );

				it( "adds template for the search toggle", function() {
					expect( giphy.search.classList.contains( "Giphy-toggle") ).toBe( true );
				} );

				it( "adds template for the controls", function() {
					expect( giphy.element.parentNode.querySelectorAll( ".Giphy-prev, .Giphy-next" ).length ).toBe( 2 );
				} );

				it( "should call wireEventHandlers", function() {
					spyOn( giphy, "wireEventHandlers" );
					giphy.init();
					expect( giphy.wireEventHandlers ).toHaveBeenCalled();
				} );

			} );

			describe( "createElementFromString", function() {
				it( "should return null if passed empty string", function() {
					var element = giphy.createElementFromString( "" );
					expect( element ).toBe( null );
				} );

				it( "should return null if passed invalid markup", function() {
					var element = giphy.createElementFromString( "<badmarkup" );
					expect( element ).toBe( null );
				} );

				it( "should return the firstChild of the markup passed", function() {
					var element = giphy.createElementFromString( "<p>goodmarkup</p>" );
					expect( element.tagName ).toBe( "P" );
				} );
			} );

			describe( "wireEventHandlers", function() {
				beforeEach( function() {
					spyOn( Element.prototype, "addEventListener" );
					giphy.wireEventHandlers();
				} );

				it( "should wire up keydown on controls", function() {
					expect( giphy.controls.addEventListener ).toHaveBeenCalledWith( "keydown", jasmine.any( Function ) );
				} );

				it( "should wire up click on prev control", function() {
					expect( giphy.prev.addEventListener ).toHaveBeenCalledWith( "click", jasmine.any( Function ) );
				} );

				it( "should wire up click on next control", function() {
					expect( giphy.next.addEventListener ).toHaveBeenCalledWith( "click", jasmine.any( Function ) );
				} );

				it( "should wire up click on search control", function() {
					expect( giphy.search.addEventListener ).toHaveBeenCalledWith( "click", jasmine.any( Function ) );
				} );

				it( "should wire up keypress on element control", function() {
					expect( giphy.element.addEventListener ).toHaveBeenCalledWith( "keypress", jasmine.any( Function ) );
				} );

				it( "should wire up giphy-list-updated on element control", function() {
					expect( giphy.element.addEventListener ).toHaveBeenCalledWith( "giphy-list-updated", jasmine.any( Function ) );
				} );

				it( "should wire up giphy-item-updated on element control", function() {
				  expect( giphy.element.addEventListener ).toHaveBeenCalledWith( "giphy-item-updated", jasmine.any( Function ) );
				} );
			} );

			describe( "handleControlKey", function() {
				beforeEach( function() {
					spyOn( giphy, "navigate" );;
				} );

				it( "should navigate backwards on left key", function() {
					giphy.handleControlKey( { which: 37 } );
					expect( giphy.navigate ).toHaveBeenCalledWith( -1 );
				} );

				it( "should navigate forwards on right key", function() {
					giphy.handleControlKey( { which: 39 } );
					expect( giphy.navigate ).toHaveBeenCalledWith( 1 );
				} );

				it( "should not navigate on any other key", function() {
					giphy.handleControlKey( { which: 1 } );
					expect( giphy.navigate ).not.toHaveBeenCalled();
				} );
			} );

			describe( "handleSearchClick", function() {
				beforeEach( function() {
					spyOn( giphy, "reset" );
					spyOn( giphy, "request" ).and.callFake( function() {
						var d = $.Deferred();
						d.resolve();
						return d.promise();
					} );
				} );

				it( "should reset if has Giphy--search", function() {
					giphy.giphy.classList.add( "Giphy--search" );
					giphy.handleSearchClick();
					expect( giphy.reset ).toHaveBeenCalled();
				} );

				it( "should search if doesn't have Giphy--search", function() {
					giphy.giphy.classList.remove( "Giphy--search" );
					giphy.handleSearchClick();
					expect( giphy.request ).toHaveBeenCalled();
				} );
			} );

			describe( "handleEnter", function() {
				beforeEach( function() {
					spyOn( giphy, "request" ).and.callFake( function() {
						var d = $.Deferred();
						d.resolve();
						return d.promise();
					} );
					spyOn( giphy, "handleResponse" );
				} );

				it( "should call search method for enter key", function() {
					giphy.element.value = "42";
					giphy.handleEnter( { which: 13 } );
					expect( giphy.request ).toHaveBeenCalledWith( "42" );
				} );

				it( "should not call search method for non-enter key", function() {
					giphy.handleEnter( { which: 10 } );
					expect( giphy.request ).not.toHaveBeenCalled();
				} );

				it( "should call handleResponse method on resolved search promise", function() {
					giphy.handleEnter( { which: 13 } );
					expect( giphy.handleResponse ).toHaveBeenCalled();
				} );
			} );

			describe( "handleListUpdated", function() {
				it( "should set the list instance to argument", function() {
					giphy.handleListUpdated( { detail: listOfGifs } );
					expect( giphy.items ).toBe( listOfGifs );
				} );

				it( "should reset the itemIndex", function() {
					giphy.handleListUpdated( { detail: [] } );
					expect( giphy.itemIndex ).toBe( 0 );
				} );

				it( "should call the preload method", function() {
					spyOn( giphy, "preload" );
					giphy.handleListUpdated( { detail: listOfGifs } );
					expect( giphy.preload ).toHaveBeenCalledWith( listOfGifs );
				} );

				it( "should add the Giphy--search class", function() {
					spyOn( giphy.giphy.classList, "add" );
					giphy.handleListUpdated( { detail: listOfGifs } );
					expect( giphy.giphy.classList.add ).toHaveBeenCalledWith( "Giphy--search" );
				} );

				it( "should append an image to gif", function() {
					spyOn( giphy.giphy, "appendChild" );
					giphy.handleListUpdated( { detail: listOfGifs } );
					expect( giphy.giphy.appendChild ).toHaveBeenCalledWith( giphy.gif );
				} );

				it( "should show the controls", function() {
					spyOn( giphy.controls, "removeAttribute" );
					giphy.handleListUpdated( { detail: listOfGifs } );
					expect( giphy.controls.removeAttribute ).toHaveBeenCalledWith( "hidden" );
				} );
			} );

			describe( "handleItemUpdated", function() {
				beforeEach( function() {
					giphy.handleListUpdated( { detail: listOfGifs } );
				} );

				it( "should update $gif src to item's url", function() {
					spyOn( giphy.gif, "setAttribute" );
					giphy.handleItemUpdated( { detail: gif } );
					expect( giphy.gif.setAttribute ).toHaveBeenCalledWith( "src", gif.url );
				} );

				it( "should update the data-count attribute", function() {
					spyOn( giphy.controls, "setAttribute" );
					giphy.handleItemUpdated( { detail: gif } );
					expect( giphy.controls.setAttribute ).toHaveBeenCalledWith( "data-count", "1 of 3" );
				} );

				it( "should blur the $gif", function() {
					spyOn( giphy.gif, "blur" );
					giphy.handleItemUpdated( { detail: gif } );
					expect( giphy.gif.blur ).toHaveBeenCalled();
				} );
			} );

			describe( "reset", function() {
				beforeEach( function() {
					giphy.handleListUpdated( { detail: listOfGifs } );
				} );

				it( "should hide controls", function() {
					spyOn( giphy.controls, "setAttribute" );
					giphy.reset();
					expect( giphy.controls.setAttribute ).toHaveBeenCalledWith( "hidden", "hidden" );
				} );

				it( "should remove the gif", function() {
					spyOn( giphy.gif.parentNode, "removeChild" );
					giphy.reset();
					expect( giphy.gif.parentNode.removeChild ).toHaveBeenCalled();
				} );

				it( "should remove the Giphy--serach class", function() {
					spyOn( giphy.giphy.classList, "remove" );
					giphy.reset();
					expect( giphy.giphy.classList.remove ).toHaveBeenCalledWith( "Giphy--search" );
				} );
			} );

			describe( "preload", function() {
				it( "should create images for each gif", function() {
					var images = giphy.preload( listOfGifs );
					expect( images ).toEqual( jasmine.any( Array ) );
					expect( images.length ).toBe( 3 );
				} );
			} );

			describe( "navigate", function() {
				beforeEach( function() {
					spyOn( Element.prototype, "dispatchEvent" );
					giphy.handleListUpdated( { detail: listOfGifs } );
				} );

				it( "should increase the index when passing a positive number", function() {
					giphy.navigate( 1 );
					expect( giphy.itemIndex ).toBe( 1 );
				} );

				it( "should decrease the index when passing a negative number", function() {
					var maxIndex = listOfGifs.length - 1;
					giphy.itemIndex = maxIndex;
					giphy.navigate( -1 );
					expect( giphy.itemIndex ).toBe( maxIndex - 1 );
				} );

				it( "should not increase past the length", function() {
					var maxIndex = listOfGifs.length - 1;
					giphy.itemIndex = maxIndex;
					giphy.navigate( 1 );
					expect( giphy.itemIndex ).toBe( maxIndex );
				} );

				it( "should not decrase past 0", function() {
					giphy.navigate( -1 );
					expect( giphy.itemIndex ).toBe( 0 );
				} );

				it( "should trigger the giphy-item-updated event", function() {
					giphy.navigate( 1 );
					expect( giphy.element.dispatchEvent ).toHaveBeenCalled();
				} );

				it( "should not trigger the event if difference is 0", function() {
					giphy.navigate( 0 );
					expect( giphy.element.dispatchEvent ).not.toHaveBeenCalled();
				} );
			} );

			describe( "request", function() {
				beforeEach( function() {
					spyOn( giphy.options, "fetch" );
					spyOn( giphy.options, "encoder" ).and.returnValue( listOfGifs );
				} );

				it( "should make a fetch call", function() {
					giphy.request( "cats" );
					expect( giphy.options.fetch ).toHaveBeenCalled();
				} );

				it( "should use options.url as the url", function() {
					var args;
					giphy.request( "cats" );
					args = giphy.options.fetch.calls.first().args[ 0 ]
					expect( args ).toBe( giphy.options.ajax.url );
				} );

				it( "should use call the options.encoder", function() {
					giphy.request( "cats" );
					expect( giphy.options.encoder ).toHaveBeenCalledWith( {
						searchTerm: "cats",
						apiKey: giphy.options.ajax.apiKey,
						rating: giphy.options.ajax.rating
					} );
				} );

				it( "should use the results from options.encoder as data", function() {
					var args;
					giphy.request( "cats" );
					args = giphy.options.fetch.calls.first().args[ 1 ]
					expect( args ).toBe( listOfGifs );
				} );
			} );

			describe( "handleResponse", function() {
				var response = {
					data: [
						{ images: { downsized: { url: "1" } } },
						{ images: { downsized: { url: "2" } } },
						{ images: { downsized: { url: "3" } } }
					]
				};
				beforeEach( function() {
					spyOn( giphy.options, "decoder" ).and.returnValue( listOfGifs );
					spyOn( giphy.element, "dispatchEvent" );
				} );

				it( "should call the options.decoder", function() {
					giphy.handleResponse( response );
					expect( giphy.options.decoder ).toHaveBeenCalledWith( response );
				} );

				it( "should trigger the giphy-list-updated event", function() {
					giphy.handleResponse( response );
					var args = giphy.element.dispatchEvent.calls.allArgs();
					var passed = args.some( function( arg ) {
						var customEvent = arg[ 0 ];
						if ( customEvent instanceof CustomEvent &&
							customEvent.type === "giphy-list-updated" &&
							customEvent.detail === listOfGifs ) {
							return true;
						}
					} );
					expect( passed ).toBe( true );
				} );

				it( "should trigger the giphy-item-updated event", function() {
					giphy.handleResponse( response );
					var args = giphy.element.dispatchEvent.calls.allArgs();
					var passed = args.some( function( arg ) {
						var customEvent = arg[ 0 ];
						if ( customEvent instanceof CustomEvent &&
							customEvent.type === "giphy-item-updated" &&
							customEvent.detail === listOfGifs[ 0 ] ) {
							return true;
						}
					} );
					expect( passed ).toBe( true );
				} );
			} );
		} );
	} );
} );
```
<!-- .element: class="stretch" -->

------

## Unit Test Coverage

<!-- .slide: data-title="Vanilla JavaScript Library" data-state="somestate" -->

![](./img/unit-test-coverage-vanilla.png)
<!-- .element: style="height: 400px;" -->

<small>7 more tests than previous, but we did add a few more methods</small>

------

## What about Universal Module Definition (UMD)?

<!-- .slide: data-title="Vanilla JavaScript Library" data-state="somestate" -->

```js
( function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "lodash" ], factory );
	} else if ( typeof exports === "object" ) {
		module.exports = factory( require( "lodash" ) );
	} else {
		root.Giphy = factory( root._ );
	}
}( this, function( _ ) {
	function Giphy( element, options ) { /* ... */ }

	return Giphy;
} ) );
```

<span class="fragment current-only focus-text" data-code-focus="2-3">If `amd` exists then define this module and indicate that it depends on `lodash`</span>
<span class="fragment current-only focus-text" data-code-focus="4-5">If CommonJS, then pass `lodash` to `factory` and `export` the results</span>
<span class="fragment current-only focus-text" data-code-focus="7">Else, assign result of `factory(root._)` to `root.Giphy` (Browser's `window`)</span>

<small>Code modified from [UMD: JavaScript modules that run anywhere](http://bob.yexley.net/umd-javascript-that-runs-anywhere/) by Bob Yexley ([@ryexley](https://twitter.com/ryexley))</small>

------

## UMD Usage

<!-- .slide: data-title="Vanilla JavaScript Library" data-state="somestate" -->

```js
// window.Giphy
var giphy = new Giphy( document.querySelector( "input" ) );
```

```js
// CommonJS
var Giphy = require( "giphy" );

var giphy = new Giphy( document.querySelector( "input" ) );
```

```js
// ES6 Modules
import Giphy from "giphy";

const giphy = new Giphy( document.querySelector( "input" ) );
```

```js
// AMD
require( [ "giphy" ], function( Giphy ) {
	var giphy = new Giphy( document.querySelector( "input" ) );
} );
```

------

## So... It Works

<!-- .slide: data-title="Vanilla JavaScript Library" data-state="somestate" -->

![](./img/r2d2-travolta.gif)
<!-- .element: style="height: 400px;" -->

### but what about React, Angular, etc...!?!
<!-- .element: class="fragment" -->

------

## Resources

<!-- .slide: data-title="Vanilla JavaScript Library" data-state="resources" -->

* [UMD: JavaScript modules that run anywhere](http://bob.yexley.net/umd-javascript-that-runs-anywhere/)
* [reqwest](https://github.com/ded/reqwest)
* [Source Code](https://github.com/elijahmanor/framework-independent-javascript-components/tree/master/src/3-vanilla)
