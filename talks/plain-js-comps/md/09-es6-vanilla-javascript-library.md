# ES6-ified Vanilla JavaScript Library

Notes:

------

## Let's Do Another Redesign

<!-- .slide: data-title="ES6-ified Vanilla JS Lib" data-state="somestate" -->

<ul>
	<li class="fragment">Remove the dependency on the [lodash](https://lodash.com/) library</li>
	<li class="fragment">Leverage ES6 Features with Babel</li>
	<li class="fragment">Simplify the UMD Wrapper</li>
</ul>

------

## Babel Setup

<!-- .slide: data-title="ES6-ified Vanilla JS Lib" data-state="somestate" -->


```
npm install babel-cli --save-dev
npm install babel-preset-es2015 --save-dev
```

```js
// package.json
{
	"scripts": {
		"build": "babel src/*.js -d lib",
	},
	"devDependencies": {
		"babel-cli": "^6.7.5",
		"babel-preset-es2015": "^6.6.0"
	}
}
```

```js
// .babelrc
{
	"presets": [ "es2015" ]
}
```

------

<!-- .slide: data-title="ES6-ified Vanilla JS Lib" data-state="somestate" data-menu-title="Usage" -->

```js
export default class Giphy {
	constructor( element, options ) {
		this.element = element;
		this.options = Object.assign( {}, Giphy.defaults, options );
		this.init();
	}

	init() {
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
	}

	createElementFromString( markup ) {
		const wrapper = document.createElement( "div" );
		wrapper.innerHTML = markup;
		return wrapper.firstChild;
	}

	wireEventHandlers() {
		this.controls.addEventListener( "keydown", this.handleControlKey.bind( this ) );
		this.prev.addEventListener( "click", this.navigate.bind( this, -1 ) );
		this.next.addEventListener( "click", this.navigate.bind( this, +1 ) );
		this.search.addEventListener( "click", this.handleSearchClick.bind( this ) );
		this.element.addEventListener( "keypress", this.handleEnter.bind( this ) );
		this.element.addEventListener( "giphy-list-updated", this.handleListUpdated.bind( this ) );
		this.element.addEventListener( "giphy-item-updated", this.handleItemUpdated.bind( this ) );
	}

	handleControlKey( e ) {
		switch ( e.which ) {
			case 37 : this.navigate( -1 ); break;
			case 39 : this.navigate( +1 ); break;
		}
	}

	handleSearchClick( e ) {
		if ( !this.giphy.classList.contains( "Giphy--search" ) ) {
			this.request( this.element.value ).then( this.handleResponse.bind( this ) );
		} else {
			this.reset();
		}
	}

	handleEnter( e ) {
		if ( e.which === 13 ) {
			this.request( this.element.value )
			 .then( this.handleResponse.bind( this ) );
		}
	}

	handleListUpdated( e ) {
		const list = e.detail;
		this.items = list;
		this.itemIndex = 0;
		this.preload( list );
		this.giphy.classList.add( "Giphy--search" );
		this.gif = document.createElement( "img" );
		this.giphy.appendChild( this.gif );
		this.controls.removeAttribute( "hidden" );
	}

	handleItemUpdated( e ) {
		const item = e.detail;
		this.gif.setAttribute( "src", item.url );
		this.controls.setAttribute( "data-count",
			`${ this.itemIndex + 1 } of ${ this.items.length}` );
		this.gif.blur();
	}

	reset() {
		this.controls.setAttribute( "hidden", "hidden" );
		this.gif.parentNode.removeChild( this.gif );
		this.giphy.classList.remove( "Giphy--search" );
	}

	preload( gifs ) {
		const preloaded = [];
		gifs.forEach( ( gif, index ) => {
			preloaded[ index ] = new Image();
			preloaded[ index ].src = gif.url;
		} );
		return preloaded;
	}

	navigate( difference ) {
		if ( difference < 0 ) {
			if ( this.itemIndex >= 1 ) { this.itemIndex--; }
		} else if ( difference > 0 ) {
			if ( this.itemIndex < this.items.length - 1 ) { this.itemIndex++; }
		} else {
			return;
		}

		const itemUpdatedEvent = new CustomEvent( "giphy-item-updated", {
			"detail": this.items[ this.itemIndex ]
		} );
		this.element.dispatchEvent( itemUpdatedEvent );
	}

	request( searchTerm ) {
		return this.options.fetch(
			this.options.ajax.url,
			this.options.encoder( {
				searchTerm,
				apiKey: this.options.ajax.apiKey,
				rating: this.options.ajax.rating
			} )
		);
	}

	handleResponse( response ) {
		const list = this.options.decoder( response );
		const item = list && list.length ? list[ 0 ] : {};
		const listUpdatedEvent = new CustomEvent( "giphy-list-updated", {
			"detail": list
		} );
		const itemUpdatedEvent = new CustomEvent( "giphy-item-updated", {
			"detail": item
		} );
		this.element.dispatchEvent( listUpdatedEvent );
		this.element.dispatchEvent( itemUpdatedEvent );
	}
}

Giphy.defaults = {
	templates: {
		wrapper: "<div class='Giphy'></div>",
		search: "<div class='Giphy-toggle'></div>",
		controls: "<div class='Giphy-controls' tabindex='0'><span class='Giphy-prev'></span><span class='Giphy-next'></span></div>"
	},
	ajax: {
		url: "//api.giphy.com/v1/gifs/search",
		apiKey: "dc6zaTOxFJmzC",
		rating: "g"
	},
	encoder( data ) {
		return {
			q: data.searchTerm,
			api_key: data.apiKey, // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
			rating: data.rating
		};
	},
	decoder( response ) {
		const list = ( response && response.data ) || [];
		return list.map( item => ( { url: item.images.downsized.url } ) );
	},
	// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
	params( data ) {
		if ( data ) {
			return "?" + Object.keys( data ).map( key => {
				return key + "=" + encodeURIComponent( data[ key ] );
			} ).join( "&" );
		}
		return "";
	},
	fetch( url, data ) {
		return new Promise( ( resolve, reject ) => {
			url += this.params( data );
			window.fetch( url ).then( response => {
				response.json().then( json => resolve( json ) );
			} ).catch( exception => reject( exception ) );
		} );
	}
};
```
<!-- .element: class="stretch" -->

<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="1">Export the Giphy `class`</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="2-6">Use the `constructor` method of a `class`</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="4">Use `Object.assign` instead of `_.merge`</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="27">Use `const`</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="78-79">Use Template Strings</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="91-94">Use the Arrow Function Syntax</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="117">Shorthand for `searchTerm: searchTerm`</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="149-155">Enhanced Object Literals</span>

------

## Generated Universal Module Definition (UMD)

<!-- .slide: data-title="ES6-ified Vanilla JS Lib" data-state="somestate" -->

```
npm install babel-plugin-add-module-exports --save-dev
npm install babel-plugin-transform-es2015-modules-umd --save-dev
```

```js
// package.json
{
	"devDependencies": {
		"babel-plugin-add-module-exports": "^0.1.2",
		"babel-plugin-transform-es2015-modules-umd": "^6.6.5"
	}
}
```

```js
// .babelrc
{
	"plugins": [
		"add-module-exports",
		"transform-es2015-modules-umd"
	]
}
```

------

## UMD Output

<!-- .slide: data-title="ES6-ified Vanilla JS Lib" data-state="somestate" -->

```js
( function( global, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "module", "exports" ], factory );
	} else if ( typeof exports !== "undefined" ) {
		factory( module, exports );
	} else {
		var mod = {
			exports: {}
		};
		factory( mod, mod.exports );
		global.Giphy = mod.exports;
	}
} )( this, function( module, exports ) {
	"use strict";

	var Giphy = function () { /* ... */ }();

	exports.default = Giphy;

	module.exports = exports[ "default" ];
} );
```

------

## Resources

<!-- .slide: data-title="ES6-ified Vanilla JS Lib" data-state="resources" -->

* [Setup Babel](https://babeljs.io/docs/setup/#installation)
* [babel-cli](http://npm.im/babel-cli)
* [babel-preset-es2015](http://npm.im/babel-preset-es2015)
* [babel-plugin-add-module-exports](http://npm.im/babel-plugin-add-module-exports)
* [babel-plugin-transform-es2015-modules-umd](http://npm.im/babel-plugin-transform-es2015-modules-umd)
* [Source Code](https://github.com/elijahmanor/framework-independent-javascript-components/tree/master/src/4-vanilla-es6)
