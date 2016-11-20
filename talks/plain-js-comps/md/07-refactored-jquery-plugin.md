# Refactored jQuery Plugin

Notes:

------

## <span class="fragment highlight-current-strikethrough">Refactored</span> jQuery Plugin

<!-- .slide: data-title="Refactored Code" data-state="somestate" -->

<img src="./img/refactor.gif" style="height: 500px;" />

------

## Refactored vs. Redesigned

<!-- .slide: data-title="Redesigned Code" data-state="somestate" -->

> "...ten minutes is the difference between refactoring and redesign. Anything that takes longer than ten minutes is not refactoring. That is a redesign."
> <p>--[dzone.com](https://dzone.com/articles/difference-between-refactoring) by Peter Verhas ([@verhas](https://twitter.com/verhas))</p>

------

## So, What Should We Change?

<!-- .slide: data-title="Redesigned Code" data-state="somestate" -->

<ul>
	<li class="fragment">Add default options that can be overridden</li>
	<li class="fragment">Add extensibility points to abstract data transfer</li>
	<li class="fragment">Write the code so that it's testable</li>
	<li class="fragment">Use Custom Events to separate Actions from DOM manipulation</li>
</ul>

------

## Redesigned jQuery Plugin

<!-- .slide: data-title="Redesigned Code" data-state="somestate" -->

```js
(function ( $, window, document, undefined ) {
    var pluginName = "giphy";

    function Plugin( element, options ) {
        this.element = element;
        this.$element = $( element );
        this.options = $.extend( {}, $.fn[ pluginName ].defaults, options );
        this.init();
    }

    Plugin.prototype.init = function() {
      this.$giphy = this.$element.wrap( this.options.templates.wrapper ).closest( ".Giphy" );
      this.$search = $( this.options.templates.search ).appendTo( this.$giphy );
      this.$controls = $( this.options.templates.controls ).hide().appendTo( this.$giphy );
      this.$prev = this.$controls.find( ".Giphy-prev" );
      this.$next = this.$controls.find( ".Giphy-next" );

      this.wireEventHandlers();
    };

    Plugin.prototype.wireEventHandlers = function() {
      this.$controls.on( "keydown", this.handleControlKey.bind( this ) );
      this.$prev.on( "click", this.navigate.bind( this, -1 ) );
      this.$next.on( "click", this.navigate.bind( this, +1 ) );
      this.$search.on( "click", this.handleSearchClick.bind( this ) );
      this.$element.on( "keypress", this.handleEnter.bind( this ) );
      this.$element.on( "giphy-list-updated", this.handleListUpdated.bind( this ) );
      this.$element.on( "giphy-item-updated", this.handleItemUpdated.bind( this ) );
    };

    Plugin.prototype.handleControlKey = function( e ) {
      switch ( e.which ) {
        case 37 : this.navigate( -1 ); break;
        case 39 : this.navigate( +1 ); break;
      }
    };

    Plugin.prototype.handleSearchClick = function() {
      if ( !this.$giphy.hasClass( "Giphy--search" ) ) {
        this.search( this.element.value ).then( this.handleResponse.bind( this ) );
      } else {
        this.reset();
      }
    };

    Plugin.prototype.handleListUpdated = function( e, list ) {
      this.items = list;
      this.itemIndex = 0;
      this.preload( list );
      this.$giphy.addClass( "Giphy--search" );
      this.$gif = $( "<img />" );
      this.$gif.appendTo( this.$giphy );
      this.$controls.show();
    };

    Plugin.prototype.handleItemUpdated = function( e, item ) {
      this.$gif.attr( "src", item.url );
      this.$controls.attr( "data-count", ( this.itemIndex + 1 ) + " of " + this.items.length );
      this.$gif.blur();
    };

    Plugin.prototype.reset = function() {
      this.$controls.hide();
      this.$gif.remove();
      this.$giphy.removeClass( "Giphy--search" );
    };

    Plugin.prototype.handleEnter = function( e ) {
       if ( e.which === 13 ) {
         this.search( this.element.value )
          .then( this.handleResponse.bind( this ) );
       }
    };

    Plugin.prototype.handleResponse = function( response ) {
      var list = this.options.decoder( response );
      var item = list && list.length ? list[ 0 ] : {};
      this.$element.trigger( "giphy-list-updated", [ list ] );
      this.$element.trigger( "giphy-item-updated", [ item ] );
    };

    Plugin.prototype.preload = function( gifs ) {
      var preloaded = [];
      gifs.forEach( function( gif, index ) {
        preloaded[ index ] = new Image();
        preloaded[ index ].src = gif.url;
      } );
      return preloaded;
    };

    Plugin.prototype.navigate = function( difference ) {
      if ( difference < 0 ) {
        if ( this.itemIndex >= 1 ) { this.itemIndex--; }
      } else if ( difference > 0 ) {
        if ( this.itemIndex < this.items.length - 1 ) { this.itemIndex++; }
      } else {
        return;
      }

      this.$element.trigger( "giphy-item-updated", [ this.items[ this.itemIndex ] ] );
    };

    Plugin.prototype.search = function( value ) {
      return $.ajax( {
        url: this.options.ajax.url,
        data: this.options.encoder( {
          searchTerm: value,
          apiKey: this.options.ajax.apiKey,
          rating: this.options.ajax.rating
        } )
      } );
    };

    $.fn[ pluginName ] = function( options ) {
      return this.each( function() {
        var $this = $( this );
        if ( !$this.data( pluginName ) ) {
          $this.data( pluginName, new Plugin( this, options ) );
        }
      });
    }

    $.fn[ pluginName ].defaults = {
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
      }
    };
})( jQuery, window, document );
```
<!-- .element: class="stretch" -->

<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="2">Define plugin name</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="4-9">Constructor function</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="5-6">Save off properties that reference the current element</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="7">Merge the default options with passed in options</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="8">Invoke basic initialization</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="11-19">`init` method</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="12-16">Build DOM elements necessary for library</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="18">Call `wireEventHandlers` to add event handlers to necessary DOM element</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="21-29">`wireEventHandlers` method</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="22-28">Notice we are using `.bind(this)` to keep context to the library when events are triggered</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="31-36">Detect the left and right arrow keys and navigate accordingly</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="38-44">Either search or reset depending on the state of the library</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="68-73">Detect the enter key and kick off a search</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="103-112">Call jQuery's ajax method</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="75-80">`handleResponse` method</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="76-77">Decode the response from the server</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="78-79">Trigger custom events that there is new data from the server</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="46-54">When a new data list comes from the server then update the state and User Interface</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="56-60">When a new item is needed then udpate the User Interface accordingly</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="91-101">`navigate` method</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="92-98">Determine the new index that is needed for navigation.</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="100">Trigger event to update the User Interface</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="62-66">Update the User Interface to a reset state</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="82-89">Preload image list from response to speed up navigation load</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="105,108-109">Use `url`, `apiKey`, and `rating` from `options.ajax.url`</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="106-110">Use the `options.encoder` to format the outgoing data</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="114-121">`$.fn[ pluginName ]`</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="115-120">Iterate over the matched element and return to support chaining</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="116-119">Create an instance of the Plugin object and attach to the element with `$.data()`</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="123-150">default options</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="124-128">Pull out the templates into the options</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="129-133">Pull out the AJAX parameters into the options</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="134-140">Map the data from the library to what the API request expects</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="141-149">Map the data from the API response to what the library expects</span>

------

## Why Encoder and Decoder?

<!-- .slide: data-title="Redesigned Code" data-state="somestate" -->

* The library understands what has been decoded and the API understands the data that has been encoded<!-- .element: class="fragment" -->
* The data contract going to and from an API can change over time and an encoder/decoder insulates the library from changes.<!-- .element: class="fragment" -->
* Providing an encoder/decoder enables you to switch to other API gif search engines<!-- .element: class="fragment" -->

------

## Overriding Encoder/Decoder

<!-- .slide: data-title="Redesigned Code" data-state="somestate" -->

```js
$( "input" ).giphy( {
	ajax: {
	  url: "http://thecatapi.com/api/images/get"
	},
	encoder: function( data ) {
	  return {
		format: "xml",
		results_per_page: 20
	  };
	},
	decoder: function( response ) {
	  var list = ( response && response.querySelectorAll( "url" ) ) || [];
	  return [].map.call( list, function( item ) {
		return {
		  url: item.innerHTML
		};
	  } );
	}
} );
```
<!-- .element: class="stretch" -->

<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="3">Change to a new Image API</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="5-10">API needs `format` and `results_per_page`</span>
<span class="fragment current-only focus-text focus-text--scroll" data-code-focus="11-18">API returns XML, so `querySelectorAll` to find nodes and map get into correct format</span>

------

<!-- .slide: data-title="Redesigned Code" data-state="somestate" data-menu-title="The Cat API" -->

![](./img/funny-cat-new-api.gif)
<!-- .element: style="height: 400px;" -->

### [thecatapi.com](http://thecatapi.com/)

```
http://thecatapi.com/api/images/get?format=xml&results_per_page=20
```

------

## Let's Add Unit tests

<!-- .slide: data-title="Redesigned Code" data-state="somestate" -->

* Tests encourage a better overall API (extensibility, loosely coupled, etc)<!-- .element: class="fragment" -->
* Tests affirms that things work as you intended<!-- .element: class="fragment" -->
* Tests gives you confidence of when making code changes<!-- .element: class="fragment" -->

------

## Unit Tests

<!-- .slide: data-title="Redesigned Code" data-state="somestate" -->

```js
describe( "Redesigned jQuery Plugin", function() {
  var fixture, $giphy, giphy;
  var listOfGifs = [ { url: "1" }, { url: "2" }, { url: "3" } ];
  var gif = { url: "1" };

  beforeEach( function() {
    fixture = setFixtures( "<input id='giphy'></ul>" );
    spyOn( jQuery.fn, "on" );
    $giphy = jQuery( "#giphy" ).giphy();
    giphy = $giphy.data( "giphy" );
  } );

  describe( "plugin", function() {
    it( "should be a jQuery plugin", function() {
      expect( jQuery.fn.giphy ).toBeTruthy();
    } );

    it( "should store instance on element", function() {
      expect( $giphy.data( "giphy" ) ).toBeTruthy();
    } );

    it( "should have default options", function() {
      var defaults = jQuery.fn.giphy.defaults;

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
    } );

    it( "should only create an instance once per element", function() {
      var $twice = jQuery( "#giphy" ).giphy();
      expect( giphy ).toEqual( $twice.data( "giphy" ) );
    } );

    it( "should be chainable", function() {
      expect( $giphy instanceof jQuery ).toBeTruthy();
    } );
  } );

  describe( "options", function() {
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
  } );

  describe( "instance", function() {
    describe( "constructor", function() {
      it( "should save an instance of the raw DOM element", function() {
        expect( giphy.element instanceof Element ).toBeTruthy();
      } );

      it( "should save an instance of the wrapped jQuery element", function() {
        expect( giphy.$element instanceof jQuery ).toBeTruthy();
      } );

      it( "should save the merged options of defaults and passed in options", function() {
        expect( $.isPlainObject( giphy.options ) ).toBeTruthy();
      } );
    } );

    describe( "methods", function() {
      describe( "init", function() {
        it( "surrounds the element with a wrapper", function() {
          expect( giphy.$giphy.find( ".Giphy").length ).toBe( 0 );
        } );

        it( "adds template for the search toggle", function() {
          expect( giphy.$search.find( ".Giphy-toggle").length ).toBe( 0 );
        } );

        it( "adds template for the controls", function() {
          expect( giphy.$controls.find( ".Giphy-prev, .Giphy-next" ).length ).toBe( 2 );
        } );

        it( "should call wireEventHandlers", function() {
          spyOn( giphy, "wireEventHandlers" );
          giphy.init();
          expect( giphy.wireEventHandlers ).toHaveBeenCalled();
        } );
      } );

      describe( "wireEventHandlers", function() {
        it( "should wire up keydown on controls", function() {
          expect( giphy.$controls.on ).toHaveBeenCalledWith( "keydown", jasmine.any( Function ) );
        } );

        it( "should wire up click on prev control", function() {
          expect( giphy.$prev.on ).toHaveBeenCalledWith( "click", jasmine.any( Function ) );
        } );

        it( "should wire up click on next control", function() {
          expect( giphy.$next.on ).toHaveBeenCalledWith( "click", jasmine.any( Function ) );
        } );

        it( "should wire up click on search control", function() {
          expect( giphy.$search.on ).toHaveBeenCalledWith( "click", jasmine.any( Function ) );
        } );

        it( "should wire up keypress on element control", function() {
          expect( giphy.$element.on ).toHaveBeenCalledWith( "click", jasmine.any( Function ) );
        } );

        it( "should wire up giphy-list-updated on element control", function() {
          expect( giphy.$element.on ).toHaveBeenCalledWith( "giphy-list-updated", jasmine.any( Function ) );
        } );

        it( "should wire up giphy-item-updated on element control", function() {
          expect( giphy.$element.on ).toHaveBeenCalledWith( "giphy-item-updated", jasmine.any( Function ) );
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
          spyOn( giphy, "search" ).and.callFake( function() {
            var d = $.Deferred();
            d.resolve();
            return d.promise();
          } );
        } );

        it( "should reset if has Giphy--search", function() {
          giphy.$giphy.addClass( "Giphy--search" );
          giphy.handleSearchClick();
          expect( giphy.reset ).toHaveBeenCalled();
        } );

        it( "should search if doesn't have Giphy--search", function() {
          giphy.$giphy.removeClass( "Giphy--search" );
          giphy.handleSearchClick();
          expect( giphy.search ).toHaveBeenCalled();
        } );
      } );

      describe( "handleListUpdated", function() {
        it( "should set the list instance to argument", function() {
          giphy.handleListUpdated( null, listOfGifs );
          expect( giphy.items ).toBe( listOfGifs );
        } );

        it( "should reset the itemIndex", function() {
          giphy.handleListUpdated( null, [] );
          expect( giphy.itemIndex ).toBe( 0 );
        } );

        it( "should call the preload method", function() {
          spyOn( giphy, "preload" );
          giphy.handleListUpdated( null, listOfGifs );
          expect( giphy.preload ).toHaveBeenCalledWith( listOfGifs );
        } );

        it( "should add the Giphy--search class", function() {
          spyOn( jQuery.fn, "addClass" );
          giphy.handleListUpdated( null, listOfGifs );
          expect( giphy.$giphy.addClass ).toHaveBeenCalledWith( "Giphy--search" );
        } );

        it( "should append an image to $gif", function() {
          spyOn( jQuery.fn, "appendTo" );
          giphy.handleListUpdated( null, listOfGifs );
          expect( giphy.$gif.appendTo ).toHaveBeenCalledWith( giphy.$giphy );
        } );

        it( "should show the controls", function() {
          spyOn( jQuery.fn, "show" );
          giphy.handleListUpdated( null, listOfGifs );
          expect( giphy.$controls.show ).toHaveBeenCalled();
        } );
      } );

      describe( "handleItemUpdated", function() {
        beforeEach( function() {
          giphy.handleListUpdated( null, listOfGifs );
        } );

        it( "should update $gif src to item's url", function() {
          spyOn( jQuery.fn, "attr" );
          giphy.handleItemUpdated( null, gif );
          expect( giphy.$gif.attr ).toHaveBeenCalledWith( "src", gif.url );
        } );

        it( "should update the data-count attribute", function() {
          spyOn( jQuery.fn, "attr" );
          giphy.handleItemUpdated( null, gif );
          expect( giphy.$controls.attr ).toHaveBeenCalledWith( "data-count", "1 of 3" );
        } );

        it( "should blur the $gif", function() {
          spyOn( jQuery.fn, "blur" );
          giphy.handleItemUpdated( null, gif );
          expect( giphy.$gif.blur ).toHaveBeenCalled();
        } );
      } );

      describe( "reset", function() {
        beforeEach( function() {
          giphy.handleListUpdated( null, listOfGifs );
        } );

        it( "should hide controls", function() {
          spyOn( jQuery.fn, "hide" );
          giphy.reset();
          expect( giphy.$controls.hide ).toHaveBeenCalled();
        } );

        it( "should remove the gif", function() {
          spyOn( jQuery.fn, "remove" );
          giphy.reset();
          expect( giphy.$gif.remove ).toHaveBeenCalled();
        } );

        it( "should remove the Giphy--serach class", function() {
          spyOn( jQuery.fn, "removeClass" );
          giphy.reset();
          expect( giphy.$giphy.removeClass ).toHaveBeenCalledWith( "Giphy--search" );
        } );
      } );

      describe( "handleEnter", function() {
        beforeEach( function() {
          spyOn( giphy, "search" ).and.callFake( function() {
            var d = $.Deferred();
            d.resolve();
            return d.promise();
          } );
          spyOn( giphy, "handleResponse" );
        } );

        it( "should call search method for enter key", function() {
          giphy.element.value = "42";
          giphy.handleEnter( { which: 13 } );
          expect( giphy.search ).toHaveBeenCalledWith( "42" );
        } );

        it( "should not call search method for non-enter key", function() {
          giphy.handleEnter( { which: 10 } );
          expect( giphy.search ).not.toHaveBeenCalled();
        } );

        it( "should call handleResponse method on resolved search promise", function() {
          giphy.handleEnter( { which: 13 } );
          expect( giphy.handleResponse ).toHaveBeenCalled();
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
          spyOn( jQuery.fn, "trigger" );
        } );

        it( "should call the options.decoder", function() {
          giphy.handleResponse( response );
          expect( giphy.options.decoder ).toHaveBeenCalledWith( response );
        } );

        it( "should trigger the giphy-list-updated event", function() {
          giphy.handleResponse( response );
          expect( giphy.$element.trigger ).toHaveBeenCalledWith( "giphy-list-updated", [ listOfGifs ] );
        } );

        it( "should trigger the giphy-item-updated event", function() {
          giphy.handleResponse( response );
          expect( giphy.$element.trigger ).toHaveBeenCalledWith( "giphy-item-updated", [ listOfGifs[ 0 ] ] );
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
          spyOn( jQuery.fn, "trigger" );
          giphy.handleListUpdated( null, listOfGifs );
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
          expect( giphy.$element.trigger ).toHaveBeenCalledWith( "giphy-item-updated", [ listOfGifs[ 1 ] ] );
        } );

        it( "should not trigger the event if difference is 0", function() {
          giphy.navigate( 0 );
          expect( giphy.$element.trigger ).not.toHaveBeenCalled();
        } );
      } );

      describe( "search", function() {
        beforeEach( function() {
          spyOn( jQuery, "ajax" );
          spyOn( giphy.options, "encoder" ).and.returnValue( listOfGifs );
        } );

        it( "should make an ajax call", function() {
          giphy.search( "cats" );
          expect( jQuery.ajax ).toHaveBeenCalled();
        } );

        it( "should use options.url as the url", function() {
          var args;
          giphy.search( "cats" );
          args = jQuery.ajax.calls.first().args[ 0 ]
          expect( args.url ).toBe( giphy.options.ajax.url );
        } );

        it( "should use call the options.encoder", function() {
          giphy.search( "cats" );
          expect( giphy.options.encoder ).toHaveBeenCalledWith( {
            searchTerm: "cats",
            apiKey: giphy.options.ajax.apiKey,
            rating: giphy.options.ajax.rating
          } );
        } );

        it( "should use the results from options.encoder as data", function() {
          var args;
          giphy.search( "cats" );
          args = jQuery.ajax.calls.first().args[ 0 ]
          expect( args.data ).toBe( listOfGifs );
        } );
      } );
    } );
  } );
} );
```
<!-- .element: class="stretch" -->

<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="2-4">Module global variables and Test Data</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="6-11">Setup test DOM fixture for each test and initialize the plugin and extract the object instance</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="13-47">Make sure it's a valid jQuery plugin and has default options</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="49-82">Test that the encoder and decoder methods work as expected</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="84-418">Test the object instance</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="85-97">Test the constructor function</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="99-417">Test the methods</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="100-118">Test the `init` method</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="120-148">Test the `wireEventHandlers` method</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="150-169">Test the `handleControlKey` method</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="171-192">Test the `handleSearchClick` method</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="194-228">Test the `handleListUpdated` method</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="230-252">Test the `handleItemUpdated` method</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="254-276">Test the `reset` method</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="278-303">Test the `handleEnter` method</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="305-332">Test the `handleResponse` method</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="334-340">Test the `preload` method</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="342-381">Test the `navigate` method</span>
<span data-extended class="fragment current-only focus-text focus-text--scroll" data-code-focus="383-416">Test the `search` method</span>

------

## Unit Test Coverage

<!-- .slide: data-title="Redesigned Code" data-state="somestate" -->

![](./img/unit-test-coverage.png)
<!-- .element: style="height: 400px;" -->

<small>Used [karma-coverage](http://npm.im/karma-coverage) to detect unit test coverage</small>

------

## So... It Works

<!-- .slide: data-title="Redesigned Code" data-state="somestate" -->

![](./img/why-jquery.gif)
<!-- .element: style="height: 400px;" -->

### but why does it need jQuery!?!
<!-- .element: class="fragment" -->

------

## Resources

<!-- .slide: data-title="Redesigned Code" data-state="somestate" data-state="resources" -->

* [Jasmine](http://jasmine.github.io/)
* [karma](http://npm.im/karma)
* [karma-chrome-launcher](http://npm.im/karma-chrome-launcher)
* [karma-coverage](http://npm.im/karma-coverage)
* [karma-jasmine](http://npm.im/karma-jasmine)
* [karma-phantomjs-launcher](http://npm.im/karma-phantomjs-launcher)
* [karma-spec-reporter](http://npm.im/karma-spec-reporter)
* [Source Code](https://github.com/elijahmanor/framework-independent-javascript-components/tree/master/src/2-jquery-testable)
